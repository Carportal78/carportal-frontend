"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import listingCar from "../../../../data/listingCar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

const PopularListings = ({  collection }) => {

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
    router.push(`car/${brandName}/${modelName}`);
  }

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        speed={1000}
        modules={[Navigation]}
        navigation={{
          nextEl: ".p1-arrow-next",
          prevEl: ".p1-arrow-prev",
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1.1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {collection?.carModels?.map((listing) => (
          <SwiperSlide key={listing._id} onClick={() => handleCarDetailsRoute(listing)}>
            <div className="item pointer">
              <div className="car-listing">
                <div className="thumb" style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>\
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
                          {listing.year}
                        </a>
                      </li>
                    </ul>
                  </div>               
                <div className="details">
                  <div className="wrapper">
                  <div className="title pointer" onClick={() => handleCarDetailsRoute(listing)}>
                                            {listing.modelName}
                                        </div>
                    <div className="price">₹ {listing?.priceRange?.minPrice} {listing?.priceRange?.minPriceType} - ₹ {listing?.priceRange?.maxPrice} {listing?.priceRange?.maxPriceType} *</div>
                    <Button variant="outline-secondary" size="md" className={`w-100 mt-3`}>
                      VIew Details
                    </Button>
                    {/* <div className="listign_review">
                      <ul className="mb0">
                      <p>Launched Date: {listing?.year}</p>
                      </ul>
                    </div> */}
                  </div>{" "}
                  {/* <div className="listing_footer">
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
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-none d-sm-block">
        <div className="slider-arrow-center">
          <button className="prev p1-arrow-prev">
            <i className="flaticon-left-arrow"></i>
          </button>
          <button className="next p1-arrow-next">
            <i className="flaticon-right-arrow"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularListings;
