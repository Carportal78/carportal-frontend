"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CarItems = ({ carModelsList }) => {
  const itemsPerPage = 10;
  const [visibleItems, setVisibleItems] = useState(carModelsList.length < itemsPerPage ? carModelsList.length : itemsPerPage);

  const showMoreItems = (event) => {
    event.preventDefault();
    setVisibleItems(prevVisibleItems => {
      const nextVisibleItems = prevVisibleItems + itemsPerPage;
      return nextVisibleItems > carModelsList.length ? carModelsList.length : nextVisibleItems;
    });
  };


  return (
    <>
      {carModelsList?.slice(0, visibleItems)?.map((listing) => (

        <div className="col-sm-6 col-xl-4" key={listing._id}>
          <Link href={`/model-detail/${listing?._id}`}>
            <div className="car-listing">
              <div className="thumb" style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                {listing.featured ? (
                  <>
                    <div className="tag">FEATURED</div>
                  </>
                ) : undefined}
                {!listing.featured ? (
                  <>
                    <div className="tag blue">SPECIAL</div>
                  </>
                ) : undefined}

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

              <div className="details">
                <div className="wrapper">
                  <h5 className="price">₹ {listing?.priceRange?.minPrice} {listing?.priceRange?.minPriceType} - ₹ {listing?.priceRange?.maxPrice} {listing?.priceRange?.maxPriceType} *</h5>
                  <h6 className="title">
                    <Link href={`/model-detail/${listing?._id}`}>{listing?.modelName}</Link>
                  </h6>
                  <div className="listign_review">
                    <ul className="mb0">
                      <p>Launched Date: {listing?.year}</p>
                    </ul>
                  </div>
                  <div className="listign_review">
                    <ul className="mb0">
                      {[...Array(5)].map((_, index) => (
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
                      {listing.mileage?.replace('_', '-')} Kmpl
                    </li>
                    <br />
                    <li className="list-inline-item">
                      <span className="flaticon-gas-station me-2" />
                      {listing.fuelType?.join(', ')}
                    </li>
                    <br />
                    <li className="list-inline-item">
                      <span className="flaticon-gear me-2" />
                      {listing.transmissionType?.join(', ')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>

      ))}

      {visibleItems < carModelsList.length && (
        <div className="col-lg-12">
          <div className="mbp_pagination mt20">
            <div className="new_line_pagination text-center">
              <p>Showing {visibleItems} of {carModelsList.length} Results</p>
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
