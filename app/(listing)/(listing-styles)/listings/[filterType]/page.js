"use client"
import Footer from "../../../../components/common/Footer";
import DefaultHeader from "../../../../components/common/DefaultHeader";
import HeaderSidebar from "../../../../components/common/HeaderSidebar";
import HeaderTop from "../../../../components/common/HeaderTop";
import MobileMenu from "../../../../components/common/MobileMenu";
import LoginSignupModal from "../../../../components/common/login-signup";
import CarItems from "../../../../components/listing/listing-styles/listing-v6/CarItems";
import SidebarAdvnaceFilter from "../../../../components/listing/SidebarAdvanceFilter";
import ListGridFilter2 from "../../../../components/listing/ListGridFilter2"; 
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const metadata = {
  title: "Listings || Carportal - Automotive & Car Dealer",
};

const ListingType = () => {
  const [isCarModelsLoading, setIsCarModelsLoading] = useState(true);
  const [carBrandsList, setCarBrandsList] = useState([]);
  const [carModelsList, setCarModelsList] = useState([]);
  const [brandFilter, setBrandFilter] = useState(null);
  const [bodyTypeFilter, setBodyTypeFilter] = useState(null);
  // const [priceRange, setPriceRangeFilter] = useState({min: 100000, max: 1000000});
  const [fuelTypeFilter, setFuelTypeFilter] = useState([]);
  const [transmissionTypeFilter, setTransmissionTypeFilter] = useState([]);

  useEffect(() => {
    // setIsBrandsLoading(true);
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/65538448b78add9eaa02d417';
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
      if (data && data.data && data.data.carBrandsList) {
        setCarBrandsList(data.data.carBrandsList);
        localStorage.setItem('carBrandsList', JSON.stringify(data.data.carBrandsList));
      }
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    })
    // .finally(() => setIsBrandsLoading(false));
  }, []);

  useEffect(() => {
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carmodels/for/65538448b78add9eaa02d417';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key
    setIsCarModelsLoading(true);
    fetch(apiUrl, {
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
      setIsCarModelsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
      setCarModelsList([]);
      setIsCarModelsLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carmodels/for/65538448b78add9eaa02d417';
  //   const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key
  //   setIsCarModelsLoading(true);
  //   fetch(apiUrl, {
  //     method: 'GET',
  //     headers: {
  //       'X-API-Key': apiKey,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data && data.data && data.data.carModelsList) {
  //       setCarModelsList(data.data.carModelsList);
  //     }
  //     setIsCarModelsLoading(false);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data: ', error);
  //     setCarModelsList([]);
  //     setIsCarModelsLoading(false);
  //   });
  // }, []);
  

  const handleSearchHandler = (newFilterValue) => {
    setBrandFilter(newFilterValue.brand);
  setBodyTypeFilter(newFilterValue.bodyType);
  setFuelTypeFilter(newFilterValue.fuelType);
  setTransmissionTypeFilter(newFilterValue.transmissionType);
  }

  const getFilteredCarModels = () => {
    if (!brandFilter && !bodyTypeFilter && !fuelTypeFilter?.length && !transmissionTypeFilter?.length) {
      return carModelsList; // Return all models if no filters are applied
    }
    let filteredResults = new Set();
    if (brandFilter) {
      carModelsList.forEach(model => {
        if (model?.brand === brandFilter) {
          filteredResults.add(model);
        }
      });
    }
  
    if (bodyTypeFilter) {
      carModelsList.forEach(model => {
        if (model?.bodyType === bodyTypeFilter) {
          filteredResults.add(model);
        }
      });
    }
  
    if (fuelTypeFilter.length) {
      carModelsList.forEach(model => {
        if (fuelTypeFilter.includes(model?.fuelType)) {
          filteredResults.add(model);
        }
      });
    }
  
    if (transmissionTypeFilter.length) {
      carModelsList.forEach(model => {
        if (transmissionTypeFilter.includes(model?.transmissionType)) {
          filteredResults.add(model);
        }
      });
    }
  
    return Array.from(filteredResults); // Convert Set to Array
  };
  
  
  const filteredCarModels = getFilteredCarModels();

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

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content">
                <h2 className="breadcrumb_title">Vehicles List</h2>
                <p className="subtitle">Listings</p>
                <ol className="breadcrumb fn-767 mt10-sm">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">Listing</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Page Breadcrumb */}

      {/* Listing Grid View */}
      <section className="our-listing bgc-white pb30-991 inner_page_section_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 dn-md">
              <SidebarAdvnaceFilter carModelsList={carModelsList} carBrandsList={carBrandsList} onSearchClick={handleSearchHandler} />
            </div>
            {/* End .col-lg-4 */} 

            <div className="col-lg-8 col-xl-9"> 
              <ListGridFilter2 carModelsList={carModelsList}  />
              {isCarModelsLoading ? (<Spinner className="d-flex" style={{marginLeft: 'auto', marginRight: 'auto'}} animation="border" role="status">
                     <span className="visually-hidden">Loading...</span>
                     </Spinner>) : (<div className="row">
                    <CarItems carModelsList={filteredCarModels} />
                  </div>)}
              
              {/* End .row */}
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="advanceSearchMobile"
          aria-labelledby="advanceSearchMobileLabel"
        >
          <div
            className="mb-cls-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-light fa-circle-xmark"></i>
          </div>
          <SidebarAdvnaceFilter carModelsList={carModelsList} carBrandsList={carBrandsList} onSearchClick={handleSearchHandler} />
        </div>
      </section>
      {/* Listing Grid View */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default ListingType;
