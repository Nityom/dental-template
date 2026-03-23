'use client';
import React, { useState, useCallback } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { supabase } from '@/utils/supabase';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [dentalProblem, setDentalProblem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('error'); // 'error' | 'success'

  const checkSlotAvailability = useCallback(async (date, time) => {
    if (!date || !time) return true;
    const { data, error } = await supabase
      .from('appointments')
      .select('id')
      .eq('appointment_date', date)
      .eq('appointment_time', time)
      .limit(1);

    if (error) {
      console.error('Error checking slot:', error);
      return true; // allow submission if check fails
    }
    return data.length === 0;
  }, []);

  const handleDateTimeChange = useCallback(async (newDate, newTime) => {
    if (newDate && newTime) {
      const available = await checkSlotAvailability(newDate, newTime);
      if (!available) {
        setModalType('error');
        setModalMessage(
          'This slot is already booked! We recommend choosing a different date or time for your appointment.'
        );
        setShowModal(true);
      }
    }
  }, [checkSlotAvailability]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setAppointmentDate(newDate);
    handleDateTimeChange(newDate, appointmentTime);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setAppointmentTime(newTime);
    handleDateTimeChange(appointmentDate, newTime);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !phone || !appointmentDate || !appointmentTime || !dentalProblem) {
      setModalType('error');
      setModalMessage('Please fill in all fields before booking.');
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);

    const available = await checkSlotAvailability(appointmentDate, appointmentTime);
    if (!available) {
      setModalType('error');
      setModalMessage(
        'This slot is already booked! We recommend choosing a different date or time for your appointment.'
      );
      setShowModal(true);
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase.from('appointments').insert([
      {
        full_name: fullName,
        phone,
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
        dental_problem: dentalProblem,
      },
    ]);

    if (error) {
      if (error.code === '23505') {
        setModalType('error');
        setModalMessage(
          'This slot was just booked by someone else! Please choose a different date or time.'
        );
      } else {
        setModalType('error');
        setModalMessage('Something went wrong while booking. Please try again later.');
        console.error('Booking error:', error);
      }
      setShowModal(true);
      setIsSubmitting(false);
      return;
    }

    setModalType('success');
    setModalMessage('Your appointment has been booked successfully! We will contact you shortly to confirm.');
    setShowModal(true);
    setFullName('');
    setPhone('');
    setAppointmentDate('');
    setAppointmentTime('');
    setDentalProblem('');
    setIsSubmitting(false);
  };

  return (
    <>
      <Card className="p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Book an Appointment</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
                Appointment Date
              </label>
              <input
                type="date"
                id="appointmentDate"
                value={appointmentDate}
                onChange={handleDateChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div>
              <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-2">
                Appointment Time
              </label>
              <select
                id="appointmentTime"
                value={appointmentTime}
                onChange={handleTimeChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
              >
                <option value="" disabled>Select Time</option>
                <option value="11:00">11:00 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="12:30">12:30 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="13:30">01:30 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="14:30">02:30 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="15:30">03:30 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="16:30">04:30 PM</option>
                <option value="17:00">05:00 PM</option>
                <option value="17:30">05:30 PM</option>
                <option value="18:00">06:00 PM</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="dentalProblem" className="block text-sm font-medium text-gray-700 mb-2">
              Dental Problem
            </label>
            <select
              id="dentalProblem"
              value={dentalProblem}
              onChange={(e) => setDentalProblem(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
            >
              <option value="" disabled>Select Problem</option>
              <option value="checkup">General Dental Checkup</option>
              <option value="fillings">Dental Fillings</option>
              <option value="orthodontics">Teeth Alignment Orthodontics</option>
              <option value="implants">Dental Implants</option>
              <option value="sleep-apnea">Sleep Apnea Treatment</option>
              <option value="crown-bridge">Crown, Bridge, Veneers</option>
              <option value="periodontal">Periodontal Treatment</option>
              <option value="laser">Laser Dental Procedures</option>
              <option value="scaling">Teeth Scaling and Polishing</option>
              <option value="root-canal">Root Canal & Oral Surgery</option>
              <option value="facial-rejuvenation">Facial Skin Rejuvenation</option>
              <option value="chemical-peel">Chemical Peels and Facials</option>
              <option value="prp">PRP and Laser Facial Treatments</option>
              <option value="hair-removal">Permanent Hair Removal and Shaping</option>
              <option value="body-sculpting">Body Sculpting and Tattoo Removal</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Button variant="primary" size="large" type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Booking...' : 'Book Appointment'}
          </Button>
        </form>
      </Card>

      {/* Slot Availability Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 md:p-8 relative animate-in">
            <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${modalType === 'error' ? 'bg-red-100' : 'bg-green-100'}`}>
              {modalType === 'error' ? (
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              ) : (
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <h4 className={`text-xl font-semibold text-center mb-2 ${modalType === 'error' ? 'text-red-700' : 'text-green-700'}`}>
              {modalType === 'error' ? 'Slot Unavailable' : 'Booking Confirmed!'}
            </h4>
            <p className="text-gray-600 text-center mb-6">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${modalType === 'error' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
            >
              {modalType === 'error' ? 'Choose Another Slot' : 'OK, Got It!'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
