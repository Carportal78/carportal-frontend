"use client"
import Footer from "../../../../../components/common/Footer.js";
import DefaultHeader from "../../../../../components/common/DefaultHeader.js";
import HeaderSidebar from "../../../../../components/common/HeaderSidebar.js";
import HeaderTop from "../../../../../components/common/HeaderTop.js";
import MobileMenu from "../../../../../components/common/MobileMenu.js";
import ContactDealerForm from "../../../../../components/common/contactdealerForm/ContactDealerForm.js";
import ShareForm from "../../../../../components/common/contactdealerForm/ShareForm.js";
import VariantListForm from "../../../../../components/common/contactdealerForm/VariantListForm.js";
import LoginSignupModal from "../../../../../components/common/login-signup/index.js";
import BreadCrumb from "../../../../../components/listing/listing-single/BreadCrumb.js";
import ProductGallery from "../../../../../components/listing/listing-single/listing-single-v2/ProductGallery.js";
import Overview from "../../../../../components/listing/listing-single/Overview.js";
import Descriptions from "../../../../../components/listing/listing-single/Descriptions.js";
import Link from "next/link";
import ReleatedCar from "../../../../../components/listing/listing-single/ReleatedCar.js";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import VariantsList from "../../../../../components/listing/listing-single/Variants.js";
import RecentlyViewed from "../../../../../components/listing/sidebar/RecentlyViewed.js";
import BannerWidget from "../../../../../components/common/BannerWidget.js";
import { selectCarModelAtom, selectCarBrandAtom, selectCarVariantAtom } from "../../../../../components/atoms/categoriesAtoms.js";
import { useAtom } from 'jotai';
import VariantsDescription from "../../../../../components/variants/VariantsDescription.js";
import ModelsOverview from "../../../../../components/pages/modelspage/ModelsOverview.js";
import ImagesViewDialog from "../../../../../components/pages/modelspage/ImagesViewDialog.js";

const metadata = {
  title: "Car Models || Carportal - Automotive & Car Dealer",
};

const ModelDetails = () => {

  const { brand, modelName } = useParams();

  const [carModelDetails, setCarModelDetails] = useState({});

  const [relatedCars,setRelatedCars] = useState([]);

  const [carModelsList, setCarModelsList] = useState([]);
  const [carVariantsList, setCarVariantsList] = useState([]);
  const [isModelsLoading,setIsModelsLoading] = useState(false);
  const [selectCarModelData, setSelectCarModelData] = useAtom(selectCarModelAtom);
  const [selectCarBrandData, setSelectCarBrandData] = useAtom(selectCarBrandAtom);
  const [selectCarVariantData, setSelectCarVariantData] = useAtom(selectCarVariantAtom);
  const [cityCode, setCityCode] = useState(1);
  const [modelid, setModelId] = useState('');

  useEffect(() => {
    const modelDetails = JSON.parse(localStorage.getItem('model-details'));
    if(modelDetails) {
    setModelId(modelDetails?._id);
    }
  }, [brand, modelName])

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
    const apiUrl = `https://api.univolenitsolutions.com/v1/automobile/get/carmodel/${modelid}/citycode/${cityCode}/for/65538448b78add9eaa02d417`;
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
        setCarVariantsList(data.data.carVariantList);
        setSelectCarModelData(data.data.carModel);
        setSelectCarVariantData(data.data.carVariantsList);
      }
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
  },[modelid])

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
                <BreadCrumb breadCrumbDetails={`New Car / ${carModelDetails?.carBrand?.brandName} Cars / ${carModelDetails?.modelName}`} />
              </div>
            </div>
          </div>
          {/* End .row bradcrumb */}
          {/* End .row */}
          

          <div className="row">
            <div className="col-lg-8 col-xl-12"> 
              <ProductGallery carModelDetails={carModelDetails} carVariantsList={carVariantsList} relatedCars={relatedCars} />
              {/* End Car Gallery */}
              <div className="d-flex flex-wrap gap-4">
              <div className= "col-lg-8 col-xl-8" >
              <div className="listing_single_description">
                <ModelsOverview carModelDetails={carModelDetails} carVariantsList={carVariantsList} />
              </div>
              <div className="listing_single_description">
                <VariantsDescription carModelDetails={carModelDetails} carVariantsList={carVariantsList} name={carModelDetails?.modelName } />
              </div>
              <div className="listing_single_description" style={{backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(234, 234, 234)", borderRadius: "8px", position: "relative", paddingLeft: "20px", paddingTop: "20px"}}>
                {/* Key Specs of Hyundia Creta  */}
              <div className="popular_listing_sliders single_page6_tabs row pr15">
                {/* Nav tabs */}
                <div className="nav nav-tabs col-lg-12" role="tablist">
                  {/* <button
                    className="nav-link"
                    id="nav-description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-description"
                    role="tab"
                    aria-controls="nav-description"
                    aria-selected="true"
                  >
                    Description
                  </button> */}
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
                    <div className="user_profile_service bdr_none pl0 pr0">
                      <VariantsList carModelDetails={carModelDetails} variants={carVariantsList} />
                      {/* <Features /> */}
                      <hr />
                    </div>
                  </div>
             
                </div>
              </div>
       
          </div>
              </div>
              <div className="sidebar_recent_viewed_widgets">
                <h4 className="title">Top Viewed Cars</h4>
                <RecentlyViewed cars={carModelsList} /> 
                <BannerWidget />
              </div>
              </div>
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
                <Link href={`/cars?brand=${carModelDetails?.carBrand?.brandName}`} className="more_listing">
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
                <Link href={`/cars?bodyType=${carModelDetails?.bodyType}`} className="more_listing">
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

      <div
        className="sign_up_modal modal fade"
        id="imagesViewDialog" 
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <ImagesViewDialog carModelDetails={carModelDetails} carVariantsList={carVariantsList} />
      </div>
      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="contactDealerForm"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <ContactDealerForm carModelDetails={carModelDetails} carVariantsList={carVariantsList} />
      </div>

      <div
        className="sign_up_modal modal fade"
        id="shareForm"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <ShareForm carModelDetails={carModelDetails} />
      </div>
      <div
        className="sign_up_modal modal fade"
        id="variantListForm"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <VariantListForm modelName={carModelDetails?.modelName} carVariantsList={carVariantsList} />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default ModelDetails;
