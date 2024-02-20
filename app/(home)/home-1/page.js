"use client";
import CarIntro from "../../components/home/home-1/CarIntro";
import Category from "../../components/home/home-1/Category";
import PopularListings from "../../components/home/home-1/PopularListings";
import WhyChoose from "../../components/common/WhyChoose";
import LoginSignupModal from "../../components/common/login-signup";
import HeaderTop from "../../components/home/home-1/HeaderTop";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import Header from "../../components/home/home-1/Header";
import MobileMenu from "../../components/common/MobileMenu";
import Link from "next/link";
import FeaturedFilterListing from "../../components/home/home-1/FeaturedFilterListing";
import Hero from "../../components/home/home-1/Hero";
import Footer from "../../components/common/Footer";
import Testimonial from "../../components/common/Testimonial";
import Partner from "../../components/common/Partner";
import Counter from "../../components/home/home-1/Counter";
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

  useEffect(() => {
    const apiUrl = 'http://localhost:3005/v1/testimonial/get/submitted/all/for/65538448b78add9eaa02d417';
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
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carCollections/for/65538448b78add9eaa02d417';
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
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carCollections/for/65538448b78add9eaa02d417';
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
      <Hero />
      {/* End Hero */}

      {/* Car Category */}
      <section className="car-category mobile_space bgc-f9  pb10">
        <div className="container">
          <div className="row">
            <Category />
          </div>
        </div>
      </section>
      {/* End Car Cartegory */}

      {/* All brands List */}
      <section className="featured-product">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>All Brands</h2>
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
                <h2>Find the car of your choice</h2>
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
                  <h2>{collection?.name}</h2>
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
                  <Link href="/page-list-v1" className="more_listing">
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
