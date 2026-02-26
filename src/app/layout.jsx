import '../styles/index.css';

export const metadata = {
  metadataBase: new URL('https://ksdentalclinic.com'), // Adjust this to the actual production URL
  title: {
    default: 'KS Dental & Aesthetic Clinic | Best Dentist in Muzaffarpur',
    template: '%s | KS Dental & Aesthetic Clinic',
  },
  description: 'Top-rated dental and aesthetic clinic in Muzaffarpur, Bihar. We offer advanced orthodontics, implants, teeth whitening, clear aligners, and facial aesthetics.',
  keywords: ['best dentist in Muzaffarpur', 'dental clinic near me', 'orthodontist Muzaffarpur', 'braces treatment', 'teeth whitening', 'aesthetic clinic Bihar', 'dental implants', 'root canal treatment', 'Dr. Kautilya Swaroop', 'Dr. Anjali Swaroop', 'smile designing', 'cosmetic dentistry'],
  authors: [{ name: 'Dr. Kautilya Swaroop' }, { name: 'Dr. Anjali Swaroop' }],
  creator: 'KS Dental & Aesthetic Clinic',
  publisher: 'KS Dental & Aesthetic Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KS Dental & Aesthetic Clinic | Best Dentist in Muzaffarpur',
    description: 'Top-rated dental and aesthetic clinic in Muzaffarpur, Bihar. We offer advanced orthodontics, implants, teeth whitening, clear aligners, and facial aesthetics.',
    url: 'https://ksdentalclinic.com',
    siteName: 'KS Dental & Aesthetic Clinic',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/dental_logo.svg', // Update with a high-res clinic banner image if available
        width: 1200,
        height: 630,
        alt: 'KS Dental & Aesthetic Clinic',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KS Dental & Aesthetic Clinic | Muzaffarpur',
    description: 'Top-rated dental clinic in Muzaffarpur offering advanced orthodontics and aesthetic treatments.',
    images: ['/dental_logo.svg'],
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
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_STRING', // Add Google verification when ready
  },
  icons: {
    icon: '/dental_logo.svg',
    apple: '/dental_logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
