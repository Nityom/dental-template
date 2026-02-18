'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            Terms of Use
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
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              By accessing and using the KS Dental & Aesthetic Clinic website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">2. Use of Website</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The content of this website is for general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">3. Appointment Scheduling</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Appointments scheduled through our website are subject to confirmation by our staff. We reserve the right to refuse service or cancel appointments at our discretion. Cancellations must be made at least 24 hours in advance to avoid cancellation fees.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">4. Medical Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Information provided on this website is for educational purposes only and should not be used as a substitute for professional dental advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified healthcare provider with any questions you may have regarding a dental condition.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">6. Privacy and Data Protection</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your use of our website is also governed by our Privacy Policy. We are committed to protecting your personal information and your right to privacy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">7. Third-Party Links</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              KS Dental & Aesthetic Clinic shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the website. This includes, but is not limited to, errors or omissions in content, or any loss or damage incurred as a result of the use of content posted, transmitted, or otherwise made available via the website.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">9. Changes to Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We reserve the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on the website. Your decision to continue to visit and make use of the website after such changes have been made constitutes your formal acceptance of the new Terms of Use.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">10. Contact Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have any questions about these Terms of Use, please contact us at:
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
