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
        <div className="absolute bottom-0 right-32 w-32 h-32 bg-[#25D9FF]"></div>
        <div className="absolute bottom-32 right-0 w-32 h-32 bg-[#4FAEFF]"></div>
      </section>      {/* Contact Information & Form Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <p className="text-[#1E63D5] font-medium mb-4">Contact Information</p>
              <h2 className="text-4xl font-semibold text-gray-900 mb-8 leading-tight">
                We're Here For You
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Office</h3>
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
                  <div className="bg-gray-200 p-3 rounded-lg hover:bg-[#1E63D5] hover:text-white transition-colors cursor-pointer">
                    <Image src="/images/img_facebook.svg" alt="Facebook" width={24} height={24} />
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg hover:bg-[#1E63D5] hover:text-white transition-colors cursor-pointer">
                    <Image src="/images/img_twitter.svg" alt="Twitter" width={24} height={24} />
                  </div>
                  <a href="https://www.instagram.com/ksdentalaesthetic" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-3 rounded-lg hover:bg-[#1E63D5] hover:text-white transition-colors cursor-pointer">
                    <Image src="/images/img_icon_02.svg" alt="Instagram" width={24} height={24} />
                  </a>
                  {/* <div className="bg-gray-200 p-3 rounded-lg hover:bg-[#1E63D5] hover:text-white transition-colors cursor-pointer">
                    <Image src="/images/img_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                  </div> */}
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
            <p className="text-[#1E63D5] font-medium mb-4">Office Hours</p>
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
            
            <Card className="p-8 !bg-[#081A3A] !border-[#081A3A] text-white">
              <h3 className="text-2xl font-semibold mb-6 text-center">Emergency Care</h3>
              <p className="mb-6 leading-relaxed text-gray-200">
                Dental emergencies can happen at any time. If you're experiencing severe pain, swelling, or injury, please call our emergency number immediately.
              </p>
              <div className="text-center p-4 bg-[#1E63D5] rounded-lg mb-6">
                <p className="text-xl font-semibold">Emergency Hotline</p>
                <p className="text-2xl font-bold text-white">+91 9288050250</p>
              </div>
              <p className="text-sm text-center text-[#AEEBFF]">
                *Available 24/7 for dental emergencies
              </p>
            </Card>
          </div>
        </div>
      </section>      {/* Map Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#1E63D5] font-medium mb-4">Our Location</p>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Find Our Dental Clinic
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We are conveniently located at Kalambagh road, Lenin Chowk, Muzaffarpur, Bihar, opposite to Prashant Honda.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.5!2d85.3768857!3d26.1193997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11685fca49b5%3A0xeaa4da4705a1641e!2sKS%20Dental%20%26%20Aesthetic%20Clinic!5e0!3m2!1sen!2s!4v1708348800000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KS Dental & Aesthetic Clinic Location"
            />
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#1E63D5] p-3 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-500">Free Parking Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#1E63D5] p-3 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-500">Near Public Transportation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#1E63D5] p-3 rounded-full">
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
            <p className="text-[#1E63D5] font-medium mb-4">Frequently Asked Questions</p>
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
