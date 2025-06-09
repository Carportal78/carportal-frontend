// Assuming your styles.bodyTypeImage and styles.bodyTypeTitle correspond to the image and title styles, respectively.
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styles from '../../css/findCarOfChoice.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { useRouter } from 'next/navigation';


function AllBrandsList({ carBrands }) {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  const displayedBrands = showAll ? carBrands : carBrands.slice(0, 6);
  const webdisplayedBrands = showAll ? carBrands : carBrands.slice(0, 12);

  return (
    <>
      <Container fluid className="my-3 d-none d-md-flex">
        <Row className="g-3">

          {webdisplayedBrands?.map((brand) => (
            <Col xs={6} md={4} lg={2} className="d-flex align-items-stretch pointer" key={brand?._id} onClick={() => router.push(`cars?brand=${brand.brandName}`)}>
              <div style={{
                width: '100%',
                backgroundColor: "#fff",
                border: "1px solid #eaeaea",
                borderRadius: "8px",
                marginBottom: "30px",
                padding: "20px",
                boxShadow: "0px 2px 12px rgba(36,40,44,.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "140px"
              }}>
                <Card.Body style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "center",
                  padding: "0",
                  height: "100%",
                  width: "100%"
                }}>
                  <div style={{
                    width: "100px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "15px"
                  }}>
                    <Image
                      width={160}
                      height={80}
                      src={brand?.media?.url || '/default-image.png'}
                      alt={brand.brandName}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <span style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#333",
                    textAlign: "center",
                    lineHeight: "1.2"
                  }}>{brand.brandName}</span>
                </Card.Body>
              </div>
            </Col>
          ))}

          {carBrands?.length > 6 && (
            <Row className="mt-3">
              <Col className="text-center">
                {/* <Button variant="primary" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'Show More'}
            </Button> */}
                <div className="text-center">
                  <div className="more_listing pointer" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'View Less Brands' : 'View More Brands'}
                    {showAll ? <span className="icon">
                      <span className="fas fa-minus" />
                    </span> :
                      <span className="icon">
                        <span className="fas fa-plus" />
                      </span>}
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
      <Container fluid className="my-3 d-md-none">
        <Row className="g-3">
          {displayedBrands?.map((brand) => (
            <Col xs={4} sm={4} md={3} lg={2} xl={1} className="d-flex align-items-center justify-content-center" key={brand._id}>
              {/* Use Link for navigation, wrapping the entire card */}
              <Link href={`cars?brand=${brand.brandName}`} passHref className='d-block text-decoration-none'>
                <div className="p-2 d-flex flex-column align-items-center text-center" style={{
                  minHeight: "120px",
                  justifyContent: "center"
                }}>
                  <div style={{
                    width: "80px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px"
                  }}>
                    <Image
                      width={160}
                      height={80}
                      src={brand?.media?.url || '/default-image.png'}
                      alt={brand.brandName}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <span style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    color: "#333",
                    textAlign: "center",
                    lineHeight: "1.2"
                  }}>{brand.brandName}</span>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
        {carBrands?.length > 6 && (
          <Row className="mt-3">
            <Col className="text-center">
              {/* <Button variant="primary" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'Show More'}
            </Button> */}
              <div className="text-center">
                <div className="more_listing pointer" onClick={() => setShowAll(!showAll)}>
                  {showAll ? 'View Less Brands' : 'View More Brands'}
                  {showAll ? <span className="icon">
                    <span className="fas fa-minus" />
                  </span> :
                    <span className="icon">
                      <span className="fas fa-plus" />
                    </span>}
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default AllBrandsList;
