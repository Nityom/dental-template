import { buildPageMetadata } from '../seo';

export const metadata = buildPageMetadata({
    title: 'Book Appointment',
    description: 'Book your dental appointment online at KS Dental & Aesthetic Clinic in Muzaffarpur. Choose your preferred date and time for a consultation.',
    path: '/book-appointment',
});

export default function BookAppointmentLayout({ children }) {
    return <>{children}</>;
}
