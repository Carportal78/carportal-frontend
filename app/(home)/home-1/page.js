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

const metadata = {
  title: "Home || Carportal - Automotive & Car Dealer",
  description: `Carportal - Automotive & Car Dealer. `,
};

const Home_1 = () => {

  const [collections, setCollections] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3005/v1/carbanner/get/banner/image/for/66cac994eeca9633c29171e2';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {

        if (data && data.data && data.data.carBanner) {
          setBanner(data.data.carBanner);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  useEffect(() => {
    const apiUrl = 'https://api.univolenitsolutions.com/v1/testimonial/get/submitted/all/for/66cac994eeca9633c29171e2';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.testimonialsList) {
          setTestimonials(data.data.testimonialsList);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  useEffect(() => {
    const data = localStorage?.getItem('compare-data');
    if(!data) {
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
          if (data  && data?.data) {
            localStorage.setItem('compare-data', JSON.stringify(data?.data));
          }
        })
        .catch(error => {
          console.error('Error fetching car details: ', error);
        })
      }
    }
  },[]);

  useEffect(() => {
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carCollections/for/66cac994eeca9633c29171e2';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.carCollectionsList) {
          setCollections(data.data.carCollectionsList);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  useEffect(() => {
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carCollections/for/66cac994eeca9633c29171e2';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.carCollectionsList) {
          setCollections(data.data.carCollectionsList);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
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
      <section className="featured-product all-brands-mobile-view">
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
            <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
              <AllBrandsList />
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
            <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
              <FindCarChoice />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* Featured Product  */}
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
              <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
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
            <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
              <Testimonial testimonials={testimonials} />
              {/* <FeaturedFilterListing collection={collection} /> */}
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>

      {/* End Featured Product  */}

      {/* Why Chose us  */}
      {/* <section className="why-chose pt0 pb90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section> */}
      {/* Why Chose us  */}

      {/* Delivery Divider */}
      {/* <section className="deliver-divider bg-img1">
        <div className="container">
          <CarIntro />
        </div>
      </section> */}
      {/* End Delivery Divider */}

      {/* Our Popular Listing */}
      {/* <section className="popular-listing pb80 bg-ptrn1 bgc-heading-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="text-white">{collections?.[1]?.name}</h2>
              </div>
            </div>
          </div> */}
      {/* End .row */}
      {/* 
          <div className="col-lg-12">
            <div className="home1_popular_listing">
              <div className="listing_item_4grid_slider dots_none">
                <PopularListings collection={collections?.[1]} />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Our Popular Listing */}

      {/* <!-- Funfact --> */}
      {/* <section className="our-funfact pt50 pb30">
        <div className="container">
          <div className="row">
            <Counter />
          </div>
        </div>
      </section> */}
      {/* <!-- End Funfact --> */}

      {/* End Our Blog */}

      {/* End  Our Partners */}

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
    // End wrapper
  );
};

export default Home_1;
