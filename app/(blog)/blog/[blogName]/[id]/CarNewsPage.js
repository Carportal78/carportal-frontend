'use client'

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Image, Nav, Tab } from 'react-bootstrap';
import { Camera, ChevronRight } from 'lucide-react';
import HeaderSidebar from '../../../../components/common/HeaderSidebar';
import HeaderTop from "../../../../components/common/HeaderTop";
import DefaultHeader from '../../../../components/common/DefaultHeader';
import MobileMenu from '../../../../components/common/MobileMenu';
import LoginSignupModal from "../../../../components/common/login-signup";
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import Link from "next/link";
import ReleatedCar from "../../../../components/listing/listing-single/ReleatedCar";
import Footer from '../../../../components/common/Footer';

const CarNewsPage = ({ blogData }) => {
  const [mainArticle, setMainArticle] = useState({
    id: blogData?._id,
    title: blogData?.title,
    modifiedDate: blogData?.publishDate,
    views: 64900,
    mainImage: blogData?.mainImage?.url,
    content: blogData?.content,
    sections: blogData?.sections
  });
  const [newsItems, setNewsItems] = useState([]);
  const [trendingCars, setTrendingCars] = useState([]);
  const [activeNewsTab, setActiveNewsTab] = useState('trending');
  const [activeCarsTab, setActiveCarsTab] = useState('latest');
  const [isBrandLoading, setIsBrandLoading] = useState(false);
  const [carBrandsList, setCarBrandsList] = useState([]);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [blog, setBlog] = useState({});
  const [relatedCars, setRelatedCars] = useState([]);

  useEffect(() => {
    const blogData = JSON.parse(localStorage.getItem('selectedBlogPost'));
    setBlog(blogData);
  }, []);

  useEffect(() => {
    if (blog?.carBrand?._id) {
      const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${blog.carBrand?._id}/for/66cac994eeca9633c29171e2`, {
        headers: {
          'x-api-key': apiKey,
        },
      })
        .then((response) => response.json())
        .then((cars) => {
          if (cars?.data?.carModelsList) {
            setRelatedCars(cars?.data?.carModelsList);
          }
        })
        .catch((error) => console.error('Error fetching related cars:', error));
    }
  }, [blog]);

  useEffect(() => {
    setIsBrandLoading(true);
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/66cac994eeca9633c29171e2';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.data?.carBrandsList) {
          setCarBrandsList(data.data.carBrandsList);
        }
        setIsBrandLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching car brands:', error);
        setIsBrandLoading(false);
      });
  }, []);

  useEffect(() => {
    // Assuming fetchMainArticle, fetchNews, and fetchTrendingCars are defined elsewhere
    // Uncomment the following lines if you have these functions implemented
    // fetchMainArticle().then(setMainArticle);
    // fetchNews(activeNewsTab).then(setNewsItems);
    // fetchTrendingCars(activeCarsTab).then(setTrendingCars);
  }, [activeNewsTab, activeCarsTab]);

  if (!mainArticle) {
    return <Container className="text-center mt-5"><h2>Loading...</h2></Container>;
  }

  const toggleBrandsDisplay = () => {
    setShowAllBrands(!showAllBrands);
  };

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

      <HeaderTop />
      <DefaultHeader />
      <MobileMenu />

      <Container className="py-4">
        <Row>
          <Col lg={8}>
            <h1 className="mb-3">{mainArticle.title}</h1>
            <p className="text-muted">
              Modified on {new Date(mainArticle.modifiedDate).toLocaleString()}
            </p>

            <div className="position-relative mb-4">
              <Image src={mainArticle.mainImage} alt={mainArticle.title} rounded style={{ width: '100%' }} />
              {/* <Button variant="light" className="position-absolute bottom-0 start-0 m-3 d-flex align-items-center">
                <Camera size={18} className="me-2" />
                View Gallery
              </Button> */}
            </div>

            <div>
              <p>{mainArticle.content}</p>
              {mainArticle?.sections?.map((section, index) => (
                <div key={index}>
                  {console.log('section ', section)}
                  <h2 className="mt-4 mb-3">{section.title}</h2>
                  <Image src={section.image?.url} alt={section.title} fluid rounded className="mb-3" />
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={4}>
            <Card className="mb-4">
              <Card.Header>Other Brands</Card.Header>
              <Card.Body>
                <Row xs={3} className="g-3">
                  {(showAllBrands ? carBrandsList : carBrandsList.slice(0, 9)).map((brand) => (
                    <Col key={brand._id} className="text-center">
                      <Image src={brand?.media?.url} alt={brand?.brandName} roundedCircle fill width={60} height={50} />
                      <p className="small mt-2">{brand?.brandName}</p>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
              <Card.Footer>
                <Button variant="link" className="w-100 text-decoration-none" onClick={toggleBrandsDisplay}>
                  {showAllBrands ? `Show Less Brands` : `View All Brands`} <ChevronRight size={18} />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

      {relatedCars?.length > 0 && (
        <section className="car-for-rent bb1 pt-2">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="main-title text-center text-md-start mb10-520">
                  <h2 className="title">Related cars of {relatedCars?.[0].carBrand?.brandName}</h2>
                </div>
              </div>

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
            </div>

            <div className="col-lg-12">
              <div className="home1_popular_listing home3_style">
                <div className="listing_item_4grid_slider nav_none">
                  <ReleatedCar relatedCars={relatedCars} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />

      <div className="sign_up_modal modal fade" id="logInModal" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-hidden="true">
        <LoginSignupModal />
      </div>
    </div>
  );
};

export default CarNewsPage;
