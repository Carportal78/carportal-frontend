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
  const [showAll, setShowAll] = useState(false);
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
    { id: '', make: '', model: '', variant: 'Renault Kiger RXE', price: '', image: '', isEnabled: false, allFieldsSelected: false },
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
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/compare/carsvariants/for/65538448b78add9eaa02d417`,
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
      updatedCards[index] = defaultState;
      setCards(updatedCards)
      return renderCard(updatedCards, 0)
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
    console.log('cqrds data ', cards[index]);
    return (
      <div key={`car-details-${index}`}>
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
        <div>
        </div>

          <div key={`default-card-${index}`} className="circle" onClick={() => handleAddCard(index)}>
            <i className="fas fa-plus"></i>
          </div>
          <p key={index}>Add Car</p>
        </>
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

  function comparisonCardDataMapper(label){
    if(label) {
      const key = formatComparisonLabel(label).toLowerCase();
      const compareCarBasicInfo = compareData[0]?.basicInformation;
      const compareCarEngineAndTransmission = showAll ? compareData[0]?.engineAndTransmission : sliceObjectByIndex(compareData[0]?.engineAndTransmission, 0, 4) ;
      const compareCarFuelAndPerformance = showAll ? compareData[0]?.fuelAndPerformance : sliceObjectByIndex(compareData[0]?.fuelAndPerformance, 0, 4) ;
      const compareCarSuspensionAndSteeringAndBrakes = showAll ? compareData[0]?.suspensionAndSteeringAndBrakes : sliceObjectByIndex(compareData[0]?.suspensionAndSteeringAndBrakes, 0, 4) ;
      const compareCarDimensionAndCapacity = showAll ? compareData[0]?.dimensionAndCapacity : sliceObjectByIndex(compareData[0]?.dimensionAndCapacity, 0, 4) ;
      const compareCarInterior = showAll ? compareData[0]?.interior : sliceObjectByIndex(compareData[0]?.interior, 0, 4) ;
      const compareCarExterior = showAll ? compareData[0]?.exterior : sliceObjectByIndex(compareData[0]?.exterior, 0, 4) ;
      const compareCarSafety = showAll ? compareData[0]?.safety : sliceObjectByIndex(compareData[0]?.safety, 0, 4) ;
      const compareCarComfortAndConvinience = showAll ? compareData[0]?.comfortAndConvinience : sliceObjectByIndex(compareData[0]?.comfortAndConvinience, 0, 4) ;
      const compareCarEntertainmentAndCommunication = showAll ? compareData[0]?.entertainmentAndCommunication : sliceObjectByIndex(compareData[0]?.entertainmentAndCommunication, 0, 4) ;

      return (
        <Table striped hover className="compare-table" key={label}>
          <thead>
              <tr>
                <th className="compare-th th-font th-style">
                  {renderTableHeaderIcon(label)}
                  {label}
                </th>
                {compareData?.map((data, index) => {
                  return (
                    <th className="compare-th th-font" key={`compare-data-${index}`}>{data.name}</th>
                  )
                })}
              </tr>
          </thead>
          <tbody>
              {key === 'basicinformation' && Object.keys(compareCarBasicInfo)?.map((infoKey, index) => (
                <tr key={`infoKey-${index}`}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {compareData?.map((car, index) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}-${index}`}>{ car.basicInformation[infoKey] ? car.basicInformation[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'engineandtransmission' && Object.keys(compareCarEngineAndTransmission)?.map((infoKey, index) => (
                <tr key={`infoKey-${index}`}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {compareData?.map((car, index) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}-${index}`}>{car.engineAndTransmission[infoKey] ? car.engineAndTransmission[infoKey]: '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'fuelandperformance' && Object.keys(compareCarFuelAndPerformance)?.map((infoKey, index) => (
                <tr key={`infoKey-${index}`}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {compareData?.map((car, index) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}-${index}`}>{car.fuelAndPerformance[infoKey] ? car.fuelAndPerformance[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'suspensionandsteeringandbrakes' && Object.keys(compareCarSuspensionAndSteeringAndBrakes)?.map((infoKey, index) => (
                <tr key={`infoKey-${index}`}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {compareData?.map((car, index) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}-${index}`}>{car.suspensionAndSteeringAndBrakes[infoKey] ? car.suspensionAndSteeringAndBrakes[infoKey]: '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'dimensionandcapacity' && Object.keys(compareCarDimensionAndCapacity)?.map((infoKey, index) => (
                <tr key={`infoKey-${index}`}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {compareData?.map((car, index) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}-${index}`}>{car.dimensionAndCapacity[infoKey] ? car.dimensionAndCapacity[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'interior' && Object.keys(compareCarInterior)?.map((infoKey, index) => (
                <tr key={`infoKey-${index}`}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {compareData?.map((car, index) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}-${index}`}>{car.interior[infoKey] ? car.interior[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'exterior' && Object.keys(compareCarExterior)?.map((infoKey, index) => (
                <tr key={`infoKey-${index}`}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {compareData?.map((car, index) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}-${index}`}>{car.exterior[infoKey] ? car.exterior[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}

              {key === 'comfortandconvinience' && Object.keys(compareCarComfortAndConvinience)?.map((infoKey, index) => (
                <tr key={`infoKey-${index}`}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {compareData?.map((car, index) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}-${index}`}>{car.comfortAndConvinience[infoKey] ? car.comfortAndConvinience[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}

              {key === 'safety' && Object.keys(compareCarSafety)?.map((infoKey, index) => (
                  <tr key={`infoKey-${index}`}>
                    <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                    {compareData?.map((car, index) => (
                      <td className="compare-td td-font" key={`${car._id}-${infoKey}-${index}`}>{car.safety[infoKey]}</td>
                    ))}
                  </tr>
              ))}

              {key === 'entertainmentandcommunication' && Object.keys(compareCarEntertainmentAndCommunication)?.map((infoKey, index) => (
                <tr key={`infoKey-${index}`}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {compareData?.map((car, index) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}-${index}`}>{car.entertainmentAndCommunication[infoKey]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
          <Button id={label} variant="link" onClick={() => setShowAll(!showAll)} value={ showAll.length ? 'Read Less': 'Read More'} className="compare-table-button">
                {showAll ? "Read Less" : "Read More"}
          </Button>
        </Table>
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
          <div className="compare-card" style={{ width: '100%', height: 'auto', margin: '50px 0px'}} key={`compare-data-card-${index}`}>
          {comparisonCardDataMapper(val)}
        </div> 
      ))
    )
  }

  const renderCard = (card, index) => {
    return (
      <>
        <div key={`card-body-${index}`} className="card-body" style={{ width: '100%', padding: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {!card.allFieldsSelected && renderDefaultCard(index)}
          {(isEditCard || index === cards.length-1) && 
            <div style={{ display:"flex", justifyContent: 'flex-end', padding: '5px 8px', fontSize: '16px', cursor: 'pointer', color: '#0d638f', background: 'white', borderRadius: '50%', position: 'absolute', right: '0', top: '0', zIndex: '1', margin: '3px'}} 
              onClick={() => handleEditCloseClick(index)}>
              <i class="fa fa-xmark"></i>
            </div>
          }
          {!card.allFieldsSelected && <div className="mb-3" style={{ padding: '10px 20px 0 20px', width: '100%'}}>
            <select id={`make-${index}`} className="form-select" value={card.make} onChange={(e) => handleMakeChange(index, e.target.value)} disabled={!card.isEnabled}>
              <option value="">Select Make</option>
              {carDetails?.map((make) => (
                <option key={make.id} value={make.brandName}>{make.brandName}</option>
              ))}
            </select>
          </div>}
          {card.make && !card.allFieldsSelected && (
            <div className="mb-3" style={{ padding: '0 20px', width: '100%'}}>
              <select id={`model-${index}`} className="form-select" value={card.model} onChange={(e) => handleModelChange(index, e.target.value)} disabled={!card.isEnabled}>
                <option value="">Select Model</option>
                {carDetails.find((make) => make.brandName === card.make)?.models?.map((model) => (
                  <option key={model.modelId} value={model.modelName}>{model.modelName}</option>
                ))}
              </select>
            </div>
          )}
          {card.model && !card.allFieldsSelected && (
            <div className="mb-3" style={{ padding: '10px 20px 0', width: '100%'}}>
              <select id={`variant-${index}`} className="form-select" value={card.variant} onChange={(e) => handleVariantChange(index, e.target.value, e.target.options[e.target.selectedIndex].id)} disabled={!card.isEnabled}>
                <option value="">Select Variant</option>
                {carDetails.find((make) => make.brandName === card.make)?.models.find((model) => model.modelName === card.model)?.variants?.map((variant) => (
                  <option key={variant.id} value={variant.name} id={variant.id}>{variant.name}</option>
                ))}
              </select>
            </div>
          )}
          {card.allFieldsSelected && renderCarDetails(index)}
        </div>
      </>
    )
  }

  const renderCardPage = (card, index) => {
    return (
      <div key={`card-page-${index}`} className="card" style={{ width: '30%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          {cards?.map((card, index) => renderCardPage(card, index))}
      </div>
      <div style={{ width: "100%", display: "flex", alignItems: 'center', justifyContent: 'center'}}>
        <button className="btn btn-thm ofr_btn1 btn-block mt40 mb20" style={{width: "200px"}} data-bs-toggle="modal" data-bs-target="#compareForm" onClick={handleOnCompareClick} disabled={idsArray.length <2}>
          <span className="flaticon-profit-report mr10 fz18 vam" />
          Compare Cars
        </button>
      </div>
      {isCompareLoading ? renderLoading() : renderComparison()}
    </>
  );

};

export default CompareTable;