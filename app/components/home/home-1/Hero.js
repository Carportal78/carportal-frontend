'use client';

import React, { useState, useEffect } from 'react';
import HeroFilter from '../../common/HeroFilter';
import styles from './HomeBanner.module.css';
import CarwaleStyleFilter from '../../common/CarwaleStyleFilter';

const HeroBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkScreenSize();

    // Listen for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleVideoClick = () => {
    // Professional WhatsApp message with website link
    const message = `Hi! I am interested in buying an Audi and would love your assistance in finding the perfect car for me. I came across your services through CarPortal (https://www.carportal.co.in) and would appreciate your expert guidance on available models, pricing, and financing options. Please help me out with the best deals available. Thank you!`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Redirect to WhatsApp with the specified number and message
    window.open(`https://wa.me/918929271880?text=${encodedMessage}`, '_blank');
  };

  const handleFilterClick = (e) => {
    // Prevent the video click when clicking on the filter
    e.stopPropagation();
  };

  return (
    <section 
      className={`${styles.bannerSection} bg-home1`}
      onClick={handleVideoClick}
      style={{ cursor: 'pointer' }}
    >
      {isMobile ? (
        <img
          src="/images/HomeBanner1.jpeg"
          alt="Audi Car Banner"
          className={styles.videoBackground}
        />
      ) : (
        <video
          className={styles.videoBackground}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://carportal-images-s3.s3.ap-south-1.amazonaws.com/banner/Audi+South+Delhi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Positioned filter that extends outside video section */}
      <div 
        className={`${styles.floatingFilter} mb-3`}
        onClick={handleFilterClick}
      >
        <CarwaleStyleFilter />
      </div>
    </section>
  );
};

export default HeroBanner;


