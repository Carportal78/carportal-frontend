"use client"
import Footer from "../../../components/common/Footer";
import DefaultHeader from "../../../components/common/DefaultHeader";
import HeaderSidebar from "../../../components/common/HeaderSidebar";
import HeaderTop from "../../../components/common/HeaderTop";
import MobileMenu from "../../../components/common/MobileMenu";
import LoginSignupModal from "../../../components/common/login-signup";
import CarItems from "../../../components/listing/listing-styles/listing-v6/CarItems";
import SidebarAdvnaceFilter from "../../../components/listing/SidebarAdvanceFilter";
import ListGridFilter2 from "../../../components/listing/ListGridFilter2"; 
import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { Spinner } from "react-bootstrap";
import {filteredCarData} from "../../../components/atoms/categoriesAtoms"
import { useAtom } from 'jotai';

const metadata = {
  title: "Cars || Carportal - Automotive & Car Dealer",
};

const ListingV3 = () => {
  const [isCarModelsLoading, setIsCarModelsLoading] = useState(true);
  const [carBrandsList, setCarBrandsList] = useState([]);
  const [carModelsList, setCarModelsList] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [, setSelectCarModelData] = useAtom(filteredCarData);
  const [brandFilter, setBrandFilter] = useState(null);
  const [bodyTypeFilter, setBodyTypeFilter] = useState(null);
  const [budgetFilter, setBudgetFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const [fuelTypeFilter, setFuelTypeFilter] = useState(null);
  const [transmissionTypeFilter, setTransmissionTypeFilter] = useState(null);
  const [seatingCapacityFilter, setSeatingCapacityFilter] = useState(null);
  const isInitialMount = useRef(true);

  // Create a memoized list that's only filtered by brand
  const brandFilteredData = useMemo(() => {
    if (!brandFilter) return carModelsList;
    return carModelsList.filter(model => 
      model?.carBrand?.brandName?.toLowerCase() === brandFilter?.toLowerCase()
    );
  }, [carModelsList, brandFilter]);

  // Fetch initial data only once
  useEffect(() => {
    const fetchInitialData = async () => {
      if (!isInitialMount.current) return;
      
      try {
        setIsCarModelsLoading(true);
        const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
        
        // Fetch brands and models in parallel
        const [brandsResponse, modelsResponse] = await Promise.all([
          fetch('https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/66cac994eeca9633c29171e2', {
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            }
          }),
          fetch('https://api.univolenitsolutions.com/v1/automobile/get/carmodels/for/66cac994eeca9633c29171e2', {
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            }
          })
        ]);

        const [brandsData, modelsData] = await Promise.all([
          brandsResponse.json(),
          modelsResponse.json()
        ]);

        if (brandsData?.data?.carBrandsList) {
          setCarBrandsList(brandsData.data.carBrandsList);
          localStorage.setItem('carBrandsList', JSON.stringify(brandsData.data.carBrandsList));
        }

        if (modelsData?.data?.carModelsList) {
          const models = modelsData.data.carModelsList;
          setCarModelsList(models);
          
          // Apply initial filters if they exist
          let initialFilteredData = models;
          if (brandFilter) {
            initialFilteredData = models.filter(model => 
              model?.carBrand?.brandName?.toLowerCase() === brandFilter?.toLowerCase()
            );
          }
          if (bodyTypeFilter) {
            initialFilteredData = initialFilteredData.filter(model => 
              model?.bodyType?.toLowerCase() === bodyTypeFilter?.toLowerCase()
            );
          }
          if (budgetFilter) {
            initialFilteredData = initialFilteredData.filter(model => 
              model?.budget?.toLowerCase() === budgetFilter?.toLowerCase()
            );
          }
          if (fuelTypeFilter) {
            initialFilteredData = initialFilteredData.filter(model => 
              model.fuelType.some(item => fuelTypeFilter.includes(item))
            );
          }
          if (transmissionTypeFilter) {
            initialFilteredData = initialFilteredData.filter(model => 
              model.transmissionType.some(item => transmissionTypeFilter.includes(item))
            );
          }
          if (seatingCapacityFilter) {
            initialFilteredData = initialFilteredData.filter(model => 
              model?.seatingCapacity?.toLowerCase() === seatingCapacityFilter?.toLowerCase()
            );
          }
          
          setFilteredData(initialFilteredData);
          setSelectCarModelData(initialFilteredData.length);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setCarModelsList([]);
        setFilteredData([]);
      } finally {
        setIsCarModelsLoading(false);
        isInitialMount.current = false;
      }
    };

    fetchInitialData();
  }, [brandFilter, bodyTypeFilter, budgetFilter, fuelTypeFilter, transmissionTypeFilter, seatingCapacityFilter]);

  // Handle URL parameters
  useEffect(() => {
    if (!isInitialMount.current) return; // Only run on initial mount

    const queryParams = new URLSearchParams(window.location.search);
    const params = {
      bodyType: queryParams.get("bodyType"),
      brandType: queryParams.get('brand'),
      budget: queryParams.get('budget'),
      fuelType: queryParams.get('fuelType'),
      transmissionType: queryParams.get('transmissionType'),
      seatingCapacity: queryParams.get('seatingCapacity')
    };

    // Update all filters at once to prevent multiple re-renders
    if (params.bodyType) setBodyTypeFilter(params.bodyType);
    if (params.brandType) setBrandFilter(params.brandType);
    if (params.budget) setBudgetFilter(params.budget);
    if (params.fuelType) setFuelTypeFilter(params.fuelType);
    if (params.transmissionType) setTransmissionTypeFilter(params.transmissionType);
    if (params.seatingCapacity) setSeatingCapacityFilter(params.seatingCapacity);
  }, []); // Empty dependency array ensures this runs only once

  const handleSearchHandler = useCallback((newFilterValue) => {
    setBrandFilter(newFilterValue.brand);
    setBodyTypeFilter(newFilterValue.bodyType);
    setFuelTypeFilter(newFilterValue.fuelType);
    setTransmissionTypeFilter(newFilterValue.transmissionType);
    setBudgetFilter(newFilterValue.budget);
    setSeatingCapacityFilter(newFilterValue.seatingCapacity);
    setPriceFilter(newFilterValue.price);
  }, []);

  // Memoize the filtering logic
  const getFilteredCarModels = useCallback(() => {
    if (!brandFilter && !bodyTypeFilter && !fuelTypeFilter && !budgetFilter && !seatingCapacityFilter) {
      return carModelsList;
    }

    let filteredResults = [...carModelsList];
  
    if (brandFilter) {
      filteredResults = filteredResults.filter(model => 
        model?.carBrand?.brandName?.toLowerCase() === brandFilter?.toLowerCase()
      );
    }

    if (priceFilter) {
      filteredResults = filteredResults.filter(model => {
        if(priceFilter.includes('31')) {
          return priceFilter.every(item => model?.priceRange?.minPrice >= parseInt(item, 10)) && 
            (model?.priceRange.maxPriceType === 'Lakhs' || model?.priceRange.maxPriceType === 'Crores');
        }
        return priceFilter.every(item => model?.priceRange?.minPrice <= parseInt(item, 10)) && 
          model?.priceRange.maxPriceType === 'Lakhs';
      });
    }

    if (budgetFilter) {
      filteredResults = filteredResults.filter(model => 
        model?.budget?.toLowerCase() === budgetFilter?.toLowerCase()
      );
    }

    if (bodyTypeFilter) {
      filteredResults = filteredResults.filter(model => 
        model?.bodyType?.toLowerCase() === bodyTypeFilter?.toLowerCase()
      );
    }

    if (fuelTypeFilter?.length) {
      filteredResults = filteredResults.filter(model => 
        model.fuelType.some(item => fuelTypeFilter.includes(item))
      );
    }

    if (transmissionTypeFilter?.length) {
      filteredResults = filteredResults.filter(model => 
        model.transmissionType.some(item => transmissionTypeFilter.includes(item))
      );
    }

    if (seatingCapacityFilter) {
      filteredResults = filteredResults.filter(model => 
        model?.seatingCapacity?.toLowerCase() === seatingCapacityFilter?.toLowerCase()
      );
    }

    return filteredResults;
  }, [
    carModelsList,
    brandFilter,
    bodyTypeFilter,
    budgetFilter,
    fuelTypeFilter,
    transmissionTypeFilter,
    seatingCapacityFilter,
    priceFilter
  ]);

  // Update filtered data when filters change
  useEffect(() => {
    if (carModelsList.length > 0) {
      const filtered = getFilteredCarModels();
      setFilteredData(filtered);
      setSelectCarModelData(filtered.length);
    }
  }, [
    carModelsList,
    getFilteredCarModels
  ]);

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

      {/* <HeaderTop /> */}
      <DefaultHeader />
      <MobileMenu />

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

      <section className="our-listing bgc-white pb30-991 inner_page_section_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 dn-md">
              <SidebarAdvnaceFilter 
                carModelsList={brandFilteredData} 
                carBrandsList={carBrandsList} 
                onSearchClick={handleSearchHandler} 
              />
            </div>

            <div className="col-lg-8 col-xl-9"> 
              <ListGridFilter2 carModelsList={carModelsList} />
              {isCarModelsLoading ? (
                <Spinner className="d-flex" style={{marginLeft: 'auto', marginRight: 'auto'}} animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <div className="row">
                  <CarItems carModelsList={filteredData} />
                </div>
              )}
            </div>
          </div>
        </div>

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
          <SidebarAdvnaceFilter 
            carModelsList={brandFilteredData} 
            carBrandsList={carBrandsList} 
            onSearchClick={handleSearchHandler} 
          />
        </div>
      </section>

      <Footer />

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
    </div>
  );
};

export default ListingV3;
