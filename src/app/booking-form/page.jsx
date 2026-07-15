'use client';
import React from 'react';
import ContactForm from '@/components/common/ContactForm';
import Image from 'next/image';

export default function BookingFormStandalonePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 py-12">
      <div className="w-full max-w-3xl">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/dental_logo.svg"
            alt="KS Dental & Aesthetic Clinic"
            width={80}
            height={80}
            className="mb-4"
            priority
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            KS Dental & Aesthetic Clinic
          </h1>
          <p className="text-gray-600 mt-2 text-center">
            Schedule your visit below
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
