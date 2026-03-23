export const siteConfig = {
  url: 'https://ksdentalclinic.com',
  name: 'KS Dental & Aesthetic Clinic',
  shortName: 'KS Dental Clinic',
  description:
    'Top-rated dental and aesthetic clinic in Muzaffarpur, Bihar. We offer advanced orthodontics, implants, teeth whitening, clear aligners, and facial aesthetics.',
  locale: 'en_IN',
  ogImage: '/clinic/interior.png',
};

export const businessConfig = {
  phone: '+919288050250',
  email: 'ksdentalclinics@gmail.com',
  priceRange: 'INR 500-5000',
  address: {
    streetAddress: 'Kalambagh road, Lenin Chowk',
    addressLocality: 'Muzaffarpur',
    addressRegion: 'Bihar',
    postalCode: '842001',
    addressCountry: 'IN',
  },
  geo: {
    latitude: '26.1193997',
    longitude: '85.3768857',
  },
  socialLinks: [
    'https://www.instagram.com/ksdentalaesthetic',
    'https://share.google/0e4f22cWCpQTiLwt6',
  ],
};

export const doctors = [
  {
    name: 'Dr. Kautilya Swaroop',
    jobTitle: 'MDS - Orthodontics and Dentofacial Orthopaedics',
    image: '/doctor/kautilya.png',
    url: '/about',
    medicalSpecialty: 'Orthodontics',
  },
  {
    name: 'Dr. Anjali Swaroop',
    jobTitle: 'BDS, PGDFC, Cosmetic Dental Surgeon and Facial Aesthetics Clinician',
    image: '/doctor/anjali.png',
    url: '/about',
    medicalSpecialty: 'Cosmetic Dentistry',
  },
];

export const topicalKeywordClusters = {
  primary: [
    'best dentist in Muzaffarpur',
    'dental clinic in Muzaffarpur',
    'orthodontist in Muzaffarpur',
    'dental implants in Muzaffarpur',
    'root canal treatment Muzaffarpur',
    'cosmetic dentistry in Muzaffarpur',
  ],
  services: [
    'teeth whitening',
    'dental fillings',
    'teeth alignment braces',
    'clear aligners',
    'periodontal treatment',
    'teeth scaling and polishing',
    'crown bridge veneers',
    'sleep apnea dental appliance',
    'laser dental treatment',
  ],
  location: [
    'dentist near Lenin Chowk',
    'dental clinic near Kalambagh road',
    'dentist near Prashant Honda Muzaffarpur',
  ],
};

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}

export function buildPageMetadata({
  title,
  description,
  path = '/',
  keywords,
  robots,
  openGraph,
  twitter,
}) {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = absoluteUrl(canonicalPath);
  const mergedKeywords = [
    ...topicalKeywordClusters.primary,
    ...topicalKeywordClusters.services,
    ...topicalKeywordClusters.location,
    ...(keywords || []),
  ];

  return {
    title,
    description,
    keywords: [...new Set(mergedKeywords)],
    category: 'healthcare',
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      ...openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
      ...twitter,
    },
    robots,
  };
}

export function getMedicalClinicJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalClinic', 'LocalBusiness'],
    '@id': `${siteConfig.url}#medical-clinic`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    logo: absoluteUrl('/dental_logo.svg'),
    telephone: businessConfig.phone,
    email: businessConfig.email,
    priceRange: businessConfig.priceRange,
    address: {
      '@type': 'PostalAddress',
      ...businessConfig.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...businessConfig.geo,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    medicalSpecialty: ['Dentistry', 'Orthodontics', 'Cosmetic Dentistry'],
    sameAs: businessConfig.socialLinks,
  };
}

export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${siteConfig.url}#medical-clinic`,
    },
  };
}

export function getFaqJsonLd(questions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getServicesJsonLd(services) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'MedicalProcedure',
        name: service.title,
        description: service.description,
        provider: {
          '@id': `${siteConfig.url}#medical-clinic`,
        },
      },
    })),
  };
}

export function getPhysiciansJsonLd() {
  return doctors.map((doctor) => ({
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${siteConfig.url}#${doctor.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: doctor.name,
    image: absoluteUrl(doctor.image),
    url: absoluteUrl(doctor.url),
    medicalSpecialty: doctor.medicalSpecialty,
    worksFor: {
      '@id': `${siteConfig.url}#medical-clinic`,
    },
    description: doctor.jobTitle,
  }));
}

export function getGlobalSchemaGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [getMedicalClinicJsonLd(), getWebsiteJsonLd(), ...getPhysiciansJsonLd()],
  };
}