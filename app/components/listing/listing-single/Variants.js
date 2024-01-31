"use client"
import { Accordion, ListGroup, Tab, Tabs } from "react-bootstrap";
import ProductDescripitons from "../../shop/shop-single/pro-tab-content/ProductDescripitons";
// import VariantDescripition from "../../shop/shop-single/pro-tab-content/VariantDescripition";
import { useState } from "react";

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

  const renderAccordion = (filterFunc) => {
    return (
      <Accordion defaultActiveKey="0">
        {onRoadPriceData.variants.filter(filterFunc).map((variant, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{variant.carname} {variant.model}</Accordion.Header>
            <Accordion.Body className='d-flex'>
              <div className='col-lg-8 col-xl-8'>
              <div>{variant.model} ({variant.fuelType})</div>
              <div className='d-flex justify-content-between mt10'>
                <div>Ex-Showroom Price</div>
                <div><strong>Rs {variant.onRoadPrice}</strong></div>
              </div>
              <div className='d-flex justify-content-between mt10'>
              <div>RTO</div>
                <div><strong>Rs {variant.rto}</strong></div>
              </div>
              <div className='d-flex justify-content-between mt10'>
              <div>Insurance</div>
                <div><strong>Rs {variant.insurance}</strong></div>
              </div>
              <div className='d-flex justify-content-between mt10'>
              <div>Others <span></span></div>
                <div><strong>Rs {+variant.tcsChange + (+variant.tdsCharge)}</strong></div>
              </div>
              <divider></divider>
              <ListGroup className="list-group-flush">
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item>Rs.48.50 - 52.70 Lakh*</ListGroup.Item>
            </ListGroup>
              </div>
              <div className='col-lg-3 col-xl-3'>
              <button className="btn btn-thm ofr_btn1 btn-block ml40 mt30 mb20">
                    <span className="flaticon-profit-report mr10 fz18 vam" />
                    Contact Dealer
                  </button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  };

  return (
    <>
    {/* <div className="d-flex">{ProductDescripitons()}</div> */}
    {/* {<VariantDescripition />} */}
    <h3>Variants</h3>
    <div>
    <div className="mb15">{carModelDetails?.modelName} price starts at Rs. {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType} and top model price goes upto Rs. {carModelDetails?.priceRange?.maxPrice} {carModelDetails?.priceRange?.maxPriceType}. {carModelDetails?.modelName} is offered in {carModelDetails?.carVariants?.length ?? 0} variants - all the models are mentioned below.</div>
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
      <Tab eventKey="diesel" title="Diesel">
      {renderAccordion(variant => variant.fuelType === 'Diesel')}
      </Tab>
      <Tab eventKey="petrol" title="Petrol">
      {renderAccordion(variant => variant.fuelType === 'Petrol')}
      </Tab>
      <Tab eventKey="automatic" title="Automatic">
      {renderAccordion(variant => variant.fuelType === 'Automatic')}
      </Tab>
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