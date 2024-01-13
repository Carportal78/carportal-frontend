"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import listingCar from "@/data/listingCar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const ReleatedCar = ({ bodyType, carModelsList, relatedCars }) => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        speed={1000}
        modules={[Pagination]}
        pagination={{
          el: ".car-for-rent-pag",
          spaceBetween: 10,
          clickable: true,
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
          1068: {
            slidesPerView: 4,
          },
        }}
      >
        {relatedCars?.slice(0, 6).map((listing) => (
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
              </div>
              <div className="details">
                <div className="wrapper">
                  <h5 className="price">₹ {listing?.price} x</h5>
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
                    <li className="list-inline-item">
                      <span className="flaticon-gas-station me-2" />
                      {listing?.fuelType.join(', ')}
                    </li>
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
      <div className="mt-3 text-center">
        <div className="car-for-rent-pag" />
      </div>
    </>
  );
};

export default ReleatedCar;
