"use client"
import { useEffect, useState } from "react";
import RangeSlider from "./RangeSlider";
import SearchBox from "./SearchBox";
import SelectFilter from "./SelectFilter";
import Link from "next/link";

const SidebarAdvnaceFilter = ({ carModelsList, carBrandsList, onSearchClick }) => {
    const [selectedFilters, setSelectedFilters] = useState({ brand: '', bodyType: '', fuelType: [],
    transmissionType: [], price: [] });
    const [isFilterChanged, setIsFilterChanges] = useState(false)

    useEffect(() => {
      if(isFilterChanged) {
        onSearchClick(selectedFilters);
        setIsFilterChanges(false)
      }
    }, [selectedFilters])
  
    const handleFilterChange = (filterType, value) => {
      setSelectedFilters(prev => ({ ...prev, [filterType]: value }));
      setIsFilterChanges(true)
    };

    const handleCheckboxChange = (filterType, value) => {
      setSelectedFilters(prev => {
        // Toggle value in the array
        const updatedArray = prev[filterType].includes(value)
          ? prev[filterType].filter(item => item !== value) // Remove if exists
          : [...prev[filterType], value]; // Add if doesn't exist
  
        return { ...prev, [filterType]: updatedArray };
      });
      setIsFilterChanges(true)
    };

    const handleResetFilter = () => {
      setSelectedFilters({ brand: '', bodyType: '', fuelType: [],
      transmissionType: [] });
      onSearchClick({ brand: '', bodyType: '', fuelType: [],
      transmissionType: [] });
    }

    const handleSearchButton = () => {
      onSearchClick(selectedFilters);
    }

  return (
    <div className="sidebar_widgets">
      <div className="sidebar_widgets_wrapper">
        <div className="sidebar_advanced_search_widget">
          <h4 className="title">Search Filters</h4>
          <ul className="sasw_list mb0">
            {/* End .search_area */}

            <SelectFilter carBrandsList={carBrandsList} carModelsList={carModelsList} onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
            {/* End li select filter */}

            {/* <li>
              <h5 className="subtitle">Mileage</h5> 
            </li>
            <li className="min_area list-inline-item">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Min" />
              </div>
            </li>
            <li className="max_area list-inline-item">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Max" />
              </div>
            </li> */}
            {/* End milage */}

            {/* <li>
              <h5 className="subtitle">Price</h5>
            </li> */}
            {/* <li>
              <RangeSlider />
            </li> */}
            {/* End range price slider */}

            <li>
              <h5 className="subtitle">Fuel Type</h5>
              <div className="ui_kit_checkbox">
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckPetrol"
                    checked={selectedFilters.fuelType.includes('Petrol')}
                    onChange={() => handleCheckboxChange('fuelType', 'Petrol')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckPetrol">
                    Petrol ({carModelsList?.reduce((acc, model) => { 
                      if(model?.fuelType?.includes('Petrol')) {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDiesel"
                    checked={selectedFilters.fuelType.includes('Diesel')}
                    onChange={() => handleCheckboxChange('fuelType', 'Diesel')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckDiesel">
                    Diesel ({carModelsList?.reduce((acc, model) => { 
                      if(model?.fuelType?.includes('Diesel')) {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckElectric"
                    checked={selectedFilters.fuelType.includes('Electric')}
                    onChange={() => handleCheckboxChange('fuelType', 'Electric')}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckElectric"
                  >
                    Electric ({carModelsList?.reduce((acc, model) => { 
                      if(model?.fuelType?.includes('Electric')) {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
                <div className="form-check mb30">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckHybrid"
                    checked={selectedFilters.fuelType.includes('Hybrid')}
                    onChange={() => handleCheckboxChange('fuelType', 'Hybrid')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckHybrid">
                    Hyrbid ({carModelsList?.reduce((acc, model) => { 
                      if(model?.fuelType?.includes('Hybrid')) {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
                <div className="form-check mb30">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckHybrid"
                    checked={selectedFilters.fuelType.includes('CNG')}
                    onChange={() => handleCheckboxChange('fuelType', 'CNG')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckHybrid">
                    CNG ({carModelsList?.reduce((acc, model) => { 
                      if(model?.fuelType?.includes('CNG')) {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
              </div>
            </li>
            <li>
              <h5 className="subtitle">Transmission</h5>
              <div className="ui_kit_checkbox">
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckAutometic"
                    checked={selectedFilters.transmissionType.includes('Automatic')}
                    onChange={() => handleCheckboxChange('transmissionType', 'Automatic')}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckAutometic"
                  >
                    Automatic ({carModelsList?.reduce((acc, model) => { 
                      if(model?.transmissionType?.includes('Automatic')) {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
                <div className="form-check mb30">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckManual"
                    checked={selectedFilters.transmissionType.includes('Manual')}
                    onChange={() => handleCheckboxChange('transmissionType', 'Manual')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckManual">
                    Manual ({carModelsList?.reduce((acc, model) => { 
                      if(model?.transmissionType?.includes('Manual')) {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
              </div>
            </li>

            <li>
              <h5 className="subtitle">Price</h5>
              <div className="ui_kit_checkbox">
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckUnder5Lakh"
                    checked={selectedFilters.price.includes('5')}
                    onChange={() => handleCheckboxChange('price', '5')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckUnder5Lakh">
                    Under 5 Lakh ({carModelsList?.reduce((acc, model) => { 
                      if(model?.priceRange.minPrice <= 5 && model?.priceRange.maxPriceType == 'Lakhs') {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckUnder10Lakh"
                    checked={selectedFilters.price.includes('10')}
                    onChange={() => handleCheckboxChange('price', '10')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckUnder10Lakh">
                    Under 10 Lakh ({carModelsList?.reduce((acc, model) => { 
                      if(model?.priceRange.minPrice <= 10 && model?.priceRange.maxPriceType == 'Lakhs') {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckUnder15Lakh"
                    checked={selectedFilters.price.includes('15')}
                    onChange={() => handleCheckboxChange('price', '15')}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckUnder15Lakh"
                  >
                    Under 15 Lakh ({carModelsList?.reduce((acc, model) => { 
                      if(model?.priceRange.minPrice <= 15 && model?.priceRange.maxPriceType == 'Lakhs') {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckUnder20Lakh"
                    checked={selectedFilters.price.includes('20')}
                    onChange={() => handleCheckboxChange('price', '20')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckUnder20Lakh">
                      Under 20 Lakh ({carModelsList?.reduce((acc, model) => { 
                      if(model?.priceRange.minPrice <= 20 && model?.priceRange.maxPriceType == 'Lakhs') {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckUnder25Lakh"
                    checked={selectedFilters.price.includes('25')}
                    onChange={() => handleCheckboxChange('price', '25')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckHybrid">
                    Under 25 Lakh ({carModelsList?.reduce((acc, model) => { 
                      if(model?.priceRange.minPrice <= 25 && model?.priceRange.maxPriceType == 'Lakhs') {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckHybrid"
                    checked={selectedFilters.price.includes('30')}
                    onChange={() => handleCheckboxChange('price', '30')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckUnder30Lakh">
                    Under 30 Lakh ({carModelsList?.reduce((acc, model) => { 
                      if(model?.priceRange.minPrice <= 30 && model?.priceRange.maxPriceType == 'Lakhs') {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>

                <div className="form-check mb30">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckHybrid"
                    checked={selectedFilters.price > 30}
                    onChange={() => handleCheckboxChange('price', '31')}
                  />
                  <label className="form-check-label" htmlFor="flexCheckAbove30Lakh">
                    Above 30 Lakh ({carModelsList?.reduce((acc, model) => { 
                      if(model?.priceRange.minPrice > 30 && (model?.priceRange.maxPriceType == 'Lakhs' || model?.priceRange.maxPriceType == 'Crores')) {
                        return acc + 1;
                      } else {
                        return acc;
                      }}, 0)})
                  </label>
                </div>
              </div>
            </li>

            {/* <li>
              <div className="search_option_button">
                <button type="submit" className="btn btn-block btn-thm" onClick={handleSearchButton}>
                  <span className="flaticon-magnifiying-glass mr10" /> Search
                </button>
              </div>
            </li> */}

            <li>
              <div className="search_option_button">
                <button type="submit" className="btn btn-block btn-thm" onClick={handleResetFilter}>
                  <span/> Reset Filter
                </button>
              </div>
            </li>
            {/* <li className="text-center">
              <Link className="reset-filter" href="" onClick={handleResetFilter}>
                Reset Filter
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdvnaceFilter;
