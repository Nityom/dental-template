'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const GalleryGrid = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null || images.length === 0) {
      return;
    }

    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (activeIndex === null || images.length === 0) {
      return;
    }

    setActiveIndex((activeIndex + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (activeIndex === null) {
        return;
      }

      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        showPrev();
      }

      if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  if (!images.length) {
    return (
      <div className="text-center py-16 text-gray-500">
        No gallery images found.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {images.map((image, index) => (
          <button
            type="button"
            key={image.src}
            className="group bg-gray-900 rounded-lg h-60 md:h-64 lg:h-72 relative overflow-hidden text-left"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-80"></div>
            <span className="absolute left-4 bottom-3 text-white text-sm font-medium">
              {index + 1}/{images.length}
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute top-5 right-5 text-white/90 hover:text-white text-3xl leading-none"
            onClick={closeLightbox}
            aria-label="Close image preview"
          >
            ×
          </button>

          <button
            type="button"
            className="absolute left-3 md:left-8 h-12 w-12 rounded-full bg-white/20 text-white text-2xl hover:bg-white/30"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="relative w-full max-w-6xl h-[60vh] sm:h-[68vh] md:h-[75vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            className="absolute right-3 md:right-8 h-12 w-12 rounded-full bg-white/20 text-white text-2xl hover:bg-white/30"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
