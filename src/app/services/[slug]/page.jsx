import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import {
  absoluteUrl,
  buildPageMetadata,
  getFaqJsonLd,
  getMedicalClinicJsonLd,
  siteConfig,
} from '../../seo';
import { getTreatmentBySlug, treatments } from '../treatmentsData';

export function generateStaticParams() {
  return treatments.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const treatment = getTreatmentBySlug(params.slug);

  if (!treatment) {
    return buildPageMetadata({
      title: 'Treatment Not Found',
      description: 'The requested treatment page is not available.',
      path: '/services',
      robots: {
        index: false,
        follow: false,
      },
    });
  }

  return buildPageMetadata({
    title: treatment.heroTitle,
    description: treatment.shortDescription,
    path: `/services/${treatment.slug}`,
    keywords: [
      treatment.title,
      `${treatment.title} in Muzaffarpur`,
      `${treatment.title} treatment`,
      'dental treatment in Muzaffarpur',
    ],
  });
}

export default function TreatmentLandingPage({ params }) {
  const treatment = getTreatmentBySlug(params.slug);

  if (!treatment) {
    notFound();
  }

  const currentIndex = treatments.findIndex((item) => item.slug === treatment.slug);
  const related = treatments
    .filter((item) => item.slug !== treatment.slug)
    .slice(Math.max(0, currentIndex - 1), Math.max(0, currentIndex - 1) + 3)
    .filter((item) => item.slug !== treatment.slug)
    .slice(0, 3);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${siteConfig.url}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: treatment.title,
        item: `${siteConfig.url}/services/${treatment.slug}`,
      },
    ],
  };

  const treatmentSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      getMedicalClinicJsonLd(),
      {
        '@type': 'MedicalProcedure',
        '@id': `${siteConfig.url}/services/${treatment.slug}#procedure`,
        name: treatment.title,
        description: treatment.shortDescription,
        image: absoluteUrl(treatment.image),
        provider: {
          '@id': `${siteConfig.url}#medical-clinic`,
        },
        procedureType: treatment.title,
        howPerformed: treatment.processSteps.join(' -> '),
      },
      getFaqJsonLd(treatment.faqs),
      breadcrumbSchema,
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(treatmentSchema) }}
      />
      <Header />
      <ScrollToTop />

      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="text-lg md:text-xl font-semibold mb-3">Treatment Page</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            {treatment.heroTitle}
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-4xl leading-relaxed">
            {treatment.heroDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/" className="text-[#AEEBFF] hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="text-[#AEEBFF] hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span>{treatment.title}</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden bg-gray-100 mb-8">
              <Image src={treatment.image} alt={treatment.title} fill className="object-cover" />
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://book.ksdentalclinics.com"
                className="inline-flex items-center justify-center bg-[#1E63D5] text-white hover:bg-[#25D9FF] px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Talk to Clinic
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{treatment.overview}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1E63D5] bg-opacity-10 p-5 rounded-lg border-l-4 border-[#1E63D5]">
                <h3 className="font-semibold text-gray-900 mb-1">Session Duration</h3>
                <p className="text-gray-700">{treatment.duration}</p>
              </div>
              <div className="bg-[#25D9FF] bg-opacity-10 p-5 rounded-lg border-l-4 border-[#25D9FF]">
                <h3 className="font-semibold text-gray-900 mb-1">Recommended Frequency</h3>
                <p className="text-gray-700">{treatment.frequency}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="space-y-2">
                {treatment.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#1E63D5] mt-1">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">How Treatment Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatment.processSteps.map((step, idx) => (
              <div key={step} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#1E63D5] text-white text-sm flex items-center justify-center mb-3">
                  {idx + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {treatment.faqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Related Treatments</h2>
            <div className="space-y-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="block border border-gray-200 rounded-lg p-5 hover:border-[#1E63D5] transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.shortDescription}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-[#1E63D5] text-white hover:bg-[#25D9FF] px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
