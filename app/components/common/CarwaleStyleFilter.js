"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const CarwaleStyleFilter = () => {
  const router = useRouter();
  const [carBrands, setCarBrands] = useState([]);
  const [isBrandsLoading, setIsBrandsLoading] = useState(true);
  const [selectedBrandId, setSelectedBrandId] = useState('');
  const [selectedModelId, setSelectedModelId] = useState('');
  const [selectedBrandName, setSelectedBrandName] = useState('');
  const [selectedModelName, setSelectedModelName] = useState('');
  const [carModels, setCarModels] = useState([]);
  const [isModelsLoading, setIsModelsLoading] = useState(false);
  const [searchBy, setSearchBy] = useState('brands'); // 'brands' or 'budget'
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState('Delhi');
  const [selectedBudget, setSelectedBudget] = useState('');

  // Popular car models for display
  const popularCars = [
    { name: "Harrier EV", image: "/images/cars/harrier-ev.jpg" },
    { name: "Creta", image: "/images/cars/creta.jpg" },
    { name: "Brezza", image: "/images/cars/brezza.jpg" },
    { name: "XUV700", image: "/images/cars/xuv700.jpg" },
    { name: "Urban Cruiser", image: "/images/cars/urban-cruiser.jpg" },
    { name: "Scorpio N", image: "/images/cars/scorpio-n.jpg" },
    { name: "Nexon", image: "/images/cars/nexon.jpg" },
    { name: "Seltos", image: "/images/cars/seltos.jpg" },
  ];

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];

  const budgetRanges = [
    { value: 'under_5', label: '1 - 5 Lakh' },
    { value: 'under_10', label: '5 - 10 Lakh' },
    { value: 'under_15', label: '10 - 15 Lakh' },
    { value: 'under_20', label: '15 - 20 Lakh' },
    { value: 'under_25', label: '20 - 25 Lakh' },
    { value: 'under_30', label: '25 - 30 Lakh' },
    { value: 'above_30', label: 'Above 30 Lakh' }
  ];

  useEffect(() => {
    setIsBrandsLoading(true);
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/66cac994eeca9633c29171e2';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';

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
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${selectedBrandId}/for/66cac994eeca9633c29171e2`,
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
    setSelectedBrandId(event.target.value);
    setCarModels([]);
    setSelectedModelId('');
    setSelectedModelName('');
  };

  const handleModelChange = (event) => {
    const modelName = carModels?.find(model => model?._id === event.target.value);
    setSelectedModelName(modelName);
    setSelectedModelId(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setSelectedBudget(event.target.value);
  };

  const handleSearch = () => {
    if (searchBy === 'brands' && selectedModelName) {
      const formatUrlPart = (str) => {
        if (typeof str !== 'string') {
          console.error('Expected a string but got:', typeof str);
          return '';
        }
        return str.trim().replace(/\s+/g, '-').toLowerCase();
      };

      const brandName = formatUrlPart(selectedModelName?.carBrand?.brandName);
      const modelName = formatUrlPart(selectedModelName?.modelName);
      localStorage.setItem('model-details', JSON.stringify(selectedModelName));
      router.push(`car/${brandName}/${modelName}`);
    } else if (searchBy === 'budget' && selectedBudget) {
      router.push(`/cars?budget=${selectedBudget}`);
    }
  };

  const handleCarSelect = (car) => {
    const formatUrlPart = (str) => {
      if (typeof str !== 'string') {
        console.error('Expected a string but got:', typeof str);
        return '';
      }
      return str.trim().replace(/\s+/g, '-').toLowerCase();
    };

    if (car.carBrand && car.modelName) {
      const brandName = formatUrlPart(car.carBrand.brandName);
      const modelName = formatUrlPart(car.modelName);
      localStorage.setItem('model-details', JSON.stringify(car));
      router.push(`car/${brandName}/${modelName}`);
    }
  };

  const handlePopularCarClick = (carName) => {
    // Find the car in our models or redirect to search
    const foundModel = carModels.find(model => 
      model.modelName.toLowerCase().includes(carName.toLowerCase())
    );
    
    if (foundModel) {
      handleCarSelect(foundModel);
    } else {
      // Redirect to cars page with search query
      router.push(`/cars?search=${encodeURIComponent(carName)}`);
    }
  };

  return (
    <div className="carwale-style-filter">
      <style jsx>{`
        .carwale-style-filter {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 
            0 35px 100px rgba(10, 35, 87, 0.15),
            0 15px 50px rgba(10, 35, 87, 0.08),
            0 5px 20px rgba(10, 35, 87, 0.05),
            0 0 0 1px rgba(255, 255, 255, 0.8);
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .carwale-style-filter::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(10, 35, 87, 0.15) 50%, transparent 100%);
        }

        .header-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }

        .main-title {
          font-size: 28px;
          font-weight: 800;
          color: #0a2357;
          background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          letter-spacing: -0.8px;
        }

        .city-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6b7280;
          font-size: 14px;
        }

        .city-dropdown {
          background: none;
          border: none;
          color: #374151;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .search-section {
          margin-bottom: 32px;
        }

        .search-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }

        .search-tab {
          padding: 12px 24px;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .search-tab.active {
          background: #10b981;
          color: white;
          border-color: #10b981;
        }

        .search-tab.inactive {
          color: #6b7280;
        }

        .search-tab:hover:not(.active) {
          border-color: #10b981;
          color: #10b981;
        }

        .search-controls {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .dropdown-container {
          flex: 1;
          min-width: 200px;
        }

        .form-select {
          width: 100%;
          padding: 14px 40px 14px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          background: white;
          outline: none;
          transition: all 0.3s ease;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 16px;
        }

        .form-select:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .form-select:disabled {
          background: #f9fafb;
          border-color: #f3f4f6;
          color: #9ca3af;
          cursor: not-allowed;
        }

        .search-button {
          padding: 14px 28px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 120px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .search-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        }

        .search-button:disabled {
          background: #e5e7eb;
          color: #9ca3af;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .popular-cars-section {
          margin-bottom: 32px;
        }

        .popular-cars-scroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding: 4px 0 12px 0;
          scroll-behavior: smooth;
        }

        .popular-cars-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .popular-cars-scroll::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }

        .popular-cars-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        .popular-cars-scroll::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        .car-card {
          min-width: 140px;
          text-align: center;
          padding: 16px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #f1f5f9;
        }

        .car-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border-color: #10b981;
        }

        .car-image {
          width: 80px;
          height: 60px;
          background: #f8fafc;
          border-radius: 8px;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #6b7280;
        }

        .car-name {
          font-size: 12px;
          font-weight: 600;
          color: #374151;
          margin: 0;
        }

        .budget-section {
          text-align: left;
        }

        .section-title {
          font-size: 20px;
          font-weight: 700;
          color: #374151;
          margin-bottom: 16px;
        }

        .budget-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
        }

        .budget-item {
          padding: 16px;
          background: white;
          border: 2px solid #f1f5f9;
          border-radius: 12px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          color: #374151;
        }

        .budget-item:hover {
          border-color: #10b981;
          background: #f0fdf4;
          color: #10b981;
        }

        @media (max-width: 768px) {
          .carwale-style-filter {
            padding: 16px;
            border-radius: 16px;
            margin: 0 8px;
          }

          .header-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 16px;
          }

          .main-title {
            font-size: 20px;
            letter-spacing: -0.4px;
          }

          .city-selector {
            font-size: 12px;
          }

          .search-section {
            margin-bottom: 20px;
          }

          .search-tabs {
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 12px;
          }

          .search-tab {
            padding: 8px 16px;
            font-size: 12px;
            border-radius: 20px;
          }

          .search-controls {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }

          .dropdown-container {
            min-width: auto;
          }

          .form-select {
            padding: 10px 32px 10px 12px;
            font-size: 13px;
            border-radius: 8px;
          }

          .search-button {
            width: 100%;
            margin-top: 4px;
            padding: 10px 20px;
            font-size: 12px;
            border-radius: 8px;
            letter-spacing: 0.3px;
          }

          .car-card {
            min-width: 100px;
            padding: 8px;
          }

          .car-image {
            width: 60px;
            height: 40px;
          }

          .car-name {
            font-size: 10px;
          }

          .budget-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 8px;
          }

          .budget-item {
            padding: 10px;
            font-size: 12px;
          }

          .section-title {
            font-size: 16px;
            margin-bottom: 10px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="header-section">
        <h2 className="main-title">Find Your Perfect Car</h2>
        <div className="city-selector">
          <span>Select Options</span>
          {/* <select 
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.target.value)}
            className="city-dropdown"
          >
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select> */}
          <span>📍</span>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-tabs">
          <button 
            className={`search-tab ${searchBy === 'budget' ? 'active' : 'inactive'}`}
            onClick={() => setSearchBy('budget')}
          >
            By Budget
          </button>
          <button 
            className={`search-tab ${searchBy === 'brands' ? 'active' : 'inactive'}`}
            onClick={() => setSearchBy('brands')}
          >
            By Brand
          </button>
        </div>

        <div className="search-controls">
          {searchBy === 'budget' ? (
            <div className="dropdown-container">
              <select 
                value={selectedBudget}
                onChange={handleBudgetChange}
                className="form-select"
              >
                <option value="">Select Budget Range</option>
                {budgetRanges.map(budget => (
                  <option key={budget.value} value={budget.value}>
                    {budget.label}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <>
              <div className="dropdown-container">
                <select 
                  onChange={handleBrandChange} 
                  value={selectedBrandId}
                  className="form-select"
                >
                  <option value="">{isBrandsLoading ? "Loading..." : "Select Brand"}</option>
                  {carBrands
                    ?.slice()
                    .sort((a, b) => a.brandName.localeCompare(b.brandName))
                    .map(brand => (
                      <option key={brand._id} value={brand._id}>{brand.brandName}</option>
                    ))}
                </select>
              </div>

              <div className="dropdown-container">
                <select 
                  onChange={handleModelChange} 
                  disabled={!selectedBrandId || isModelsLoading}
                  value={selectedModelId}
                  className="form-select"
                >
                  <option value="">{isModelsLoading ? "Loading..." : "Select Model"}</option>
                  {carModels
                    ?.slice()
                    .sort((a, b) => a.modelName.localeCompare(b.modelName))
                    .map(model => (
                      <option key={model._id} value={model._id}>{model.modelName}</option>
                    ))}
                </select>
              </div>
            </>
          )}

          <button
            onClick={handleSearch}
            disabled={(searchBy === 'brands' && !selectedModelId) || (searchBy === 'budget' && !selectedBudget)}
            className="search-button"
          >
            Search Cars
          </button>
        </div>
      </div>

      {/* Popular Cars */}
      {/* <div className="popular-cars-section">
        <div className="popular-cars-scroll">
          {popularCars.map((car, index) => (
            <div 
              key={index} 
              className="car-card"
              onClick={() => handlePopularCarClick(car.name)}
            >
              <div className="car-image">🚗</div>
              <p className="car-name">{car.name}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Cars by Budget */}
      {/* <div className="budget-section">
        <h3 className="section-title">Cars by Budget</h3>
        <div className="budget-grid">
          <div className="budget-item" onClick={() => router.push('/cars?budget=under_5')}>
            1 - 5 Lakh
          </div>
          <div className="budget-item" onClick={() => router.push('/cars?budget=under_10')}>
            5 - 10 Lakh
          </div>
          <div className="budget-item" onClick={() => router.push('/cars?budget=under_15')}>
            10 - 15 Lakh
          </div>
          <div className="budget-item" onClick={() => router.push('/cars?budget=under_20')}>
            15 - 20 Lakh
          </div>
          <div className="budget-item" onClick={() => router.push('/cars?budget=under_25')}>
            20 - 25 Lakh
          </div>
          <div className="budget-item" onClick={() => router.push('/cars?budget=above_25')}>
            Above 25 Lakh
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CarwaleStyleFilter; 