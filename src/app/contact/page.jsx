'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';
import ContactForm from '@/components/common/ContactForm';

export default function ContactPage() {  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
        {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight">              Get In Touch With Us
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Have questions or ready to schedule an appointment? Reach out to our friendly team today.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10"></div>
        <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5"></div>
        <div className="absolute top-64 right-0 w-32 h-32 bg-white opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-100"></div>
        <div className="absolute bottom-0 right-32 w-32 h-32 bg-teal-400"></div>
        <div className="absolute bottom-32 right-0 w-32 h-32 bg-teal-500"></div>
      </section>      {/* Contact Information & Form Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <p className="text-teal-800 font-medium mb-4">Contact Information</p>
              <h2 className="text-4xl font-semibold text-gray-900 mb-8 leading-tight">
                We're Here For You
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="bg-teal-800 p-4 rounded-lg">
                    <Image 
                      src="/images/img_mappin.svg" 
                      alt="Location" 
                      width={24} 
                      height={24}
                      className="invert" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Office</h3>
                    <p className="text-gray-500">
                      Jl Danau Bratan, Malang City<br />
                      East Java 65139, Indonesia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-teal-800 p-4 rounded-lg">
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
                      +62 864 6444 2222<br />
                      Monday - Friday: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-teal-800 p-4 rounded-lg">
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
                      hi@happydental.com<br />
                      info@happydental.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <div className="bg-gray-200 p-3 rounded-lg hover:bg-teal-800 hover:text-white transition-colors cursor-pointer">
                    <Image src="/images/img_facebook.svg" alt="Facebook" width={24} height={24} />
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg hover:bg-teal-800 hover:text-white transition-colors cursor-pointer">
                    <Image src="/images/img_twitter.svg" alt="Twitter" width={24} height={24} />
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg hover:bg-teal-800 hover:text-white transition-colors cursor-pointer">
                    <Image src="/images/img_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>      {/* Office Hours Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-teal-800 font-medium mb-4">Office Hours</p>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              When You Can Visit Us
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We offer flexible hours to accommodate your busy schedule. Emergency appointments are also available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Regular Hours</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-500">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-500">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-4">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </li>
              </ul>
            </Card>
            
       <Card className="p-8 bg-teal-900 text-white">
  <h3 className="text-2xl font-semibold mb-6 text-center">Emergency Care</h3>
  <p className="mb-6 leading-relaxed">
    Dental emergencies can happen at any time. If you're experiencing severe pain, swelling, or injury, please call our emergency number immediately.
  </p>
  <div className="text-center p-4 bg-teal-800 rounded-lg mb-6">
    <p className="text-xl font-semibold">Emergency Hotline</p>
    <p className="text-2xl font-bold text-white">+62 864 6444 9999</p>
  </div>
  <p className="text-sm text-center text-teal-100">
    *Available 24/7 for dental emergencies
  </p>
</Card>
          </div>
        </div>
      </section>      {/* Map Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-teal-800 font-medium mb-4">Our Location</p>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Find Our Dental Clinic
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We are conveniently located in the heart of Malang City, with easy access to public transportation and ample parking space.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 relative">
            {/* Map placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-center">
              <div>
                <p className="mb-2 text-xl">Map of clinic location would go here</p>
                <p>Jl Danau Bratan, Malang City, East Java 65139, Indonesia</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-teal-800 p-3 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-500">Free Parking Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-teal-800 p-3 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-500">Near Public Transportation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-teal-800 p-3 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-500">Wheelchair Accessible</span>
            </div>
          </div>
        </div>
      </section>
        {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-teal-800 font-medium mb-4">Frequently Asked Questions</p>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Common Questions
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              Find answers to the most frequently asked questions about our services and appointments.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How do I schedule an appointment?",
                  answer: "You can schedule an appointment by calling our office, using the contact form on our website, or sending us an email. We'll respond to your request as soon as possible to confirm your appointment time."
                },
                {
                  question: "Do you accept dental insurance?",
                  answer: "Yes, we accept most major dental insurance plans. Please contact our office to verify that we accept your specific insurance provider and plan."
                },
                {
                  question: "What should I bring to my first appointment?",
                  answer: "Please bring your ID, insurance card, completed new patient forms (available on our website), and a list of any medications you're currently taking. If you have recent dental X-rays, please bring those as well."
                },
                {
                  question: "How often should I visit the dentist?",
                  answer: "We recommend regular check-ups and cleanings every six months for most patients. However, depending on your specific dental health needs, our dentists may recommend more frequent visits."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept cash, credit cards (Visa, Mastercard, American Express), debit cards, and offer various financing options to help make dental care more affordable."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
     
      <Footer />
    </div>
  );
}
