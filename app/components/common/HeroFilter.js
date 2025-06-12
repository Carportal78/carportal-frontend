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
  const [searchBy, setSearchBy] = useState('brand'); // 'brand' or 'budget'
  const [selectedBudget, setSelectedBudget] = useState('');

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
    event.preventDefault();
    setSelectedBrandId(event.target.value);
    setCarModels([]);
    setSelectedModelId('');
    setSelectedModelName('');
  };

  const handleModelChange = (event) => {
    event.preventDefault();
    const modelName = carModels?.find(model => model?._id === event.target.value);
    setSelectedModelName(modelName);
    setSelectedModelId(event.target.value);
  };

  const handleBudgetChange = (event) => {
    event.preventDefault();
    const budgetValue = event.target.value;
    setSelectedBudget(budgetValue);
    
    // Remove automatic redirect - only set the state
  };

  const handleCarDetailsRoute = () => {
    if (searchBy === 'brand' && selectedModelName) {
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
      router.push(`car/${brandName}/${modelName}`);
    } else if (searchBy === 'budget' && selectedBudget) {
      // Redirect to cars page with budget parameter only when search button is clicked
      router.push(`/cars?budget=${selectedBudget}`);
    }
  }

  const budgetRanges = [
    { value: 'under_5', label: '1 - 5 Lakh' },
    { value: 'under_10', label: '5 - 10 Lakh' },
    { value: 'under_15', label: '10 - 15 Lakh' },
    { value: 'under_20', label: '15 - 20 Lakh' },
    { value: 'under_25', label: '20 - 25 Lakh' },
    { value: 'under_30', label: '25 - 30 Lakh' },
    { value: 'above_30', label: 'Above 30 Lakh' }
  ];

  return (
    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-start">
      <style jsx>{`
        .hero-filter-container {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding-left: 24px;
           padding-right: 24px;
           padding-top: 20px;
           padding-bottom: 20px;
          box-shadow: 
            0 20px 60px rgba(10, 35, 87, 0.08),
            0 8px 30px rgba(10, 35, 87, 0.04),
            0 0 0 1px rgba(255, 255, 255, 0.5);
          width: 100%;
          max-width: 360px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .hero-filter-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(10, 35, 87, 0.1) 50%, transparent 100%);
        }

        .hero-header {
          margin-bottom: 20px;
          text-align: center;
        }

        .hero-title {
          font-size: 22px;
          font-weight: 800;
          background: linear-gradient(135deg, #0a2357 0%, #1e3a8a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
          margin: 0;
        }

        .search-tabs {
          margin-bottom: 20px;
        }

        .tabs-container {
          display: flex;
          gap: 4px;
          background: rgba(248, 250, 252, 0.8);
          border-radius: 14px;
          padding: 4px;
          border: 1px solid rgba(226, 232, 240, 0.5);
          backdrop-filter: blur(5px);
        }

        .tab-option {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          border-radius: 10px;
          padding: 10px 16px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          flex: 1;
          border: none;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .tab-option.active {
          background: linear-gradient(135deg, #0a2357 0%, #1e3a8a 100%);
          color: white;
          box-shadow: 
            0 4px 15px rgba(10, 35, 87, 0.3),
            0 2px 8px rgba(10, 35, 87, 0.2);
          transform: translateY(-1px);
        }

        .tab-option.inactive {
          color: #64748b;
          background: transparent;
        }

        .tab-option:hover:not(.active) {
          background: rgba(10, 35, 87, 0.05);
          color: #0a2357;
        }

        .form-section {
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: #374151;
          margin-bottom: 6px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .form-select {
          width: 100%;
          padding: 12px 40px 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          background: rgba(255, 255, 255, 0.9);
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
          color: #374151;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 16px;
        }

        .form-select:focus {
          border-color: #0a2357;
          box-shadow: 
            0 0 0 3px rgba(10, 35, 87, 0.1),
            0 4px 12px rgba(10, 35, 87, 0.08);
          transform: translateY(-1px);
        }

        .form-select:disabled {
          background: #f9fafb !important;
          border-color: #f3f4f6 !important;
          color: #9ca3af !important;
          cursor: not-allowed !important;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e") !important;
          background-position: right 12px center !important;
          background-repeat: no-repeat !important;
          background-size: 16px !important;
          box-shadow: none !important;
          transform: none !important;
        }

        .form-select:disabled:focus {
          border-color: #f3f4f6 !important;
          box-shadow: none !important;
          transform: none !important;
        }

        .search-button {
          width: 100%;
          padding: 14px 24px;
          border: none;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .search-button.enabled {
          background: linear-gradient(135deg, #0a2357 0%, #1e3a8a 100%);
          color: white;
          box-shadow: 
            0 8px 25px rgba(10, 35, 87, 0.25),
            0 4px 15px rgba(10, 35, 87, 0.15);
          cursor: pointer;
        }

        .search-button.enabled:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 12px 35px rgba(10, 35, 87, 0.3),
            0 6px 20px rgba(adva10, 35, 87, 0.2);
        }

        .search-button.enabled:active {
          transform: translateY(0);
        }

        .search-button.disabled {
          background: #e5e7eb;
          color: #9ca3af;
          cursor: not-allowed;
          box-shadow: none;
        }

        .advanced-link {
          text-align: center;
          margin-top: 12px;
        }

        .advanced-button {
          background: none;
          border: none;
          color: #6366f1;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 4px 8px;
          border-radius: 6px;
        }

        .advanced-button:hover {
          color: #4f46e5;
          background: rgba(99, 102, 241, 0.05);
          transform: translateY(-1px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-filter-container {
            max-width: 300px;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 
              0 15px 45px rgba(10, 35, 87, 0.06),
              0 6px 20px rgba(10, 35, 87, 0.03);
          }

          .hero-title {
            font-size: 18px;
          }

          .hero-subtitle {
            font-size: 11px;
          }

          .tab-option {
            font-size: 11px;
            padding: 8px 12px;
          }

          .form-select {
            padding: 10px 35px 10px 14px;
            font-size: 13px;
            border-radius: 10px;
          }

          .search-button {
            padding: 12px 20px;
            font-size: 13px;
            border-radius: 12px;
          }

          .form-group {
            margin-bottom: 14px;
          }

          .form-section {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-filter-container {
            max-width: 280px;
            padding: 16px;
          }

          .hero-title {
            font-size: 16px;
          }

          .hero-subtitle {
            font-size: 10px;
          }
        }
      `}</style>

      <div className="hero-filter-container">
        {/* Header */}
        <div className="hero-header">
          <h3 className="hero-title">Find Your Perfect Car</h3>
          {/* <p className="hero-subtitle">Discover your ideal vehicle today</p> */}
        </div>

        {/* Search Type Tabs */}
        <div className="search-tabs">
          <div className="tabs-container">
            <label className={`tab-option ${searchBy === 'budget' ? 'active' : 'inactive'}`}>
              <input
                type="radio"
                name="searchBy"
                value="budget"
                checked={searchBy === 'budget'}
                onChange={(e) => setSearchBy(e.target.value)}
                style={{ display: 'none' }}
              />
              By Budget
            </label>
            <label className={`tab-option ${searchBy === 'brand' ? 'active' : 'inactive'}`}>
              <input
                type="radio"
                name="searchBy"
                value="brand"
                checked={searchBy === 'brand'}
                onChange={(e) => setSearchBy(e.target.value)}
                style={{ display: 'none' }}
              />
              By Brand
            </label>
          </div>
        </div>

        {/* Form Fields */}
        <div className="form-section">
          {searchBy === 'budget' ? (
            <div className="form-group">
              <label className="form-label">Budget Range</label>
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
              <div className="form-group">
                <label className="form-label">Brand</label>
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

              <div className="form-group">
                <label className="form-label" style={{ 
                  color: (!selectedBrandId || isModelsLoading) ? '#9ca3af' : '#374151' 
                }}>Model</label>
                <select 
                  onChange={handleModelChange} 
                  disabled={!selectedBrandId || isModelsLoading}
                  value={selectedModelId}
                  className="form-select"
                  style={{
                    background: (!selectedBrandId || isModelsLoading) ? '#f9fafb' : 'rgba(255, 255, 255, 0.9)',
                    borderColor: (!selectedBrandId || isModelsLoading) ? '#f3f4f6' : '#e5e7eb',
                    color: (!selectedBrandId || isModelsLoading) ? '#9ca3af' : '#374151',
                    cursor: (!selectedBrandId || isModelsLoading) ? 'not-allowed' : 'pointer'
                  }}
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
        </div>

        {/* Search Button */}
        <button
          onClick={handleCarDetailsRoute}
          disabled={(searchBy === 'brand' && !selectedModelId) || (searchBy === 'budget' && !selectedBudget)}
          className={`search-button ${((searchBy === 'brand' && !selectedModelId) || (searchBy === 'budget' && !selectedBudget)) ? 'disabled' : 'enabled'}`}
        >
          Search Cars
        </button>
      </div>
    </div>
  );
};

export default HeroFilter;
