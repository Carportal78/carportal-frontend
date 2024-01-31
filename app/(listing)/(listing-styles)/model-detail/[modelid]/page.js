"use client"
import Footer from "../../../../components/common/Footer";
import DefaultHeader from "../../../../components/common/DefaultHeader";
import HeaderSidebar from "../../../../components/common/HeaderSidebar";
import HeaderTop from "../../../../components/common/HeaderTop";
import MobileMenu from "../../../../components/common/MobileMenu";
import ContactDealerForm from "../../../../components/common/contactDealerForm";
import LoginSignupModal from "../../../../components/common/login-signup";
import BreadCrumb from "../../../../components/listing/listing-single/BreadCrumb";
import ProductGallery from "../../../../components/listing/listing-single/listing-single-v2/ProductGallery";
import Overview from "../../../../components/listing/listing-single/Overview";
import Descriptions from "../../../../components/listing/listing-single/Descriptions";
import Features from "../../../../components/listing/listing-single/Features";
import Map from "../../../../components/common/Map";
import ConsumerReviews from "../../../../components/listing/listing-single/ConsumerReviews";
import ReviewBox from "../../../../components/listing/listing-single/ReviewBox";
import ContactSeller from "../../../../components/listing/listing-single/sidebar/ContactSeller";
import SellerDetail from "../../../../components/listing/listing-single/sidebar/SellerDetail";
import Link from "next/link";
import ReleatedCar from "../../../../components/listing/listing-single/ReleatedCar";
import ShareMeta from "../../../../components/listing/listing-single/ShareMeta";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import VariantsList from "../../../../components/listing/listing-single/Variants";
import Image from "next/image";

const metadata = {
  title: "Listing Single V2 || Carportal - Automotive & Car Dealer",
};

const ModelDetails = () => {

  const { modelid } = useParams();

  const [carModelDetails, setCarModelDetails] = useState({});

  const [relatedCars,setRelatedCars] = useState([]);

  const [carModelsList, setCarModelsList] = useState([]);
  const [carVariantsList, setCarVariantsList] = useState([]);
  const [isModelsLoading,setIsModelsLoading] = useState(false);

  useEffect(() => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';  
    const relatedCars = fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/bodyType/${carModelDetails?.bodyType}/for/65538448b78add9eaa02d417`, {
    headers: {
        'x-api-key': apiKey
      }
    }).then(response => response.json());
    relatedCars.then(cars => {
      if(cars?.data?.carModelsList) {
        // const carsList = cars?.data?.carModelsList?.filter(car => car._id !== carModelsList._id);
        // console.log('carsList ', carsList);
        // setRelatedCars(carsList);
        setRelatedCars(cars?.data?.carModelsList);
      }
    });
  }, [carModelDetails]);

  useEffect(() => {
    const apiUrl = `https://api.univolenitsolutions.com/v1/automobile/get/carmodel/${modelid}/for/65538448b78add9eaa02d417`;
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.data && data.data) {
        setCarModelDetails(data.data.carModel);
        setCarVariantsList(data.data.carVariantsList);
      }
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
  },[])

    // Fetch car models based on selected brand
    useEffect(() => {
        const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
        setIsModelsLoading(true);
        // Replace this URL with the appropriate one for fetching models
        fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${carModelDetails?.carBrand?._id}/for/65538448b78add9eaa02d417`, {
          method: 'GET',
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
            // Include any necessary headers
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data && data.data && data.data.carModelsList) {
            setCarModelsList(data.data.carModelsList);
          }
        })
        .catch(error => {
          console.error('Error fetching car models: ', error);
        })
        .finally(() => setIsModelsLoading(false));
    
    }, [carModelDetails]);

    function capitalizeFirstLetter(string) {
      if (!string) return string;
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
    <div className="wrapper">
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Agent Single Grid View */}
      <section className="our-agent-single bgc-f9 pb90 mt70-992 pt30">
        <div className="container">
          <div className="row mb30">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <BreadCrumb />
              </div>
            </div>
          </div>
          {/* End .row bradcrumb */}
          {/* End .row */}
          

          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <ProductGallery carModelDetails={carModelDetails} />
              {/* End Car Gallery */}

              <div className="listing_single_description mt30">
              <div className="row">
                {/* Key Specs of Hyundia Creta  */}
                
              <div className="popular_listing_sliders single_page6_tabs row pr15">
                {/* Nav tabs */}
                <div className="nav nav-tabs col-lg-12" role="tablist">
                  <button
                    className="nav-link"
                    id="nav-description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-description"
                    role="tab"
                    aria-controls="nav-description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                  <button
                    className="nav-link active"
                    id="nav-overview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-overview"
                    role="tab"
                    aria-controls="nav-overview"
                    aria-selected="false"
                  >
                    Overview
                  </button>
                  <button
                    className="nav-link"
                    id="nav-variants-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-variants"
                    role="tab"
                    aria-controls="nav-variants"
                    aria-selected="false"
                  >
                    Variants
                  </button>
                  {/* <button
                    className="nav-link"
                    id="nav-review-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-review"
                    role="tab"
                    aria-controls="nav-review"
                    aria-selected="false"
                  >
                    Reviews
                  </button> */}
                </div>
                {/* Tab panes */}
                <div className="tab-content col-lg-12" id="nav-tabContent">
                  <div
                    className="tab-pane fade"
                    id="nav-description"
                    role="tabpanel"
                    aria-labelledby="nav-description-tab"
                  >
                    <div className="listing_single_description bdr_none pl0 pr0">
                      <h4 className="mb30">
                        Description{" "}
                        <span className="float-end body-color fz13">
                          ID #{carModelDetails?._id}
                        </span>
                      </h4>
                      <Descriptions carModelDetails={carModelDetails} />
                    </div>
                    {/* End car descriptions */}
                  </div>
                  {/* End description tabcontent */}

                  <div
                    className="tab-pane fade show active"
                    id="nav-overview"
                    role="tabpanel"
                    aria-labelledby="nav-overview-tab"
                  >
                    <div className="opening_hour_widgets p30 bdr_none pl0 pr0">
                      <div className="wrapper">
                        <h4 className="title">Overview</h4>
                        <Overview carModelDetails={carModelDetails} />
                      </div>
                    </div>
                    {/* End opening_hour_widgets */}
                  </div>
                  {/* End overview tabcontent */}

                  <div
                    className="tab-pane fade"
                    id="nav-variants"
                    role="tabpanel"
                    aria-labelledby="nav-variants-tab"
                  >
                    <div className="user_profile_service  bdr_none pl0 pr0">
                      <VariantsList carModelDetails={carModelDetails} variants={carVariantsList} />
                      {/* <Features /> */}
                      <hr />
                      <div className="row">
                        <div className="col-lg-12">
                          <a className="fz12 tdu color-blue" href="#">
                            View all variants
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End user profile service */}
                  </div>
                  {/* End user profile service tabcontent */}
             
                </div>
              </div>
              {/* End tabs content */}
       
          </div>
              </div>
              {/* End car descriptions */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-lg-4 col-xl-4">
              <div className="col">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>{carModelDetails?.modelName}</h3>
                  <a className="fz12 tdu color-blue" href="#">
                            Compare
                    </a>
                </div>
                <div className="d-flex align-items-center">
                  <span>
                    {[...Array(5)].map((_, i) => (
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
                <div className="d-flex mt-2">
                  <h4>₹ {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType} - ₹ {carModelDetails?.priceRange?.maxPrice} {carModelDetails?.priceRange?.maxPriceType}</h4>*
                  <Link href="/onroadprice" className="tdu color-blue ml10">Get On Road Price</Link>
                </div>
                <div className="mt-2 d-flex">
                  <strong>Launched Year:</strong> <span className="ml5">{carModelDetails?.year}</span>
                </div>
                <div className="d-flex">
                  <strong>Body Type:</strong> <span className="ml5">{carModelDetails?.bodyType?.replace('-',' ')}</span>
                </div>
                <div className="d-flex">
                  <strong>Car Brand:</strong> <span className="ml5">{carModelDetails?.carBrand?.brandName}</span>
                </div>
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
              </div>
              {/* End offer_btn
               */}
         

              {/* End .col-xl-4 */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Agent Single Grid View */}

      {carModelsList?.length>0 ? <section className="car-for-rent bb1 pb-2" >
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-md-start mb10-520">
                <h2 className="title">More from {capitalizeFirstLetter(carModelDetails?.carBrand?.brandName)}</h2>
              </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <div className="text-center text-md-end mb30-520">
                <Link href="/page-list-v1" className="more_listing">
                  Show All Crs
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home3_style"
              data-aos-delay="100"
            >
              <div className="listing_item_4grid_slider nav_none">
                <ReleatedCar bodyType={carModelDetails?.bodyType} carModelDetails={carModelDetails} relatedCars={carModelsList} />
              </div>
            </div>
          </div>
          {/* End .col-lg-12 */}
        </div>
        {/* End .container */}
      </section> : ' '};

      {/* Car For Rent */}
      {relatedCars?.length>0 ? <section className="car-for-rent bb1 pt-2" >
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-md-start mb10-520">
                <h2 className="title">Cars You May Like</h2>
              </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <div className="text-center text-md-end mb30-520">
                <Link href="/page-list-v1" className="more_listing">
                  Show All Cars
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home3_style"
              data-aos-delay="100"
            >
              <div className="listing_item_4grid_slider nav_none">
                <ReleatedCar bodyType={carModelDetails?.bodyType} carModelDetails={carModelDetails} relatedCars={relatedCars} />
              </div>
            </div>
          </div>
          {/* End .col-lg-12 */}
        </div>
        {/* End .container */}
      </section> : ' '};
      {/* End Car For Rent */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}


      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="contactDealerForm"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <ContactDealerForm carModelDetails={carModelDetails} />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default ModelDetails;
