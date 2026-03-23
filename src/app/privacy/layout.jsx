import { buildPageMetadata } from '../seo';

export const metadata = buildPageMetadata({
    title: 'Privacy Policy',
    description: 'Privacy Policy and patient data protection information for KS Dental & Aesthetic Clinic.',
    path: '/privacy',
});

export default function PrivacyLayout({ children }) {
    return <>{children}</>;
}
