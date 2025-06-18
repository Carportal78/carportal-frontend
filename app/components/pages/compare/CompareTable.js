"use client";

import { React ,useState,useEffect, use } from "react";
import "./styles.scss"
import { Table } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useAtom } from "jotai";
import { selectSugestedCompareData } from "../../atoms/categoriesAtoms";

const CompareTable = () => {
  const [suggestedCompareData] = useAtom(selectSugestedCompareData);
  const [showAll, setShowAll] = useState({});
  const [carDetails, setCarDetails] = useState([]);
  const defaultState = { id:'', make: '', model: '', variant: '', price: '', image: '', isEnabled: true, allFieldsSelected: false }
  const [compareData, setCompareData] = useState([])
  const [isEditCard, setIsEditCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isCompareLoading, setIsCompareLoading] = useState(false);
  const [prevCards, setPrevCards] = useState( [
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false },
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false },
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false }
  ])
  const [cards, setCards] = useState(suggestedCompareData?.length ? [...suggestedCompareData, ...prevCards.slice(0, 3 - suggestedCompareData.length)] : [
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: true, allFieldsSelected: false },
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false },
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false }
  ]);

  const comparisonCards = [
    "Basic Information",
    "Engine and Transmission",
    "Fuel & Performance",
    "Suspension, Steering & Brakes",
    "Dimension & Capacity",
    "Comfort & Convinience",
    "Interior",
    "Exterior",
    "Safety",
    "Entertainment and Communication"]

  const idsArray = cards
  ?.filter(car => car.id !== "")
  ?.map(car => car.id); 
  
  useEffect(() => {
    const data = localStorage?.getItem('compare-data');
    if(data) {
      setCarDetails(JSON.parse(data))
    }
     else {
      const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
      if (true) {
        setIsLoading(true)
        fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carinfo/for/66cac994eeca9633c29171e2`,
        {
          method: 'GET',
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          setIsLoading(false)
          if (data  && data?.data) {
            setCarDetails(data?.data);
            localStorage.setItem('compare-data', JSON.stringify(data?.data)); 
          }
        })
        .catch(error => {
          setIsLoading(false)
          console.error('Error fetching car details: ', error);
        })
      }
     }
  },[]);

  const handleOnCompareClick = () => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    const selectedCarIds = {
      "carIds": idsArray
    }
    if (true) {
      setIsCompareLoading(true)
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/compare/carsvariants/for/66cac994eeca9633c29171e2`,
       {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedCarIds) 
      })
      .then(response => response.json())
      .then(data => {
        setIsCompareLoading(false)
        if (data  && data.data && data.data.cars) {
          setCompareData(data.data.cars);
        }
      })
      .catch(error => {
        setIsCompareLoading(false)
        console.error('Error fetching car models: ', error);
      })
    }
  };

  useEffect(() => {
    if(suggestedCompareData.length > 0) {
      function checkNonEmptyIds(arr) {
        return arr.filter(obj => obj.id !== '').length >= 2;
      }
      const check = checkNonEmptyIds(suggestedCompareData)
      console.log(check)
      if(check) {
        handleOnCompareClick()
      }
    }
  }, [])

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
      const modelPrice = carDetails.find((make) => make.brandName === cardData.make)?.models.find((model) => model.modelName === cardData.model).variants.find((variant) => variant.name === cardData.variant)?.pricingDetails?.exShowroomPrice
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

  const handleVariantChange = (index, value, id) => {
    const updatedCards = [...cards];
    updatedCards[index].variant = value;
    updatedCards[index].allFieldsSelected = true;
    updatedCards[index].id = id
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

  const handleCardEdit = (isEdit = false, index) => {
    if(isEdit) {
      setIsEditCard(true)
      const prevCards = [...cards];
      setPrevCards(prevCards)
      const updatedCards = [...cards];
      updatedCards[index] = {
        ...cards[index],
        allFieldsSelected: false,
        isEnabled: true
      };
      setCards(updatedCards)
    }
  }

  const handleEditCloseClick = (index) => {
    if(index === cards?.length-1) {
      const updatedCards = [...cards]
      updatedCards[index] = defaultState
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
      <div key={`car-details-${index}`}>
        <div className="car-image-container">
          <img src={cards[index]?.image} />
        </div>
        <div className="car-details-section">
          <div className="car-variant-name"> 
            {`${cards[index]?.variant}`}
            <i className="fa fa-pen-to-square" onClick={() => handleCardEdit(true, index)}></i>
          </div>
          <div className="car-price">₹ {Number(cards[index]?.price).toLocaleString('en-IN')}*</div>
          <p className="car-price-note">*Ex-showroom price</p>
        </div>
      </div>
    )
  }

  const renderDefaultCard = (index) => {
    return (
      <div className="default-car-card">
        <div className="circle" onClick={() => handleAddCard(index)}>
          <i className="fas fa-plus"></i>
        </div>
        <p className="add-car-text">Add Car</p>
          </div>
    )
  }

  function convertKeysToLowercase(obj) {
    const newObject = {};
    Object.keys(obj).forEach(key => {
        newObject[key.toLowerCase()] = obj[key];
    });
    return Object.keys(newObject);
  }

  function formatComparisonLabel (key) {
    return key.replace(/\s/g, '').replace(/,/g, 'and').replace(/&/g, 'and')
  }

  function checkItemsInObject(carObject) {
    const presentItems = [];
    const carObjectkeys = convertKeysToLowercase(carObject)
    for (const key of comparisonCards) {
      const modifiedKey = formatComparisonLabel(key);
      if (carObjectkeys.includes(modifiedKey.toLowerCase())) {
        presentItems.push(key);
      }
    }
    return presentItems;
  }

  const renderTableHeaderIcon = (label) => {
    switch(label) {
      case 'Basic Information': return <i class="fa-solid fa-grip-vertical" style={{marginRight:'10px'}}></i>
      case 'Engine and Transmission': return <i class="fa-solid fa-feather-pointed" style={{marginRight:'10px'}}></i>
      case 'Fuel & Performance': return <i class="fa-solid fa-gas-pump" style={{marginRight:'10px'}}></i>
      case 'Suspension, Steering & Brakes': return <i class="fa-solid fa-dharmachakra" style={{marginRight:'10px'}}></i>
      case 'Dimension & Capacity': return <i class="fa-solid fa-ruler-combined" style={{marginRight:'10px'}}></i>
      case 'Interior': return <i class="fa-solid fa-feather-pointed" style={{marginRight:'10px'}}></i>
      case 'Exterior': return <i class="fa-solid fa-car-side" style={{marginRight:'10px'}}></i>
      case 'Comfort & Convinience': return <i class="fa-solid fa-user-shield" style={{marginRight:'10px'}}></i>
      case 'Entertainment and Communication': return <i class="fa-solid fa-radio" style={{marginRight:'10px'}}></i>
      case 'Safety': return <i class="fa-solid fa-user-shield" style={{marginRight:'10px'}}></i>
      default:  return <></>
    }
  }

  function sliceObjectByIndex(obj, startIndex, endIndex) {
    if(obj) {
      const keys = Object.keys(obj);
      const selectedKeys = keys.slice(startIndex, endIndex + 1);
      return Object.fromEntries(
          selectedKeys?.map(key => [key, obj[key]])
      );
    }
  }

  // Helper function to format cell data with icons for boolean values
  const formatCellData = (cellData) => {
    // Check if the data is a boolean or boolean-like string
    if (typeof cellData === 'boolean') {
      return cellData ? (
        <span className="boolean-indicator">
          <i className="fas fa-check tick-icon"></i>
        </span>
      ) : (
        <span className="boolean-indicator">
          <i className="fas fa-times cross-icon"></i>
        </span>
      );
    }
    
    // Check for string representations of boolean values
    if (typeof cellData === 'string') {
      const lowerData = cellData.toLowerCase().trim();
      if (lowerData === 'true' || lowerData === 'yes' || lowerData === 'y') {
        return (
          <span className="boolean-indicator">
            <i className="fas fa-check tick-icon"></i>
          </span>
        );
      }
      if (lowerData === 'false' || lowerData === 'no' || lowerData === 'n') {
        return (
          <span className="boolean-indicator">
            <i className="fas fa-times cross-icon"></i>
          </span>
        );
      }
    }
    
    // Return original data if not boolean
    return cellData || '-';
  };

  function comparisonCardDataMapper(label){
    if(label) {
      const key = formatComparisonLabel(label).toLowerCase();
      const displayLimit = 5; // Number of items to show initially
      
      // Get full data for each section
      const compareCarBasicInfo = compareData[0]?.basicInformation;
      const compareCarEngineAndTransmission = compareData[0]?.engineAndTransmission;
      const compareCarFuelAndPerformance = compareData[0]?.fuelAndPerformance;
      const compareCarSuspensionAndSteeringAndBrakes = compareData[0]?.suspensionAndSteeringAndBrakes;
      const compareCarDimensionAndCapacity = compareData[0]?.dimensionAndCapacity;
      const compareCarInterior = compareData[0]?.interior;
      const compareCarExterior = compareData[0]?.exterior;
      const compareCarSafety = compareData[0]?.safety;
      const compareCarComfortAndConvinience = compareData[0]?.comfortAndConvinience;
      const compareCarEntertainmentAndCommunication = compareData[0]?.entertainmentAndCommunication;

      // Determine which data to use based on key and showAll state
      let currentData = null;
      let hasMoreData = false;

      switch(key) {
        case 'basicinformation':
          currentData = compareCarBasicInfo;
          hasMoreData = currentData && Object.keys(currentData).length > displayLimit;
          currentData = showAll[key] ? currentData : sliceObjectByIndex(currentData, 0, displayLimit - 1);
          break;
        case 'engineandtransmission':
          currentData = compareCarEngineAndTransmission;
          hasMoreData = currentData && Object.keys(currentData).length > displayLimit;
          currentData = showAll[key] ? currentData : sliceObjectByIndex(currentData, 0, displayLimit - 1);
          break;
        case 'fuelandperformance':
          currentData = compareCarFuelAndPerformance;
          hasMoreData = currentData && Object.keys(currentData).length > displayLimit;
          currentData = showAll[key] ? currentData : sliceObjectByIndex(currentData, 0, displayLimit - 1);
          break;
        case 'suspensionandsteeringandbrakes':
          currentData = compareCarSuspensionAndSteeringAndBrakes;
          hasMoreData = currentData && Object.keys(currentData).length > displayLimit;
          currentData = showAll[key] ? currentData : sliceObjectByIndex(currentData, 0, displayLimit - 1);
          break;
        case 'dimensionandcapacity':
          currentData = compareCarDimensionAndCapacity;
          hasMoreData = currentData && Object.keys(currentData).length > displayLimit;
          currentData = showAll[key] ? currentData : sliceObjectByIndex(currentData, 0, displayLimit - 1);
          break;
        case 'interior':
          currentData = compareCarInterior;
          hasMoreData = currentData && Object.keys(currentData).length > displayLimit;
          currentData = showAll[key] ? currentData : sliceObjectByIndex(currentData, 0, displayLimit - 1);
          break;
        case 'exterior':
          currentData = compareCarExterior;
          hasMoreData = currentData && Object.keys(currentData).length > displayLimit;
          currentData = showAll[key] ? currentData : sliceObjectByIndex(currentData, 0, displayLimit - 1);
          break;
        case 'safety':
          currentData = compareCarSafety;
          hasMoreData = currentData && Object.keys(currentData).length > displayLimit;
          currentData = showAll[key] ? currentData : sliceObjectByIndex(currentData, 0, displayLimit - 1);
          break;
        case 'comfortandconvinience':
          currentData = compareCarComfortAndConvinience;
          hasMoreData = currentData && Object.keys(currentData).length > displayLimit;
          currentData = showAll[key] ? currentData : sliceObjectByIndex(currentData, 0, displayLimit - 1);
          break;
        case 'entertainmentandcommunication':
          currentData = compareCarEntertainmentAndCommunication;
          hasMoreData = currentData && Object.keys(currentData).length > displayLimit;
          currentData = showAll[key] ? currentData : sliceObjectByIndex(currentData, 0, displayLimit - 1);
          break;
      }

      return (
        <>
          <div className="table-container" style={{'--car-count': compareData.length}}>
            <div className="compare-table-wrapper">
        <Table striped hover className="compare-table" key={label}>
          <thead>
              <tr>
                      <th className="compare-th th-style">
                  {renderTableHeaderIcon(label)}
                  {label}
                </th>
                {compareData?.map((data, index) => {
                  return (
                          <th className="compare-th" key={`compare-data-${index}`}>{data.name}</th>
                  )
                })}
              </tr>
          </thead>
          <tbody>
                    {currentData && Object.keys(currentData)?.map((infoKey, index) => (
                <tr key={`infoKey-${index}`}>
                        <td className="compare-td td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                        {compareData?.map((car, carIndex) => {
                          let cellData = '';
                          switch(key) {
                            case 'basicinformation':
                              cellData = car.basicInformation?.[infoKey];
                              break;
                            case 'engineandtransmission':
                              cellData = car.engineAndTransmission?.[infoKey];
                              break;
                            case 'fuelandperformance':
                              cellData = car.fuelAndPerformance?.[infoKey];
                              break;
                            case 'suspensionandsteeringandbrakes':
                              cellData = car.suspensionAndSteeringAndBrakes?.[infoKey];
                              break;
                            case 'dimensionandcapacity':
                              cellData = car.dimensionAndCapacity?.[infoKey];
                              break;
                            case 'interior':
                              cellData = car.interior?.[infoKey];
                              break;
                            case 'exterior':
                              cellData = car.exterior?.[infoKey];
                              break;
                            case 'safety':
                              cellData = car.safety?.[infoKey];
                              break;
                            case 'comfortandconvinience':
                              cellData = car.comfortAndConvinience?.[infoKey];
                              break;
                            case 'entertainmentandcommunication':
                              cellData = car.entertainmentAndCommunication?.[infoKey];
                              break;
                            default:
                              cellData = '';
                          }
                          return (
                            <td className="compare-td" key={`${car._id}-${infoKey}-${carIndex}`}>
                              {formatCellData(cellData)}
                            </td>
                          )
                        })}
                </tr>
              ))}
          </tbody>
              </Table>
            </div>
          </div>
          {hasMoreData && (
            <div className="read-more-container">
              <Button id={label} variant="link" onClick={() => setShowAll({...showAll, [key]: !showAll[key]})} className="compare-table-button">
                {showAll[key] ? "Read Less" : "Read More"}
              </Button>
            </div>
          )}
        </>
      )
    }

  }

  const renderComparison = () => {
    let comparisonItemsPresent = []
    for (const car of compareData) {
      comparisonItemsPresent = checkItemsInObject(car);
    }
    
    return (
        compareData.length > 0 && comparisonItemsPresent?.map((val, index) => (
          <div className="compare-card" key={`compare-data-card-${index}`}>
          {comparisonCardDataMapper(val)}
        </div> 
      ))
    )
  }

  const renderCard = (card, index) => {
    return (
      <>
        <div key={`card-body-${index}`} className="card-body">
          {!card.allFieldsSelected && renderDefaultCard(index)}
          {(isEditCard || index === cards.length-1) && 
            <div className="close-button" onClick={() => handleEditCloseClick(index)}>
              <i className="fa fa-xmark"></i>
            </div>
          }
          {!card.allFieldsSelected && (
            <div className="form-container">
              <select 
                id={`make-${index}`} 
                className="form-select" 
                value={card.make} 
                onChange={(e) => handleMakeChange(index, e.target.value)} 
                disabled={!card.isEnabled}
              >
                <option value="">Select Make</option>
                {carDetails?.map((make) => (
                  <option key={make.id} value={make.brandName}>{make.brandName}</option>
                ))}
              </select>
              
              {card.make && (
                <select 
                  id={`model-${index}`} 
                  className="form-select" 
                  value={card.model} 
                  onChange={(e) => handleModelChange(index, e.target.value)} 
                  disabled={!card.isEnabled}
                >
                  <option value="">Select Model</option>
                  {carDetails.find((make) => make.brandName === card.make)?.models?.map((model) => (
                    <option key={model.modelId} value={model.modelName}>{model.modelName}</option>
                  ))}
                </select>
              )}
              
              {card.model && (
                <select 
                  id={`variant-${index}`} 
                  className="form-select" 
                  value={card.variant} 
                  onChange={(e) => handleVariantChange(index, e.target.value, e.target.options[e.target.selectedIndex].id)} 
                  disabled={!card.isEnabled}
                >
                  <option value="">Select Variant</option>
                  {carDetails.find((make) => make.brandName === card.make)?.models.find((model) => model.modelName === card.model)?.variants?.map((variant) => (
                    <option key={variant.id} value={variant.name} id={variant.id}>{variant.name}</option>
                  ))}
                </select>
              )}
            </div>
          )}
          {card.allFieldsSelected && renderCarDetails(index)}
        </div>
      </>
    )
  }

  const renderCardPage = (card, index) => {
    return (
      <div key={`card-page-${index}`} className="card">
        { cards[index]?.isEnabled ?  renderCard(card, index) : renderDefaultCard(index)}
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <Spinner className="d-flex" style={{marginLeft: 'auto', marginRight: 'auto'}} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    isLoading ?  renderLoading()
    :
    <div style={{ width: "100%" }}>
      <div className="car-selection-container">
        <div className="car-cards-wrapper">
          {cards?.map((card, index) => renderCardPage(card, index))}
        </div>
      </div>
      <div className="compare-button-container">
        <button className="btn btn-thm ofr_btn1 btn-block" data-bs-toggle="modal" data-bs-target="#compareForm" onClick={handleOnCompareClick} disabled={idsArray.length <2}>
          <span className="flaticon-profit-report mr10 fz18 vam" />
          Compare Cars
        </button>
      </div>
      {isCompareLoading ? renderLoading() : renderComparison()}
    </div>
  );

};

export default CompareTable;