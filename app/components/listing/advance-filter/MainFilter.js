"use client"
import { useEffect, useState } from "react";

const MainFilter = () => {
  const [carBrands, setCarBrands] = useState([]);
  const [isBrandsLoading, setIsBrandsLoading] = useState(true);
  const [selectedBrandId, setSelectedBrandId] = useState('');
  const [carModels, setCarModels] = useState([]);
  const [isModelsLoading, setIsModelsLoading] = useState(false);

  // Fetch car brands on component mount
  useEffect(() => {
    const getBrandsList = localStorage.getItem('carBrandsList');
    if (getBrandsList && getBrandsList.length > 0) {
      setCarBrands(JSON.parse(getBrandsList));
      setIsBrandsLoading(false);
      return;
    }
    
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
        setCarBrands(data.data.carBrandsList);
        localStorage.setItem('carBrandsList', JSON.stringify(data.data.carBrandsList));
      }
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    })
    .finally(() => setIsBrandsLoading(false));
  }, []);

  // Fetch car models based on selected brand
  useEffect(() => {
    if (selectedBrandId) {
      const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
      setIsModelsLoading(true);
      // Replace this URL with the appropriate one for fetching models
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${selectedBrandId}/for/65538448b78add9eaa02d417`, {
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
          setCarModels(data.data.carModelsList);
        }
      })
      .catch(error => {
        console.error('Error fetching car models: ', error);
      })
      .finally(() => setIsModelsLoading(false));
    }
  }, [selectedBrandId]);

  return (
    <>
      {/* Brand selection dropdown */}
      <div className="col-12 col-sm-4 col-lg-2">
        <div className="advance_search_style">
          <select 
            className="form-select show-tick"
            onChange={(e) => setSelectedBrandId(e.target.value)}
            value={selectedBrandId}
            disabled={isBrandsLoading}
          >
            <option>{isBrandsLoading ? "Loading brands..." : "Select Makes"}</option>
            {carBrands?.map((brand, index) => (
              <option key={index} value={brand._id}>{brand.brandName}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Model selection dropdown */}
      <div className="col-12 col-sm-4 col-lg-2">
        <div className="advance_search_style">
          <select 
            className="form-select show-tick"
            onChange={(e) => { /* Handle model selection */ }}
            disabled={!selectedBrandId || isModelsLoading}
          >
            <option>{isModelsLoading ? "Loading models..." : "Select Models"}</option>
            {carModels?.map((model, index) => (
              <option key={index} value={model._id}>{model.modelName}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default MainFilter;
