"use client"
import { useEffect, useState, useCallback, useMemo } from "react";
import SelectFilter from "./SelectFilter";
import { useAtom } from "jotai";
import { carFilters } from "../../../components/atoms/categoriesAtoms"

const SidebarAdvnaceFilter = ({ carModelsList, carBrandsList, onSearchClick }) => {
    const [selectedFilters, setSelectedFilters] = useAtom(carFilters);
    const [isFilterChanged, setIsFilterChanges] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Calculate static counts using useMemo
    const filterCounts = useMemo(() => {
      if (!carModelsList) return {
        fuelType: {},
        transmissionType: {},
        price: {}
      };

      const counts = {
        fuelType: {},
        transmissionType: {},
        price: {}
      };

      // Calculate fuel type counts
      carModelsList.forEach(model => {
        if (model?.fuelType) {
          model.fuelType.forEach(type => {
            counts.fuelType[type] = (counts.fuelType[type] || 0) + 1;
          });
        }
      });

      // Calculate transmission type counts
      carModelsList.forEach(model => {
        if (model?.transmissionType) {
          model.transmissionType.forEach(type => {
            counts.transmissionType[type] = (counts.transmissionType[type] || 0) + 1;
          });
        }
      });

      // Calculate price range counts
      carModelsList.forEach(model => {
        if (model?.priceRange) {
          const minPrice = model.priceRange.minPrice;
          const maxPriceType = model.priceRange.maxPriceType;

          if (minPrice <= 5 && maxPriceType === 'Lakhs') {
            counts.price['5'] = (counts.price['5'] || 0) + 1;
          }
          if (minPrice <= 10 && maxPriceType === 'Lakhs') {
            counts.price['10'] = (counts.price['10'] || 0) + 1;
          }
          if (minPrice <= 15 && maxPriceType === 'Lakhs') {
            counts.price['15'] = (counts.price['15'] || 0) + 1;
          }
          if (minPrice <= 20 && maxPriceType === 'Lakhs') {
            counts.price['20'] = (counts.price['20'] || 0) + 1;
          }
          if (minPrice <= 25 && maxPriceType === 'Lakhs') {
            counts.price['25'] = (counts.price['25'] || 0) + 1;
          }
          if (minPrice <= 30 && maxPriceType === 'Lakhs') {
            counts.price['30'] = (counts.price['30'] || 0) + 1;
          }
          if (minPrice > 30 && (maxPriceType === 'Lakhs' || maxPriceType === 'Crores')) {
            counts.price['31'] = (counts.price['31'] || 0) + 1;
          }
        }
      });

      return counts;
    }, [carModelsList]);

    useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const bodyType = queryParams?.get('bodyType');
      const brandType = queryParams?.get('brand');
      const budget = queryParams?.get('budget');
      const fuelType = queryParams?.get('fuelType');
      const transmissionType = queryParams?.get('transmissionType');
      const filters = { ...selectedFilters };
      
      if (bodyType) {
        filters.bodyType = bodyType;
      }
  
      if(brandType) {
        filters.brand = brandType;
      }
  
      if(budget) {
        const priceNum = parseInt(budget?.match(/\d+/)[0]);
        if(!filters.price.includes(priceNum.toString())) {
          filters.price.push(priceNum.toString());
        }
      }
  
      if(fuelType && !filters.fuelType.includes(fuelType)) {
        filters.fuelType.push(fuelType);
      }
  
      if(transmissionType && !filters.transmissionType.includes(transmissionType)) {
        filters.transmissionType.push(transmissionType);
      }

      setSelectedFilters(filters);
    }, []);

    useEffect(() => {
      if(isFilterChanged) {
        setIsLoading(true);
        onSearchClick(selectedFilters);
        setIsFilterChanges(false);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    }, [selectedFilters, isFilterChanged, onSearchClick]);
  
    const handleFilterChange = useCallback((filterType, value) => {
      setSelectedFilters(prev => ({ ...prev, [filterType]: value }));
      setIsFilterChanges(true);
    }, []);

    const handleCheckboxChange = useCallback((filterType, value) => {
      setSelectedFilters(prev => {
        const updatedArray = prev[filterType]?.includes(value)
          ? prev[filterType].filter(item => item !== value)
          : [...prev[filterType], value];
    
        return { ...prev, [filterType]: updatedArray };
      });
      setIsFilterChanges(true);
    }, []);

    const handleResetFilter = useCallback(() => {
      setIsLoading(true);
      const defaultFilters = { 
        brand: '', 
        bodyType: '', 
        fuelType: [],
        transmissionType: [],
        price: []
      };
      setSelectedFilters(defaultFilters);
      onSearchClick(defaultFilters);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, [onSearchClick]);

    return (
      <div className="sidebar_widgets">
        <div className="sidebar_widgets_wrapper">
          <div className="sidebar_advanced_search_widget">
            <h4 className="title">Search Filters</h4> 
            <ul className="sasw_list mb0">
              <SelectFilter 
                carBrandsList={carBrandsList} 
                onFilterChange={handleFilterChange} 
                selectedFilters={selectedFilters} 
              />

              <li>
                <h5 className="subtitle">Fuel Type</h5>
                <div className="ui_kit_checkbox">
                  <div className="form-check mb20">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckPetrol"
                      checked={selectedFilters?.fuelType?.includes('Petrol')}
                      onChange={() => handleCheckboxChange('fuelType', 'Petrol')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckPetrol">
                      Petrol ({filterCounts.fuelType['Petrol'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb20">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDiesel"
                      checked={selectedFilters?.fuelType?.includes('Diesel')}
                      onChange={() => handleCheckboxChange('fuelType', 'Diesel')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDiesel">
                      Diesel ({filterCounts.fuelType['Diesel'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb20">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckElectric"
                      checked={selectedFilters?.fuelType?.includes('Electric')}
                      onChange={() => handleCheckboxChange('fuelType', 'Electric')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckElectric">
                      Electric ({filterCounts.fuelType['Electric'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb30">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckHybrid"
                      checked={selectedFilters?.fuelType?.includes('Hybrid')}
                      onChange={() => handleCheckboxChange('fuelType', 'Hybrid')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckHybrid">
                      Hybrid ({filterCounts.fuelType['Hybrid'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb30">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckCNG"
                      checked={selectedFilters?.fuelType?.includes('CNG')}
                      onChange={() => handleCheckboxChange('fuelType', 'CNG')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckCNG">
                      CNG ({filterCounts.fuelType['CNG'] || 0})
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
                      id="flexCheckAutometic"
                      checked={selectedFilters?.transmissionType?.includes('Automatic')}
                      onChange={() => handleCheckboxChange('transmissionType', 'Automatic')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckAutometic">
                      Automatic ({filterCounts.transmissionType['Automatic'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb30">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckManual"
                      checked={selectedFilters?.transmissionType?.includes('Manual')}
                      onChange={() => handleCheckboxChange('transmissionType', 'Manual')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckManual">
                      Manual ({filterCounts.transmissionType['Manual'] || 0})
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
                      id="flexCheckUnder5Lakh"
                      checked={selectedFilters?.price?.includes('5')}
                      onChange={() => handleCheckboxChange('price', '5')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckUnder5Lakh">
                      Under 5 Lakh ({filterCounts.price['5'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb20">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckUnder10Lakh"
                      checked={selectedFilters?.price?.includes('10')}
                      onChange={() => handleCheckboxChange('price', '10')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckUnder10Lakh">
                      Under 10 Lakh ({filterCounts.price['10'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb20">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckUnder15Lakh"
                      checked={selectedFilters?.price?.includes('15')}
                      onChange={() => handleCheckboxChange('price', '15')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckUnder15Lakh">
                      Under 15 Lakh ({filterCounts.price['15'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb20">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckUnder20Lakh"
                      checked={selectedFilters?.price?.includes('20')}
                      onChange={() => handleCheckboxChange('price', '20')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckUnder20Lakh">
                      Under 20 Lakh ({filterCounts.price['20'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb20">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckUnder25Lakh"
                      checked={selectedFilters?.price?.includes('25')}
                      onChange={() => handleCheckboxChange('price', '25')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckUnder25Lakh">
                      Under 25 Lakh ({filterCounts.price['25'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb20">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckUnder30Lakh"
                      checked={selectedFilters?.price?.includes('30')}
                      onChange={() => handleCheckboxChange('price', '30')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckUnder30Lakh">
                      Under 30 Lakh ({filterCounts.price['30'] || 0})
                    </label>
                  </div>
                  <div className="form-check mb30">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckAbove30Lakh"
                      checked={selectedFilters?.price?.includes('31')}
                      onChange={() => handleCheckboxChange('price', '31')}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="flexCheckAbove30Lakh">
                      Above 30 Lakh ({filterCounts.price['31'] || 0})
                    </label>
                  </div>
                </div>
              </li>

              <li>
                <div className="search_option_button">
                  <button 
                    type="submit" 
                    className="btn btn-block btn-thm" 
                    onClick={handleResetFilter}
                    disabled={isLoading}
                  >
                    <span/> Reset Filter
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default SidebarAdvnaceFilter;
