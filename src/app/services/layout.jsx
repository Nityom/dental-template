import { buildPageMetadata } from '../seo';

export const metadata = buildPageMetadata({
    title: 'Our Services',
    description: 'Explore our comprehensive dental and aesthetic services including orthodontics, teeth whitening, deep scaling, implants, root canals, and aesthetic skin treatments.',
    path: '/services',
});

export default function ServicesLayout({ children }) {
    return <>{children}</>;
}
