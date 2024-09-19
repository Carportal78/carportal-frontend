"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Accordion, Button, Col, DropdownDivider, OverlayTrigger, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ContactDealerForm from '../../../common/contactdealerForm/ContactDealerForm';
import styles from './productDescription.module.css';
import { useAtom } from 'jotai';
import { selectCityAtom } from '../../../atoms/categoriesAtoms';
import statesCitiesList from '../../../../../public/jsondata/state-and-city.json';
import { useRouter } from 'next/navigation';


const ProductDescripitons = ({ carModelDetails, carVariantsList }) => {

  const [key, setKey] = useState('all');
  const [cityData, setCityData] = useAtom(selectCityAtom);
  const [cityOptions, setCityOptions] = useState([]);
  const router = useRouter();

  const uniqueFuelTypes = [...new Set(carVariantsList?.flatMap(variant => variant.basicInformation?.fuelType))];

  const handleViewVariantHandler = (variant) => {
    console.log("ssadadsas");
    router.push(`/variantDetails/${variant?.carModel?.modelName?.split(' ')?.join('-')?.toLowerCase()}/${variant?.carModel?._id}/variant/${variant?._id}`); 
  }

  // Populate city options
  useEffect(() => {
    const loadedCityOptions = Object.keys(statesCitiesList)?.flatMap(state => (
      statesCitiesList[state].map(city => ({
        value: city.id.toString(),
        label: city.city
      }))
    ));
    setCityOptions(loadedCityOptions);
  }, []);

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
          <div>₹ {Number(variant?.pricingDetails?.exShowroomPrice).toLocaleString('en-IN')}</div>
        </div>
        <div className='d-flex justify-content-between mt10'>
          <div>RTO</div>
          <div>₹ {Number(variant?.pricingDetails?.rtoPrice).toLocaleString('en-IN')}</div>
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
          <div>₹ {Number(variant?.pricingDetails?.insurance).toLocaleString('en-IN')}</div>

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
                    <div className="ml-3">₹ {Number(other.value).toLocaleString('en-IN')}</div>
                  </div>
                ))
              }
            </Tooltip>}>
              <Image src="/images/icon/info.svg" width={15} height={15} alt={'info text'} />
            </OverlayTrigger>
          </div>
          <div>₹ {variant?.pricingDetails?.others?.reduce((acc, curr) => {
            const value = Number(curr.value);
            return acc + (isNaN(value) ? 0 : value);
          }, 0).toLocaleString('en-IN')}</div>
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
        <div className='d-flex justify-content-between'>
          <div style={{ color: '#24272c', fontSize: '15px', fontWeight: '500' }}  >On-Road Price in {variant?.pricingDetails?.city}</div>
          <div style={{ color: '#24272c', fontSize: '15px', fontWeight: '500' }}>₹ {calculateTotalPrice(variant).toLocaleString('en-IN')}</div>
        </div>
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
                  <br />
                  <li className="list-inline-item">
                    <span className="flaticon-gas-station me-2" />
                    {carModelDetails?.fuelType?.join(', ')}
                  </li>
                  <br />
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
            <h2>{carModelDetails?.modelName} On Road Price in <span data-bs-toggle="modal" data-bs-target="#onRoadPriceForm" style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>{cityOptions?.find(option => option.value == cityData)?.label}<i class="fa-solid fa-pen-to-square" style={{fontSize: '15px'}}></i></span></h2>
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
            {renderAccordion(variant => variant.basicInformation?.fuelType === fuelType)}
          </Tab>
        ))}
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
