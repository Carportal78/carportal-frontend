'use client';

import React from 'react';
import HeroFilter from '../../common/HeroFilter';
import styles from './HomeBanner.module.css';
import CarwaleStyleFilter from '../../common/CarwaleStyleFilter';

const HeroBanner = () => {
  const handleVideoClick = () => {
    // Redirect to WhatsApp with the specified number
    window.open('https://wa.me/918929271880', '_blank');
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
        className={`${styles.floatingFilter} b-3`}
        onClick={handleFilterClick}
      >
        <CarwaleStyleFilter />
      </div>
    </section>
  );
};

export default HeroBanner;

