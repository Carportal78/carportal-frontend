"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Accordion, Button, Col, DropdownDivider, OverlayTrigger, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ContactDealerForm from '../common/contactdealerForm/ContactDealerForm';
import Link from 'next/link';
import styles from "../../components/css/findCarOfChoice.module.css";

const onRoadPriceData = {
  make: "Mercedez",
  carname: "Mercedez-benz",
  state: "Rajasthan",
  city: "Jaipur",
  model: "GLA",
  onRoadPrice: "48.50",
  priceType: "Lakh",
  transmission: "Automatic",
  mileage: "280,000",
  fuelType: "Diesel",
  engineSize: "5.2L",
  doors: "5",
  cylinders: "10",
  driverType: "4x4",
  rto: '6,57,800',
      insurance: '2,24,349',
      others: {
        tcsChange: 50600,
        tdsCharge: 20000
      },
  imageSrc: "/images/listing/lsp1-v1.jpg",
  description: `Mercedes-Benz GLA price in New Delhi start at Rs. 48.50 Lakh. The
    lowest price model is Mercedes-Benz GLA 200 and the most priced
    model of Mercedes-Benz GLA AMG 35 4M priced at Rs. 52.70 Lakh.
    Used Mercedes-Benz GLA in New Delhi available for sale at Rs.
    18.50 Lakh onwards. Visit your nearest Mercedes-Benz GLA showroom
    in New Delhi for best offers. Compared primarily with Audi Q3
    price in New Delhi starting Rs. 46.27 Lakh and BMW X1 price in New
    Delhi starting Rs. 45.90 Lakh. View all Mercedes-Benz cars price
    in your city.`,
  variants: [
    {
      make: "Mercedez",
      carname: "Mercedez benz",
      state: "Rajasthan",
      city: "Jaipur",
      model: "GLA 200",
      onRoadPrice: "55.75",
      priceType: "Lakh",
      transmission: "Automatic",
      mileage: "280,000",
      fuelType: "Diesel",
      engineSize: "5.2L",
      doors: "5",
      cylinders: "10",
      driverType: "4x4",
      rto: '6,57,800',
      insurance: '2,24,349',
      others: {
        tcsChange: 50600,
        tdsCharge: 20000
      },
      imageSrc: "/images/listing/lsp1-v1.jpg",
      description: `Mercedes-Benz GLA price in New Delhi start at Rs. 48.50 Lakh. The
                lowest price model is Mercedes-Benz GLA 200 and the most priced
                model of Mercedes-Benz GLA AMG 35 4M priced at Rs. 52.70 Lakh.
                Used Mercedes-Benz GLA in New Delhi available for sale at Rs.
                18.50 Lakh onwards. Visit your nearest Mercedes-Benz GLA showroom
                in New Delhi for best offers. Compared primarily with Audi Q3
                price in New Delhi starting Rs. 46.27 Lakh and BMW X1 price in New
                Delhi starting Rs. 45.90 Lakh. View all Mercedes-Benz cars price
                in your city.`,
    },
    {
      make: "Mercedez",
      carname: "Mercedez benz",
      state: "Rajasthan",
      city: "Jaipur",
      model: "GLA 220 4M BSVI",
      onRoadPrice: "62.40",
      priceType: "Lakh",
      transmission: "Automatic",
      mileage: "280,000",
      fuelType: "Diesel",
      engineSize: "5.2L",
      doors: "5",
      cylinders: "10",
      driverType: "4x4",
      rto: '6,57,800',
      insurance: '2,24,349',
      others: {
        tcsChange: 50600,
        tdsCharge: 20000
      },
      imageSrc: "/images/listing/lsp1-v1.jpg",
      description: `Mercedes-Benz GLA price in New Delhi start at Rs. 48.50 Lakh. The
                  lowest price model is Mercedes-Benz GLA 200 and the most priced
                  model of Mercedes-Benz GLA AMG 35 4M priced at Rs. 52.70 Lakh.
                  Used Mercedes-Benz GLA in New Delhi available for sale at Rs.
                  18.50 Lakh onwards. Visit your nearest Mercedes-Benz GLA showroom
                  in New Delhi for best offers. Compared primarily with Audi Q3
                  price in New Delhi starting Rs. 46.27 Lakh and BMW X1 price in New
                  Delhi starting Rs. 45.90 Lakh. View all Mercedes-Benz cars price
                  in your city.`,
    },
    {
      make: "Mercedez",
      carname: "Mercedez benz",
      state: "Rajasthan",
      city: "Jaipur",
      model: "GLA 200 BSVI",
      onRoadPrice: "55.75",
      priceType: "Lakh",
      transmission: "Automatic",
      mileage: "280,000",
      fuelType: "Diesel",
      engineSize: "5.2L",
      doors: "5",
      cylinders: "10",
      driverType: "4x4",
      rto: '6,57,800',
      insurance: '2,24,349',
      others: {
        tcsChange: 50600,
        tdsCharge: 20000
      },
      imageSrc: "/images/listing/lsp1-v1.jpg",
      description: `Mercedes-Benz GLA price in New Delhi start at Rs. 48.50 Lakh. The
                  lowest price model is Mercedes-Benz GLA 200 and the most priced
                  model of Mercedes-Benz GLA AMG 35 4M priced at Rs. 52.70 Lakh.
                  Used Mercedes-Benz GLA in New Delhi available for sale at Rs.
                  18.50 Lakh onwards. Visit your nearest Mercedes-Benz GLA showroom
                  in New Delhi for best offers. Compared primarily with Audi Q3
                  price in New Delhi starting Rs. 46.27 Lakh and BMW X1 price in New
                  Delhi starting Rs. 45.90 Lakh. View all Mercedes-Benz cars price
                  in your city.`,
    },
    {
      make: "Mercedez",
      carname: "Mercedez benz",
      state: "Rajasthan",
      city: "Jaipur",
      model: "GLA 200 BSasasVI",
      onRoadPrice: "55.75",
      priceType: "Lakh",
      transmission: "Automatic",
      mileage: "280,000",
      fuelType: "Petrol",
      engineSize: "5.2L",
      doors: "5",
      cylinders: "10",
      driverType: "4x4",
      rto: '6,57,800',
      insurance: '2,24,349',
      others: {
        tcsChange: 50600,
        tdsCharge: 20000
      },
      imageSrc: "/images/listing/lsp1-v1.jpg",
      description: `Mercedes-Benz GLA price in New Delhi start at Rs. 48.50 Lakh. The
                  lowest price model is Mercedes-Benz GLA 200 and the most priced
                  model of Mercedes-Benz GLA AMG 35 4M priced at Rs. 52.70 Lakh.
                  Used Mercedes-Benz GLA in New Delhi available for sale at Rs.
                  18.50 Lakh onwards. Visit your nearest Mercedes-Benz GLA showroom
                  in New Delhi for best offers. Compared primarily with Audi Q3
                  price in New Delhi starting Rs. 46.27 Lakh and BMW X1 price in New
                  Delhi starting Rs. 45.90 Lakh. View all Mercedes-Benz cars price
                  in your city.`,
    },
  ],
};

const fuelTypeData = [
    {
      title: "Petrol",
      imgSrc: "/images/fueltype/petrol.svg",
      route: "Petrol",
    },
    {
      title: "Diesel",
      imgSrc: "/images/fueltype/diesel.svg",
      route: "Diesel",
    },
    {
      title: "CNG",
      imgSrc: "/images/fueltype/cng.svg",
      route: "CNG",
    },
    {
      title: "Electric",
      imgSrc: "/images/fueltype/electric.svg",
      route: "Electric",
    },
    {
      title: "Hybrid",
      imgSrc: "/images/fueltype/hybrid.svg",
      route: "Hybrid",
    }
  ];

const VariantsOverview = ({ carModelDetails, carVariantsList, carVariant }) => {

  return (
    <>
    <h4>{carVariant?.name} Overview</h4>
    <div className="row mt-3">
    <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carVariant?.engineAndTransmission?.engineType} className="mb-2">
    <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
    <Image
      width={100}
      height={40}
      style={{ objectFit: "cover" }}
      src='/images/variant/engine.svg'
      layout="responsive"
      alt={carVariant?.engineAndTransmission?.engineType}
    />
    </div>
    <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Engine (upto)</div>
    <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carVariant?.engineAndTransmission?.engineType}</div>
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
                  <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Power</div>
                  <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carVariant?.engineAndTransmission?.maxPower}</div>
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
                  <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carVariant?.dimensionAndCapacity?.seatingCapacity}</div>
              
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
                  <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Drive Type</div>
                  <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carVariant?.engineAndTransmission?.driverType}</div>
               
            </Col>
            <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carVariant?.fuelAndPerformance?.mileageCity} className="mb-2">
            <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
                <Image
                    width={100}
                    height={40}
                    style={{ objectFit: "cover" }}
                    src='/images/variant/mileage.svg'
                    layout="responsive"
                    alt={carVariant?.fuelAndPerformance?.mileageCity}
                  />
                  </div>
                  <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Mileage (upto)</div>
                  <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carVariant?.fuelAndPerformance?.mileageCity}</div>
                
            </Col>
            <Col xs={3} sm={3} md={2} lg={3} xl={2} key={carVariant?.fuelAndPerformance?.fuelType} className="mb-2">
            <div className={`bodyTypeItem d-flex flex-column align-items-center text-center`} style={{ maxWidth: '65px', alignSelf: 'center' }}> {/* Adjusted container size */}
                <Image
                    width={100}
                    height={40}
                    style={{ objectFit: "cover" }}
                    src='/images/variant/fuel.svg'
                    layout="responsive"
                    alt={carVariant?.fuelAndPerformance?.fuelType}
                  />
                  </div>
                  <div style={{color: 'rgba(36,39,44,.5)', fontSize: '12px'}}>Fuel</div>
                  <div style={{color: '#24272c', fontSize: '15px', wordBreak: 'break-word'}}>{carVariant?.fuelAndPerformance?.fuelType}</div>
            </Col>
    </div>
    </>
  );
};

export default VariantsOverview;
