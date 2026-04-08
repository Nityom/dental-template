import fs from 'fs/promises';
import path from 'path';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import GalleryGrid from '@/components/common/GalleryGrid';
import { buildPageMetadata } from '../seo';

export const metadata = buildPageMetadata({
  title: 'Gallery',
  description:
    'Explore our clinic gallery featuring treatment rooms, reception areas, and modern dental facilities at KS Dental & Aesthetic Clinic.',
  path: '/gallery',
});

const numericFilenameSorter = (a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function getGalleryImages() {
  const imagesPath = path.join(process.cwd(), 'public', 'images');
  const files = await fs.readdir(imagesPath);

  return files
    .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
    .sort(numericFilenameSorter)
    .map((file) => {
      const readableName = path
        .basename(file, path.extname(file))
        .replace(/[-_]/g, ' ')
        .trim();

      return {
        src: `/images/${file}`,
        alt: readableName ? `Clinic gallery ${readableName}` : 'Clinic gallery image',
      };
    });
}

export default async function GalleryPage() {
  const galleryImages = await getGalleryImages();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Gallery</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
              Inside Our Clinic
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Take a look at our treatment areas, consultation spaces, and patient-first facilities.
              Click any image to open it, then use the navigation buttons to move through the gallery.
            </p>
          </div>
        </div>

        <div className="hidden md:block absolute top-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-10"></div>
        <div className="hidden md:block absolute top-16 md:top-24 lg:top-32 right-16 md:right-24 lg:right-32 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-gray-100"></div>
        <div className="absolute bottom-0 right-16 md:right-24 lg:right-32 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-[#25D9FF]"></div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
