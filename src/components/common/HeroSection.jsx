'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroContentAnimation, buttonAnimation, floatAnimation } from '@/utils/animations';

const HeroSection = () => {
  return (
    <motion.section 
      className="bg-gray-900 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden"
      initial="hidden"
      animate="show"
      variants={heroContentAnimation}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            className="max-w-2xl"
            variants={heroContentAnimation}
          >
            <motion.p 
              className="text-lg md:text-xl font-semibold mb-3 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
            KS Dental & Aesthetic Clinic
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your Smile, Our Priority.
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Mauris risus adipiscing cursus consequat. Sit duis lobortis diam non. In in suspendisse quam in vestibulum diam scelerisque vulputate id. In tellus nibh volutpat dignissim.
            </motion.p>
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonAnimation}
            >
              <Button variant="primary" size="large" className="bg-[#1E63D5] hover:bg-[#25D9FF] w-full sm:w-auto">
                Make Appointment
                <Image src="/images/img_arrowright.svg" alt="Arrow" width={20} height={20} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-64 md:h-96 lg:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image 
              src="/images/hero.png" 
              alt="KS Dental & Aesthetic Clinic" 
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements - Hidden on small screens, shown on larger screens */}
      <motion.div 
        className="hidden md:block absolute top-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div 
        className="hidden md:block absolute top-16 md:top-24 lg:top-32 right-16 md:right-24 lg:right-32 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-5"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.div 
        className="hidden md:block absolute top-32 md:top-48 lg:top-64 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.div 
        className="absolute bottom-0 right-16 md:right-24 lg:right-32 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-[#25D9FF]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.div 
        className="absolute bottom-16 md:bottom-24 lg:bottom-32 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-[#4FAEFF]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
    </motion.section>
  );
};

export default HeroSection;