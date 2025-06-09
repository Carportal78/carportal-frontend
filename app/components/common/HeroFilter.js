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
    { value: 'under_5', label: 'Under ₹5 Lakh' },
    { value: 'under_10', label: 'Under ₹10 Lakh' },
    { value: 'under_15', label: 'Under ₹15 Lakh' },
    { value: 'under_20', label: 'Under ₹20 Lakh' },
    { value: 'under_25', label: 'Under ₹25 Lakh' },
    { value: 'under_30', label: 'Under ₹30 Lakh' },
    { value: 'above_30', label: 'Above ₹30 Lakh' }
  ];

  return (
    <div className="col-lg-4 d-flex">
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 25px rgba(0, 0, 0, 0.06)',
        width: '100%',
        maxWidth: '380px',
        border: '1px solid #f0f1f3',
        background: 'linear-gradient(145deg, #ffffff 0%, #fafbfc 100%)'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '18px' }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '2px',
            textAlign: 'left',
            letterSpacing: '-0.5px',
            lineHeight: '1.3'
          }}>
            Find your right car
          </h3>
          <p style={{
            fontSize: '13px',
            color: '#64748b',
            margin: '0',
            fontWeight: '400'
          }}>
            Discover your perfect vehicle today
          </p>
        </div>

        {/* Search Type Radio Buttons */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ 
            display: 'flex', 
            gap: '4px',
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            padding: '4px',
            border: '1px solid #e2e8f0'
          }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: '600',
              color: searchBy === 'budget' ? '#ffffff' : '#64748b',
              backgroundColor: searchBy === 'budget' ? '#3b82f6' : 'transparent',
              borderRadius: '9px',
              padding: '8px 14px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              flex: '1',
              border: 'none',
              textAlign: 'center'
            }}>
              <input
                type="radio"
                name="searchBy"
                value="budget"
                checked={searchBy === 'budget'}
                onChange={(e) => setSearchBy(e.target.value)}
                style={{
                  display: 'none'
                }}
              />
              By Budget
            </label>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: '600',
              color: searchBy === 'brand' ? '#ffffff' : '#64748b',
              backgroundColor: searchBy === 'brand' ? '#3b82f6' : 'transparent',
              borderRadius: '9px',
              padding: '8px 14px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              flex: '1',
              border: 'none',
              textAlign: 'center'
            }}>
              <input
                type="radio"
                name="searchBy"
                value="brand"
                checked={searchBy === 'brand'}
                onChange={(e) => setSearchBy(e.target.value)}
                style={{
                  display: 'none'
                }}
              />
              By Brand
            </label>
          </div>
        </div>

        {/* Search Fields */}
        <div style={{ marginBottom: '20px' }}>
          {searchBy === 'budget' ? (
            <div style={{ marginBottom: '12px' }}>
              <label style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '6px',
                letterSpacing: '0.5px'
              }}>
                BUDGET RANGE
              </label>
              <select 
                value={selectedBudget}
                onChange={handleBudgetChange}
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '14px',
                  backgroundColor: '#ffffff',
                  outline: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontWeight: '500',
                  color: '#374151',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 12px center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '16px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                }}
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
              {/* Brand Selection */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '6px',
                  letterSpacing: '0.5px'
                }}>
                  BRAND
                </label>
                <select 
                  onChange={handleBrandChange} 
                  value={selectedBrandId}
                  style={{
                    width: '100%',
                    padding: '12px 40px 12px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '14px',
                    backgroundColor: '#ffffff',
                    outline: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontWeight: '500',
                    color: '#374151',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 12px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                  }}
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

              {/* Model Selection */}
              <div style={{ marginBottom: '12px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '11px',
                  fontWeight: '600',
                  color: (!selectedBrandId || isModelsLoading) ? '#9ca3af' : '#374151',
                  marginBottom: '6px',
                  letterSpacing: '0.5px'
                }}>
                  MODEL
                </label>
                <select 
                  onChange={handleModelChange} 
                  disabled={!selectedBrandId || isModelsLoading}
                  value={selectedModelId}
                  style={{
                    width: '100%',
                    padding: '12px 40px 12px 16px',
                    border: `2px solid ${(!selectedBrandId || isModelsLoading) ? '#f3f4f6' : '#e5e7eb'}`,
                    borderRadius: '12px',
                    fontSize: '14px',
                    backgroundColor: (!selectedBrandId || isModelsLoading) ? '#f9fafb' : '#ffffff',
                    outline: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontWeight: '500',
                    color: (!selectedBrandId || isModelsLoading) ? '#9ca3af' : '#374151',
                    cursor: (!selectedBrandId || isModelsLoading) ? 'not-allowed' : 'pointer',
                    boxShadow: (!selectedBrandId || isModelsLoading) ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.05)',
                    appearance: 'none',
                    backgroundImage: (!selectedBrandId || isModelsLoading) 
                      ? `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`
                      : `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 12px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px'
                  }}
                  onFocus={(e) => {
                    if (!e.target.disabled) {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }
                  }}
                  onBlur={(e) => {
                    if (!e.target.disabled) {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                    }
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
          style={{
            width: '100%',
            padding: '14px 24px',
            backgroundColor: ((searchBy === 'brand' && !selectedModelId) || (searchBy === 'budget' && !selectedBudget)) ? '#e5e7eb' : '#3b82f6',
            color: ((searchBy === 'brand' && !selectedModelId) || (searchBy === 'budget' && !selectedBudget)) ? '#9ca3af' : '#ffffff',
            border: 'none',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: ((searchBy === 'brand' && !selectedModelId) || (searchBy === 'budget' && !selectedBudget)) ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            marginBottom: '16px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            boxShadow: ((searchBy === 'brand' && !selectedModelId) || (searchBy === 'budget' && !selectedBudget)) ? 'none' : '0 4px 12px rgba(59, 130, 246, 0.2)'
          }}
          onMouseEnter={(e) => {
            if (!((searchBy === 'brand' && !selectedModelId) || (searchBy === 'budget' && !selectedBudget))) {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (!((searchBy === 'brand' && !selectedModelId) || (searchBy === 'budget' && !selectedBudget))) {
              e.target.style.backgroundColor = '#3b82f6';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.2)';
            }
          }}
        >
          Search
        </button>

        {/* Advanced Search Link */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => router.push('/cars')}
            style={{
              background: 'none',
              border: 'none',
              color: '#6366f1',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#4f46e5';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#6366f1';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Advanced Search →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
