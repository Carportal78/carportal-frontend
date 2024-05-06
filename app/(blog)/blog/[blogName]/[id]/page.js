"use client";
import Footer from "../../../../components/common/Footer";
import DefaultHeader from "../../../../components/common/DefaultHeader";
import HeaderSidebar from "../../../../components/common/HeaderSidebar";
import HeaderTop from "../../../../components/common/HeaderTop";
import MobileMenu from "../../../../components/common/MobileMenu";
import LoginSignupModal from "../../../../components/common/login-signup";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

import { useEffect, useState } from "react";
import Link from "next/link";
import ReleatedCar from "../../../../components/listing/listing-single/ReleatedCar";

const metadata = {
  title:
    "Carportal - Automotive & Car Dealer",
};

const BlogDynamicSingle = () => {

  const [blog, setBlog] = useState({});
  const [relatedCars, setRelatedCars] = useState([]);

  useEffect(() => {
    const blogData = JSON.parse(localStorage.getItem('selectedBlogPost'));
    setBlog(blogData);
  }, []);

  useEffect(() => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';  
    const relatedCars = fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${blog.carBrand?._id}/for/65538448b78add9eaa02d417`, {
    headers: {
        'x-api-key': apiKey
      }
    }).then(response => response.json());
    relatedCars.then(cars => {
      if(cars?.data?.carModelsList) {
        console.log('relatedCars ', cars?.data?.carModelsList);
        setRelatedCars(cars?.data?.carModelsList);
      }
    });
  }, [blog]);

  return (
    <div className="wrapper">
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
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="text-secondary">
              <small>
                <a href="#" className="text-primary">{blog?.carBrand?.brandName}</a>, <a href="#" className="text-primary">{blog?.carModel?.modelName}</a>
              </small>
            </div>
            <h1 className="font-weight-bold text-dark">{blog?.blogName}</h1>
            <p className="my-2" style={{ lineHeight: 2 }}>
              {blog?.blogTagLine}
            </p>

            <Row className="my-3 d-flex align-items-center justify-content-between">
              <Col className="d-flex align-items-center">
                <Image src="https://avatars0.githubusercontent.com/u/39916324?s=460&u=602ca47fcce463981a2511a21148236f304ec934&v=4" roundedCircle style={{ width: '50px' }} />
                <small className="ml-2">
                  <a href="#" className="text-primary d-block ml10">Carportal</a>
                </small>
              </Col>
              <Col className="text-primary">
                {/* <Button variant="link" className="mx-1">a</Button>
              <Button variant="link" className="mx-1">b</Button>
              <Button variant="link" className="mx-1">c</Button> */}
                <a href="https://twitter.com/CarPortalindia" target="_blank" rel="noopener noreferrer" className="mx-1">
                  <Button variant="link" className="mx-1"><Twitter color="currentColor" size={30} /></Button></a>
                <a href="https://www.facebook.com/carportal" target="_blank" rel="noopener noreferrer" className="mx-1">
                  <Button variant="link" className="mx-1"><Facebook color="currentColor" size={30} /></Button></a>
                <a href="https://www.instagram.com/carportal.co.in" target="_blank" rel="noopener noreferrer" className="mx-1">
                  <Button variant="link" className="mx-1"><Instagram color="currentColor" size={30} /></Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

        <Image src={blog?.media?.url} fluid className="my-3" style={{ width: "100%" , height: '80%' }} />

        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <p className="my-2" style={{ lineHeight: 2 }}>
             {blog?.blogDescription}
            </p>
            <br />
            <h3 className="font-weight-bold text-dark">#1. What is Lorem Ipsum?</h3>
            <p className="my-2" style={{ lineHeight: 2 }}>
              {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`}
            </p>
            <br />
            <blockquote className="text-primary p-3" style={{ borderLeft: '4px solid black', lineHeight: 2 }}>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry...`}
            </blockquote>
            <br />
            <p className="my-2" style={{ lineHeight: 2 }}>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry...`}
            </p>
            <div className="my-3">
              <small>
                <a href="#" className="text-primary">#election</a>, <a href="#" className="text-primary">#politics</a>, <a href="#" className="text-primary">#trump</a>, <a href="#" className="text-primary">#revenge</a>, <a href="#" className="text-primary">#2020</a>
              </small>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Car For Rent */}
      {relatedCars?.length>0 ? <section className="car-for-rent bb1 pt-2" >
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-md-start mb10-520">
                <h2 className="title">Related cars of {relatedCars?.[0].carBrand?.brandName}</h2>
              </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <div className="text-center text-md-end mb30-520">
                <Link href={`/cars?brand=${relatedCars?.[0]?.carBrand?.brandName}`} className="more_listing">
                  Show All Cars
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home3_style"
              data-aos-delay="100"
            >
              <div className="listing_item_4grid_slider nav_none">
                <ReleatedCar relatedCars={relatedCars} />
              </div>
            </div>
          </div>
          {/* End .col-lg-12 */}
        </div>
        {/* End .container */}
      </section> : ' '};

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

export default BlogDynamicSingle;
