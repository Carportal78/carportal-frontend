"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Battery, Fuel } from 'lucide-react';

const CarItems = ({ carModelsList }) => {
  const router = useRouter();
  const itemsPerPage = 10;
  const [visibleItems, setVisibleItems] = useState(carModelsList?.length < itemsPerPage ? carModelsList?.length : itemsPerPage);

  const showMoreItems = (event) => {
    event.preventDefault();
    setVisibleItems(prevVisibleItems => {
      const nextVisibleItems = prevVisibleItems + itemsPerPage;
      return nextVisibleItems > carModelsList?.length ? carModelsList?.length : nextVisibleItems;
    });
  };

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
    <>
      {carModelsList?.slice(0, visibleItems)?.map((listing) => (
        <div className="col-sm-6 col-xl-4 pointer" key={listing._id} onClick={() => handleCarDetailsRoute(listing)}>
            <div className="car-listing">
              <div className="thumb" style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                {/* {listing.featured ? (
                  <>
                    <div className="tag">FEATURED</div>
                  </>
                ) : undefined}
                {!listing.featured ? (
                  <>
                    <div className="tag blue">SPECIAL</div>
                  </>
                ) : undefined} */}
                <>
                <Image
                  width={50}
                  height={50}
                  objectFit="contain"
                  src={'/images/carportallogo.png'}
                  alt={'carportsallogo'}
                  style={{ position: 'absolute', zIndex: 1, top: '15px', left: '15px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '5px', borderRadius: '5px' }}
                />
                </>

                <Image
                  layout="fill"
                  objectFit="cover"
                  src={listing?.media?.[0]?.url ?? '/placeholder-image.png'}
                  alt={listing?.modelName}
                />
              </div>
              <div className="thmb_cntnt2">
                <ul className="mb0">
                  <li className="list-inline-item">
                    <a className="text-white" href="#">
                      <span className="flaticon-photo-camera mr3" />{" "}
                      {listing?.media?.length}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-white" href="#">
                      <span className="flaticon-play-button mr3" />{" "}
                      {listing?.year}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="details">
                <div className="wrapper">
                  <h5 className="price">₹ {listing?.priceRange?.minPrice} {listing?.priceRange?.minPriceType} - ₹ {listing?.priceRange?.maxPrice} {listing?.priceRange?.maxPriceType} *</h5>
                  <div className="title pointer" onClick={() => handleCarDetailsRoute(listing)}>
                                            {listing.modelName}
                                        </div>
                  <div className="listign_review">
                    <ul className="mb0">
                      <p>Launched Date: {listing?.year}</p>
                    </ul>
                  </div>
                  <div className="listign_review">
                    <ul className="mb0">
                      {[...Array(5)]?.map((_, index) => (
                        <li key={index} className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                      ))}
                      <li className="list-inline-item">
                        <a href="#">{listing?.rating ?? 5}</a>
                      </li>
                      <li className="list-inline-item">
                        ({listing?.reviewsCount ?? 10} reviews)
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End wrapper */}

                <div className="listing_footer">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <span className="flaticon-road-perspective me-2" />
                        {listing?.fuelType.includes('Electric')
                          ? `${listing?.range} km`
                          : `${listing?.mileage.split('_').join('-')} kmpl`
                        }
                      </li>
                      <br />
                      <li className="list-inline-item">
                      {listing?.fuelType.includes('Electric') ? <Battery className="inline-block me-2" size={16} /> : <span className="flaticon-gas-station me-2" /> }
                        {listing?.fuelType.includes('Electric')
                          ? `${listing?.batteryCapacity} kWh`
                          : listing?.fuelType.join(', ')
                        }
                      </li>
                      <br />
                      <li className="list-inline-item">
                        <span className="flaticon-gear me-2" />
                        {listing?.fuelType.includes('Electric')
                          ? `${listing?.power} bhp`
                          : listing?.transmissionType.join(', ')
                        }
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
 
        </div>

      ))}

      {visibleItems < carModelsList?.length && (
        <div className="col-lg-12">
          <div className="mbp_pagination mt20">
            <div className="new_line_pagination text-center">
              <p>Showing {visibleItems} of {carModelsList?.length} Results</p>
              <div className="pagination_line" />
              <a className="pagi_btn" href="#" onClick={showMoreItems}>
                Show More
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarItems;
