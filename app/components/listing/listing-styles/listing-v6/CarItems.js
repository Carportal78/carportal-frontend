import listingCar from "@/data/listingCar";
import Image from "next/image";
import Link from "next/link";

const CarItems = ({ carModelsList }) => {
  return (
    <>
      {carModelsList.slice(0, 9).map((listing) => (
        
        <div className="col-sm-6 col-xl-4" key={listing._id}>
          <Link href={`/listing-single-v2/${listing._id}`}>
          <div className="car-listing">
            <div className="thumb">
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
                width={284}
                height={183}
                style={{
                  objectFit: "cover",
                }}
                priority
                src={listing?.media?.url}
                alt={listing?.media.altText}
              />
              <div className="thmb_cntnt2">
                <ul className="mb0">
                  <li className="list-inline-item">
                    <a className="text-white" href="#">
                      <span className="flaticon-photo-camera mr3" />{" "}
                      {listing?.description}
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
              <div className="thmb_cntnt3">
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
              </div>
            </div>

            <div className="details">
              <div className="wrapper">
                <h5 className="price">₹ {listing?.price ?? 100}</h5>
                <h6 className="title">
                  <Link href="/listing-single-v2">{listing?.modelName}</Link>
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
              </div>
            </div>
          </div>
          </Link>
        </div>
        
      ))}

      <div className="col-lg-12">
        <div className="mbp_pagination mt20">
          <div className="new_line_pagination text-center">
            <p>Showing 36 of 497 Results</p>
            <div className="pagination_line" />
            <a className="pagi_btn" href="#">
              Show More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarItems;
