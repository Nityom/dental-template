'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { headerAnimation, navItemAnimation, mobileMenuAnimation } from '@/utils/animations';
import Button from '@/components/ui/Button';

const navItems = [
  { label: "Home", href: "/", internal: true },
  { label: "About Us", href: "/about", internal: true },
  { label: "Services", href: "/services", internal: true },
  { label: "Locations", href: "/locations", internal: true },
  { label: "Gallery", href: "/gallery", internal: true },
  { label: "Blogs", href: "https://blog.ksdentalclinics.com", internal: false },
  { label: "Contact Us", href: "/contact", internal: true },
  { label: "Admin", href: "https://admin.ksdentalclinics.com", internal: false },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <motion.div
        className="bg-[#25D9FF] py-2 md:py-4"
        initial="hidden"
        animate="show"
        variants={headerAnimation}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <motion.div
            className="flex items-center gap-2 mb-2 md:mb-0"
            variants={navItemAnimation}
          >
            <Image src="/images/img_mappin.svg" alt="Location" width={16} height={22} />
            <span className="text-gray-900 text-xs md:text-sm">Kalambagh road, Lenin Chowk, Muzaffarpur, Bihar</span>
          </motion.div>
          <div className="flex items-center gap-4 md:gap-6">
            <motion.div
              className="flex items-center gap-1 md:gap-2"
              variants={navItemAnimation}
            >
              <Image src="/images/img_phone.svg" alt="Phone" width={16} height={16} />
              <span className="text-gray-900 text-xs md:text-sm">+91 9288050250</span>
            </motion.div>
            <div className="w-px h-4 bg-gray-900 hidden md:block"></div>
            <motion.div
              className="flex items-center gap-1 md:gap-2"
              variants={navItemAnimation}
            >
              <Image src="/images/img_mail.svg" alt="Email" width={16} height={16} />
              <span className="text-gray-900 text-xs md:text-sm">ksdentalclinics@gmail.com</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        className="bg-white shadow-sm py-4 md:py-6 relative"
        initial="hidden"
        animate="show"
        variants={headerAnimation}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          <motion.div
            className="shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/dental_logo.svg"
                alt="KS Dental & Aesthetic Clinic"
                width={60}
                height={60}
                className="h-12 md:h-14 w-auto"
                priority
              />
              <div className="flex flex-col ml-1 w-auto">
                <div className="flex items-baseline mb-0.5 gap-2 md:gap-3">
                  <span className="text-[#4B4B4B] text-3xl md:text-[2.5rem] font-black uppercase tracking-tight leading-none">
                    KS
                  </span>
                  <span className="bg-gradient-to-b from-[#4EBAED] to-[#1F7FC0] bg-clip-text text-transparent text-3xl md:text-[2.5rem] font-black uppercase tracking-tight leading-none">
                    DENTAL
                  </span>
                </div>
                <div className="flex items-center w-full mt-1">
                  <div className="h-[1.5px] w-6 md:w-8 bg-gradient-to-r from-transparent to-[#4EBAED]"></div>
                  <span className="text-[#4EBAED] text-[9px] md:text-[11px] font-bold tracking-[0.05em] mx-1.5 whitespace-nowrap">
                    & AESTHETIC CLINIC
                  </span>
                  <div className="h-[1.5px] flex-grow bg-gradient-to-l from-transparent to-[#4EBAED]"></div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} variants={navItemAnimation}>
                {item.internal ? (
                  <Link href={item.href} className={`text-gray-900 hover:text-[#1E63D5] transition-colors ${pathname === item.href ? 'text-[#1E63D5] font-medium' : ''}`}>
                    {item.label}
                  </Link>
                ) : (
                  <Link href={item.href} target="_blank" rel="noopener noreferrer"
                    className={`relative text-[15px] font-medium transition-colors duration-300 hover:text-[#1E63D5]
${pathname === item.href ? "text-[#1E63D5]" : "text-gray-800"}`}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={navItemAnimation}
            >
              <Link href="/book-appointment">
                <Button
                  variant="primary"
                  size="medium"
                  className="hidden lg:flex rounded-full px-6 py-3 bg-[#1E63D5] hover:bg-[#25D9FF] transition-all duration-300"
                >
                  Book Appointment
                  <Image src="/images/img_arrowright.svg" alt="Arrow" width={20} height={20} className="ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-md"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={mobileMenuAnimation}
            >
              <nav className="flex flex-col py-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={navItemAnimation}
                    whileHover={{ backgroundColor: '#F2F8FF' }}
                  >
                    {item.internal ? (
                      <Link
                        href={item.href}
                        className={`px-4 py-3 block ${index !== navItems.length - 1 ? 'border-b border-gray-100' : ''} ${pathname === item.href ? 'bg-[#F2F8FF] text-[#1E63D5]' : 'text-gray-900'}`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-3 block text-gray-900 ${index !== navItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  className="px-4 py-2 pb-4"
                  variants={navItemAnimation}
                  whileHover={{ scale: 1.02 }}
                >
                  <Link href="/book-appointment">
                    <Button
                      variant="primary"
                      size="medium"
                      className="w-full bg-[#1E63D5] hover:bg-[#25D9FF] flex items-center justify-center"
                    >
                      Book Appointment
                      <Image src="/images/img_arrowright.svg" alt="Arrow" width={20} height={20} className="ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;