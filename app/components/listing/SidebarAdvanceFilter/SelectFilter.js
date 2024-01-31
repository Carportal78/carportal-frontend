const SelectFilter = ({ carBrandsList, onFilterChange, selectedFilters }) => {
  const selectOptions = [
    {
      label: carBrandsList?.length > 0 ? "Select Makes" : "Loading...",
      options: carBrandsList?.map(brand => brand?.brandName),
    },
    {
      label: "Body Type",
      options: ["Convertible", "Coupe", "Hatchback", "Sedan", "SUV", "Compact-Suv", "Compact-Sedan", "Station-Wegon", "MuV", "Luxury", "Minivan", "Truck"],
    },
    // {
    //   label: "Year",
    //   options: ["1967", "1990", "2000", "2002", "2005", "2010", "2015", "2020"],
    // },
  ];

  const handleSelection = (filterType, event) => {
    console.log('filteredType ', filterType, event.target.value);
    onFilterChange(filterType, event.target.value);
  };

  return (
    <>
      {selectOptions?.map((option, index) => (
        <li key={index}>
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <div className="dropdown bootstrap-select w100 show-tick">
                <select className="form-select dropdown-toggle w100 show-tick"
                  onChange={(e) => handleSelection(index === 0 ? 'brand' : 'bodyType', e)}
                  value={index === 0 ? selectedFilters.brand : selectedFilters.bodyType}
                >
                  <option>{option.label}</option>
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
