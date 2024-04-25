"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HeroFilter = () => {
  const router = useRouter();
  const [carBrands, setCarBrands] = useState([]);
  const [isBrandsLoading, setIsBrandsLoading] = useState(true);
  const [selectedBrandId, setSelectedBrandId] = useState('');
  const [selectedModelId, setSelectedModelId] = useState('');
  const [selectedBrandName, setSelectedBrandName] = useState('');
  const [selectedModelName, setSelectedModelName] = useState('');
  const [carModels, setCarModels] = useState([]);
  const [isModelsLoading, setIsModelsLoading] = useState(false);

  useEffect(() => {
    setIsBrandsLoading(true);
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

  useEffect(() => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    if (selectedBrandId) {
      setIsModelsLoading(true);
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${selectedBrandId}/for/65538448b78add9eaa02d417`,
        {
          method: 'GET',
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
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

  const handleBrandChange = (event) => {
    event.preventDefault();
    setSelectedBrandId(event.target.value);
    setCarModels([]); // Reset car models when brand changes
  };

  const handleModelChange = (event) => {
    event.preventDefault();
    const modelName = carModels?.find(model => model?._id === event.target.value);
    setSelectedModelName(modelName);
    setSelectedModelId(event.target.value);
  };

  const handleCarDetailsRoute = () => {
    const formatUrlPart = (str) => {
      if (typeof str !== 'string') {
        console.error('Expected a string but got:', typeof str);
        return '';
      }
      return str.trim().replace(/\s+/g, '-').toLowerCase();
    }

    const brandName = formatUrlPart(selectedModelName?.carBrand?.brandName);
    const modelName = formatUrlPart(selectedModelName?.modelName);
    localStorage.setItem('model-details', JSON.stringify(selectedModelName));
    router.push(`cars/${brandName}/${modelName}`);
  }


  return (
    <div className="col-lg-12">
      {/* Filter tabs */}
      <div className="adss_bg_stylehome1">
        <div className="home1_advance_search_wrapper">
          <ul className="mb0 text-center">
            {/* Brand Selection */}
            <li className="list-inline-item">
              <div className="select-boxes">
                <div className="car_brand">
                  <h6 className="title">Brand</h6>
                  <select className="form-select" onChange={handleBrandChange} value={selectedBrandId}>
                    <option value="">{isBrandsLoading ? "Loading..." : "Select Brand"}</option>
                    {carBrands?.map(brand => (
                      <option key={brand._id} value={brand._id}>{brand.brandName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </li>
            {/* Model Selection */}
            <li className="list-inline-item  mt-2 mt-md-0">
              <div className="select-boxes">
                <div className="car_brand">
                  <h6 className="title">Models</h6>
                  <select className="form-select" onChange={handleModelChange} disabled={!selectedBrandId || isModelsLoading}>
                    <option value="">{isModelsLoading ? "Loading..." : "Select Models"}</option>
                    {carModels?.map(model => (
                      <option key={model._id} value={model._id}>{model.modelName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </li>
            {/* Additional filters can be added similarly */}

            {/* Search button */}
            <li className="list-inline-item mt-2 mt-md-0">
              <div className="d-block">
                <button
                  onClick={() => handleCarDetailsRoute()}
                  className="btn btn-thm advnc_search_form_btn"
                  style={{ backgroundColor: !selectedModelId ? 'grey' : '', color: !selectedModelId ? 'white' : '' }}
                  disabled={!selectedModelId}
                >
                  <span className="flaticon-magnifiying-glass" />
                  Search
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
