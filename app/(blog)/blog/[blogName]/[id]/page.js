'use client'

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Image, Nav, Tab } from 'react-bootstrap';
import { Camera, ChevronRight } from 'lucide-react';
import HeaderSidebar from '../../../../components/common/HeaderSidebar';
import HeaderTop from "../../../../components/common/HeaderTop";
import DefaultHeader from '../../../../components/common/DefaultHeader';
import MobileMenu from '../../../../components/common/MobileMenu';
// import Footer from "../../../../components/common/Footer";
import LoginSignupModal from "../../../../components/common/login-signup";
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import Link from "next/link";
import ReleatedCar from "../../../../components/listing/listing-single/ReleatedCar";
import Footer from '../../../../components/common/Footer';

const metadata = {
  title:
    "Carportal - Automotive & Car Dealer",
};

// Mock API services (unchanged)
const fetchMainArticle = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Tata Altroz Offers More Refinement And Improved Driveability With Its New Generation Revotron Petrol Engine",
        modifiedDate: "2023-03-31T12:44:00Z",
        views: 64900,
        mainImage: "/api/placeholder/800/450",
        content: "Tata Altroz carved its own path in the segment thanks to its suave styling, plush cabin, an array of powertrain options, and most importantly, the five-star crash test safety rating. The package has now been improved further with the new RDE compliant model which promises better performance, fuel efficiency, and refinement. Tata has worked on several updates for the hatchback, so let's take a close look at the improvements made:",
        sections: [
          {
            title: "Better Driveability",
            content: "The Tata Altroz' petrol engine is now more powerful and torquier. Its new generation 1.2-litre Revotron petrol engine belts out 88PS and 115Nm. While the Altroz petrol had a linear and smooth power delivery, the new RDE-compliant version offers even better driveability, especially in city traffic conditions.",
            image: "/api/placeholder/800/450"
          }
        ]
      });
    }, 500);
  });
};

const fetchNews = (type) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Tata Altroz Offers More Refinement And Improved Driveability", image: "/api/placeholder/100/60" },
        { id: 2, title: "Here's How the ŠKODA SLAVIA Offers A Blend Of Performance And Comfort", image: "/api/placeholder/100/60" },
        { id: 3, title: "Tata ALTROZ - India's Safest hatchback", image: "/api/placeholder/100/60" },
        { id: 4, title: "Tata Tiago NRG iCNG: India's First Toughroader CNG", image: "/api/placeholder/100/60" },
      ]);
    }, 300);
  });
};

const fetchCarBrands = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Maruti', logo: "/api/placeholder/50/50" },
        { id: 2, name: 'Kia', logo: "/api/placeholder/50/50" },
        { id: 3, name: 'Toyota', logo: "/api/placeholder/50/50" },
        { id: 4, name: 'Hyundai', logo: "/api/placeholder/50/50" },
        { id: 5, name: 'Mahindra', logo: "/api/placeholder/50/50" },
        { id: 6, name: 'Honda', logo: "/api/placeholder/50/50" },
        { id: 7, name: 'MG', logo: "/api/placeholder/50/50" },
        { id: 8, name: 'Skoda', logo: "/api/placeholder/50/50" },
        { id: 9, name: 'Jeep', logo: "/api/placeholder/50/50" },
      ]);
    }, 300);
  });
};

const fetchTrendingCars = (type) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Hyundai Grand i10 Nios", price: "₹ 5.92 - 8.56 Lakh*", image: "/api/placeholder/80/50" },
        { id: 2, name: "Maruti Ignis", price: "₹ 5.49 - 8.06 Lakh*", image: "/api/placeholder/80/50" },
        { id: 3, name: "Tata Altroz", price: "₹ 6.65 - 11.35 Lakh*", image: "/api/placeholder/80/50" },
      ]);
    }, 300);
  });
};

const CarNewsPage = () => {
  const [mainArticle, setMainArticle] = useState(null);
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
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';  
    const relatedCars = fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${blog.carBrand?._id}/for/66cac994eeca9633c29171e2`, {
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


  useEffect(() => {
    setIsBrandLoading(true);
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/66cac994eeca9633c29171e2';
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
        if (data && data.data && data.data.carBrandsList) {
          setIsBrandLoading(false);
          setCarBrandsList(data.data.carBrandsList);
        }
      })
      .catch(error => {
        setIsBrandLoading(false);
        console.error('Error fetching data: ', error);
      })
  }, []);

  useEffect(() => {
    fetchMainArticle().then(setMainArticle);
    fetchNews(activeNewsTab).then(setNewsItems);
    // fetchCarBrands().then(setCarBrands);
    fetchTrendingCars(activeCarsTab).then(setTrendingCars);
  }, [activeNewsTab, activeCarsTab]);

  if (!mainArticle) return <Container className="text-center mt-5"><h2>Loading...</h2></Container>;

  const toggleBrandsDisplay = () => {
    setShowAllBrands(!showAllBrands);
  };

  return (<div className="wrapper">
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

        <Container className="py-4">
      <Row>
        <Col lg={8}>
          <h1 className="mb-3">{mainArticle.title}</h1>
          <p className="text-muted">
            Modified on {new Date(mainArticle.modifiedDate).toLocaleString()} • {mainArticle.views.toLocaleString()} Views
          </p>

          <div className="position-relative mb-4">
            <Image src={mainArticle.mainImage} alt={mainArticle.title} fluid rounded />
            <Button variant="light" className="position-absolute bottom-0 start-0 m-3 d-flex align-items-center">
              <Camera size={18} className="me-2" />
              View Gallery
            </Button>
          </div>

          <div>
            <p>{mainArticle.content}</p>

            {mainArticle.sections.map((section, index) => (
              <div key={index}>
                <h2 className="mt-4 mb-3">{section.title}</h2>
                <Image src={section.image} alt={section.title} fluid rounded className="mb-3" />
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </Col>

        <Col lg={4}>
          <Card className="mb-4">
            <Card.Header>Car News</Card.Header>
            <Card.Body>
              <Tab.Container activeKey={activeNewsTab} onSelect={(k) => setActiveNewsTab(k)}>
                <Nav variant="tabs" className="mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="trending">Trending News</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="recent">Recent News</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey={activeNewsTab}>
                    {newsItems.map((item) => (
                      <div key={item.id} className="d-flex mb-3">
                        <Image src={item.image} alt={item.title} width={100} height={60} className="me-3" rounded />
                        <p className="small">{item.title}</p>
                      </div>
                    ))}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>

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

          <Card>
            <Card.Header>Trending Hatchback Cars</Card.Header>
            <Card.Body>
              <Tab.Container activeKey={activeCarsTab} onSelect={(k) => setActiveCarsTab(k)}>
                <Nav variant="tabs" className="mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="latest">Latest</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="upcoming">Upcoming</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="popular">Popular</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey={activeCarsTab}>
                    {trendingCars.map((car) => (
                      <div key={car.id} className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <h6 className="mb-0">{car.name}</h6>
                          <small className="text-muted">{car.price}</small>
                        </div>
                        <Image src={car.image} alt={car.name} width={80} height={50} rounded />
                      </div>
                    ))}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
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

  // return (
    // <Container className="py-4">
    //   <div
    //     className="offcanvas offcanvas-end"
    //     tabIndex="-1"
    //     id="offcanvasRight"
    //     aria-labelledby="offcanvasRightLabel"
    //   >
    //     <HeaderSidebar />
    //   </div>
    //   {/* Sidebar Panel End */}

    //   {/* header top */}
    //   <HeaderTop />
    //   {/* End header top */}

    //   {/* Main Header Nav */}
    //   <DefaultHeader />
    //   {/* End Main Header Nav */}

    //   {/* Main Header Nav For Mobile */}
    //   <MobileMenu />
    //   {/* End Main Header Nav For Mobile */}
    //   <Row>
    //     <Col lg={8}>
    //       <h1 className="mb-3">{mainArticle.title}</h1>
    //       <p className="text-muted">
    //         Modified on {new Date(mainArticle.modifiedDate).toLocaleString()} • {mainArticle.views.toLocaleString()} Views
    //       </p>

    //       <div className="position-relative mb-4">
    //         <Image src={mainArticle.mainImage} alt={mainArticle.title} fluid rounded />
    //         <Button variant="light" className="position-absolute bottom-0 start-0 m-3 d-flex align-items-center">
    //           <Camera size={18} className="me-2" />
    //           View Gallery
    //         </Button>
    //       </div>

    //       <div>
    //         <p>{mainArticle.content}</p>

    //         {mainArticle.sections.map((section, index) => (
    //           <div key={index}>
    //             <h2 className="mt-4 mb-3">{section.title}</h2>
    //             <Image src={section.image} alt={section.title} fluid rounded className="mb-3" />
    //             <p>{section.content}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </Col>

    //     <Col lg={4}>
    //       <Card className="mb-4">
    //         <Card.Header>Car News</Card.Header>
    //         <Card.Body>
    //           <Tab.Container activeKey={activeNewsTab} onSelect={(k) => setActiveNewsTab(k)}>
    //             <Nav variant="tabs" className="mb-3">
    //               <Nav.Item>
    //                 <Nav.Link eventKey="trending">Trending News</Nav.Link>
    //               </Nav.Item>
    //               <Nav.Item>
    //                 <Nav.Link eventKey="recent">Recent News</Nav.Link>
    //               </Nav.Item>
    //             </Nav>
    //             <Tab.Content>
    //               <Tab.Pane eventKey={activeNewsTab}>
    //                 {newsItems.map((item) => (
    //                   <div key={item.id} className="d-flex mb-3">
    //                     <Image src={item.image} alt={item.title} width={100} height={60} className="me-3" rounded />
    //                     <p className="small">{item.title}</p>
    //                   </div>
    //                 ))}
    //               </Tab.Pane>
    //             </Tab.Content>
    //           </Tab.Container>
    //         </Card.Body>
    //       </Card>

    //       <Card className="mb-4">
    //         <Card.Header>Other Brands</Card.Header>
    //         <Card.Body>
    //           <Row xs={3} className="g-3">
    //             {(showAllBrands ? carBrandsList : carBrandsList.slice(0, 9)).map((brand) => (
    //               <Col key={brand._id} className="text-center">
    //                 <Image src={brand?.media?.url} alt={brand?.brandName} roundedCircle fill width={60} height={50} />
    //                 <p className="small mt-2">{brand?.brandName}</p>
    //               </Col>
    //             ))}
    //           </Row>
    //         </Card.Body>
    //         <Card.Footer>
    //           <Button variant="link" className="w-100 text-decoration-none" onClick={toggleBrandsDisplay}>
    //             {showAllBrands ? `Show Less Brands` : `View All Brands`} <ChevronRight size={18} />
    //           </Button>
    //         </Card.Footer>
    //       </Card>

    //       <Card>
    //         <Card.Header>Trending Hatchback Cars</Card.Header>
    //         <Card.Body>
    //           <Tab.Container activeKey={activeCarsTab} onSelect={(k) => setActiveCarsTab(k)}>
    //             <Nav variant="tabs" className="mb-3">
    //               <Nav.Item>
    //                 <Nav.Link eventKey="latest">Latest</Nav.Link>
    //               </Nav.Item>
    //               <Nav.Item>
    //                 <Nav.Link eventKey="upcoming">Upcoming</Nav.Link>
    //               </Nav.Item>
    //               <Nav.Item>
    //                 <Nav.Link eventKey="popular">Popular</Nav.Link>
    //               </Nav.Item>
    //             </Nav>
    //             <Tab.Content>
    //               <Tab.Pane eventKey={activeCarsTab}>
    //                 {trendingCars.map((car) => (
    //                   <div key={car.id} className="d-flex justify-content-between align-items-center mb-3">
    //                     <div>
    //                       <h6 className="mb-0">{car.name}</h6>
    //                       <small className="text-muted">{car.price}</small>
    //                     </div>
    //                     <Image src={car.image} alt={car.name} width={80} height={50} rounded />
    //                   </div>
    //                 ))}
    //               </Tab.Pane>
    //             </Tab.Content>
    //           </Tab.Container>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  // );
};

export default CarNewsPage;

// const BlogDynamicSingle = () => { 

//   return (
//     <div className="wrapper">
//       <div
//         className="offcanvas offcanvas-end"
//         tabIndex="-1"
//         id="offcanvasRight"
//         aria-labelledby="offcanvasRightLabel"
//       >
//         <HeaderSidebar />
//       </div>
//       {/* Sidebar Panel End */}

//       {/* header top */}
//       <HeaderTop />
//       {/* End header top */}

//       {/* Main Header Nav */}
//       <DefaultHeader />
//       {/* End Main Header Nav */}

//       {/* Main Header Nav For Mobile */}
//       <MobileMenu />
//       {/* End Main Header Nav For Mobile */}

//       <Container className="my-5">
//         <Row className="justify-content-center">
//           <Col xs={12} md={8}>
//             <div className="text-secondary">
//               <small>
//                 <a href="#" className="text-primary">{blog?.carBrand?.brandName}</a>, <a href="#" className="text-primary">{blog?.carModel?.modelName}</a>
//               </small>
//             </div>
//             <h1 className="font-weight-bold text-dark">{blog?.blogName}</h1>
//             <p className="my-2" style={{ lineHeight: 2 }}>
//               {blog?.blogTagLine}
//             </p>

//             <Row className="my-3 d-flex align-items-center justify-content-between">
//               <Col className="d-flex align-items-center">
//                 <Image src="https://avatars0.githubusercontent.com/u/39916324?s=460&u=602ca47fcce463981a2511a21148236f304ec934&v=4" roundedCircle style={{ width: '50px' }} />
//                 <small className="ml-2">
//                   <a href="#" className="text-primary d-block ml10">Carportal</a>
//                 </small>
//               </Col>
//               <Col className="text-primary">
//                 {/* <Button variant="link" className="mx-1">a</Button>
//               <Button variant="link" className="mx-1">b</Button>
//               <Button variant="link" className="mx-1">c</Button> */}
//                 <a href="https://twitter.com/CarPortalindia" target="_blank" rel="noopener noreferrer" className="mx-1">
//                   <Button variant="link" className="mx-1"><Twitter color="currentColor" size={30} /></Button></a>
//                 <a href="https://www.facebook.com/carportal" target="_blank" rel="noopener noreferrer" className="mx-1">
//                   <Button variant="link" className="mx-1"><Facebook color="currentColor" size={30} /></Button></a>
//                 <a href="https://www.instagram.com/carportal.co.in" target="_blank" rel="noopener noreferrer" className="mx-1">
//                   <Button variant="link" className="mx-1"><Instagram color="currentColor" size={30} /></Button>
//                 </a>
//               </Col>
//             </Row>
//           </Col>
//         </Row>

//         <Image src={blog?.media?.url} fluid className="my-3" style={{ width: "100%" , height: '80%' }} />

//         <Row className="justify-content-center">
//           <Col xs={12} md={8}>
//             <p className="my-2" style={{ lineHeight: 2 }}>
//              {blog?.blogDescription}
//             </p>
//             <br />
//             <h3 className="font-weight-bold text-dark">#1. What is Lorem Ipsum?</h3>
//             <p className="my-2" style={{ lineHeight: 2 }}>
//               {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`}
//             </p>
//             <br />
//             <blockquote className="text-primary p-3" style={{ borderLeft: '4px solid black', lineHeight: 2 }}>
//               {`Lorem Ipsum is simply dummy text of the printing and typesetting industry...`}
//             </blockquote>
//             <br />
//             <p className="my-2" style={{ lineHeight: 2 }}>
//               {`Lorem Ipsum is simply dummy text of the printing and typesetting industry...`}
//             </p>
//             <div className="my-3">
//               <small>
//                 <a href="#" className="text-primary">#election</a>, <a href="#" className="text-primary">#politics</a>, <a href="#" className="text-primary">#trump</a>, <a href="#" className="text-primary">#revenge</a>, <a href="#" className="text-primary">#2020</a>
//               </small>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* Car For Rent */}
//       {relatedCars?.length>0 ? <section className="car-for-rent bb1 pt-2" >
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-6">
//               <div className="main-title text-center text-md-start mb10-520">
//                 <h2 className="title">Related cars of {relatedCars?.[0].carBrand?.brandName}</h2>
//               </div>
//             </div>
//             {/* End .col-sm-6 */}

//             <div className="col-sm-6">
//               <div className="text-center text-md-end mb30-520">
//                 <Link href={`/cars?brand=${relatedCars?.[0]?.carBrand?.brandName}`} className="more_listing">
//                   Show All Cars
//                   <span className="icon">
//                     <span className="fas fa-plus" />
//                   </span>
//                 </Link>
//               </div>
//             </div>
//             {/* End .col-sm-6 */}
//           </div>
//           {/* End .row */}

//           <div className="col-lg-12">
//             <div
//               className="home1_popular_listing home3_style"
//               data-aos-delay="100"
//             >
//               <div className="listing_item_4grid_slider nav_none">
//                 <ReleatedCar relatedCars={relatedCars} />
//               </div>
//             </div>
//           </div>
//           {/* End .col-lg-12 */}
//         </div>
//         {/* End .container */}
//       </section> : ' '};

//       <Footer />
//       {/* End Our Footer */}

//       {/* Modal */}
//       <div
//         className="sign_up_modal modal fade"
//         id="logInModal"
//         data-backdrop="static"
//         data-keyboard="false"
//         tabIndex={-1}
//         aria-hidden="true"
//       >
//         <LoginSignupModal />
//       </div>
//       {/* End Modal */}
//     </div>
//     // End wrapper
//   );
// };

// export default BlogDynamicSingle;
