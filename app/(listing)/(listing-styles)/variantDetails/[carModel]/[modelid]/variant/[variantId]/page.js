"use client"
import Footer from "../../../../../../../components/common/Footer";
import DefaultHeader from "../../../../../../../components/common/DefaultHeader";
import HeaderSidebar from "../../../../../../../components/common/HeaderSidebar";
import HeaderTop from "../../../../../../../components/common/HeaderTop";
import MobileMenu from "../../../../../../../components/common/MobileMenu";
import ContactDealerForm from "../../../../../../../components/common/contactdealerForm/ContactDealerForm";
import ShareForm from "../../../../../../../components/common/contactdealerForm/ShareForm";
import ExShowroomPriceForm from "../../../../../../../components/common/contactdealerForm/ExShowroomPriceForm";
import VariantListForm from "../../../../../../../components/common/contactdealerForm/VariantListForm";
import LoginSignupModal from "../../../../../../../components/common/login-signup";
import Overview from "../../../../../../../components/listing/listing-single/Overview";
import Descriptions from "../../../../../../../components/listing/listing-single/Descriptions";
import Link from "next/link";
import ReleatedCar from "../../../../../../../components/listing/listing-single/ReleatedCar";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import VariantsList from "../../../../../../../components/listing/listing-single/Variants";
import RecentlyViewed from "../../../../../../../components/listing/sidebar/RecentlyViewed";
import BannerWidget from "../../../../../../../components/common/BannerWidget";
import { selectCarModelAtom, selectCarBrandAtom, selectCarVariantAtom, selectCityAtom, selectBrandAtom, selectOnRoadPriceModelAtom } from "../../../../../../../components/atoms/categoriesAtoms";
import { useAtom } from 'jotai';
import VariantsOverview from "../../../../../../../components/variants/VariantsOverview";
import VariantsDescription from "../../../../../../../components/variants/VariantsDescription";
import VariantPrice from "../../../../../../../components/variants/VariantPrice";
import VerticalTab from "../../../../../../../components/variants/varianttab/VerticalTab";
import VariantProductGallary from "../../../../../../../components/variants/VariantProductGallary";
import BreadCrumb from "../../../../../../../components/listing/listing-single/BreadCrumb";
import statesCitiesList from '../../../../../../../../public/jsondata/state-and-city.json';
import ImagesViewDialog from "../../../../../../../components/pages/modelspage/ImagesViewDialog";

const metadata = {
  title: "Car Models || Carportal - Automotive & Car Dealer",
};

const ModelDetails = () => {

  const { arModel, modelid, variantId } = useParams();

  const [carModelDetails, setCarModelDetails] = useState({});

  const [relatedCars, setRelatedCars] = useState([]);
  const [totalImgCount, setTotalImgCount] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState('all')
  const [carModelsList, setCarModelsList] = useState([]);
  const [carVariantsList, setCarVariantsList] = useState([]);
  const [carVariant, setCarVariant] = useState({});
  const [isModelsLoading, setIsModelsLoading] = useState(false);
  const [selectCarModelData, setSelectCarModelData] = useAtom(selectCarModelAtom);
  const [selectCarBrandData, setSelectCarBrandData] = useAtom(selectCarBrandAtom);
  const [selectCarVariantData, setSelectCarVariantData] = useAtom(selectCarVariantAtom);
  const [, setCityData] = useAtom(selectCityAtom);
  const [cityCode, setCityCode] = useState(1);
  const [, setBrandData] = useAtom(selectBrandAtom);
  const [, setOnRoadPriceModelAtom] = useAtom(selectOnRoadPriceModelAtom);
  const router = useRouter();
  const [cityOptions, setCityOptions] = useState([]);
  const [compareCars, setCompareCars] = useState([]);

  // Load cityCode from localStorage on component mount
  useEffect(() => {
    const savedCityCode = localStorage.getItem('selectedCityCode');
    if (savedCityCode) {
      console.log('Loading saved cityCode from localStorage:', savedCityCode);
      setCityCode(parseInt(savedCityCode));
      setCityData(parseInt(savedCityCode));
    }
  }, []);

  // Helper function to get state from cityCode
  const getStateFromCityCode = (cityCode) => {
    console.log('Looking for cityCode:', cityCode);
    for (const state in statesCitiesList) {
      const city = statesCitiesList[state].find(city => city.id.toString() === cityCode.toString());
      if (city) {
        console.log('Found state:', state, 'for city:', city.city);
        return state;
      }
    }
    console.log('No state found for cityCode:', cityCode);
    return null;
  };

  const getImgCount = (data) => {
    const {
      exterior = [],
      interior = [],
      keyFeatures = [],
      imagesByColor = [],
      media = []
  } = data;

    const totalCount = exterior.length + interior.length + keyFeatures.length + imagesByColor.length + media.length;
    setTotalImgCount(totalCount);
  }

  const handleCityCodeChange = (data) => {
    console.log('City change triggered with:', data);
    setCityCode(data.value);
    setCityData(data.value);
    // Save to localStorage for persistence
    localStorage.setItem('selectedCityCode', data.value.toString());
    console.log('Updated cityCode to:', data.value, 'and saved to localStorage');
  }

  useEffect(() => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    if (carModelDetails?.bodyType) {
      const relatedCars = fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/budget/${carModelDetails?.budget}/bodyType/${carModelDetails?.bodyType}/for/66cac994eeca9633c29171e2`, {
        headers: {
          'x-api-key': apiKey
        }
      }).then(response => response.json());
      relatedCars.then(cars => {
        if (cars?.data) {
          setCompareCars(cars?.data);
        }
      });
    }
  }, [carModelDetails]); 

  useEffect(() => {
    // alert('modelId ', modelid);

    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    const relatedCars = fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/bodyType/${carModelDetails?.bodyType}/for/66cac994eeca9633c29171e2`, {
      headers: {
        'x-api-key': apiKey
      }
    }).then(response => response.json());
    relatedCars.then(cars => {
      if (cars?.data?.carModelsList) {
        // const carsList = cars?.data?.carModelsList?.filter(car => car._id !== carModelsList._id);
        // console.log('carsList ', carsList);
        // setRelatedCars(carsList);
        setRelatedCars(cars?.data?.carModelsList);
      }
    });
  }, [carModelDetails]);

  useEffect(() => {
    if (!modelid) {
      console.log('No modelid, skipping API call');
      return;
    }
    
    console.log('useEffect triggered with:', { cityCode, modelid, variantId });
    const state = getStateFromCityCode(cityCode);
    console.log('State resolved to:', state);
    const apiUrl = `https://api.univolenitsolutions.com/v1/automobile/get/carmodel/${modelid}/for/66cac994eeca9633c29171e2${state ? `?state=${encodeURIComponent(state)}` : ''}`;
    console.log('API URL:', apiUrl);
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
        console.log('API Response:', data);
        if (data && data.data && data.data) {
          setCarModelDetails(data.data.carModel);
          getImgCount(data?.data?.carModel)
          setCarVariantsList(data.data.carVariantList);
          setSelectCarModelData(data.data.carModel);
          setSelectCarVariantData(data.data.carVariantsList);
          if (variantId) {
            const variant = data.data.carVariantList?.find(variant => variant._id === variantId);
            setCarVariant(variant);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [cityCode, modelid, variantId])

  useEffect(() => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    setIsModelsLoading(true);
    // Replace this URL with the appropriate one for fetching models
    fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${carModelDetails?.carBrand?._id}/for/66cac994eeca9633c29171e2`, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
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

  useEffect(() => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    setIsModelsLoading(true);
    // Replace this URL with the appropriate one for fetching models
    fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${carModelDetails?.carBrand?._id}/for/66cac994eeca9633c29171e2`, {
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

  }, [variantId])

  // Populate city options
  useEffect(() => {
    const loadedCityOptions = Object.keys(statesCitiesList)?.flatMap(state => (
      statesCitiesList[state].map(city => ({
        value: city.id.toString(),
        label: city.city
      }))
    ));
    setCityOptions(loadedCityOptions);
  }, []);

  function capitalizeFirstLetter(string) { 
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleDealerCLick = (brandId) => {
    setCityData(cityCode);
    setBrandData(carModelDetails?.carBrand?.brandId);
    localStorage.setItem('dealer-type', JSON.stringify({ brand: brandId, city: cityCode }))
    const matchingCity = cityOptions?.find(option => option.value == cityCode);
    router.push(`/dealers/list/${carModelDetails?.carBrand?.brandName}/${matchingCity?.label}`);
  }

  const handleGetOnRoadPriceCLick = (brandId) => {
    setCityData(cityCode);
    setBrandData(carModelDetails?.carBrand?.brandId);
    setOnRoadPriceModelAtom(carModelDetails?._id);
    localStorage.setItem('onroadPriceFor', JSON.stringify({ brand: brandId, model: carModelDetails?._id, city: cityCode }));
    const matchingCity = cityOptions?.find(option => option.value == cityCode);
    router.push(`/onroadprice/${carModelDetails?.modelName?.split(' ').join('-')}/${matchingCity?.label}`);
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
      {/* <HeaderTop /> */}
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
                <BreadCrumb breadCrumbDetails={`New Car / ${carModelDetails?.carBrand?.brandName} Car / ${carVariant?.name}`} />
              </div>
            </div>
          </div>
          {/* End .row bradcrumb */}
          {/* End .row */}

          <div className="row">
            {/* First row: Full-width gallery */}
            <div className="col-12">
              <VariantProductGallary carModelDetails={carModelDetails} carVariantsList={carVariantsList} compareCars={compareCars} carVariant={carVariant} onDealerClick={handleDealerCLick} onGetOnRoadPriceCLick={handleGetOnRoadPriceCLick} imgCount={totalImgCount} cityCode={cityCode} cityOptions={cityOptions} />
            </div>
          </div>
          {/* Second row: Left = specs/price/desc/tabs, Right = Top Viewed Cars */}
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="listing_single_description">
                <VariantsOverview carModelDetails={carModelDetails} carVariantsList={carVariantsList} carVariant={carVariant} />
              </div>
              <div className="listing_single_description">
                <VariantPrice carModelDetails={carModelDetails} carVariantsList={carVariantsList} carVariant={carVariant} cityCode={cityCode} cityOptions={cityOptions} />
              </div>
              <div className="listing_single_description">
                <VariantsDescription carModelDetails={carModelDetails} carVariantsList={carVariantsList} name={carVariant?.name} />
              </div>
              <div style={{
                backgroundColor: '#fff',
                border: "1px solid #eaeaea",
                borderRadius: "8px",
                position: "relative",
                paddingLeft: "20px",
                paddingTop: "20px"
              }}>
                <div className="popular_listing_sliders single_page6_tabs row pr15">
                  {/* Nav tabs */}
                  <div className="nav nav-tabs col-12" role="tablist">
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
                      id="nav-features-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-features"
                      role="tab"
                      aria-controls="nav-features"
                      aria-selected="false"
                    >
                      Features
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
                  <div className="tab-content col-12" id="nav-tabContent">
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
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-features"
                      role="tabpanel"
                      aria-labelledby="nav-features-tab"
                    >
                      <div className="opening_hour_widgets p30 bdr_none pl0 pr0">
                        <div className="wrapper">
                          <h4 className="title">{carVariant?.name} {carVariant?.basicInformation?.fuelType} Specifications & Features</h4>
                          <VerticalTab carModelDetails={carModelDetails} carVariant={carVariant} />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-variants"
                      role="tabpanel"
                      aria-labelledby="nav-variants-tab"
                    >
                      <div className="user_profile_service bdr_none pl0 pr0">
                        <VariantsList carModelDetails={carModelDetails} variants={carVariantsList} cityCode={cityCode} cityOptions={cityOptions} />
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mt-4 mt-lg-0">
              <div className="sidebar_recent_viewed_widgets">
                <h4 className="title">Top Viewed Cars</h4>
                <RecentlyViewed cars={carModelsList} />
                <BannerWidget />
              </div>
            </div>
          </div>

          {/* End car descriptions */}
        </div>
        {/* End .container */}
      </section>
      {/* End Agent Single Grid View */}

      {carModelsList?.length > 0 ? <section className="car-for-rent bb1 pb-2" >
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
      <div
        className="sign_up_modal modal fade"
        id="imagesViewDialog" 
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <ImagesViewDialog carModelDetails={carModelDetails} carVariantsList={carVariantsList} activeGalleryTab={activeGalleryTab} />
      </div>

      <div
        className="sign_up_modal modal fade"
        id="imagesViewColorDialog" 
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <ImagesViewDialog carModelDetails={carModelDetails} carVariantsList={carVariantsList} activeGalleryTab="imagesByColor" />
      </div>
  
      {/* Car For Rent */}
      {relatedCars?.length > 0 ? <section className="car-for-rent bb1 pt-2" >
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

      <div
        className="sign_up_modal modal fade"
        id="exShowroomPriceForm"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <ExShowroomPriceForm carModelDetails={carModelDetails} cityCodeChange={handleCityCodeChange} />
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
