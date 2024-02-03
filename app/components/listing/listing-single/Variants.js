"use client"
import { Accordion, Button, ListGroup, OverlayTrigger, Tab, Tabs, Tooltip, Container, Row, Col } from "react-bootstrap";

import ProductDescripitons from "../../shop/shop-single/pro-tab-content/ProductDescripitons";
// import VariantDescripition from "../../shop/shop-single/pro-tab-content/VariantDescripition";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

const VariantsList = ({ carModelDetails, variants }) => {

  const router = useRouter();

  const featureCategories = [
    {
      title: "Convenience",
      items: [
        "Heated Seats",
        "Heated Steering Wheel",
        "Navigation System",
        "Power Liftgate",
      ],
    },
    {
      title: "Entertainment",
      items: ["Apple CarPlay/Android Auto", "Bluetooth", "HomeLink"],
    },
    {
      title: "Exterior",
      items: ["Alloy Wheels", "Sunroof/Moonroof"],
    },
    {
      title: "Safety",
      items: [
        "Backup Camera",
        "Blind Spot Monitor",
        "Brake Assist",
        "LED Headlights",
        "Stability Control",
      ],
    },
  ];

  const [key, setKey] = useState('all');

  // Custom Tooltip for additional information
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Detailed information here.
    </Tooltip>
  );

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

  const handleViewVariantHandler = (variant) => {
    router.push(`/listing-single-v3/${variant?._id}`)
  }

  const renderContactButton = (variant) => (
    <Button className="btn btn-thm ofr_btn1 w-100" onClick={() => handleViewVariantHandler(variant)}>
      <span className="flaticon-profit-report mr-2 fz18 vam" />
      View Variant
    </Button>
  );

  const renderAccordion = (filterFunc) => (
    <Accordion defaultActiveKey="0">
      {variants?.filter(filterFunc)?.map((variant, index) => (
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
      {/* <div className="d-flex">{ProductDescripitons()}</div> */}
      {/* {<VariantDescripition />} */}
      <h3>Variants</h3>
      <div>
        <div className="mb15">{carModelDetails?.modelName} price starts at Rs. {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType} and top model price goes upto Rs. {carModelDetails?.priceRange?.maxPrice} {carModelDetails?.priceRange?.maxPriceType}. {carModelDetails?.modelName} is offered in {variants?.length ?? 0} variants - all the models are mentioned below.</div>
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
        {variants?.map(variant => variant?.carModel?.fuelType?.map(type => {
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
      {/* <div className="col-lg-12">
        <h4 className="title">Variants</h4>
      </div>
      <div className="mb15">{carModelDetails?.modelName} price starts at Rs. {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType} and top model price goes upto Rs. {carModelDetails?.priceRange?.maxPrice} {carModelDetails?.priceRange?.maxPriceType}. {carModelDetails?.modelName} is offered in {carModelDetails?.carVariants?.length ?? 0} variants - the base model of Creta is E and the top model Hyundai Creta SX Opt Knight Diesel AT DT.</div>
      {featureCategories.map((category, index) => (
        <div className="row" key={index}>
          <div className="col-lg-6 col-xl-6">
            <h5 className="subtitle">{category.title}</h5>
          </div>
          <div className="col-lg-6 col-xl-5">
            <ul className="service_list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
          {index < featureCategories.length - 1 && <hr />}
        </div>
      ))} */}
    </>
  );
};

export default VariantsList;
