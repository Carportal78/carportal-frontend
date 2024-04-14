"use client";

import { React ,useState,useEffect } from "react";
import Image from "next/image";
const CompareTable = () => {
  const [carbrands, setCarbrands] = useState([]);
  const [carmodals, setCarmodals] = useState([]);
  const [carmodalsId, setCarmodalsId] = useState('');
  const [carbrandsId, setCarbrandsId] = useState('');
  const [carvariants, setCarvariants] = useState([]);
  const [compareVaraints, setCompareVariants] = useState([]);
  const dats={
    "carIds": ["6582cd226358c2cb68bc3a37","658310ce01c99e9e9aebdd0c","658316d114223608b85569ba"]
  }
  useEffect(() => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    if (true) {
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/compare/carsvariants/for/65538448b78add9eaa02d417`,
       {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dats) 
      })
      .then(response => response.json())
      .then(data => {
        console.log("hey")
        if (data  && data.data && data.data.cars) {
          setCompareVariants(data.data.cars);
        }
      })
      .catch(error => {
        console.error('Error fetching car models: ', error);
      })
      .finally(() => setCarbrandsId(''))
    }
  });
  
  useEffect(() => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    if (carmodalsId) {
      fetch(`https://api.univolenitsolutions.com/v1/automobile/from/carmodel/${carmodalsId}/for/65538448b78add9eaa02d417`,
       {
        method: 'GET',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.carVariantList) {
          setCarvariants(data.data.carVariantList);
        }
      })
      .catch(error => {
        console.error('Error fetching car models: ', error);
      })
      .finally(() => setCarbrandsId(''))
    }
  }, [carmodalsId]);

    useEffect(() => {
      const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
      if (carmodalsId) {
        fetch(`https://api.univolenitsolutions.com/v1/automobile/carvariants/from/carmodel/${carmodalsId}/for/65538448b78add9eaa02d417`,
         {
          method: 'GET',
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data && data.data && data.data.carVariantList) {
            setCarvariants(data.data.carVariantList);
          }
        })
        .catch(error => {
          console.error('Error fetching car models: ', error);
        })
        .finally(() => setCarbrandsId(''))
      }
    }, [carmodalsId]);
  
    useEffect(() => {
      const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
      if (carbrandsId) {
        fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${carbrandsId}/for/65538448b78add9eaa02d417`,
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
            setCarmodals(data.data.carModelsList);
          }
        })
        .catch(error => {
          console.error('Error fetching car models: ', error);
        })
      }
    }, [carbrandsId]);
  useEffect(() => {
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
        setCarbrands(data.data.carBrandsList);
        //console.log(data.data.carBrandsList)
      }
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    })
    //.finally(() => setIsBrandsLoading(false));
  }, []);
  
  const [showTable, setShowTable] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState(Array.from({ length: 3 }, () => null));
  const [selectedModels, setSelectedModels] = useState(Array.from({ length: 3 }, () => null));
  const [selectedBrands, setSelectedBrands] = useState(Array.from({ length: 3 }, () => null));
  const [images, setImages] = useState(Array.from({ length: 3 }, () => '')); // Initialize with empty strings


  // State for small model inside each div
  const [showSmallModel, setShowSmallModel] = useState(Array.from({ length: 3 }, () => false));

  const handleCompareClick = () => {
    setShowTable(true);
  };

  const handlePlusIconClick = (index) => {
    // Toggle the small model state for the specific div
    const updatedShowSmallModel = [...showSmallModel];
    updatedShowSmallModel[index] = !updatedShowSmallModel[index];
    setShowSmallModel(updatedShowSmallModel);
  };

  const handleCloseSmallModel = (index) => {
    // Close the small model for the specific div
    const updatedShowSmallModel = [...showSmallModel];
    updatedShowSmallModel[index] = false;
    setShowSmallModel(updatedShowSmallModel);
  };
  const handleDeleteClick = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    const updatedVariants = [...selectedVariants];
    for(let i=index;i<2;i++){
      updatedVariants[i]=updatedImages[i+1]
    }
    updatedVariants[index] = '';
    setSelectedVariants(updatedVariants);
    setImages(updatedImages);
  };
  const handleVariantChange = (event, index) => {
    // Update the selected variant for the specific div
    const updatedVariants = [...selectedVariants];
    const valuesArray = event.target.value.split(',');
    handleCloseSmallModel(index)
    updatedVariants[index] = valuesArray[0];
    console.log(valuesArray[1])
    setSelectedVariants(updatedVariants);
    const updatedImages = [...images];
    updatedImages[index] = valuesArray[1];
    setImages(updatedImages);

  };
  const handleBrandChange = (event, index) => {
    // Update the selected variant for the specific div
    const updatedBrands = [...selectedBrands];
    updatedBrands[index] = event.target.value;
    setCarbrandsId(event.target.value)
    setSelectedBrands(updatedBrands);
  };
  const handleModelChange = (event, index) => {
    // Update the selected model for the specific div
    const updatedModels = [...selectedModels];
    updatedModels[index] = event.target.value;
    setCarmodalsId(event.target.value)
    setSelectedModels(updatedModels);
  };
  return (
    <>
     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", position: 'relative' }}>
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} style={{ flex: "1", marginRight: "10px", position: 'relative' }}>
            <div className="membership_header">
              <div className="thumb">
                
                <div
                  style={{
                    width: "100%",
                    height: "247px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    position: "relative",
                  }}
                >
                  {images[index] ? (
                    <>
                  <Image
                    width={307}
                    height={247}
                    priority
                    style={{ objectFit: "cover", borderRadius: "8px", marginBottom: "10px"}}
                    className="img-fluid w100"
                    src={images[index]}
                    alt={`Image ${index}`}
                  />
                  <a className="dn-991" href="#" onClick={() => handleDeleteClick(index)}>
                      <span className="flaticon-trash" />
                    </a>
                  </>
                  
                ) : (
                  <span
                    onClick={() => handlePlusIconClick(index)}
                    style={{
                      fontSize: "24px",
                      color: "#333",
                      cursor: "pointer",
                      position: "absolute",
                    }}
                    //src={}
                  >
                    +
                    </span>
                )}
                </div>
                {showSmallModel[index] && (
                    <div className="small-model d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-0 end-0 bottom-0 bg-white p-4 border rounded" style={{  zIndex: 9999 }}>
                    <button onClick={() => handleCloseSmallModel(index)} className="btn-close position-absolute top-0 end-0 pr-3 mr8 mt8 bg-transparent" aria-label="Close">   
                    </button>
                    <select
                      id={`brand${index}`}
                      name="brand"
                      value={selectedBrands[index] || ''}
                      onChange={(e) => handleBrandChange(e, index)}
                      style={{ width: '85%', padding: '10px', marginBottom: '4%',marginTop: '6%', fontSize: '16px',borderRadius: '10px' }}
                    >
                      {carbrands.map((brand) => (
                      <option key={brand.brandName} value={brand._id}>
                        {brand.brandName}
                      </option>
                    ))}
                    </select>
                    <select
                      id={`model${index}`}
                      name="model"
                      value={selectedModels[index] || ''}
                      onChange={(e) => handleModelChange(e, index)}
                      disabled={!selectedBrands[index]}
                      style={{ width: '85%', padding: '10px', marginBottom: '4%',marginTop: '6%', fontSize: '16px', borderRadius: '10px'}}

                    >
                     {carmodals.map((model) => (
                      <option key={model.modelName} value={model._id}>
                        {model.modelName}
                      </option>
                    ))}
                    </select>
                    <select
                      id={`variant${index}`}
                      name="variant"
                      value={selectedVariants[index] || ''}
                      onChange={(e) => handleVariantChange(e, index)}
                      disabled={!selectedModels[index]}
                      style={{ width: '85%', padding: '10px', marginBottom: '4%',marginTop: '6%', fontSize: '16px',borderRadius: '10px' }}
                    >
                      {carvariants.map((vars) => (
                      <option key={vars.name} value={[vars._id,vars.carModel.media.url]}>
                        {vars.name}
                      </option>
                    ))}
                    </select>
                
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary "
          style={{ width: "300px", backgroundColor: "#F5C34B", color: "black" }}
          onClick={handleCompareClick}
        >
          Compare
        </button>
      </div>
    </>

  );
};

export default CompareTable;