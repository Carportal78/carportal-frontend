'use client';

import React from 'react';
import HeroFilter from '../../common/HeroFilter';
import styles from './HomeBanner.module.css';
import CarwaleStyleFilter from '../../common/CarwaleStyleFilter';

const HeroBanner = () => {
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
      {/* <div className="container">
        <div className="row posr">
          <div className="m-auto">
            <div className="home_content home1_style">

      <div className={styles.overlay}>
        <HeroFilter />
      </div>
      </div>
      </div>
      </div> */}
      
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

