"use client";
import listingsData from "@/data/listingCar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FeaturedFilterListing = ({ collection }) => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? listingsData.slice(0, 8)
      : listingsData.slice(0, 8).filter((item) => item.tags.includes(filter));

  return (
    <div className="popular_listing_sliders ">
      {/* Tab panes */}
      <div className="row">
        {collection?.carModels.map((listing) => (
          <div className="col-sm-6 col-xl-3" key={listing._id}>
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
                {/* <div className="thmb_cntnt2">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a className="text-white" href="#">
                        <span className="flaticon-photo-camera mr3" />{" "}
                        {listing?.}
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="details">
                <div className="wrapper">
                  <h5 className="price">Rs {listing.price} x</h5>
                  <h6 className="title">
                    <Link href="/listing-single-v2">{listing.modelName}</Link>
                  </h6>
                  <p>Launched Date: <b>{listing?.year}</b></p>
                </div>{" "}
              </div>
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
                {/* <div className="listing_footer">
                      <ul className="mb0">
                        <li className="list-inline-item">
                          <span className="flaticon-road-perspective me-2" />
                          {listing.mileage}
                        </li>
                        <li className="list-inline-item">
                          <span className="flaticon-gas-station me-2" />
                          {listing.fuelType}
                        </li>
                        <li className="list-inline-item">
                          <span className="flaticon-gear me-2" />
                          {listing.transmission}
                        </li>
                      </ul>
                    </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFilterListing;
