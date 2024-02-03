"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Accordion, Button, Col, DropdownDivider, OverlayTrigger, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ContactDealerForm from '../../../common/contactdealerForm/ContactDealerForm';
import styles from './productDescription.module.css';

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

const ProductDescripitons = ({ carModelDetails, carVariantsList }) => {

  const [key, setKey] = useState('all');

  const handleViewVariantHandler = (variant) => {
    router.push(`/listing-single-v3/${variant?._id}`)
  }

  const renderVariantDetails = (variant) => (
    <>
      <div>{variant?.carModel?.modelName} ({variant?.fuelAndPerformance?.fuelType})</div>
      <div className='d-flex justify-content-between flex-column mt-2'>
        <div className="d-flex justify-content-between">
          <div>Ex-Showroom Price</div>
          <div><strong>₹ {variant.onRoadPrice}</strong></div>
        </div>
        <div className='d-flex justify-content-between mt10'>
          <div>RTO</div>
          <div><strong>₹ {variant.rto}</strong></div>
        </div>
        <div className='d-flex justify-content-between mt10'>
          <div>
            Insurance{" "}
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">
              <strong>Holy guacamole!</strong> Check this info.
            </Tooltip>}>
              <Image src="/images/icon/info.svg" width={15} height={15} />
            </OverlayTrigger>
          </div>
          <div><strong>₹ {variant.insurance}</strong></div>
        </div>
        <div className='d-flex justify-content-between mt10'>
          <div>
            Others{" "}
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">
              <strong>Holy guacamole!</strong> Check this info.
            </Tooltip>}>
              <Image src="/images/icon/info.svg" width={15} height={15} />
            </OverlayTrigger>
          </div>
          <div><strong>₹ {+variant.tcsChange + (+variant.tdsCharge)}</strong></div>
        </div>
        <divider></divider>
        <ListGroup className="list-group-flush">
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item>Rs.48.50 - 52.70 Lakh *</ListGroup.Item>
        </ListGroup>
      </div>

    </>
  );

  const renderContactButton = (variant) => (
    <Button className="btn btn-thm ofr_btn1 w-100" onClick={() => handleViewVariantHandler(variant)}>
      <span className="flaticon-profit-report mr-2 fz18 vam" />
      View Variant
    </Button>
  );

  const renderAccordion = (filterFunc) => (
    <Accordion defaultActiveKey="0">
      {carVariantsList?.filter(filterFunc)?.map((variant, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{variant.name}</Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col xs={12} lg={8}>
                {renderVariantDetails(variant)}
              </Col>
              <Col xs={12} lg={4} className="mt-3 mt-lg-0">
                {renderContactButton(variant)}
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );

  return (
    <>
    <div className={`row ${styles['mobile-mt-10']}`}>
      <Card className="col-lg-3 col-xl-3">
      <Card.Img variant="top" src={carModelDetails?.media?.[0]?.url} className='mt10' />
      <Card.Body>
        <Card.Title><strong>{carModelDetails?.modelName}</strong></Card.Title>
        <Card.Text>
          <div className="listing_footer">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <span className="flaticon-road-perspective me-2" />
                        {carModelDetails?.mileage?.split('_')?.join('-')} kmpl
                      </li>
                      <br/>
                      <li className="list-inline-item">
                        <span className="flaticon-gas-station me-2" />
                        {carModelDetails?.fuelType?.join(', ')}
                      </li>
                      <br/>
                      <li className="list-inline-item">
                        <span className="flaticon-gear me-2" />
                        {carModelDetails?.transmissionType?.join(', ')}
                      </li>
                    </ul>
                  </div>
          <div className='mt10'>{Array.from(
                                                { length: 4 },
                                                (_, i) => (
                                                    <li
                                                        className="list-inline-item"
                                                        key={i}
                                                    >
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                            <span>4 ratings</span>
                                            </div>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>₹ {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType} - 
                  ₹ {carModelDetails?.priceRange?.maxPrice} {carModelDetails?.priceRange?.maxPriceType} *</strong></ListGroup.Item>
      </ListGroup>
      <Card.Body>
          <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20" data-bs-toggle="modal" data-bs-target="#contactDealerForm">
                    <span className="flaticon-profit-report mr10 fz18 vam" />
                    Contact Dealer
                  </button>
      </Card.Body>
    </Card>
      <div className="col-lg-8 col-xl-8 col">
        <div className='mt10'>
          <h2>Mercedes-Benz GLA On Road Price in Jaipur</h2>
        </div>
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="all" title="All">
          {renderAccordion(() => true)}
        </Tab>
        {carVariantsList?.map(variant => variant?.carModel?.fuelType?.map(type => {
          return <Tab eventKey={type} title={type} key={variant?._id}>
            {renderAccordion(variant => {
              return variant?.fuelAndPerformance.fuelType === type

            })}
          </Tab>
        }))}

        {/* <Tab eventKey="petrol" title="Petrol">
          {renderAccordion(variant => variant?.fuelAndPerformance?.fuelType === 'Petrol')}
        </Tab>
        <Tab eventKey="automatic" title="Automatic">
          {renderAccordion(variant => variant?.fuelAndPerformance?.fuelType === 'Automatic')}
        </Tab> */}
      </Tabs>
      
      </div>
      </div>

      <div
        className="sign_up_modal modal fade"
        id="contactDealerForm"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <ContactDealerForm carModelDetails={carModelDetails} />
      </div>
    </>
  );
};

export default ProductDescripitons;
