'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactForm() {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
            placeholder="Enter your email address"
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
        
        <div className="mb-6">
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
            defaultValue=""
          >
            <option value="" disabled>Select a service</option>
            <option value="checkup">Regular Checkup</option>
            <option value="whitening">Teeth Whitening</option>
            <option value="implant">Dental Implants</option>
            <option value="orthodontics">Orthodontics</option>
            <option value="cosmetic">Cosmetic Dentistry</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
            placeholder="Tell us about your dental concerns or questions"
          ></textarea>
        </div>
        
        <Button variant="primary" size="large" type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Card>
  );
}
