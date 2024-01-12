"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination]);

const items = [
  {
    image: "/images/listing/16.jpg",
    price: "$129",
    title: "Mercedes-Benz S 560 - 2021",
  },
  {
    image: "/images/listing/16.jpg",
    price: "$129",
    title: "Mercedes-Benz S 560 - 2021",
  },
  {
    image: "/images/listing/16.jpg",
    price: "$129",
    title: "Mercedes-Benz S 560 - 2021",
  },
];

const FeatureListingSlider = (props) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        el: ".featured-pag",
        spaceBetween: 10,
        clickable: true,
      }}
    >
      {props.carCollection?.carModels?.map((item, index) => (
        <SwiperSlide key={item?._id}>
          <div className="item">
            <div className="car-listing sidebar_style">
              <div className="thumb">
                <Image
                  width={242}
                  height={172}
                  src={item?.media?.[0]?.url ?? item?.media?.url}
                  alt={item?.media?.[0]?.altText}
                />
              </div>
              <div className="details">
                <div className="wrapper">
                  <h5 className="price">{item.price}</h5>
                  <h6 className="title">
                    <Link href="/listing-single-v2">{item.title}</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className=" text-center">
        <div className="featured-pag" />
      </div>
    </Swiper>
  );
};

export default FeatureListingSlider;
