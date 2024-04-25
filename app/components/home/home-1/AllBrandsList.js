// Assuming your styles.bodyTypeImage and styles.bodyTypeTitle correspond to the image and title styles, respectively.
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styles from '../../css/findCarOfChoice.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

function AllBrandsList() {
  const [carBrands, setCarBrands] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const displayedBrands = showAll ? carBrands : carBrands.slice(0, 6);
  const webdisplayedBrands = showAll ? carBrands : carBrands.slice(0, 12);

  useEffect(() => {
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/65538448b78add9eaa02d417';
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
          setCarBrands(data.data.carBrandsList);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
    <Container fluid className="my-3 d-none d-md-flex">
      <Row className="g-3">

        {webdisplayedBrands?.map((brand) => (
            <Col xs={6} md={4} lg={2} className="d-flex align-items-stretch pointer" key={brand?._id} onClick={() => router.push(`/dealers/${brand?._id}`)}>
              <div style={{
                width: '100%',
                backgroundColor: "#fff",
                border: "1px solid #eaeaea",
                borderRadius: "8px", 
                marginBottom: "30px",
                padding: "30px",
                boxShadow: "0px 2px 12px rgba(36,40,44,.08)"
              }}>
                <Card.Body>
                  <Image
                    width={120}
                    height={58}
                    src={brand.media.url || '/default-image.png'}
                    alt={brand.brandName}
                    className="d-flex"
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    layout='responsive'
                  />
                  <span className="d-flex justify-content-center font-600">{brand.brandName}</span>
                </Card.Body>
              </div>
            </Col>
        ))}
        {carBrands.length > 6 && (
        <Row className="mt-3">
          <Col className="text-center">
            {/* <Button variant="primary" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'Show More'}
            </Button> */}
            <div className="text-center">
              <div className="more_listing" onClick={() => setShowAll(!showAll)}>
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
            <Link href={`listings?brand=${brand.brandName}`} passHref className='d-block text-decoration-none'>
              <div className="p-3 p-md-0 d-flex flex-column align-items-center text-center"> {/* Add padding */}
                <Image
                  width={150} // You may need to adjust this depending on your layout
                  height={58} // You may need to adjust this depending on your layout
                  src={brand.media.url || '/default-image.png'} // Fallback image if URL is missing
                  alt={brand.brandName}
                  className={styles.bodyTypeImage}
                  layout='responsive'
                />
                <span className={styles.bodyTypeTitle}>{brand.brandName}</span>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      {carBrands.length > 6 && (
        <Row className="mt-3">
          <Col className="text-center">
            {/* <Button variant="primary" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'Show More'}
            </Button> */}
            <div className="text-center">
              <div className="more_listing" onClick={() => setShowAll(!showAll)}>
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
