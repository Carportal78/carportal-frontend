"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ReleatedCar = ({ relatedCars }) => {
  const router = useRouter();

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

    router.push(`/car/${brandName}/${modelName}`);
  }

  console.log('relatedCarsrelatedCars ', relatedCars);


  return (
    <>
      <Swiper
        spaceBetween={10}
        speed={1000}
        modules={[Pagination]}
        pagination={{
          el: ".car-for-rent-pag",
          spaceBetween: 10,
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.1, // Allows peeking of next slide for a hint to swipe
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15, // Increased space for larger screens
          },
          768: {
            slidesPerView: 2.5, // Slight peek for the next slides
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {relatedCars?.slice(0, 6)?.map((listing) => (
          <SwiperSlide key={listing._id}>
            <div className="item" onClick={() => handleCarDetailsRoute(listing)}>
              <div className="car-listing">
                <div className="thumb" style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
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
                  <Image
                    layout="fill"
                    objectFit="cover"
                    priority
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
                {/* <div className="thmb_cntnt3">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-shuffle-arrows" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-heart" />
                      </a>
                    </li>
                  </ul>
                </div> */}

                <div className="details">
                  <div className="wrapper">
                    <h5 className="price">₹ {listing?.priceRange?.minPrice} {listing?.priceRange?.minPriceType} - {listing?.priceRange?.maxPrice} {listing?.priceRange?.maxPriceType} *</h5>
                    <h6 className="title">
                      {listing.modelName}
                    </h6>
                    <div className="listign_review">
                      <ul className="mb0">
                        <p>Launched Date: {listing?.year}</p>
                      </ul>
                    </div>
                  </div>{" "}
                  <div className="listing_footer">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <span className="flaticon-road-perspective me-2" />
                        {console.log("listingdetails ", listing)}
                        {listing?.fuelType.includes('Electric')
                          ? `${listing?.range} km`
                          : `${listing?.mileage.split('_').join('-')} kmpl`
                        }
                      </li>
                      <br />
                      <li className="list-inline-item">
                        <span className="flaticon-gas-station me-2" />
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-3 text-center">
        <div className="car-for-rent-pag" />
      </div>
    </>
  );
};

export default ReleatedCar;
