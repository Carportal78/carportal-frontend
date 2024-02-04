"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Button, FormLabel } from 'react-bootstrap';
import styles from './ProductGallery.module.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select from "react-select";


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

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a variant="primary" onClick={handleShow} className="me-2" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
        {name}
      </a>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h4 className="mt10">Compare any 2 cars</h4></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvasExampleCompare({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <div onClick={handleShow}>
    <Image width={30} height={30} src="/images/modeldetails/Compare.svg" className="ml10" alt="Image 1" fluid />
     <p className="me-2" style={{ cursor: 'pointer' }}>
        {name}
      </p>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h4 className="mt10">Compare any 2 cars</h4></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const optionGroup = [
  { value: 'variant1', label: 'Variant 1' },
  { value: 'variant2', label: 'Variant 2' },
  // Add more options as needed
];

 // Custom styles for react-select
 const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'white',
    borderColor: state.isFocused ? 'blue' : 'gray',
    boxShadow: state.isFocused ? '0 0 0 1px blue' : 'none',
    '&:hover': {
      borderColor: state.isFocused ? 'blue' : 'gray',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? 'blue' : state.isFocused ? 'lightgray' : null,
  }),
  // You can add more custom styles for other parts of the select component as needed
};

export default function ProductGallery({ carModelDetails, carVariantsList }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [selectedGroup, setselectedGroup] = useState(null);

  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  return (
    <>
      <Container fluid style={{ backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', position: 'relative', marginBottom: '10px', paddingTop: '20px' }}>
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
                    style={{ borderRadius: '8px' }}
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
                    style={{ borderRadius: '16px' }}
                  />
                  {/* </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>

          <Col xs={12} md={4} className="order-md-3">
            <div className="product-details px-md-0 d-flex justify-content-between"> {/* Added padding for mobile view */}
              <h3>{carModelDetails?.modelName}</h3>
              {/* <a className="fz12 tdu color-blue" href="#">
                Compare
              </a> */}
              <OffCanvasExample key={1} placement={'end'} name={'Compare'} />
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
                  <div className=" mb-3 w-75 mt-4">
                          <Select
                            placeholder="Change Variant..."
                            value={selectedGroup}
                            onChange={() => {
                              handleSelectGroup();
                            }}
                            options={optionGroup}
                            className="select2-selection"
                            // styles={customStyles} 
                          />
                        </div>
            <div className="d-flex flex-column flex-md-row mt-2">
              <h4 className="mr10">₹ {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType}*</h4>
              <Link href={`/onroadprice/${carModelDetails?._id}`} className="tdu color-blue mt-md-0">Get On Road Price</Link>
            </div>
            <div><span style={{fontSize: '12px'}}>*Ex-showroom price in</span> <span data-bs-toggle="modal" data-bs-target="#contactDealerForm"><Link href='a' style={{color: 'blue'}}>Jaipur</Link></span></div>
            {/* <p className="para">
                    *Ex-showroom Price in<a href="#" className="tdu color-blue ml10">Jaipur</a>
                  </p> */}
            <div className="offer_btns mt-5">
              <div className="text-end">
                <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20" data-bs-toggle="modal" data-bs-target="#contactDealerForm">
                  <span className="flaticon-profit-report mr10 fz18 vam" />
                  Contact Dealer
                </button>
              </div>
            </div>

            <div className="d-flex align-items-center mt-3 justify-content-center gap-5">
              <div className="me-3" style={{cursor: 'pointer'}} >
                <OffCanvasExampleCompare key={1} placement={'end'} name={'Compare'}  />
              </div>
              <div className="me-3" style={{cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#variantListForm">
                <Image width={30} height={30} src="/images/modeldetails/Variants.svg" alt="Image 2" className="ml10" fluid />
                <p>Variants</p>
              </div>
              <div style={{cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#shareForm">
                <Image width={30} height={30}  src="/images/modeldetails/Share.svg" alt="Image 3" fluid />
                <p>Share</p>
              </div>
            </div>

          </Col>
        </Row>
      </Container>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
    </>
  );
}
