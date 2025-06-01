'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { cardAnimation } from '@/utils/animations';

const Card = ({
  children,
  className = '',
  padding = 'default',
  shadow = 'default',
  rounded = 'default',
  ...props
}) => {
  const baseClasses = 'bg-white border border-gray-200';
  
  const paddingClasses = {
    none: '',
    small: 'p-4',
    default: 'p-6',
    large: 'p-8',
  };
  
  const shadowClasses = {
    none: '',
    small: 'shadow-sm',
    default: 'shadow-md',
    large: 'shadow-lg',
  };
  
  const roundedClasses = {
    none: '',
    small: 'rounded',
    default: 'rounded-lg',
    large: 'rounded-xl',
  };
  
  const cardClasses = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${roundedClasses[rounded]} ${className}`;
  
  return (
    <motion.div 
      className={cardClasses}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardAnimation}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  padding: PropTypes.oneOf(['none', 'small', 'default', 'large']),
  shadow: PropTypes.oneOf(['none', 'small', 'default', 'large']),
  rounded: PropTypes.oneOf(['none', 'small', 'default', 'large']),
};

export default Card;