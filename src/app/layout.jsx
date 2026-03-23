import '../styles/index.css';
import { getGlobalSchemaGraph, siteConfig } from './seo';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.shortName,
  referrer: 'origin-when-cross-origin',
  title: {
    default: 'Best Dentist in Muzaffarpur',
    template: '%s | KS Dental & Aesthetic Clinic',
  },
  description: siteConfig.description,
  keywords: ['best dentist in Muzaffarpur', 'dental clinic near me', 'orthodontist Muzaffarpur', 'braces treatment', 'teeth whitening', 'aesthetic clinic Bihar', 'dental implants', 'root canal treatment', 'Dr. Kautilya Swaroop', 'Dr. Anjali Swaroop', 'smile designing', 'cosmetic dentistry'],
  authors: [{ name: 'Dr. Kautilya Swaroop' }, { name: 'Dr. Anjali Swaroop' }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Best Dentist in Muzaffarpur | KS Dental & Aesthetic Clinic',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dentist in Muzaffarpur | KS Dental & Aesthetic Clinic',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/dental_logo.svg',
    apple: '/dental_logo.svg',
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }) {
  const globalSchema = getGlobalSchemaGraph();

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
