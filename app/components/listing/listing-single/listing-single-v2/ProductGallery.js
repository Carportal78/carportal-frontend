"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { selectCarBrandAtom, selectCarModelAtom, selectCarVariantAtom, selectSugestedCompareData } from "../../../atoms/categoriesAtoms";
import ImageColorCounter from "../../../..//components/pages/modelspage/imagecolorCount.js";
import "./styles.scss"
import { Button } from "react-bootstrap";

function OffCanvasExample({ carVariantsList, name, relatedCars, carModelDetails, compareCars, router, setSuggestedCompareData, ...props  }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentCarDetails = compareCars?.find(car => car?.models?.modelId === carModelDetails?._id)
  const filterCurrentCarInCompareCar = compareCars?.filter(car => car?.models?.modelId !== currentCarDetails?.models?.modelId)
  const renderCompareCarsList = filterCurrentCarInCompareCar?.length > 10 ? filterCurrentCarInCompareCar.slice(0,10) : filterCurrentCarInCompareCar;

  return (
    <>
     <div onClick={handleShow}>
     <p className="me-2" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
        {name}
      </p>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h4 className="mt10">Compare any 2 cars</h4></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {renderCompareCarsList?.map((car, index) => {
            if(currentCarDetails?.models?.modelId !== car?.models?.modelId) {
              const compareData = [currentCarDetails, car]
              return <div style={{ position: 'relative'}}>
              {renderCardCompare(compareData, index, router, setSuggestedCompareData, carVariantsList)}
              <div className="versus">vs</div>
              </div>
            }
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const handleOnCompareClick = (carsList, router, setSuggestedCompareData, carVariantsList) => {
  const extractedData = carsList?.map(item => ({
    id: item?.models?.variants?.[0]?.id || '',
    make: item?.brandName || '',
    model: item?.models?.modelName || '',
    variant: item?.models?.variants?.[0]?.name || '',
    price: item?.models?.variants?.[0]?.pricingDetails?.exShowroomPrice,
    image: item?.models?.modelImage?.[0].url,
    isEnabled: true,
    allFieldsSelected: true
  }));

  setSuggestedCompareData(extractedData);
  router.push(`/compare`);
}

const compareCard = (img, make, model, price) => {
  return (
    <>
      <img src={img} />
      <div className="car-model-compare-card-details">
        <p className="car-model-compare-card-make">{make}</p>
        <p className="car-model-compare-card-model">{model}</p>
        <p className="car-model-compare-card-price">{price}</p>
      </div>
    </>
  )
}

const formatPrice = (listing) => {
  return `₹ ${listing?.minPrice} ${listing?.minPriceType} - ₹ ${listing?.maxPrice} ${listing?.maxPriceType} *`
}

const renderCardCompare = (carsList, index, router, setSuggestedCompareData, carVariantsList) => {
    return (
    <div className="car-model-compare-card">
      <div key={index} className="card-detail">
        {carsList.map((car, index) => (
            <div key={car?.id} className='car-model-compare'>
              {compareCard(car?.models?.modelImage?.[0]?.url, car?.brandName, car?.models?.modelName, formatPrice(car?.models?.priceRange))}
            </div>
        ))}
      </div>
      <Button variant="outline-secondary" className="compare-btn" onClick={() => handleOnCompareClick(carsList, router, setSuggestedCompareData, carVariantsList)}>
        <span className="flaticon-profit-report mr10 fz18 vam" />
        Compare Cars
      </Button>
    </div>
    )
}

function OffCanvasExampleCompare({ carVariantsList, name, relatedCars, carModelDetails, compareCars, router, setSuggestedCompareData, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentCarDetails = compareCars?.find(car => car?.models?.modelId === carModelDetails?._id)
  const filterCurrentCarInCompareCar = compareCars?.filter(car => car?.models?.modelId !== currentCarDetails?.models?.modelId)
  const renderCompareCarsList = filterCurrentCarInCompareCar?.length > 10 ? filterCurrentCarInCompareCar?.slice(0,10) : filterCurrentCarInCompareCar;

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
          {renderCompareCarsList?.map((car, index) => {
            if(currentCarDetails?.models?.modelId !== car?.models?.modelId) {
              const compareData = [currentCarDetails, car]
              return <div style={{ position: 'relative'}}>
              {renderCardCompare(compareData, index, router, setSuggestedCompareData, carVariantsList)}
              <div className="versus">vs</div>
              </div>
            }
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function ProductGallery({ carModelDetails, carVariantsList, relatedCars, compareCars, onDealerClick, onGetOnRoadPriceCLick, imgCount }) {
  const optionGroup = [
    {
      label: "Picnic",
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" }
      ]
    },
    {
      label: "Camping",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" }
      ]
    }
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [selectedGroup, setselectedGroup] = useState(null);
  const [,setSelectCarBrandData] = useAtom(selectCarBrandAtom);
  const [,setSelectCarModelData] = useAtom(selectCarModelAtom);
  const [,setSelectCarVariantData] = useAtom(selectCarVariantAtom);
  const router = useRouter();
  const [, setSuggestedCompareData] = useAtom(selectSugestedCompareData);

  const openModal = (id) => { 
    setVideoId(id);
    setOpen(true);
  };

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  function handleRedirectToDealersPage() {
    onDealerClick(carModelDetails?.carBrand?._id);
  }

  function handleContactDealer() {
    setSelectCarBrandData(carModelDetails?.carBrand);
    setSelectCarModelData(carModelDetails);
    setSelectCarVariantData({});
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
                  <Image
                    width={701}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                    src={slide?.url}
                    alt={slide?.altText}
                    style={{ borderRadius: '16px' }}
                  />
                  {/* </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
            <ImageColorCounter totalImgCount= {imgCount} colorImgCount = {carModelDetails?.imagesByColor?.length || 0}  carModelDetails={carModelDetails} />
          </Col>

          <Col xs={12} md={4} className="order-md-3">
            <div className="product-details px-md-0 d-flex justify-content-between">
              <h3 style={{fontSize: '20px'}}>{carModelDetails?.modelName}</h3>
              {/* <a className="fz12 tdu color-blue" href="#">
                Compare
              </a> */}
              <OffCanvasExample key={1} placement={'end'} name={'Compare'} carVariantsList={carVariantsList} relatedCars={relatedCars} compareCars={compareCars} carModelDetails={carModelDetails} router={router} setSuggestedCompareData={setSuggestedCompareData} />
            </div>
            <div className="d-flex flex-column flex-md-row mt-0">
              <h4 className="mr10">₹ {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType} - ₹ {carModelDetails?.priceRange?.maxPrice} {carModelDetails?.priceRange?.maxPriceType}*</h4>
              <a onClick={handleRedirectToGetOnroadPage} className="tdu mt-md-0 color-black pointer">Get On Road Price</a>
            </div> 
            {/* <div><span style={{ fontSize: '12px' }}>*Ex-showroom price in</span> <span data-bs-toggle="modal" data-bs-target="#exShowroomPriceForm" style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>{carVariant?.pricingDetails?.city}</span></div> */}
            <div className="d-flex">
              <strong>Body Type:</strong> <span className="ml5">{carModelDetails?.bodyType?.replace('-', ' ')}</span>
            </div>
            <div className="d-flex">
              <strong>Fuel Type:</strong> <span className="ml5">{carModelDetails?.fuelType?.join(', ')}</span>
            </div>
            <div className="d-flex">
              <strong>Seating Capacity:</strong> <span className="ml5">{carModelDetails?.seatingCapacity?.replace('_', ' ')}</span>
            </div>
            <div className="d-flex">
              <strong>Transmission Type:</strong> <span className="ml5">{carModelDetails?.transmissionType?.join(', ')}</span>
            </div>
            <div className="offer_btns mt-5">
              <div className="text-end">
              <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20" onClick={handleContactDealer} data-bs-toggle="modal" data-bs-target="#contactDealerForm">
                  <span className="flaticon-profit-report mr10 fz18 vam" />
                  Contact Dealer
                </button>
              </div>
            </div>

            <div className="d-flex align-items-center mt-3 justify-content-center gap-5">
              <div className="me-3" style={{cursor: 'pointer'}} >
                <OffCanvasExampleCompare key={1} placement={'end'} name={'Compare'} carVariantsList={carVariantsList} relatedCars={relatedCars} compareCars={compareCars} carModelDetails={carModelDetails} router={router} setSuggestedCompareData={setSuggestedCompareData} />
              </div>
              <div className="me-3" style={{cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#variantListForm">
                <Image width={30} height={30} src="/images/modeldetails/Variants.svg" alt="Image 2" className="ml10" fluid />
                <p>Variants</p>
              </div>
              {/* <div style={{cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#shareForm">
                <Image width={30} height={30}  src="/images/modeldetails/Share.svg" alt="Image 3" fluid />
                <p>Share</p>
              </div> */}
               <div style={{cursor: 'pointer'}} onClick={handleRedirectToDealersPage}>
                <Image width={30} height={30} className="ml10"  src="/images/modeldetails/dealers.svg" alt="Dealers" fluid />
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
