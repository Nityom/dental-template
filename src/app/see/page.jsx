'use client';

import React from 'react';
import ScrollToTop from '@/components/ui/ScrollToTop';
import SeeAppointments from '@/components/common/SeeAppointments';

export default function SeeAppointmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Appointments</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
              See & Manage Slots
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Public dashboard to view all booked slots by date and quickly update or delete appointments.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10" />
        <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5" />
        <div className="absolute top-64 right-0 w-32 h-32 bg-white opacity-20" />
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SeeAppointments />
        </div>
      </section>
    </div>
  );
}