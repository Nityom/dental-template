'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated: February 19, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              At KS Dental & Aesthetic Clinic, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">1. Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Schedule an appointment</li>
              <li>Fill out contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Create an account on our website</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This information may include your name, email address, phone number, date of birth, address, insurance information, and medical history.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, we may collect information about the individual web pages you view, what websites or search terms referred you to our site, and how you interact with our website.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>To provide, operate, and maintain our dental services</li>
              <li>To schedule and manage your appointments</li>
              <li>To communicate with you about your appointments and treatments</li>
              <li>To send you promotional information and updates (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To process insurance claims and billing</li>
              <li>To comply with legal obligations and regulations</li>
              <li>To protect the rights, property, and safety of our clinic, patients, and staff</li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">3. Health Information Privacy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We take the privacy of your health information very seriously. All protected health information (PHI) is collected, used, and disclosed in accordance with applicable privacy laws and regulations. Your health information will only be shared with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Healthcare providers directly involved in your treatment</li>
              <li>Insurance companies for billing and claims purposes</li>
              <li>Legal authorities when required by law</li>
              <li>Other parties with your explicit written consent</li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">5. Data Security</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">6. Third-Party Service Providers</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related tasks, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">7. Your Privacy Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct or update inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to our processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">8. Children's Privacy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so we can delete such information.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">10. Contact Us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2"><strong>KS Dental & Aesthetic Clinic</strong></p>
              <p className="text-gray-600">Kalambagh road, Lenin Chowk</p>
              <p className="text-gray-600">Muzaffarpur, Bihar</p>
              <p className="text-gray-600 mt-3">Phone: +91 9288050250</p>
              <p className="text-gray-600">Email: ksdentalclinics@gmail.com</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
