'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactForm() {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Book an Appointment</h3>
      <form>
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
              defaultValue=""
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
            defaultValue=""
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
        
        <Button variant="primary" size="large" type="submit" className="w-full">
          Book Appointment
        </Button>
      </form>
    </Card>
  );
}
