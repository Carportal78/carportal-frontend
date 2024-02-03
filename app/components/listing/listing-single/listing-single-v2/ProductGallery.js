"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ProductGallery.module.css';

const slides = [
  {
    imageSrc: "/images/listing/lsp1-v1.jpg",
    videoId: "VWrJkx6O0L8",
  },
  {
    imageSrc: "/images/listing/lsp1-v2.jpg",
    videoId: "TLEyLGWvjII",
  },
  {
    imageSrc: "/images/listing/lsp1-v3.jpg",
    videoId: "BS2jGGYC60c",
  },
  {
    imageSrc: "/images/listing/lsp1-v4.jpg",
    videoId: "8PiZNUCexrA",
  },
  {
    imageSrc: "/images/listing/lsp1-v5.jpg",
    videoId: "m4ZGuAbUMg8",
  },
];

export default function ProductGallery({ carModelDetails }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };


  function handleContactDealer() {

  }

  return (
    <>
      <Container fluid>
        <Row className="align-items-start">
          <Col xs={12} md={2} lg={2} xl={1} className="mb-4 mb-md-0">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={3} // Adjusted for mobile view
              direction="horizontal" // Default to horizontal for mobile compatibility
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="custom_thumb-gallery"
              breakpoints={{
                768: {
                  direction: "vertical",
                  slidesPerView: 5,
                },
              }}
            >
              {carModelDetails?.media?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    width={100}
                    height={75}
                    layout="responsive"
                    objectFit="cover"
                    src={slide?.url}
                    alt={slide?.altText}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>

          <Col xs={12} md={6} className="order-md-2 mb-4 mb-md-0">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="single_product_grid"
            >
              {carModelDetails?.media?.map((slide, index) => (
                <SwiperSlide key={index}>
                  {/* <div  className={styles["image-responsive-height"]}> */}
                  <Image
                    width={701}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                    priority
                    src={slide?.url}
                    alt={slide?.altText}
                  />
                  {/* </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>

          <Col xs={12} md={4} className="order-md-3">
            <div className="product-details px-md-0 d-flex justify-content-between"> {/* Added padding for mobile view */}
              <h3>{carModelDetails?.modelName}</h3>
              <a className="fz12 tdu color-blue" href="#">
                Compare
              </a>
            </div>
            <div className="d-flex align-items-center">
              <span>
                {[...Array(5)]?.map((_, i) => (
                  <i
                    key={i}
                    className={i < 5 ? "fa fa-star" : "fa fa-star-o"}
                    aria-hidden="true"
                  ></i>
                ))}
              </span>
              <Link href="/page-list-v1" className="pl10 fz12">
                41 reviews{" "}
              </Link>
            </div>
            <div className="d-flex flex-column flex-md-row mt-2">
          <h4 className="mr10">₹ {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType} - ₹ {carModelDetails?.priceRange?.maxPrice} {carModelDetails?.priceRange?.maxPriceType}</h4>
          <Link href="/onroadprice" className="tdu color-blue mt-md-0">Get On Road Price</Link>
            </div>

            <div className="mt-2 d-flex">
              <strong>Launched Year:</strong> <span className="ml5">{carModelDetails?.year}</span>
            </div>
            <div className="d-flex">
              <strong>Body Type:</strong> <span className="ml5">{carModelDetails?.bodyType?.replace('-', ' ')}</span>
            </div>
            <div className="d-flex">
              <strong>Car Brand:</strong> <span className="ml5">{carModelDetails?.carBrand?.brandName}</span>
            </div>
            {/* <p className="para">
                    *Ex-showroom Price in<a href="#" className="tdu color-blue ml10">Jaipur</a>
                  </p> */}
            <div className="offer_btns mt-5">
              <div className="text-end">
                <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20" data-bs-toggle="modal" onClick={handleContactDealer} data-bs-target="#contactDealerForm">
                  <span className="flaticon-profit-report mr10 fz18 vam" />
                  Contact Dealer
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
    </>
  );
}
