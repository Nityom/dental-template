'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '@/utils/supabase';

const TIME_SLOTS = [
  { value: '11:00', label: '11:00 AM' },
  { value: '11:30', label: '11:30 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '12:30', label: '12:30 PM' },
  { value: '13:00', label: '01:00 PM' },
  { value: '13:30', label: '01:30 PM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '14:30', label: '02:30 PM' },
  { value: '15:00', label: '03:00 PM' },
  { value: '15:30', label: '03:30 PM' },
  { value: '16:00', label: '04:00 PM' },
  { value: '16:30', label: '04:30 PM' },
  { value: '17:00', label: '05:00 PM' },
  { value: '17:30', label: '05:30 PM' },
  { value: '18:00', label: '06:00 PM' },
];

const getTodayLocalDate = () => {
  const now = new Date();
  const timezoneOffsetMs = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - timezoneOffsetMs).toISOString().split('T')[0];
};

export default function SeeAppointments() {
  const [selectedDate, setSelectedDate] = useState(getTodayLocalDate());
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);

  const [newTime, setNewTime] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newDentalProblem, setNewDentalProblem] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const timeOptionExists = useMemo(
    () => TIME_SLOTS.some((slot) => slot.value === newTime),
    [newTime]
  );

  const bookedTimes = useMemo(() => {
    const times = new Set();
    appointments.forEach((appointment) => {
      if (editingAppointment && appointment.id === editingAppointment.id) return;
      if (appointment.appointment_time) {
        times.add(appointment.appointment_time);
      }
    });
    return times;
  }, [appointments, editingAppointment]);

  const filteredAppointments = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return appointments;

    return appointments.filter((appointment) => {
      const time = (appointment.appointment_time || '').toLowerCase();
      const fullName = (appointment.full_name || '').toLowerCase();
      const phone = (appointment.phone || '').toLowerCase();
      const dentalProblem = (appointment.dental_problem || '').toLowerCase();

      return (
        time.includes(query)
        || fullName.includes(query)
        || phone.includes(query)
        || dentalProblem.includes(query)
      );
    });
  }, [appointments, searchTerm]);

  const fetchAppointments = useCallback(async (date) => {
    if (!date) {
      setAppointments([]);
      return;
    }

    setLoading(true);
    setErrorMessage('');

    const { data, error } = await supabase
      .from('appointments')
      .select('id, full_name, phone, appointment_date, appointment_time, dental_problem')
      .eq('appointment_date', date)
      .order('appointment_time', { ascending: true });

    if (error) {
      console.error('Error loading appointments:', error);
      setErrorMessage('Failed to load appointments for the selected date.');
      setAppointments([]);
      setLoading(false);
      return;
    }

    setAppointments(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchAppointments(selectedDate);
  }, [fetchAppointments, selectedDate]);

  const openModal = (appointment) => {
    setEditingAppointment(appointment);
    setNewTime(appointment.appointment_time || '');
    setNewName(appointment.full_name || '');
    setNewPhone(appointment.phone || '');
    setNewDentalProblem(appointment.dental_problem || '');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingAppointment(null);
  };

  const checkTimeConflict = useCallback(async (id, date, time) => {
    const { data, error } = await supabase
      .from('appointments')
      .select('id')
      .eq('appointment_date', date)
      .eq('appointment_time', time)
      .neq('id', id)
      .limit(1);

    if (error) {
      console.error('Error checking availability:', error);
      return false;
    }

    return data.length > 0;
  }, []);

  const submitUpdate = async () => {
    if (!editingAppointment) return;

    if (!newTime) {
      alert('Please select a valid appointment time.');
      return;
    }

    setSaving(true);

    const isConflict = await checkTimeConflict(editingAppointment.id, selectedDate, newTime);
    if (isConflict) {
      alert('This time slot is already booked for this date. Please choose a different time.');
      setSaving(false);
      return;
    }

    const { error } = await supabase
      .from('appointments')
      .update({
        appointment_time: newTime,
        full_name: newName,
        phone: newPhone,
        dental_problem: newDentalProblem,
        appointment_date: selectedDate,
      })
      .eq('id', editingAppointment.id);

    if (error) {
      console.error('Update error:', error);
      alert('Failed to update appointment. Please try again.');
      setSaving(false);
      return;
    }

    // Reflect the moved slot immediately so old time appears free and new time appears booked.
    setAppointments((prev) => prev
      .map((appointment) => {
        if (appointment.id !== editingAppointment.id) return appointment;
        return {
          ...appointment,
          appointment_time: newTime,
          full_name: newName,
          phone: newPhone,
          dental_problem: newDentalProblem,
          appointment_date: selectedDate,
        };
      })
      .sort((a, b) => a.appointment_time.localeCompare(b.appointment_time))
    );

    await fetchAppointments(selectedDate);
    alert('Appointment updated successfully.');
    setSaving(false);
    closeModal();
  };

  const handleDelete = async (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this appointment?');
    if (!shouldDelete) return;

    const { error } = await supabase.from('appointments').delete().eq('id', id);
    if (error) {
      console.error('Delete error:', error);
      alert('Failed to delete appointment. Please try again.');
      return;
    }

    await fetchAppointments(selectedDate);
    alert('Appointment deleted successfully.');
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Appointment Dashboard</h2>
        <p className="text-gray-600 mt-2">View and manage booked appointments by date.</p>
      </div>

      <div className="mb-8">
        <label htmlFor="see-date" className="block text-sm font-medium text-gray-700 mb-2">
          Select Date
        </label>
        <input
          id="see-date"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="search-appointment" className="block text-sm font-medium text-gray-700 mb-2">
          Search Appointments
        </label>
        <input
          id="search-appointment"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, phone, problem, or time"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
        />
      </div>

      {loading ? (
        <div className="text-gray-600">Loading appointments...</div>
      ) : errorMessage ? (
        <div className="text-red-600">{errorMessage}</div>
      ) : appointments.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
          No appointments scheduled for this date.
        </div>
      ) : filteredAppointments.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
          No appointments found for this search.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="border border-gray-200 rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-900">{appointment.appointment_time}</p>
                <p className="text-gray-700">
                  {appointment.full_name ? `Patient: ${appointment.full_name}` : 'Patient: Not provided'}
                </p>
                {appointment.phone ? <p className="text-gray-700">Phone: {appointment.phone}</p> : null}
                {appointment.dental_problem ? (
                  <p className="text-gray-700">Problem: {appointment.dental_problem}</p>
                ) : null}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openModal(appointment)}
                  className="px-4 py-2 rounded-lg bg-[#1E63D5] text-white font-medium hover:bg-[#174eb3] transition-colors"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(appointment.id)}
                  className="px-4 py-2 rounded-lg bg-red-100 text-red-700 font-medium hover:bg-red-200 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal ? (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-5">Update Appointment</h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="new-time" className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Time
                </label>
                <select
                  id="new-time"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
                >
                  <option value="" disabled>
                    Select Time
                  </option>
                  {TIME_SLOTS.map((slot) => {
                    const isBooked = bookedTimes.has(slot.value);
                    return (
                      <option key={slot.value} value={slot.value} disabled={isBooked}>
                        {isBooked ? `${slot.label} (Booked)` : slot.label}
                      </option>
                    );
                  })}
                  {!timeOptionExists && newTime ? <option value={newTime}>{newTime}</option> : null}
                </select>
              </div>

              <div>
                <label htmlFor="new-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Patient Name
                </label>
                <input
                  id="new-name"
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter patient name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="new-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Patient Phone
                </label>
                <input
                  id="new-phone"
                  type="tel"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="Enter patient phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="new-problem" className="block text-sm font-medium text-gray-700 mb-2">
                  Dental Problem
                </label>
                <input
                  id="new-problem"
                  type="text"
                  value={newDentalProblem}
                  onChange={(e) => setNewDentalProblem(e.target.value)}
                  placeholder="Enter dental problem"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                disabled={saving}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={submitUpdate}
                className="px-4 py-2 rounded-lg bg-[#1E63D5] text-white hover:bg-[#174eb3] transition-colors disabled:opacity-60"
                disabled={saving}
              >
                {saving ? 'Updating...' : 'Update'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}