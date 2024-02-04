const VariantFeature = ({ carModelDetails }) => {
    const carModel  = carModelDetails;
  
    const carData = [
      { label: "Model Name", value: carModel?.modelName },
      { label: "Car Brand", value: carModel?.carBrand?.brandName },
      { label: "Body Type", value: carModel?.bodyType?.replace('-', ' ') },
      // { label: "Description", value: carModel?.description },
      { label: "Year", value: carModel?.year },
      { label: "Min Price", value: `${carModel?.priceRange?.minPrice} ${carModel?.priceRange?.minPriceType}` },
      { label: "Max Price", value: `${carModel?.priceRange?.maxPrice} ${carModel?.priceRange?.maxPriceType}` },
      // { label: "Status", value: carModel?.status ? "Active" : "Inactive" },
      // { label: "Budget", value: carModel?.budget },
      { label: "Fuel Type", value: carModel?.fuelType?.join(", ") },
      { label: "Mileage", value: `${carModel?.mileage?.replace('_', '-')} Kmpl`  },
      { label: "Seating Capacity", value: carModel?.seatingCapacity?.replace('_', ' ') },
      { label: "Transmission Type", value: carModel?.transmissionType?.join(", ") },
      { label: "Engine Displacement", value: `${carModel?.displacement?.replace('_', '-')} cc`  }
      // Add more fields as necessary
    ];
  
    return (
      <ul className="list-group">
        {carData?.map((item, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={index}
          >
            <div className="me-auto">
              <div className="day">{item.label}</div>
            </div>
            <span className="schedule">{item.value}</span>
          </li>
        ))}
      </ul>
    );
  };
  
  export default VariantFeature;
  