import { buildPageMetadata } from '../seo';

export const metadata = buildPageMetadata({
  title: 'Appointment Dashboard',
  description:
    'Internal appointments dashboard to view and manage booked appointment slots.',
  path: '/see',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-image-preview': 'none',
      'max-snippet': 0,
      'max-video-preview': 0,
    },
  },
});

export default function SeeLayout({ children }) {
  return <>{children}</>;
}
