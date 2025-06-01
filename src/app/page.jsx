'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/HeroSection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ScrollToTop />
               {/* About Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
            <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0">
              <p className="text-teal-800 font-medium mb-3">About Us</p>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900 mb-3 sm:mb-5 leading-tight">
                Your Trusted Partner For Dental Health
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-5 leading-relaxed">
                Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada fringilla amet elit.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-800 p-2.5 rounded-lg flex-shrink-0">
                    <Image src="/images/img_users.svg" alt="Experienced dentist" width={20} height={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Experienced Dentist</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Purus turpis vivamus sem est blandit in at egestas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-800 p-2.5 rounded-lg flex-shrink-0">
                    <Image src="/images/img_thumbsup.svg" alt="Affordable pricing" width={20} height={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Affordable Pricing</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Purus turpis vivamus sem est blandit in at egestas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-full lg:w-1/2 order-2 lg:order-1">
              <div className="bg-gray-900 rounded-lg h-40 sm:h-56 lg:h-80 relative overflow-hidden">
                <Image 
                  src="/images/img_shape.svg" 
                  alt="Dental clinic interior" 
                  width={456}
                  height={552}
                  className="absolute bottom-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-teal-800 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <Image 
              src="/images/img_video_box.svg" 
              alt="Video background" 
              width={1140}
              height={600}
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-6 shadow-lg hover:scale-105 transition-transform">
                <div className="w-0 h-0 border-l-[20px] border-l-gray-900 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </button>
            </div>
          </div>
        </div>
        {/* Statistics */}
        <div className=" bg-teal-800 py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-semibold text-white mb-6">Happy Dental Statistic</h2>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada fringilla amet elit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-7xl font-semibold text-teal-400 mb-4">780+</h3>
                <p className="text-gray-200 text-lg">Happy Patient</p>
              </div>
              <div>
                <h3 className="text-7xl font-semibold text-teal-400 mb-4">560+</h3>
                <p className="text-gray-200 text-lg">Online Appointment</p>
              </div>
              <div>
                <h3 className="text-7xl font-semibold text-teal-400 mb-4">340+</h3>
                <p className="text-gray-200 text-lg">Winning Award</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-800 font-medium mb-4">Our Service</p>
              <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Dental Services for Your Smile
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada.
              </p>
              <div className="bg-gray-900 rounded-lg h-80 relative">
                <Image 
                  src="/images/img_shape_cyan_500.svg" 
                  alt="Dental services" 
                  width={200}
                  height={100}
                  className="absolute bottom-0 left-0"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-teal-800 p-6 rounded-lg">
                  <Image src="/images/img_whitening.svg" alt="Teeth whitening" width={44} height={44} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Teeth Whitening</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Vitae id at ac proin accumsan euismod egestas tortor fermentum. Porta odio erat diam.
                  </p>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex items-start gap-6">
                <div className="bg-teal-800 p-6 rounded-lg">
                  <Image src="/images/img_tooth_insurance.svg" alt="Teeth checkup" width={44} height={44} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Teeth Checkup</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Vitae id at ac proin accumsan euismod egestas tortor fermentum. Porta odio erat diam.
                  </p>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex items-start gap-6">
                <div className="bg-teal-800 p-6 rounded-lg">
                  <Image src="/images/img_implant.svg" alt="Teeth implants" width={44} height={44} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Teeth Implants</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Vitae id at ac proin accumsan euismod egestas tortor fermentum. Porta odio erat diam.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="primary" size="large">
                  All Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-teal-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gray-300 font-medium mb-4">Our Doctors</p>
            <h2 className="text-5xl font-semibold text-white mb-6 leading-tight">
              Meet Our Expert Dental Team
            </h2>
            <p className="text-gray-200 text-lg max-w-4xl mx-auto">
              Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Carolyn", specialty: "Dental Specialist" },
              { name: "Dr. Culpepper", specialty: "Dental Specialist" },
              { name: "Dr. Alanna", specialty: "Dental Specialist" }
            ].map((doctor, index) => (
              <Card key={index} className="bg-white rounded-lg overflow-hidden">
                <div className="bg-gray-900 h-80 relative">
                  {/* Doctor image placeholder */}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-teal-800 mb-4">{doctor.specialty}</p>
                  <div className="flex gap-2">
                    <div className="bg-teal-800 p-3 rounded-lg">
                      <Image src="/images/img_facebook.svg" alt="Facebook" width={24} height={24} />
                    </div>
                    <div className="bg-teal-800 p-3 rounded-lg border border-teal-700">
                      <Image src="/images/img_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-800 font-medium mb-4">Testimonials</p>
              <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                What Our Patients Say About Us
              </h2>
              <div className="mb-8">
                <Image src="/images/img_icon.svg" alt="Quote icon" width={67} height={84} />
              </div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-900 rounded-full"></div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">Jose Turner</h4>
                  <p className="text-gray-500">Customer</p>
                </div>
              </div>
            </div>
            <div>
              <Image 
                src="/images/img_image.svg" 
                alt="Patient testimonial" 
                width={552}
                height={456}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-teal-800 font-medium mb-4">How It Works</p>
            <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Your Journey to a Healthy Smile Starts Here
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-teal-800 p-6 rounded-lg w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/img_scedule.svg" alt="Schedule appointment" width={44} height={44} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Make Appointment</h3>
              <p className="text-gray-500 leading-relaxed">
                Etiam fusce arcu ac auctor nisl purus consectetur. Eu viverra ultricies sit.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-800 p-6 rounded-lg w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/img_dentist.svg" alt="Expert care" width={44} height={44} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Dental Care</h3>
              <p className="text-gray-500 leading-relaxed">
                Etiam fusce arcu ac auctor nisl purus consectetur. Eu viverra ultricies sit.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-800 p-6 rounded-lg w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/img_whitening.svg" alt="Radiate confidence" width={44} height={44} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Radiate Confidence</h3>
              <p className="text-gray-500 leading-relaxed">
                Etiam fusce arcu ac auctor nisl purus consectetur. Eu viverra ultricies sit.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button variant="primary" size="large">
              Make Appointment
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}