// Assuming your styles.bodyTypeImage and styles.bodyTypeTitle correspond to the image and title styles, respectively.
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../css/findCarOfChoice.module.css';

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
    <Container fluid className="my-3"> {/* Add some margin on the y-axis */}
      <Row className="g-3"> {/* Adjust gap for spacing */}
        {carBrands?.map((brand) => (
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
    </Container>
  );
}

export default AllBrandsList;
