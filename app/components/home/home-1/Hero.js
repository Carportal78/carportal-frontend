'use client';

import React from 'react';
import HeroFilter from '../../common/HeroFilter';
import styles from './HomeBanner.module.css';

const HeroBanner = () => {
  return (
    <section className={`${styles.bannerSection} bg-home1`}>
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
      <div className="container">
        <div className="row posr">
          <div className="m-auto">
            <div className="home_content home1_style">

      <div className={styles.overlay}>
        <HeroFilter />
      </div>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default HeroBanner;
