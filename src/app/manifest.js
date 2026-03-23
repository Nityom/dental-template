import { siteConfig } from './seo';

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1E63D5',
    icons: [
      {
        src: '/dental_logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
