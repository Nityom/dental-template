'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
              Our Dental Care Journey
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
              At KS Dental & Aesthetic Clinic, we've been providing exceptional dental care for over 15 years. Our mission is to create healthy smiles and confidence in every patient who walks through our doors.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden md:block absolute top-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-10"></div>
        <div className="hidden md:block absolute top-16 md:top-24 lg:top-32 right-16 md:right-24 lg:right-32 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-5"></div>
        <div className="hidden md:block absolute top-32 md:top-48 lg:top-64 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-gray-100"></div>
        <div className="absolute bottom-0 right-16 md:right-24 lg:right-32 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-[#25D9FF]"></div>
        <div className="absolute bottom-16 md:bottom-24 lg:bottom-32 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-[#4FAEFF]"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#1E63D5] font-medium mb-3 md:mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
                The Journey of KS Dental & Aesthetic Clinic
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Founded in 2008, KS Dental & Aesthetic Clinic began with a simple vision: to make quality dental care accessible and comfortable for all. Dr. Sarah Mitchell started her practice in a small office with just two dental chairs and a passion for changing how people experience dental visits.
              </p>
              <p className="text-gray-500 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Today, we've grown into a state-of-the-art facility with multiple specialized dentists, but our core mission remains the same - to provide personalized, gentle dental care in a relaxed environment where patients feel valued and respected.
              </p>
              <Button variant="primary" size="large" className="w-full sm:w-auto">
                Our Services
              </Button>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="bg-gray-900 rounded-lg h-64 sm:h-80 lg:h-96 relative overflow-hidden">
                <Image
                  src="/clinic/interior.png"
                  alt="About"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="text-[#1E63D5] font-medium mb-3 md:mb-4">Our Values</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
              What Makes Us Different
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto">
              At KS Dental & Aesthetic Clinic, our values guide everything we do. They're the foundation of our approach to patient care and how we operate as a team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center p-6 md:p-8">
              <div className="bg-[#1E63D5] p-4 md:p-6 rounded-lg w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Image src="/images/img_thumbsup.svg" alt="Excellence" width={30} height={30} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Excellence</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We strive for excellence in every aspect of our practice, from the latest dental technologies to ongoing professional development.
              </p>
            </Card>
            <Card className="text-center p-6 md:p-8">
              <div className="bg-[#1E63D5] p-4 md:p-6 rounded-lg w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Image src="/images/img_users.svg" alt="Patient-centered care" width={30} height={30} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Patient-Centered</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We put patients first, taking the time to listen to concerns, explain procedures, and create personalized treatment plans.
              </p>
            </Card>

            <Card className="text-center p-6 md:p-8">
              <div className="bg-[#1E63D5] p-4 md:p-6 rounded-lg w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Image src="/images/img_icon.svg" alt="Integrity" width={30} height={30} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Integrity</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We operate with honesty and transparency, recommending only the treatments our patients truly need for optimal dental health.
              </p>
            </Card>
          </div>
        </div>
      </section>
      {/* Our Team Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#081A3A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="text-gray-300 font-medium mb-3 md:mb-4">Our Team</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 md:mb-6 leading-tight">
              Meet Our Dental Experts
            </h2>
            <p className="text-gray-200 text-base md:text-lg max-w-4xl mx-auto">
              Our team consists of experienced professionals who are passionate about dental health and committed to providing the best care for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Dr. Kautilya Swaroop",
                specialty: "MDS - Orthodontics & Dentofacial Orthopaedics",
                image: "/doctor/kautilya.png"
              },
              {
                name: "Dr. Anjali Swaroop",
                specialty: "BDS, PGDFC, Cosmetic Dental Surgeon & Advanced Facial Aesthetics Clinician",
                image: "/doctor/anjali.png"
              }
            ].map((doctor, index) => (
              <Card key={index} className="bg-white rounded-lg overflow-hidden">
                <div className="bg-gray-900 h-64 sm:h-72 md:h-80 relative overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-[#1E63D5] text-sm sm:text-base font-medium mb-4 min-h-[48px]">{doctor.specialty}</p>
                  {/* Removing social media icons as requested */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Facility Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="text-[#1E63D5] font-medium mb-3 md:mb-4">Our Facility</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
              State-of-the-Art Dental Clinic
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto">
              We've created a modern, comfortable environment equipped with the latest dental technology to ensure effective treatment and patient comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-900 rounded-lg h-48 sm:h-56 md:h-64 relative overflow-hidden">
              <Image
                src="/clinic/opd.png"
                alt="Reception Area"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-900 rounded-lg h-48 sm:h-56 md:h-64 relative overflow-hidden">
              <Image
                src="/clinic/op.png"
                alt="Treatment Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-900 rounded-lg h-48 sm:h-56 md:h-64 relative sm:col-span-2 lg:col-span-1 overflow-hidden">
              <Image
                src="/clinic/interior.png"
                alt="Clinic Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button variant="primary" size="large" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="text-[#1E63D5] font-medium mb-3 md:mb-4">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: 1,
                name: "Nityom Tikhe",
                type: "Regular Patient",
                image: "https://avatars.githubusercontent.com/u/112824495?v=4",
                review: "I've always been anxious about dental visits, but the team at KS Dental & Aesthetic Clinic made me feel completely at ease. The care I received was exceptional and painless. I actually look forward to my appointments now!"
              },
              {
                id: 2,
                name: "Ajay Sharma",
                type: "Cosmetic Patient",
                image: "https://avatars.githubusercontent.com/u/112553668?v=4",
                review: "The cosmetic work I had done here completely transformed my smile. The doctors were meticulous and the results are truly life-changing. I can't stop smiling!"
              },
              {
                id: 3,
                name: "Nimish Mittal",
                type: "New Patient",
                image: "https://avatars.githubusercontent.com/u/69715712?v=4",
                review: "From the moment I walked in, I knew I was in good hands. The state-of-the-art facility is impressive, but it's the warm, professional staff that really makes the difference."
              }
            ].map((item) => (
              <Card key={item.id} className="p-6 md:p-8">
                <div className="mb-4 md:mb-6">
                  <Image src="/images/img_icon.svg" alt="Quote" width={30} height={30} />
                </div>
                <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                  "{item.review}"
                </p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full relative overflow-hidden flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">{item.name}</h4>
                    <p className="text-gray-500 text-xs md:text-sm">{item.type}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
