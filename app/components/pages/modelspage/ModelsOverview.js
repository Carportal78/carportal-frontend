"use client";
import Image from 'next/image';
import { Col} from 'react-bootstrap';

const ModelsOverview = ({ carModelDetails, carVariantsList, carVariant }) => {

  return (
    <>
    <h4>{carModelDetails?.modelName} Specifications</h4>
    <div className="row mt-3">
    <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carModelDetails?.displacement} className="mb-2">
    <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
    <Image
      width={100}
      height={40} 
      style={{ objectFit: "cover" }}
      src='/images/variant/engine.svg'
      layout="responsive"
      alt={carModelDetails?.displacement}
    />
    </div>
    <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Engine (upto)</div>
    <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carModelDetails?.displacement?.replace('_', '-')} cc</div>
</Col>
            <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carModelDetails?.seatingCapacity} className="mb-2">
            <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
             
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
                  <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Transmission Type</div>
                  <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carModelDetails?.transmissionType?.join('& ')}</div>
               
            </Col>
            <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carModelDetails?.mileage} className="mb-2">
            <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
                <Image
                    width={100}
                    height={40}
                    style={{ objectFit: "cover" }}
                    src='/images/variant/mileage.svg'
                    layout="responsive"
                    alt={carModelDetails?.mileage}
                  />
                  </div>
                  <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Mileage (upto)</div>
                  <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carModelDetails?.mileage?.replace('_', ' ')} Kmpl</div>
                
            </Col>
            <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carModelDetails?.fuelType} className="mb-2">
            <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
                <Image
                    width={100}
                    height={40}
                    style={{ objectFit: "cover" }}
                    src='/images/variant/fuel.svg'
                    layout="responsive"
                    alt="fueldetails"
                  />
                  </div>
                  <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Fuel</div>
                  <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carModelDetails?.fuelType?.join(', ')}</div>
            </Col>
            <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carModelDetails?.bodyType} className="mb-2">
            <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
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
