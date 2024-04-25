"use client";
import React, { useRef, useState } from "react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import Overview from "../../listing/listing-single/Overview";
import { Table } from "react-bootstrap";
import Link from "next/link";

export default function OnRoadPriceDescription({ carModelDetails, carVariantsList }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); 
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="nav-overview"
        role="tabpanel"
        aria-labelledby="nav-overview-tab"
      >
        <div className="opening_hour_widgets p30 bdr_none pl0 pr0">
          <div className="wrapper">
            <h3>On Road Price of {carModelDetails?.modelName} in Jaipur</h3>
            <p>
              {carModelDetails?.modelName} price in New Delhi start at ₹ {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType}. The
              lowest price model is {carVariantsList?.[0]?.basicInformation?.onRoadPrice} and the most priced
              model of {carModelDetails?.modelName} priced at ₹ {carModelDetails?.priceRange?.maxPrice} {carModelDetails?.priceRange?.maxPriceType}.
              Visit your nearest {carModelDetails?.modelName} showroom
              in New Delhi for best offers. View all{carModelDetails?.modelName} cars price
              in your city.
            </p>
          </div>
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Variants</th>
          <th>On-Road Price</th>
        </tr>
      </thead>
      <tbody>
      {carVariantsList?.map((variant, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <Link className="tdu color-blue ml10" href={`/${variant?.name}/${variant?._id}`}>
                {`${variant?.name} ${variant.carModel?.modelName}`}
              </Link>
            </td>
            <td>₹ {`${Number(variant?.basicInformation?.onRoadPrice).toLocaleString('en-IN')}`}</td>
          </tr>
        ))}
      </tbody>
        </Table>
    </div>
        {/* End opening_hour_widgets */}
      </div>
    </>
  );
}
