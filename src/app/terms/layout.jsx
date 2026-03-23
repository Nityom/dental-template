import { buildPageMetadata } from '../seo';

export const metadata = buildPageMetadata({
    title: 'Terms and Conditions',
    description: 'Terms and Conditions for the services provided by KS Dental & Aesthetic Clinic.',
    path: '/terms',
});

export default function TermsLayout({ children }) {
    return <>{children}</>;
}
