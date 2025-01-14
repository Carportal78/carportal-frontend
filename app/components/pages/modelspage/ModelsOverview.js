"use client";
import Image from 'next/image';
import { Col } from 'react-bootstrap';

const ModelsOverview = ({ carModelDetails, carVariantsList, carVariant }) => {
  const isElectric = carModelDetails?.fuelType?.includes('Electric');

  return (
    <>
      <h4>{carModelDetails?.modelName} Specifications</h4>
      <div className="row mt-3">
        {/* First column - Engine/Power */}
        <Col xs={3} sm={3} md={2} lg={3} xl={2} className="mb-2">
          <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}>
            <Image
              width={100}
              height={40}
              style={{ objectFit: "cover" }}
              src={isElectric ? '/images/variant/power.svg' : '/images/variant/engine.svg'}
              layout="responsive"
              alt={isElectric ? carModelDetails?.power : carModelDetails?.displacement}
            />
          </div>
          <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>{isElectric ? 'Power' : 'Engine (upto)'}</div>
          <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>
            {isElectric ? `${carModelDetails?.power}` : `${carModelDetails?.displacement?.replace('_', '-')} cc`}
          </div>
        </Col>

        {/* Second column - Seating Capacity */}
        <Col xs={3} sm={3} md={2} lg={3} xl={2} className="mb-2">
          <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}>
            <Image
              width={100}
              height={40}
              style={{ objectFit: "cover" }}
              src='/images/variant/seatingcapacity.svg'
              layout="responsive"
              alt={carModelDetails?.seatingCapacity}
            />
          </div>
          <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Seating Capacity</div>
          <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carModelDetails?.seatingCapacity?.replace('_', ' ')}</div>
        </Col>

        {/* Third column - Range/Transmission */}
        <Col xs={3} sm={3} md={2} lg={3} xl={2} className="mb-2">
          <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}>
            <Image
              width={100}
              height={40}
              style={{ objectFit: "cover" }}
              src={isElectric ? '/images/variant/steeringwheel.svg' : '/images/variant/steeringwheel.svg'}
              layout="responsive"
              alt={isElectric ? carModelDetails?.range : carVariant?.engineAndTransmission?.driverType}
            />
          </div>
          <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>{isElectric ? 'Range' : 'Transmission Type'}</div>
          <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>
            {isElectric ? `${carModelDetails?.range} km` : carModelDetails?.transmissionType?.join('& ')}
          </div>
        </Col>

        {/* Fourth column - Battery/Mileage */}
        <Col xs={3} sm={3} md={2} lg={3} xl={2} className="mb-2">
          <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}>
            <Image
              width={100}
              height={40}
              style={{ objectFit: "cover" }}
              src={isElectric ? '/images/variant/mileage.svg' : '/images/variant/mileage.svg'}
              layout="responsive"
              alt={isElectric ? carModelDetails?.batteryCapacity : carModelDetails?.mileage}
            />
          </div>
          <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>{isElectric ? 'Battery Capacity' : 'Mileage (upto)'}</div>
          <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>
            {isElectric ? `${carModelDetails?.batteryCapacity} kWh` : `${carModelDetails?.mileage?.replace('_', ' ')} Kmpl`}
          </div>
        </Col>

        {/* Fifth column - Charging/Fuel */}
        <Col xs={3} sm={3} md={2} lg={3} xl={2} className="mb-2">
          <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}>
            <Image
              width={100}
              height={40}
              style={{ objectFit: "cover" }}
              src={isElectric ? '/images/variant/fuel.svg' : '/images/variant/fuel.svg'}
              layout="responsive"
              alt={isElectric ? "charging" : "fueldetails"}
            />
          </div>
          <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>{isElectric ? 'Charging Time (DC)' : 'Fuel'}</div>
          <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>
            {isElectric ? carModelDetails?.chargingTimeDC : carModelDetails?.fuelType?.join(', ')}
          </div>
        </Col>

        {/* Sixth column - Body Type */}
        <Col xs={3} sm={3} md={2} lg={3} xl={2} className="mb-2">
          <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}>
            <Image
              width={100}
              height={40}
              style={{ objectFit: "cover" }}
              src='/images/variant/body-type.svg'
              layout="responsive"
              alt={carModelDetails?.bodyType}
            />
          </div>
          <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Body Type</div>
          <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carModelDetails?.bodyType}</div>
        </Col>
      </div>
    </>
  );
};

export default ModelsOverview;