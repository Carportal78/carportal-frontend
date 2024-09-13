import React, { useEffect, useState } from "react";
import { Accordion, DropdownDivider, Tab, Tabs } from 'react-bootstrap';
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "react-modal-video/scss/modal-video.scss";
import Image from "next/image";

const ImagesViewDialog = ({ carModelDetails, carVariantsList, activeGalleryTab }) => {
  const [key, setKey] = useState(activeGalleryTab);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    setFilteredImages(imagesForAll());
  }, [carModelDetails]);

  function combineCarAttributes(carModelDetails){
    if(carModelDetails) {
            // Destructure the parts of carModelDetails that you are interested in
            const {
              exterior = [],
              interior = [],
              keyFeatures = [],
              imagesByColor = [],
              media = []
            } = carModelDetails;
            // Concatenate the arrays directly to form a single array of objects
            const combinedAttributes = [
                ...exterior,
                ...interior,
                ...keyFeatures,
                ...imagesByColor,
                ...media
            ].map(item => {
                // Assuming all items are structured with 'image', 'featureType', 'featureDescription', and '_id'
                return {
                    image: item.image,
                    featureType: item.featureType,
                    featureDescription: item.featureDescription,
                    _id: item._id,
                    url: item.url,
                    altText: item.altText
                };
            });

            return combinedAttributes;
    }
    else return []
  }

  const imagesForAll = () => {
    return combineCarAttributes(carModelDetails);
  }

  const getColorCodes = () => {
    return (
      <div className="gallery-imagesByColor">
      {colorsObj.map((col, index) => (
        <div key={`color-${col?.colorCode}-index`} className="gallery-colors" style={{ backgroundColor: col?.colorCode }}></div>
      ))}
      </div>
    )
  }

  function renderCarGallery(images) {

    if (!carModelDetails) return <div>Loading...</div>;  // Make sure carModelDetails is loaded

    if (!images || !images.length) {
      return <div>No images available</div>;
    }

    if (images && images?.length) {
      return (
        <div className="row">
           <div className="col-md-12 order-md-1 order-1 large-thumb-user_profile">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 sps_content single_product_grid user_profile"
            >
              {images?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div style={{ position: 'relative', width: '100%', height: '0',
    paddingTop: '56.25%', }}>
                    <Image
                      // width={100}
                      // height={100}
                      // style={{ objectFit: "cover" }}
                      // priority
                      // className="w-50 h-50"
                      src={slide?.image?.url || slide?.url }
                      alt={slide?.image?.altText || slide?.altText}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                      // priority
                    />
                  <div className="overlay-text" style={{ fontSize: '16px',fontWeight: '600', margin: '10px', color: 'white'}}>{slide?.featureType}</div>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '500', margin: '10px', textAlign: 'left', color: 'black'}}>{slide?.featureDescription}</div>
                  {/* {showColorCodes && getColorCodes()} */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div> 
        </div>
      )
    }
  }

  return (
    <div className="modal-dialog modal-dialog-centered modal-lg" style={{ overflow: 'scroll' }}>
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>

        <div className="modal-body container p20">
          <div className="col-lg-12" style={{ fontSize: '20px', fontWeight: 600, color: "rgba(36, 39, 44, .7)", textTransform: 'uppercase' }}>
            {carModelDetails?.modelName} Images
          </div>
          {carModelDetails &&
            <div className="row p10 mt10" id="myTabContent">
              <Tabs
                id="car-gallery"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="all" title="ALL">
                  {renderCarGallery(imagesForAll())}
                </Tab>
                <Tab eventKey="keyFeatures" title="KEY FEATURES">
                  {renderCarGallery(carModelDetails?.keyFeatures)}
                </Tab>
                <Tab eventKey="exterior" title="EXTERIOR">
                  {renderCarGallery(carModelDetails?.exterior)}
                </Tab>
                <Tab eventKey="interior" title="INTERIOR">
                  {renderCarGallery(carModelDetails?.interior)}
                </Tab>
                <Tab eventKey="imagesByColor" title="IMAGES BY COLOR">
                  {renderCarGallery(carModelDetails?.imagesByColor)}
                </Tab>
              </Tabs>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ImagesViewDialog;