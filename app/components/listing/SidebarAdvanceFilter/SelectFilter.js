import { useCallback, useMemo } from 'react';
import debounce from 'lodash/debounce';

const SelectFilter = ({ carBrandsList, onFilterChange, selectedFilters }) => {

  console.log("selectedFiltersselectedFiltersselectedFilters ", selectedFilters);
  console.log("carBrandsListcarBrandsListcarBrandsList ", carBrandsList);

  // Memoize the select options to prevent unnecessary recalculations
  const selectOptions = useMemo(() => [
    {
      label: carBrandsList?.length > 0 ? "Select Makes" : "Loading...",
      options: carBrandsList?.map(brand => brand?.brandName),
    },
    {
      label: "Select Body Type",
      options: ["Convertible", "Coupe", "Hatchback", "Sedan", "SUV", "Compact-Suv", "Compact-Sedan", "Station-Wegon", "MuV", "Luxury", "Minivan", "Truck"],
    },
    // {
    //   label: "Year",
    //   options: ["1967", "1990", "2000", "2002", "2005", "2010", "2015", "2020"],
    // },
  ], [carBrandsList]);

  // Debounce the filter change to prevent rapid re-renders
  const debouncedFilterChange = useCallback(
    debounce((filterType, value) => {
      onFilterChange(filterType, value);
    }, 300),
    [onFilterChange]
  );

  const handleSelection = (filterType, event) => {
    const value = event.target.value;
    // If the selected value is the same as the current filter, reset it
    if (value === selectedFilters[filterType]) {
      debouncedFilterChange(filterType, '');
    } else {
      debouncedFilterChange(filterType, value);
    }
  };

  return (
    <>
      {selectOptions?.map((option, index) => (
        <li key={index}>
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <div className="dropdown bootstrap-select w100 show-tick">
                <select 
                  className="form-select dropdown-toggle w100 show-tick"
                  onChange={(e) => handleSelection(index === 0 ? 'brand' : 'bodyType', e)}
                  value={index === 0 ? selectedFilters.brand : selectedFilters.bodyType}
                >
                  <option value="">{option.label}</option>
                  {option?.options?.map((value, idx) => (
                    <option key={idx} value={value}>{value}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default SelectFilter;
