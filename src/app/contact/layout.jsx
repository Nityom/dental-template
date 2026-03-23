import { buildPageMetadata } from '../seo';

export const metadata = buildPageMetadata({
    title: 'Contact Us',
    description: 'Get in touch with KS Dental & Aesthetic Clinic in Muzaffarpur. Book an appointment, find our clinic, and let us help you achieve a healthier smile.',
    path: '/contact',
});

export default function ContactLayout({ children }) {
    return <>{children}</>;
}
