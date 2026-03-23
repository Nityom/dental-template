export const locations = [
  {
    slug: 'lenin-chowk',
    areaName: 'Lenin Chowk',
    title: 'Dentist Near Lenin Chowk, Muzaffarpur',
    description:
      'KS Dental & Aesthetic Clinic provides comprehensive dental and aesthetic care for patients near Lenin Chowk with convenient access and flexible appointment slots.',
    landmarks: ['Lenin Chowk', 'Kalambagh road'],
    serviceHighlights: ['General Dental Checkup', 'Dental Fillings', 'Root Canal and Oral Surgery'],
  },
  {
    slug: 'kalambagh-road',
    areaName: 'Kalambagh Road',
    title: 'Dental Clinic Near Kalambagh Road',
    description:
      'Looking for a trusted dentist near Kalambagh Road? We offer preventive, restorative, orthodontic, and cosmetic procedures with patient-focused care.',
    landmarks: ['Kalambagh road', 'Prashant Honda'],
    serviceHighlights: ['Teeth Scaling and Polishing', 'Dental Implants', 'Crown, Bridge, Veneers'],
  },
  {
    slug: 'mithanpura',
    areaName: 'Mithanpura',
    title: 'Best Dentist for Patients from Mithanpura',
    description:
      'Patients from Mithanpura choose KS Dental & Aesthetic Clinic for modern equipment, experienced doctors, and complete treatment planning in one location.',
    landmarks: ['Mithanpura', 'Muzaffarpur city center'],
    serviceHighlights: ['Orthodontics Braces and Aligners', 'Periodontal Treatment', 'Laser Dental Procedures'],
  },
  {
    slug: 'zero-mile',
    areaName: 'Zero Mile',
    title: 'Dental Treatment Access from Zero Mile Area',
    description:
      'We serve patients from the Zero Mile area with appointment-first care, transparent treatment plans, and dedicated follow-up support.',
    landmarks: ['Zero Mile', 'Muzaffarpur'],
    serviceHighlights: ['General Dental Checkup', 'Sleep Apnea Treatment', 'Dental Implants'],
  },
];

export function getLocationBySlug(slug) {
  return locations.find((location) => location.slug === slug) || null;
}
