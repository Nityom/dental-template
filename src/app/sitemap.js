import { siteConfig } from './seo';
import { treatments } from './services/treatmentsData';
import { locations } from './locations/locationsData';

export default function sitemap() {
  const now = new Date();

  const treatmentPages = treatments.map((treatment) => ({
    url: `${siteConfig.url}/services/${treatment.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
    images: [`${siteConfig.url}${treatment.image}`],
  }));

  const locationPages = locations.map((location) => ({
    url: `${siteConfig.url}/locations/${location.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${siteConfig.url}/clinic/interior.png`],
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${siteConfig.url}/doctor/kautilya.png`],
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${siteConfig.url}/services/general_dental_checkup.png`],
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${siteConfig.url}/clinic/opd-2.png`],
    },
    {
      url: `${siteConfig.url}/locations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    ...treatmentPages,
    ...locationPages,
  ];
}
