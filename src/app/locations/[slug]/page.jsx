import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import {
  buildPageMetadata,
  getMedicalClinicJsonLd,
  getWebsiteJsonLd,
  siteConfig,
} from '../../seo';
import { getLocationBySlug, locations } from '../locationsData';

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    return buildPageMetadata({
      title: 'Location Not Found',
      description: 'Requested location page is not available.',
      path: '/locations',
      robots: { index: false, follow: false },
    });
  }

  return buildPageMetadata({
    title: location.title,
    description: location.description,
    path: `/locations/${location.slug}`,
    keywords: [
      `dentist near ${location.areaName}`,
      `${location.areaName} dental clinic`,
      'dental clinic Muzaffarpur',
    ],
  });
}

export default function LocationPage({ params }) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    notFound();
  }

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      getMedicalClinicJsonLd(),
      getWebsiteJsonLd(),
      {
        '@type': 'Service',
        name: `Dental services for ${location.areaName}`,
        areaServed: {
          '@type': 'Place',
          name: location.areaName,
        },
        provider: {
          '@id': `${siteConfig.url}#medical-clinic`,
        },
        url: `${siteConfig.url}/locations/${location.slug}`,
        description: location.description,
      },
      {
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
            name: 'Locations',
            item: `${siteConfig.url}/locations`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: location.areaName,
            item: `${siteConfig.url}/locations/${location.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <ScrollToTop />

      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-lg md:text-xl font-semibold mb-3">Location Page</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            {location.title}
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-4xl leading-relaxed">
            {location.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/" className="text-[#AEEBFF] hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="text-[#AEEBFF] hover:text-white transition-colors">Locations</Link>
            <span>/</span>
            <span>{location.areaName}</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Popular Treatments for This Area</h2>
            <ul className="space-y-3">
              {location.serviceHighlights.map((service) => (
                <li key={service} className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#1E63D5] mt-1">●</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center justify-center bg-[#1E63D5] text-white hover:bg-[#25D9FF] px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Explore All Services
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nearby Landmarks</h2>
            <ul className="space-y-3 mb-6">
              {location.landmarks.map((landmark) => (
                <li key={landmark} className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#1E63D5] mt-1">●</span>
                  <span>{landmark}</span>
                </li>
              ))}
            </ul>
            <Link
              href="https://book.ksdentalclinics.com"
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
