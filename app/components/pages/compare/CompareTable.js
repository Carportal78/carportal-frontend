"use client";

import { React ,useState,useEffect, use } from "react";
import Image from "next/image";
import "./styles.scss"
import Car from "./car.jpg"
import Select from "react-select";

const CompareTable = () => {
  const [carDetails, setCarDetails] = useState([]);
  // const [selectedMake, setSelectedMake] = useState('');
  // const [selectedModel, setSelectedModel] = useState('');
  // const [selectedVariant, setSelectedVariant] = useState('');
  // const [carbrands, setCarbrands] = useState([]);
  // const [carmodals, setCarmodals] = useState([]);
  // const [carmodalsId, setCarmodalsId] = useState('');
  // const [carbrandsId, setCarbrandsId] = useState('');
  // const [carvariants, setCarvariants] = useState([]);
  // const [compareVaraints, setCompareVariants] = useState([]);
  const dats={
    "carIds": ["6582cd226358c2cb68bc3a37","658310ce01c99e9e9aebdd0c","658316d114223608b85569ba"]
  }

    useEffect(() => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    if (true) {
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carinfo/for/65538448b78add9eaa02d417`,
       {
        method: 'GET',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data  && data?.data) {
          setCarDetails(data?.data);
        }
      })
      .catch(error => {
        console.error('Error fetching car details: ', error);
      })
    }
  },[]);

  // useEffect(() => {
  //   const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
  //   if (true) {
  //     fetch(`https://api.univolenitsolutions.com/v1/automobile/get/compare/carsvariants/for/65538448b78add9eaa02d417`,
  //      {
  //       method: 'POST',
  //       headers: {
  //         'X-API-Key': apiKey,
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(dats) 
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("hey")
  //       if (data  && data.data && data.data.cars) {
  //         setCompareVariants(data.data.cars);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching car models: ', error);
  //     })
  //     .finally(() => setCarbrandsId(''))
  //   }
  // });
  
  // useEffect(() => {
  //   const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
  //   if (carmodalsId) {
  //     fetch(`https://api.univolenitsolutions.com/v1/automobile/from/carmodel/${carmodalsId}/for/65538448b78add9eaa02d417`,
  //      {
  //       method: 'GET',
  //       headers: {
  //         'X-API-Key': apiKey,
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data && data.data && data.data.carVariantList) {
  //         setCarvariants(data.data.carVariantList);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching car models: ', error);
  //     })
  //     .finally(() => setCarbrandsId(''))
  //   }
  // }, [carmodalsId]);

  //   useEffect(() => {
  //     const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
  //     if (carmodalsId) {
  //       fetch(`https://api.univolenitsolutions.com/v1/automobile/carvariants/from/carmodel/${carmodalsId}/for/65538448b78add9eaa02d417`,
  //        {
  //         method: 'GET',
  //         headers: {
  //           'X-API-Key': apiKey,
  //           'Content-Type': 'application/json'
  //         }
  //       })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data && data.data && data.data.carVariantList) {
  //           setCarvariants(data.data.carVariantList);
  //         }
  //       })
  //       .catch(error => {
  //         console.error('Error fetching car models: ', error);
  //       })
  //       .finally(() => setCarbrandsId(''))
  //     }
  //   }, [carmodalsId]);
  
  //   useEffect(() => {
  //     const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
  //     if (carbrandsId) {
  //       fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${carbrandsId}/for/65538448b78add9eaa02d417`,
  //        {
  //         method: 'GET',
  //         headers: {
  //           'X-API-Key': apiKey,
  //           'Content-Type': 'application/json'
  //         }
  //       })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data && data.data && data.data.carModelsList) {
  //           setCarmodals(data.data.carModelsList);
  //         }
  //       })
  //       .catch(error => {
  //         console.error('Error fetching car models: ', error);
  //       })
  //     }
  //   }, [carbrandsId]);
  // useEffect(() => {
  //   const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/65538448b78add9eaa02d417';
  //   const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key

  //   fetch(apiUrl, {
  //     method: 'GET',
  //     headers: {
  //       'X-API-Key': apiKey,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data && data.data && data.data.carBrandsList) {
  //       setCarbrands(data.data.carBrandsList);
  //       //console.log(data.data.carBrandsList)
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data: ', error);
  //   })
  //   //.finally(() => setIsBrandsLoading(false));
  // }, []);
  
  // const [showTable, setShowTable] = useState(false);
  // const [selectedVariants, setSelectedVariants] = useState(Array.from({ length: 3 }, () => null));
  // const [selectedModels, setSelectedModels] = useState(Array.from({ length: 3 }, () => null));
  // const [selectedBrands, setSelectedBrands] = useState(Array.from({ length: 3 }, () => null));
  // const [images, setImages] = useState(Array.from({ length: 3 }, () => '')); // Initialize with empty strings


  // // State for small model inside each div
  // const [showSmallModel, setShowSmallModel] = useState(Array.from({ length: 3 }, () => false));

  // const handleCompareClick = () => {
  //   setShowTable(true);
  // };

  // const handlePlusIconClick = (index) => {
  //   // Toggle the small model state for the specific div
  //   const updatedShowSmallModel = [...showSmallModel];
  //   updatedShowSmallModel[index] = !updatedShowSmallModel[index];
  //   setShowSmallModel(updatedShowSmallModel);
  // };

  // const handleCloseSmallModel = (index) => {
  //   // Close the small model for the specific div
  //   const updatedShowSmallModel = [...showSmallModel];
  //   updatedShowSmallModel[index] = false;
  //   setShowSmallModel(updatedShowSmallModel);
  // };
  // const handleDeleteClick = (index) => {
  //   const updatedImages = [...images];
  //   updatedImages.splice(index, 1);
  //   const updatedVariants = [...selectedVariants];
  //   for(let i=index;i<2;i++){
  //     updatedVariants[i]=updatedImages[i+1]
  //   }
  //   updatedVariants[index] = '';
  //   setSelectedVariants(updatedVariants);
  //   setImages(updatedImages);
  // };
  // const handleVariantChange = (event, index) => {
  //   // Update the selected variant for the specific div
  //   const updatedVariants = [...selectedVariants];
  //   const valuesArray = event.target.value.split(',');
  //   handleCloseSmallModel(index)
  //   updatedVariants[index] = valuesArray[0];
  //   console.log(valuesArray[1])
  //   setSelectedVariants(updatedVariants);
  //   const updatedImages = [...images];
  //   updatedImages[index] = valuesArray[1];
  //   setImages(updatedImages);

  // };
  // const handleBrandChange = (event, index) => {
  //   // Update the selected variant for the specific div
  //   const updatedBrands = [...selectedBrands];
  //   updatedBrands[index] = event.target.value;
  //   setCarbrandsId(event.target.value)
  //   setSelectedBrands(updatedBrands);
  // };
  // const handleModelChange = (event, index) => {
  //   // Update the selected model for the specific div
  //   const updatedModels = [...selectedModels];
  //   updatedModels[index] = event.target.value;
  //   setCarmodalsId(event.target.value)
  //   setSelectedModels(updatedModels);
  // };


  // const handleMakeSelect = (make) => {
  //   setSelectedMake(make)
  // }

  // const handleMakeChange = (event) => {
  //   setSelectedMake(event.target.value);
  //   setSelectedModel('');
  //   setSelectedVariant('');
  // };

  // const handleModelChange = (event) => {
  //   setSelectedModel(event.target.value);
  //   setSelectedVariant('');
  // };

  // const handleVariantChange = (event) => {
  //   setSelectedVariant(event.target.value);
  // };

  // const [cards, setCards] = useState([]);
  // const [activeCard, setActiveCard] = useState(0);

  const defaultState = { make: '', model: '', variant: '', price: '', image: '', isEnabled: true, allFieldsSelected: false }

  const [isEditCard, setIsEditCard] = useState(false)
  const [prevCards, setPrevCards] = useState([
    { make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false },
    { make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false },
    { make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false }
  ])
  const [cards, setCards] = useState([
    { make: '', model: '', variant: '', price: '', image: '', isEnabled: true, allFieldsSelected: false },
    { make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false },
    { make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false }
  ]);

  const handleAddCard = (index) => {
    if (index === 2) {
      const updatedCards = [...cards];
      updatedCards[index] = defaultState
      setCards(updatedCards);
    }
  };

  const getCarImage = (index) => {
    const cardData = cards[index]
    if(cardData.make && cardData.model) {
      const modelImg = carDetails.find((make) => make.brandName === cardData.make)?.models.find((model) => model.modelName === cardData.model)?.modelImage?.[0]?.url
      const updatedCards = [...cards];
      updatedCards[index].image = modelImg;
      setCards(updatedCards);
    }
  }

  const getCarPrice = (index) => {
    const cardData = cards[index]
    if(cardData.make && cardData.model) {
      const modelPrice = carDetails.find((make) => make.brandName === cardData.make)?.models.find((model) => model.modelName === cardData.model).variants.find((variant) => variant.modelName === cardData.name)?.pricingDetails?.exShowroomPrice
      const updatedCards = [...cards];
      updatedCards[index].price = modelPrice;
      setCards(updatedCards);
    }
  }

  const handleMakeChange = (index, value) => {
    const updatedCards = [...cards];
    updatedCards[index].make = value;
    setCards(updatedCards);
  };

  const handleModelChange = (index, value) => {
    const updatedCards = [...cards];
    updatedCards[index].model = value;
    setCards(updatedCards);
    getCarImage(index)
  };

  const handleVariantChange = (index, value) => {
    const updatedCards = [...cards];
    updatedCards[index].variant = value;
    updatedCards[index].allFieldsSelected = true;
    setCards(updatedCards);
    setPrevCards(updatedCards)
    getCarPrice(index)
    setIsEditCard(false)
    if (value !== '') {
      enableNextCard(index);
    }
  };

  const enableNextCard = (index) => {
    const updatedCards = [...cards];
    if (index < updatedCards.length - 1) {
      updatedCards[index + 1].isEnabled = true;
    }
    setCards(updatedCards);
  };

  const handleRemoveCard = (index) => {
    const updatedCards = [...cards];
    updatedCards[index] = defaultState
    setCards(updatedCards);
  };

  const handleCardEdit = (isEdit = false, index) => {
    if(isEdit) {
      setIsEditCard(true)
      const prevCards = [...cards];
      setPrevCards(prevCards)
      const updatedCards = [...cards];
      updatedCards[index] = defaultState;
      setCards(updatedCards)
      return renderCard(updatedCards, 0)
    }
  }

  const handleEditCloseClick = (index) => {
    if(index === cards.length-1) {
      const updatedCards = [...cards]
      updatedCards[index].isEnabled = false
      setCards(updatedCards)
    } else {
      setCards(prevCards);
      setPrevCards(defaultState)
      setIsEditCard(false)
    }
  }

  const renderCarDetails = (index) => {
    return (
      <div>
        <img src={cards[index]?.image} style={{ position: 'relative' }} />
        <div style={{ display:'flex' , flexDirection:'column', alignItems: 'flex-start', padding: '15px', fontWeight: '500'}}>
          <div> {`${cards[index]?.variant}`}
            <i class="fa fa-pen-to-square" style={{ fontSize:'10px', paddingLeft: '10px', cursor: 'pointer'}} onClick={() => handleCardEdit(true, index)}></i>
          </div>
          <div style={{ fontSize: '18px', fontWeight: '600', marginTop: '5px'}}>₹ {Number(cards[index]?.price).toLocaleString('en-IN')}*</div>
          <p style={{ fontSize: '10px', color: 'gray'}}>*Ex-showroom price</p>
        </div>
      </div>
    )
  }

  const renderDefaultCard = (index) => {
    return (
      <>
        <div className="circle" onClick={() => handleAddCard(index)}>
          <i className="fas fa-plus"></i>
        </div>
        <p>Add Car</p>
      </>
    )
  }

  const optionGroup = (index) => {
    if(cards[index]?.make) {
      const modelData = carDetails.find((make) => make.brandName === cards[index]?.make)?.models.find((model) => model.modelName === cards[index]?.model) 
      return modelData[0]?.map(car => ({
        value: car._id,
        label: car.name,
      }))
    }
    else if(cards[index]?.make && cards[index]?.model) {
      const variantData = carDetails.find((make) => make.brandName === cards[index]?.make)?.models.find((model) => model.modelName === cards[index]?.model).variants.find((variant) => variant.modelName === cards[index]?.name)
      return variantData[0]?.map(car => ({
        value: car._id,
        label: car.name,
      }))
    }
    else {
      return carDetails?.map(car => ({
        value: car.brandName,
        label: car?.brandName,
      }))
    }
  }

  const renderCard = (card, index) => {
    return (
      <>
        <div className="card-body" style={{ width: '100%', padding: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {!card.allFieldsSelected && renderDefaultCard()}
          {(isEditCard || index === cards.length-1) && <div style={{ display:"flex", justifyContent: 'flex-end', padding: '5px 8px', fontSize: '16px', cursor: 'pointer', color: '#0d638f', background: 'white', borderRadius: '50%', position: 'absolute', right: '0', zIndex: '1', margin: '3px'}} onClick={() => handleEditCloseClick(index)}><i class="fa fa-xmark"></i></div>}
          {!card.allFieldsSelected && <div className="mb-3" style={{ padding: '10px 20px 0 20px', width: '100%'}}>
            <select id={`make-${index}`} className="form-select" value={card.make} onChange={(e) => handleMakeChange(index, e.target.value)} disabled={!card.isEnabled}>
              <option value="">Select Make</option>
              {carDetails.map((make) => (
                <option key={make.id} value={make.brandName}>{make.brandName}</option>
              ))}
            </select>
            {/*
              <Select
                placeholder="Select Make..."
                value={card.variant}
                onChange={(e) => handleVariantChange(index, e.target.value)}
                disabled={!card.isEnabled}
                options={optionGroup(carDetails, index)}
                className="select2-selection"
              /> */}
          </div>}
          {card.make && !card.allFieldsSelected && (
            <div className="mb-3" style={{ padding: '0 20px', width: '100%'}}>
              <select id={`model-${index}`} className="form-select" value={card.model} onChange={(e) => handleModelChange(index, e.target.value)} disabled={!card.isEnabled}>
                <option value="">Select Model</option>
                {carDetails.find((make) => make.brandName === card.make)?.models.map((model) => (
                  <option key={model.modelId} value={model.modelName}>{model.modelName}</option>
                ))}
              </select>
            </div>
          )}
          {card.model && !card.allFieldsSelected && (
            <div className="mb-3" style={{ padding: '10px 20px 0', width: '100%'}}>
              <select id={`variant-${index}`} className="form-select" value={card.variant} onChange={(e) => handleVariantChange(index, e.target.value)} disabled={!card.isEnabled}>
                <option value="">Select Variant</option>
                {carDetails.find((make) => make.brandName === card.make)?.models.find((model) => model.modelName === card.model)?.variants.map((variant) => (
                  <option key={variant.id} value={variant.name}>{variant.name}</option>
                ))}
              </select>
            </div>
          )}
          {card.allFieldsSelected && renderCarDetails(index)}
        </div>
        {/* {index === 2 && <button className="btn btn-danger mt-3" 
          style={{
            "display": cards[index].isEnabled ? "block" : "none"
          }}
          onClick={() => handleRemoveCard(index)}
        >
          Remove Card</button>} */}
      </>
    )
  }

  const renderCardPage = (card, index) => {
    return (
      <div key={index} className="card" style={{ width: '30%', minHeight: '300px', display:'flex', alignItems: 'center', justifyContent: 'center' }}>
        { cards[index]?.isEnabled ?  renderCard(card, index) : renderDefaultCard(index)}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {cards.map((card, index) => renderCardPage(card, index))}
    </div>
  );

  // return (
  //   <div style={{ display: "flex", "marginTop": "20px" }} >
  //     {cards.map((card, index) => (
  //       <div key={index} className="card" style={{
  //           width: "30%",
  //           height: "auto",
  //           maxHeight: "500px",
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           border: "1px solid #ccc",
  //           marginRight: "10px",
  //           borderRadius: "8px",
  //           position: "relative",
  //           cursor:"pointer" 
  //         }}
  //       >
  //         <div className="card-body" style={{ width: "100%" }}>
  //           <h5 className="card-title">Card {index + 1}</h5>
  //           <div className="mb-2">
  //             <label htmlFor={`make-${index}`} className="form-label">Select Make:</label>
  //             <select id={`make-${index}`} className="form-select" value={card.make} onChange={(e) => handleMakeChange(index, e.target.value)} disabled={index !== activeCard}>
  //               <option value="">Select Make</option>
  //               {carDetails.map((make) => (
  //                 <option key={make.id} value={make.brandName}>{make.brandName}</option>
  //               ))}
  //             </select>
  //           </div>
  //           {card.make && (
  //             <div className="mb-2">
  //               <label htmlFor={`model-${index}`} className="form-label">Select Model:</label>
  //               <select id={`model-${index}`} className="form-select" value={card.model} onChange={(e) => handleModelChange(index, e.target.value)} disabled={index !== activeCard}>
  //                 <option value="">Select Model</option>
  //                 {carDetails.find((make) => make.brandName === card.make)?.models.map((model) => (
  //                   <option key={model.modelId} value={model.modelName}>{model.modelName}</option>
  //                 ))}
  //               </select>
  //             </div>
  //           )}
  //           {card.model && (
  //             <div className="mb-2">
  //               <label htmlFor={`variant-${index}`} className="form-label">Select Variant:</label>
  //               <select id={`variant-${index}`} className="form-select" value={card.variant} onChange={(e) => handleVariantChange(index, e.target.value)} disabled={index !== activeCard}>
  //                 <option value="">Select Variant</option>
  //                 {carDetails.find((make) => make.brandName === card.make)?.models.find((model) => model.modelName === card.model)?.variants.map((variant) => (
  //                   <option key={variant.id} value={variant.name}>{variant.name}</option>
  //                 ))}
  //               </select>
  //             </div>
  //           )}
  //           {card.variant && (
  //             <div>
  //               <p>Price: {card.price}</p>
  //               <img src={card.image} alt="Car" style={{ maxWidth: '100%' }} />
  //             </div>
  //           )}
  //           <button className="btn btn-danger mt-3" onClick={() => handleRemoveCard(index)}>Remove Card</button>
  //         </div>
  //       </div>
  //     ))}
  //       {cards.length < 3 && <div 
  //           style={{
  //             width: "30%",
  //             height: "300px",
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //             border: "1px solid #ccc",
  //             marginRight: "10px",
  //             borderRadius: "8px",
  //             position: "relative",
  //             cursor:"pointer" 
  //           }}
  //         onClick={handleAddCard}>
  //         Add Card</div>
  //       }
  //   </div>
  // );
};

  // return (
  //   <>
  //    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", position: 'relative' }}>
  //       {Array.from({ length: 3 }, (_, index) => (
  //         <div key={index} style={{ flex: "1", marginRight: "10px", position: 'relative' }}>
  //           <div className="membership_header">
  //             <div className="thumb"> 
  //               <div
  //                 style={{
  //                   width: "100%",
  //                   height: "247px",
  //                   display: "flex",
  //                   alignItems: "center",
  //                   justifyContent: "center",
  //                   border: "1px solid #ccc",
  //                   borderRadius: "8px",
  //                   position: "relative",
  //                 }}
  //               >
  //                 {images[index] ? (
  //                   <>
  //                 <Image
  //                   width={307}
  //                   height={247}
  //                   priority
  //                   style={{ objectFit: "cover", borderRadius: "8px", marginBottom: "10px"}}
  //                   className="img-fluid w100"
  //                   src={images[index]}
  //                   alt={`Image ${index}`}
  //                 />
  //                 <a className="dn-991" href="#" onClick={() => handleDeleteClick(index)}>
  //                     <span className="flaticon-trash" />
  //                   </a>
  //                 </>
                  
  //               ) : (
  //                 <span
  //                   onClick={() => handlePlusIconClick(index)}
  //                   style={{
  //                     fontSize: "24px",
  //                     color: "#333",
  //                     cursor: "pointer",
  //                     position: "absolute",
  //                   }}
  //                   //src={}
  //                 >
  //                   +
  //                   </span>
  //               )}
  //               </div>
  //               {showSmallModel[index] && (
  //                   <div className="small-model d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-0 end-0 bottom-0 bg-white p-4 border rounded" style={{  zIndex: 9999 }}>
  //                   <button onClick={() => handleCloseSmallModel(index)} className="btn-close position-absolute top-0 end-0 pr-3 mr8 mt8 bg-transparent" aria-label="Close">   
  //                   </button>
  //                     <select id="make" value={selectedMake} onChange={handleMakeChange} style={{ width: '85%', padding: '10px', marginBottom: '4%',marginTop: '6%', fontSize: '16px',borderRadius: '10px' }}>
  //                       <option value="">Select Make</option>
  //                       {carDetails.map((make) => (
  //                         <option key={make.id} value={make.brandName}>
  //                           {make.brandName}
  //                         </option>
  //                       ))}
  //                     </select>

  //                     {selectedMake && (
  //                         <select id="model" value={selectedModel} onChange={handleModelChange} style={{ width: '85%', padding: '10px', marginBottom: '4%',marginTop: '6%', fontSize: '16px',borderRadius: '10px' }}>
  //                           <option value="">Select Model</option>
  //                           {carDetails.find((make) => make.brandName === selectedMake).models.map((model) => (
  //                             <option key={model.modelId} value={model.modelName}>
  //                               {model.modelName}
  //                             </option>
  //                           ))}
  //                         </select>
  //                     )}

  //                     {selectedModel && (
  //                         <select id="variant" value={selectedVariant} onChange={handleVariantChange} style={{ width: '85%', padding: '10px', marginBottom: '4%',marginTop: '6%', fontSize: '16px',borderRadius: '10px' }}>
  //                           <option value="">Select Variant</option>
  //                           {carDetails
  //                             .find((make) => make.brandName === selectedMake)
  //                             .models.find((model) => model.modelName === selectedModel)
  //                             .variants.map((variant) => (
  //                               <option key={variant.id} value={variant.name}>
  //                                 {variant.name}
  //                               </option>
  //                             ))}
  //                         </select>
  //                     )}
  //                   {/* <select
  //                     id={`brand${index}`}
  //                     name="brand"
  //                     value={selectedMake?.['brandName'] || ''}
  //                     // onChange={(e) => handleMakeSelect(e, index)}
  //                     style={{ width: '85%', padding: '10px', marginBottom: '4%',marginTop: '6%', fontSize: '16px',borderRadius: '10px' }}
  //                   >
  //                     {carDetails.map((make) => (
  //                     <option key={make.brandName} value={make._id}  onSelect={() => handleMakeSelect(make)}>
  //                       {make.brandName}
  //                     </option>
  //                     ))}
  //                   </select>
  //                   <select
  //                     id={`model${index}`}
  //                     name="model"
  //                     value={selectedModels[index] || ''}
  //                     onChange={(e) => handleModelChange(e, index)}
  //                     disabled={!selectedBrands[index]}
  //                     style={{ width: '85%', padding: '10px', marginBottom: '4%',marginTop: '6%', fontSize: '16px', borderRadius: '10px'}}

  //                   >
  //                    {carmodals.map((model) => (
  //                     <option key={model.modelName} value={model._id}>
  //                       {model.modelName}
  //                     </option>
  //                   ))}
  //                   </select>
  //                   <select
  //                     id={`variant${index}`}
  //                     name="variant"
  //                     value={selectedVariants[index] || ''}
  //                     onChange={(e) => handleVariantChange(e, index)}
  //                     disabled={!selectedModels[index]}
  //                     style={{ width: '85%', padding: '10px', marginBottom: '4%',marginTop: '6%', fontSize: '16px',borderRadius: '10px' }}
  //                   >
  //                     {carvariants.map((vars) => (
  //                     <option key={vars.name} value={[vars._id,vars.carModel.media.url]}>
  //                       {vars.name}
  //                     </option>
  //                   ))}
  //                   </select> */}
                
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>

  //     <div className="text-center">
  //       <button
  //         className="btn btn-primary "
  //         style={{ width: "300px", backgroundColor: "#F5C34B", color: "black" }}
  //         onClick={handleCompareClick}
  //       >
  //         Compare
  //       </button>
  //     </div>
  //   </>

  // );

export default CompareTable;