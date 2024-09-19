"use client"
import { Accordion, Button, ListGroup, OverlayTrigger, Tab, Tabs, Tooltip, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  const uniqueFuelTypes = [...new Set(variants?.flatMap(variant => variant.basicInformation.fuelType))];

  const [key, setKey] = useState('all');

  // Custom Tooltip for additional information
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Detailed information here.
    </Tooltip>
  );

  const calculateTotalPrice = (variant) => {
    const exShowroomPrice = Number(variant?.pricingDetails?.exShowroomPrice) || 0;
    const rtoPrice = Number(variant?.pricingDetails?.rtoPrice) || 0;
    const insurance = Number(variant?.pricingDetails?.insurance) || 0;
    const othersTotal = variant?.pricingDetails?.others?.reduce((acc, curr) => {
      const value = Number(curr.value);
      return acc + (isNaN(value) ? 0 : value);
    }, 0) || 0;

    return exShowroomPrice + rtoPrice + insurance + othersTotal;
  };

  const renderVariantDetails = (variant) => (
    <>
      <div>{variant?.carModel?.modelName} ({variant?.basicInformation?.fuelType})</div>
      <div className='d-flex justify-content-between flex-column mt-2'>
        <div className="d-flex justify-content-between">
          <div>Ex-Showroom Price</div>
          <div><strong>₹ {Number(variant?.pricingDetails?.exShowroomPrice).toLocaleString('en-IN')}</strong></div>
        </div>
        <div className='d-flex justify-content-between mt10'>
          <div>RTO</div>
          <div><strong>₹ {Number(variant?.pricingDetails?.rtoPrice).toLocaleString('en-IN')}</strong></div>
        </div>
        <div className='d-flex justify-content-between mt10'>
          <div>
            Insurance{" "}
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">
              {variant?.pricingDetails?.insuranceDescription}
            </Tooltip>}>
              <Image src="/images/icon/info.svg" width={15} height={15} alt="info icon of variant" />
            </OverlayTrigger>
          </div>
          <div><strong>₹ {Number(variant?.pricingDetails?.insurance).toLocaleString('en-IN')}</strong></div>
        </div>
        <div className='d-flex justify-content-between mt10'>
          <div>
            Others{" "}
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">
              {
                variant?.pricingDetails?.others?.map((other, index) => (
                  <div key={index} className='d-flex justify-content-between mt-2'>
                    <div>
                      {other.key}{" "}
                    </div>{" "}
                    <div className="ml-3"><strong>₹ {Number(other.value).toLocaleString('en-IN')}</strong></div>
                  </div>
                ))
              }
            </Tooltip>}>
              <Image src="/images/icon/info.svg" width={15} height={15} alt={'info text'} />
            </OverlayTrigger>
          </div>
          <div><strong>₹ {variant?.pricingDetails?.others?.reduce((acc, curr) => {
            const value = Number(curr.value);
            return acc + (isNaN(value) ? 0 : value);
          }, 0).toLocaleString('en-IN')}</strong></div>
        </div>
        <div style={{ border: '0.1px solid #dee2e6', marginTop: '1em' }}><divider></divider></div>
        {/* <ListGroup variant="flush">
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup> */}
        <div className='d-flex justify-content-between mt-3'>
          <div style={{ color: '#24272c', fontSize: '15px', fontWeight: '800' }}  >On-Road Price in {variant?.pricingDetails?.city}</div>
          <div style={{ color: '#24272c', fontSize: '15px', fontWeight: '500' }}>₹ {calculateTotalPrice(variant).toLocaleString('en-IN')}</div>
        </div>
        {/* <divider></divider>
        <ListGroup className="list-group-flush">
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item>Rs.48.50 - 52.70 Lakh *</ListGroup.Item>
        </ListGroup> */}
      </div>

    </>
  );

  const handleViewVariantHandler = (variant) => {
    router.push(`/variantDetails/${carModelDetails?.modelName?.split(' ')?.join('-')?.toLowerCase()}/${carModelDetails?._id}/variant/${variant?._id}`)
  }

  const renderContactButton = (variant) => (
    <Button className="btn btn-thm ofr_btn1 w-100" onClick={() => handleViewVariantHandler(variant)}>
      <span className="flaticon-profit-report mr-2 fz18 vam" />{"  "}
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
        {uniqueFuelTypes?.map((fuelType) => (
          <Tab eventKey={fuelType} title={fuelType} key={fuelType}>
            {renderAccordion(variant => variant.basicInformation.fuelType === fuelType)}
          </Tab>
        ))}
      </Tabs>
    </>
  );
};

export default VariantsList;
