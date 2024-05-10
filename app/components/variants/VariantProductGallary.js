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
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select from "react-select";
import { useRouter } from "next/navigation";

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

export default function VariantProductGallery({ carModelDetails, carVariantsList, carVariant, onDealerClick, onGetOnRoadPriceCLick }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [selectedGroup, setselectedGroup] = useState(null);
  const router = useRouter();

  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  // Assuming each variant object in carVariantsList has an 'id' and 'name' property
  const optionGroup = carVariantsList?.map(variant => ({
    value: variant._id, // Use the unique identifier of the variant here
    label: variant.name, // The name of the variant to be displayed
  }));

  function handleSelectGroup(selectedGroup) { 
    const modelId = carModelDetails?._id;
    const variantId = selectedGroup.value;
    router.push(`/variantDetails/${carModelDetails?.modelName?.split(' ')?.join('-')?.toLowerCase()}/${modelId}/variant/${variantId}`);
    setselectedGroup(selectedGroup);
  }

  function handleRedirectToDealersPage() {
    onDealerClick(carModelDetails?.carBrand?._id);
  }

  function handleRedirectToGetOnroadPage() {
    onGetOnRoadPriceCLick(carModelDetails?._id);
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

          <Col xs={12} md={5} className="order-md-2 mb-4 mb-md-0">
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
              <h3 style={{ fontSize: '20px' }}>{carVariant?.name}</h3>
              {/* <a className="fz12 tdu color-blue" href="#">
                Compare
              </a> */}
              <OffCanvasExample key={1} placement={'end'} name={'Compare'} />
            </div>
            {/* <div className="d-flex align-items-center">
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
            </div> */}
            <div className=" mb-3 w-75 mt-0">
              <Select
                placeholder="Change Variant..."
                value={selectedGroup}
                onChange={handleSelectGroup}
                options={optionGroup}
                className="select2-selection"
              // styles={customStyles} 
              />
            </div>
            <div className="d-flex flex-column flex-md-row mt-2">
              <h4 className="mr10">₹ {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType}*</h4>
              <a onClick={handleRedirectToGetOnroadPage} className="tdu mt-md-0 color-black pointer">Get On Road Price</a>
            </div>
            <div><span style={{ fontSize: '12px' }}>*Ex-showroom price in</span> <span data-bs-toggle="modal" data-bs-target="#exShowroomPriceForm" style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>{carVariant?.pricingDetails?.city}</span></div>
            <div className="offer_btns mt-5">
              <div className="text-end">
                <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20" data-bs-toggle="modal" data-bs-target="#contactDealerForm">
                  <span className="flaticon-profit-report mr10 fz18 vam" />
                  Contact Dealer
                </button>
              </div>
            </div>

            <div className="d-flex align-items-center mt-3 justify-content-center gap-5">
              <div className="me-3" style={{ cursor: 'pointer' }} >
                <OffCanvasExampleCompare key={1} placement={'end'} name={'Compare'} />
              </div>
              <div className="me-3" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#variantListForm">
                <Image width={30} height={30} src="/images/modeldetails/Variants.svg" alt="Image 2" className="ml10" fluid />
                <p>Variants</p>
              </div>
              {/* <div style={{cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#shareForm">
                <Image width={30} height={30}  src="/images/modeldetails/Share.svg" alt="Image 3" fluid />
                <p>Share</p>
              </div> */}
              <div style={{ cursor: 'pointer' }} onClick={handleRedirectToDealersPage}>
                <Image width={30} height={30} className="ml10" src="/images/modeldetails/dealers.svg" alt="Dealers" fluid />
                <p>Dealers</p>
              </div>
            </div>

          </Col>
        </Row>
      </Container>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
    </>
  );
}
