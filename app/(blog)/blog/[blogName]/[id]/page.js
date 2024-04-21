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

const metadata = {
  title:
    "Carportal - Automotive & Car Dealer",
};

const BlogDynamicSingle = () => {

  const [blog, setBlog] = useState({});
  
  useEffect(() => {
    const blogData = JSON.parse(localStorage.getItem('selectedBlogPost'));
    setBlog(blogData);
  }, [])

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
              <a href="#" className="text-primary">Election</a>, <a href="#" className="text-primary">Politics</a>
            </small>
          </div>
          <h1 className="font-weight-bold text-dark">Revenge of the Never Trumpers</h1>
          <p className="my-2" style={{ lineHeight: 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>

          <Row className="my-3 d-flex align-items-center justify-content-between">
            <Col className="d-flex align-items-center">
              <Image src="https://avatars0.githubusercontent.com/u/39916324?s=460&u=602ca47fcce463981a2511a21148236f304ec934&v=4" roundedCircle style={{ width: '50px' }} />
              <small className="ml-2">
                <a href="#" className="text-primary d-block">Ahmad Sultani</a>
                <span>Aug 18</span>
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

      <Image src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1" fluid className="my-3" />

      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <p className="my-2" style={{ lineHeight: 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
          <br />
          <h3 className="font-weight-bold text-dark">#1. What is Lorem Ipsum?</h3>
          <p className="my-2" style={{ lineHeight: 2 }}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
          <br />
          <blockquote className="text-primary p-3" style={{ borderLeft: '4px solid black', lineHeight: 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </blockquote>
          <br />
          <p className="my-2" style={{ lineHeight: 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
          <div className="my-3">
            <small>
              <a href="#" className="text-primary">#election</a>, <a href="#" className="text-primary">#politics</a>, <a href="#" className="text-primary">#trump</a>, <a href="#" className="text-primary">#revenge</a>, <a href="#" className="text-primary">#2020</a>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
      
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
