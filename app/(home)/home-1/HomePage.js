"use client";
import PopularListings from "../../components/home/home-1/PopularListings";
import LoginSignupModal from "../../components/common/login-signup";
import HeaderTop from "../../components/home/home-1/HeaderTop";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import Header from "../../components/home/home-1/Header";
import MobileMenu from "../../components/common/MobileMenu";
import Link from "next/link";
import Hero from "../../components/home/home-1/Hero";
import Footer from "../../components/common/Footer";
import Testimonial from "../../components/common/Testimonial";
import FindCarChoice from "../../components/home/home-1/FindCarChoice";
import AllBrandsList from "../../components/home/home-1/AllBrandsList";
import { useEffect, useState } from "react";
import Script from 'next/script';
const metadata = {
  title: "Home || Carportal - Automotive & Car Dealer",
  description: `Carportal - Automotive & Car Dealer. `,
};

const HomePage = ({ collections, carBrands, testimonials, banner }) => {

  useEffect(() => {
    const data = localStorage?.getItem('compare-data');
    if (!data) {
      const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
      if (true) {
        fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carinfo/for/66cac994eeca9633c29171e2`,
          {
            method: 'GET',
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => {
            if (data && data?.data) {
              localStorage.setItem('compare-data', JSON.stringify(data?.data));
            }
          })
          .catch(error => {
            console.error('Error fetching car details: ', error);
          })
      }
    }
  }, []);

  return (
    <>


      <head>

        <title>CarPortal - Your Ultimate Destination for Cars</title>
        <meta name="description" content="Find your dream car on Car Portal." />
        <meta name="google-site-verification" content="8yVHGPhzzhebFg9xqz95RIy-HhWdwy5peCU1bL9iWnQ" />
        <link rel="canonical" href="https://www.carportal.co.in" />

        <meta name="description" content="Explore a wide range of cars, compare prices, and find the best deals on CarPortal." />


        <meta property="og:title" content="CarPortal - Your Ultimate Destination for Cars" />
        <meta property="og:description" content="Explore a wide range of cars, compare prices, and find the best deals on CarPortal." />
        <meta property="og:image"
          content="https://www.carportal.co.in/images/carportal-logo.jpg" />
        <meta property="og:url" content="https://www.carportal.co.in/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CarPortal - Your Ultimate Destination for Cars" />
        <meta name="twitter:description" content="Explore a wide range of cars, compare prices, and find the best deals on CarPortal." />
        <meta name="twitter:image" content="https://www.carportal.co.in/images/carportal-logo.jpg" />
        <meta name="twitter:url" content="https://www.carportal.co.in" />

        <meta name="robots" content="index, follow"></meta>


         {/* Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B0J2FY5KTN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B0J2FY5KTN');
        `}
      </Script>
      </head>



      <div className="wrapper ovh">
        {/* Sidebar Panel Start */}

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <HeaderSidebar />
        </div>
        {/* Sidebar Panel End */}

        {/* header top */}
        <HeaderTop />
        {/* End header top */}

        {/* Main Header Nav */}
        <Header />
        {/* End Main Header Nav */}

        {/* Main Header Nav For Mobile */}
        <MobileMenu />
        {/* End Main Header Nav For Mobile */}

        {/* Hero */}
        <Hero banner={banner} />
        {/* End Hero */}

        {/* All brands List */}
        <section className="featured-product all-brands-mobile-view pt-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-md-3">
                  <h2 className="d-none d-md-block">All Brands</h2>
                  <h3 className="d-md-none d-sm-block">All Brands</h3>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-lg-12">
                <AllBrandsList carBrands={carBrands} />
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>

        {/* Find the car pf choice */}
        <section className="featured-product">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="main-title text-center">
                  <h2 className="d-none d-md-block">Find the car of your choice</h2>
                  <h3 className="d-md-none d-sm-block">Find the car of your choice</h3>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-lg-12">
                <FindCarChoice />
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>

        {/* Featured Product  */}
        {console.log("collections ", collections)}
        {collections?.map(collection => (
          <section className="featured-product" key={collection?._id}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="main-title text-center">
                    <h2 className="d-none d-md-block">{collection?.name}</h2>
                    <h3 className="d-md-none d-sm-block">{collection?.name}</h3>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <PopularListings collection={collection} />
                  {/* <FeaturedFilterListing collection={collection} /> */}
                </div>
              </div>
              {/* End .row */}

              <div className="row mt20">
                <div className="col-lg-12">
                  <div className="text-center">
                    <Link href="/cars" className="more_listing">
                      Show All Cars{" "}
                      <span className="icon">
                        <span className="fas fa-plus" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
        ))}

        <section className="featured-product">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="main-title text-center">
                  <h2>Testimonials</h2>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-lg-12">
                <Testimonial testimonials={testimonials} />
                {/* <FeaturedFilterListing collection={collection} /> */}
              </div>
            </div>
          </div>
          {/* End .container */}
        </section>

        {/* End Featured Product  */}

        {/* Our Footer */}
        <Footer />
        {/* End Our Footer */}

        {/* Modal */}
        <div
          className="sign_up_modal modal fade"
          id="logInModal"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex={-1}
          aria-hidden="true"
        >
          <LoginSignupModal />
        </div>
        {/* End Modal */}
      </div>
    </>
    // End wrapper
  );
};

export default HomePage;
