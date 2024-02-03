"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../css/findCarOfChoice.module.css';
import { Container, Row, Col } from 'react-bootstrap';

function AllBrandsList() {
  const [carBrands, setCarBrands] = useState([]);

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
    <Container fluid>
      <Row className="g-3"> {/* Adjust gap for spacing */}
        {carBrands?.map((brand) => (
          <Col xs={5} sm={4} md={3} lg={2} xl={1} key={brand._id} className="d-flex align-items-center justify-content-center">
            <Link href={`listings?brand=${brand.brandName}`} passHref>
              <div className="d-flex flex-column align-items-center text-center">
                <Image
                  width={150}
                  height={58}
                  src={brand.media.url || '/default-image.png'} // Fallback image if URL is missing
                  alt={brand.brandName}
                  className={styles.bodyTypeImage}
                  style={{ objectFit: 'cover' }}
                />
                <span className={styles.bodyTypeTitle}>{brand.brandName}</span>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllBrandsList;
