"use client";
import Image from 'next/image';
import { Col } from 'react-bootstrap';

const VariantsOverview = ({ carModelDetails, carVariantsList, carVariant }) => {

  return (
    <>
    <h4>{carVariant?.name} Overview</h4>
    <div className="row mt-3">
      <Col xs={6} sm={4} md={3} lg={3} xl={2} key={carVariant?.engineAndTransmission?.engineType} className="mb-3">
        <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}>
          <Image
            width={100}
            height={40}
            style={{ objectFit: "cover" }}
            src='/images/variant/engine.svg'
            layout="responsive"
            alt={carVariant?.engineAndTransmission?.engineType}
          />
        </div>
        {carVariant?.basicInformation?.fuelType !== 'Electric' ? (<>
          <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px', textAlign: 'center'}}>Engine (upto)</div>
          <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word', textAlign: 'center'}}>{carVariant?.engineAndTransmission?.engineType}</div>
        </>) : (<>
          <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px', textAlign: 'center'}}>Motor Type</div>
          <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word', textAlign: 'center'}}>{carVariant?.engineAndTransmission?.motorType}</div>
        </>)}
      </Col>
      <Col xs={6} sm={4} md={3} lg={3} xl={2} key={carVariant?.fuelAndPerformance?.mileageCity} className="mb-3">
        <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}>
          <Image
            width={100}
            height={40}
            style={{ objectFit: "cover" }}
            src='/images/variant/mileage.svg'
            layout="responsive"
            alt={carVariant?.fuelAndPerformance?.mileageCity}
          />
        </div>
        {carVariant?.basicInformation?.fuelType !== 'Electric' ? (<>
          <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px', textAlign: 'center'}}>Mileage (upto)</div>
          <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word', textAlign: 'center'}}>{carVariant?.fuelAndPerformance?.mileageCity}</div>
        </>) : (<>
          <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px', textAlign: 'center'}}>Range</div>
          <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word', textAlign: 'center'}}>{carVariant?.fuelAndPerformance?.range}</div>
        </>)}
      </Col>
      <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carVariant?.engineAndTransmission?.engineType} className="mb-2">
        <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
          <Image
            width={100}
            height={40}
            style={{ objectFit: "cover" }}
            src='/images/variant/power.svg'
            layout="responsive"
            alt={carVariant?.engineAndTransmission?.maxPower}
          />
        </div>
        <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px', marginLeft: '1.1rem'}}>Power</div>
        <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word', marginLeft: '1.1rem'}}>{carVariant?.engineAndTransmission?.maxPower}</div>
      </Col>
      <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carVariant?.dimensionAndCapacity?.seatingCapacity} className="mb-2">
        <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
          <Image
            width={100}
            height={40}
            style={{ objectFit: "cover" }}
            src='/images/variant/seatingcapacity.svg'
            layout="responsive"
            alt={carVariant?.dimensionAndCapacity?.seatingCapacity}
          />
        </div>
        <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Seating Capacity</div>
        <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word', marginLeft: '1.3rem'}}>{carVariant?.dimensionAndCapacity?.seatingCapacity}</div>
      </Col>
      <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carVariant?.engineAndTransmission?.driverType} className="mb-2">
        <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
          <Image
            width={100}
            height={40}
            style={{ objectFit: "cover" }}
            src='/images/variant/steeringwheel.svg'
            layout="responsive"
            alt={carVariant?.engineAndTransmission?.driverType}
          />
        </div>
        <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px', marginLeft: '0.5rem'}}>Drive Type</div>
        <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word', marginLeft: '0.5rem'}}>{carVariant?.engineAndTransmission?.driverType}</div>
      </Col>
      <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carVariant?.basicInformation?.fuelType} className="mb-2">
        <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
          <Image
            width={100}
            height={40}
            style={{ objectFit: "cover" }}
            src='/images/variant/fuel.svg'
            layout="responsive"
            alt={carVariant?.basicInformation?.fuelType}
          />
        </div>
        <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px', marginLeft: '0.8rem'}}>Fuel</div>
        <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carVariant?.basicInformation?.fuelType}</div>
      </Col>
    </div>
    </>
  );
};

export default VariantsOverview;
