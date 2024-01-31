"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import listingCar from "../../../../data/listingCar";
import Image from "next/image";
import Link from "next/link";

const PopularListings = ({  collection }) => {
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
            slidesPerView: 1,
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
          <SwiperSlide key={listing._id}>
            <div className="item">
              <div className="car-listing">
                <div className="thumb">
                  <Image
                    width={284}
                    height={183}
                    style={{
                      objectFit: "cover",
                    }}
                    priority
                    src={listing?.media?.[0]?.url ?? listing?.media?.url}
                    alt={listing?.modelName}
                  />
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
                </div>
                <div className="details">
                  <div className="wrapper">
                    <h5 className="price">₹ {listing?.priceRange?.minPrice} {listing?.priceRange?.minPriceType} - ₹ {listing?.priceRange?.maxPrice} {listing?.priceRange?.maxPriceType} *</h5>
                    <h6 className="title">
                      <Link href="/listing-single-v2">{listing.modelName}</Link>
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
