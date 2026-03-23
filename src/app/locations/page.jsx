import React from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { buildPageMetadata, getMedicalClinicJsonLd, siteConfig } from '../seo';
import { locations } from './locationsData';

export const metadata = buildPageMetadata({
  title: 'Dental Clinic Service Areas in Muzaffarpur',
  description:
    'Explore local service area pages for dental treatments around Lenin Chowk, Kalambagh Road, Mithanpura, and nearby Muzaffarpur locations.',
  path: '/locations',
  keywords: [
    'dentist near me Muzaffarpur',
    'dental clinic near Lenin Chowk',
    'dental clinic near Kalambagh road',
    'dentist near Mithanpura',
  ],
});

export default function LocationsPage() {
  const locationsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getMedicalClinicJsonLd(),
      {
        '@type': 'ItemList',
        name: 'Dental Service Areas',
        itemListElement: locations.map((location, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'WebPage',
            name: location.title,
            url: `${siteConfig.url}/locations/${location.slug}`,
            description: location.description,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsJsonLd) }}
      />
      <Header />
      <ScrollToTop />

      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-lg md:text-xl font-semibold mb-3">Service Areas</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            Dental Care Across Muzaffarpur
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-4xl leading-relaxed">
            Browse nearby area pages and find the right treatment options, appointment access, and clinic details for your location.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="block border border-gray-200 rounded-lg p-6 hover:border-[#1E63D5] hover:shadow-sm transition-all"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{location.areaName}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{location.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-[#1E63D5]">
                {location.landmarks.map((landmark) => (
                  <span key={landmark} className="bg-blue-50 px-3 py-1 rounded-full">
                    {landmark}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
