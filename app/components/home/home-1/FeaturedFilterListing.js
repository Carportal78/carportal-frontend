"use client";
import listingsData from "../../../../data/listingCar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedFilterListing = ({ collection }) => {
  const [filter, setFilter] = useState("*");
  const router = useRouter();

  const filteredItems =
    filter === "*"
      ? listingsData.slice(0, 8)
      : listingsData.slice(0, 8).filter((item) => item.tags.includes(filter));

      const handleCarDetailsRoute = (listing) => {
        const formatUrlPart = (str) => {
          if (typeof str !== 'string') {
            console.error('Expected a string but got:', typeof str);
            return '';
          }
          return str.trim().replace(/\s+/g, '-').toLowerCase();
        }
        const brandName = formatUrlPart(listing?.carBrand?.brandName);
        const modelName = formatUrlPart(listing?.modelName);
        localStorage.setItem('model-details', JSON.stringify(listing));
        router.push(`car/${brandName}/${modelName}`);
      }

  return (
    <Container>
      <Row>
        {collection?.carModels?.map((listing) => (
          <Col xs={12} sm={6} md={4} lg={3} key={listing._id} onClick={() => handleCarDetailsRoute(listing)}>
            <div className="car-listing" style={{ cursor: 'pointer' }}>
              <div className="thumb">
                <>
                                <Image
                                  width={35}
                                  height={35}
                                  objectFit="cover"
                                  unoptimized
                                  src={'/images/carportallogo.png'}
                                  alt={'carportsallogo'}
                                  style={{ position: 'absolute', zIndex: 1, top: '15px', left: '15px'  }}
                                />
                                </>
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <Image
                  layout="fill" // Use fill layout to ensure the image covers the container
                  objectFit="cover" // Cover ensures the image will fill the height and width of its container, clipping it if necessary
                  priority
                  src={listing?.media?.[0]?.url ?? '/placeholder-image.png'} // Fallback image
                  alt={listing?.modelName}
                />
                </div>
              </div>
              <div className="details">
                <div className="wrapper">
                  <h5 className="price">₹ {listing?.priceRange?.minPrice} - ₹ {listing?.priceRange?.maxPrice}</h5>
                  <div className="title pointer" onClick={() => handleCarDetailsRoute(listing)}>
                                            {listing.modelName}
                                        </div>
                  <p>Launched Date: <b>{listing?.year}</b></p>
                </div>
              </div>
              <div className="listing_footer">
              <ul className="mb0">
                      <li className="list-inline-item">
                        <span className="flaticon-road-perspective me-2" />
                        {listing?.mileage.split('_').join('-')} kmpl
                      </li>
                      <br/>
                      <li className="list-inline-item">
                        <span className="flaticon-gas-station me-2" />
                        {listing?.fuelType.join(', ')}
                      </li>
                      <br/>
                      <li className="list-inline-item">
                        <span className="flaticon-gear me-2" />
                        {listing?.transmissionType.join(', ')}
                      </li>
                    </ul>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedFilterListing;
