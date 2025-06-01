'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';

export default function ServicesPage() {  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-xl font-semibold mb-4">Our Services</p>
            <h1 className="text-7xl font-semibold mb-6 leading-tight">
              Comprehensive Dental Care
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From preventive care to advanced treatments, we offer a full range of dental services to keep your smile healthy and beautiful.
            </p>
            <Button variant="primary" size="large" className="bg-teal-800 hover:bg-teal-700">
              Make Appointment
              <Image src="/images/img_arrowright.svg" alt="Arrow" width={24} height={24} className="ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10"></div>
        <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5"></div>
        <div className="absolute top-64 right-0 w-32 h-32 bg-white opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-100"></div>
        <div className="absolute bottom-0 right-32 w-32 h-32 bg-teal-400"></div>
        <div className="absolute bottom-32 right-0 w-32 h-32 bg-teal-500"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-teal-800 font-medium mb-4">Our Specialties</p>
            <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              What We Offer
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              At Happy Dental, we provide comprehensive dental services using the latest technology and techniques to ensure the best outcomes for our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "/images/img_whitening.svg",
                title: "Teeth Whitening",
                description: "Professional whitening treatments that brighten your smile and remove years of stains safely and effectively."
              },
              {
                icon: "/images/img_tooth_insurance.svg",
                title: "Preventive Care",
                description: "Regular checkups, cleanings, and evaluations to prevent dental issues before they start."
              },
              {
                icon: "/images/img_implant.svg",
                title: "Dental Implants",
                description: "Permanent tooth replacements that look, feel and function like natural teeth for a complete smile."
              },
              {
                icon: "/images/img_dentist.svg",
                title: "Cosmetic Dentistry",
                description: "Procedures to improve the appearance of your smile, including veneers, bonding, and smile makeovers."
              },
              {
                icon: "/images/img_icon.svg",
                title: "Orthodontics",
                description: "Traditional braces and clear aligners to straighten teeth and correct bite issues for all ages."
              },
              {
                icon: "/images/img_users.svg",
                title: "Family Dentistry",
                description: "Comprehensive care for the whole family, from children's first visit to senior dental health needs."
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-teal-800 p-6 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <Image src={service.icon} alt={service.title} width={32} height={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="text-teal-800 font-medium flex items-center">
                  Learn More
                  <Image src="/images/img_arrowright.svg" alt="Arrow" width={16} height={16} className="ml-2" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-800 font-medium mb-4">Featured Service</p>
              <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Advanced Teeth Whitening
              </h2>
              <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                Our professional teeth whitening treatments can brighten your smile by several shades in just one visit. We use advanced technology that is gentle on teeth while providing dramatic results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-teal-800 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-500">Professional-strength whitening agents</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-800 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-500">Customized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-800 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-500">Quick, noticeable results</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-800 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-500">Safe for teeth and gums</span>
                </li>
              </ul>
              <Button variant="primary" size="large">
                Learn More
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg h-96 relative overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Teeth Whitening Treatment Image]
                </div>
                <Image 
                  src="/images/img_shape_cyan_500.svg" 
                  alt="Decorative shape" 
                  width={200}
                  height={100}
                  className="absolute bottom-0 left-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-teal-800 font-medium mb-4">Our Process</p>
            <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              How We Work
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We follow a systematic approach to ensure we meet your dental needs effectively and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "/images/img_scedule.svg",
                title: "Consultation",
                description: "We start with a thorough consultation to understand your dental history and goals."
              },
              {
                icon: "/images/img_dentist.svg",
                title: "Examination",
                description: "Our dentists perform a comprehensive examination and discuss treatment options."
              },
              {
                icon: "/images/img_tooth_insurance.svg",
                title: "Treatment",
                description: "We provide personalized treatment with a focus on comfort and effectiveness."
              },
              {
                icon: "/images/img_thumbsup.svg",
                title: "Follow-Up",
                description: "We ensure your continued dental health with regular check-ups and maintenance."
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-teal-800 p-6 rounded-lg w-20 h-20 mx-auto mb-6 flex items-center justify-center relative z-10">
                  <Image src={step.icon} alt={step.title} width={40} height={40} />
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-teal-600"></div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-teal-800 font-medium mb-4">Pricing</p>
            <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Transparent Fee Structure
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We believe in transparency when it comes to our pricing. Here are our starting rates for common treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">General Dentistry</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between">
                  <span className="text-gray-500">Regular Checkup</span>
                  <span className="font-semibold text-gray-900">$75</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Dental Cleaning</span>
                  <span className="font-semibold text-gray-900">$100</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Filling (per tooth)</span>
                  <span className="font-semibold text-gray-900">$150</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Root Canal</span>
                  <span className="font-semibold text-gray-900">$700</span>
                </li>
              </ul>
              <Button variant="outline" size="medium" className="w-full">
                Book Now
              </Button>
            </Card>
            
            <Card className="p-8 border-2 border-teal-600 shadow-lg">
              <div className="absolute top-0 right-0 bg-teal-800 text-white py-1 px-4 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Cosmetic Services</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between">
                  <span className="text-gray-500">Teeth Whitening</span>
                  <span className="font-semibold text-gray-900">$350</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Veneers (per tooth)</span>
                  <span className="font-semibold text-gray-900">$950</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Bonding (per tooth)</span>
                  <span className="font-semibold text-gray-900">$300</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Smile Makeover</span>
                  <span className="font-semibold text-gray-900">$2,500+</span>
                </li>
              </ul>
              <Button variant="primary" size="medium" className="w-full">
                Book Now
              </Button>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Specialty Treatments</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between">
                  <span className="text-gray-500">Dental Implant</span>
                  <span className="font-semibold text-gray-900">$3,000</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Orthodontics</span>
                  <span className="font-semibold text-gray-900">$5,000+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Wisdom Tooth Extraction</span>
                  <span className="font-semibold text-gray-900">$450</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Periodontal Treatment</span>
                  <span className="font-semibold text-gray-900">$800+</span>
                </li>
              </ul>
              <Button variant="outline" size="medium" className="w-full">
                Book Now
              </Button>
            </Card>
          </div>
          
          <div className="text-center mt-12 text-gray-500">
            <p>* Pricing may vary based on individual needs and complexity. Contact us for a personalized quote.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-teal-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-white mb-6 leading-tight">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
            Schedule an appointment today and take the first step towards achieving the smile you've always wanted.
          </p>
          <Button variant="primary" size="large" className="bg-white text-teal-800 hover:bg-gray-100">
            Book Your Appointment
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
