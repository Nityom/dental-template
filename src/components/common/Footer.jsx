'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { footerAnimation, staggerContainer, navItemAnimation } from '@/utils/animations';

const Footer = () => {
  // State for mobile accordion functionality
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <motion.footer 
      className="bg-[#081A3A] text-white py-10 md:py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={footerAnimation}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        variants={staggerContainer(0.1, 0.2)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <motion.div 
            className="mb-8 md:mb-0"
            variants={navItemAnimation}
          >
            <Link href="/" className="text-xl md:text-2xl font-bold mb-4 md:mb-6 block">
              <span className="font-extrabold">
                <span className="text-gray-400">KS</span>
                <span className="text-white"> DENTAL</span>
              </span>
              <span className="text-[#25D9FF] font-light"> & AESTHETIC</span>
            </Link>
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base"
              variants={navItemAnimation}
            >
              Your trusted partner for comprehensive dental and aesthetic care. We're dedicated to creating beautiful, healthy smiles using advanced technology and personalized treatment.
            </motion.p>
            <motion.div 
              className="flex gap-3"
              variants={staggerContainer(0.1, 0)}
            >
              <motion.div 
                className="bg-[#1E63D5] p-2 md:p-3 rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/images/img_twitter.svg" alt="Twitter" width={16} height={16} />
              </motion.div>
              <Link href="https://www.instagram.com/ksdentalaesthetic" target="_blank" rel="noopener noreferrer">
                <motion.div 
                  className="bg-[#1E63D5] p-2 md:p-3 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image src="/images/img_icon_02.svg" alt="Instagram" width={16} height={16} />
                </motion.div>
              </Link>
              <motion.div 
                className="bg-[#1E63D5] p-2 md:p-3 rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/images/img_youtube.svg" alt="YouTube" width={16} height={16} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Navigation Section */}
          <motion.div 
            className="border-b border-[#1E63D5] md:border-0 pb-4 md:pb-0"
            variants={navItemAnimation}
          >
            <div 
              className="flex justify-between items-center mb-4 md:mb-6 cursor-pointer md:cursor-default"
              onClick={() => toggleSection('navigation')}
            >
              <h3 className="text-lg md:text-xl font-semibold">Navigation</h3>
              <AnimatePresence>
                <motion.div 
                  className="md:hidden"
                  initial={false}
                  animate={{ rotate: openSection === 'navigation' ? 180 : 0 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {(openSection === 'navigation' || !openSection) && (
                <motion.ul 
                  className="space-y-3 md:space-y-4"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.li variants={navItemAnimation}>
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                  </motion.li>
                  <motion.li variants={navItemAnimation}>
                    <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
                  </motion.li>
                  <motion.li variants={navItemAnimation}>
                    <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                  </motion.li>
                  <motion.li variants={navItemAnimation}>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Services - Mobile Accordion, Desktop Regular */}
          <div className="border-b border-[#1E63D5] md:border-0 pb-4 md:pb-0">
            <div 
              className="flex justify-between items-center mb-4 md:mb-6 cursor-pointer md:cursor-default"
              onClick={() => toggleSection('services')}
            >
              <h3 className="text-lg md:text-xl font-semibold">Services</h3>
              <div className="md:hidden">
                {openSection === 'services' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                )}
              </div>
            </div>
            <ul className={`space-y-3 md:space-y-4 ${openSection === 'services' ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/services/whitening" className="text-gray-300 hover:text-white transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/services/checkup" className="text-gray-300 hover:text-white transition-colors">Teeth Checkup</Link></li>
              <li><Link href="/services/filling" className="text-gray-300 hover:text-white transition-colors">Dental Filling</Link></li>
              <li><Link href="/services/implants" className="text-gray-300 hover:text-white transition-colors">Teeth Implants</Link></li>
            </ul>
          </div>

          {/* Resources - Mobile Accordion, Desktop Regular */}
          {/* <div className="border-b border-[#1E63D5] md:border-0 pb-4 md:pb-0">
            <div 
              className="flex justify-between items-center mb-4 md:mb-6 cursor-pointer md:cursor-default"
              onClick={() => toggleSection('resources')}
            >
              <h3 className="text-lg md:text-xl font-semibold">Resources</h3>
              <div className="md:hidden">
                {openSection === 'resources' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                )}
              </div>
            </div>
            <ul className={`space-y-3 md:space-y-4 ${openSection === 'resources' ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/stories" className="text-gray-300 hover:text-white transition-colors">Customer Stories</Link></li>
              <li><Link href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/docs" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog & Guide</Link></li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="bg-[#25D9FF] py-4 -mx-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-900">
            <div className="flex flex-col md:flex-row items-center md:gap-4 mb-4 md:mb-0 text-center md:text-left">
              <motion.span variants={navItemAnimation}>Copyright © 2026 KS Dental & Aesthetic Clinic</motion.span>
              <div className="w-px h-3 bg-gray-900 hidden md:block"></div>
              <motion.span variants={navItemAnimation}>All rights reserved.</motion.span>
            </div>
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/terms" className="hover:underline">Terms of Use</Link>
              </motion.div>
              <div className="w-px h-3 bg-gray-900"></div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};


export default Footer;