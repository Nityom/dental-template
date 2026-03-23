'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ContactForm from '@/components/common/ContactForm';
import Image from 'next/image';

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Book Appointment</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
              Schedule Your Visit
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Choose your preferred date and time, and let us take care of the rest. Our team is ready to provide you with exceptional dental care.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10"></div>
        <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5"></div>
        <div className="absolute top-64 right-0 w-32 h-32 bg-white opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-100"></div>
        <div className="absolute bottom-0 right-32 w-32 h-32 bg-[#25D9FF]"></div>
        <div className="absolute bottom-32 right-0 w-32 h-32 bg-[#4FAEFF]"></div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <p className="text-[#1E63D5] font-medium mb-4">Contact Information</p>
              <h2 className="text-4xl font-semibold text-gray-900 mb-8 leading-tight">
                We&apos;re Here For You
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="bg-[#1E63D5] p-4 rounded-lg">
                    <Image
                      src="/images/img_mappin.svg"
                      alt="Location"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Clinic</h3>
                    <p className="text-gray-500">
                      Kalambagh road, Lenin Chowk<br />
                      Muzaffarpur, Bihar<br />
                      <span className="text-sm">Landmark: Opposite to Prashant Honda</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#1E63D5] p-4 rounded-lg">
                    <Image
                      src="/images/img_phone.svg"
                      alt="Phone"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-500">
                      +91 9288050250<br />
                      Monday - Friday: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#1E63D5] p-4 rounded-lg">
                    <Image
                      src="/images/img_mail.svg"
                      alt="Email"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-500">
                      ksdentalclinics@gmail.com<br />
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-3 rounded-lg hover:bg-[#1E63D5] hover:text-white transition-colors cursor-pointer">
                    <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
                  </a>
                  <a href="https://share.google/0e4f22cWCpQTiLwt6" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-3 rounded-lg hover:bg-[#1E63D5] hover:text-white transition-colors cursor-pointer">
                    <Image src="/images/google.svg" alt="Google" width={24} height={24} />
                  </a>
                  <a href="https://www.instagram.com/ksdentalaesthetic" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-3 rounded-lg hover:bg-[#1E63D5] hover:text-white transition-colors cursor-pointer">
                    <Image src="/images/img_icon_02.svg" alt="Instagram" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
