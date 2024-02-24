// Assuming your styles.bodyTypeImage and styles.bodyTypeTitle correspond to the image and title styles, respectively.
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../../css/findCarOfChoice.module.css';

function AllBrandsList() {
  const [carBrands, setCarBrands] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const displayedBrands = showAll ? carBrands : carBrands.slice(0, 6);

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
    <Container fluid className="my-3">
      <Row className="g-3">
        {carBrands?.map((brand) => (
          <Col xs={4} sm={4} md={3} lg={2} xl={1} className="d-flex align-items-center justify-content-center" key={brand._id}>
            <Link href={`listings?brand=${brand.brandName}`} passHref className='d-block text-decoration-none'>
              <div className="p-3 p-md-0 d-flex flex-column align-items-center text-center">
                <Image
                  width={150}
                  height={58}
                  src={brand.media.url || '/default-image.png'}
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
                {showAll ? 'View More Brands' : 'View Less Brands'}
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
