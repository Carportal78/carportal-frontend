"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Accordion, Button, Col, DropdownDivider, OverlayTrigger, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ContactDealerForm from '../common/contactdealerForm/ContactDealerForm';
import Link from 'next/link';
import styles from "../../components/css/findCarOfChoice.module.css";

const VariantPrice = ({ carModelDetails, carVariantsList, carVariant }) => {

  return (
    <>
      <div className="d-flex justify-content-between">
        <h4 style={{ wordBreak: 'break-word' }}>{carVariant?.name} {carVariant?.fuelAndPerformance?.fuelType} Price</h4>
        <p>{carVariant?.fuelAndPerformance?.fuelType}</p>
      </div>
      <div className="row mt-3">
        <Col key={carVariant?.engineAndTransmission?.engineType} className="mb-2">
          <div className='d-flex justify-content-between'>
            <div>Ex-showroom Price</div>
            <div>₹ {Number(carVariant?.pricingDetails?.exShowroomPrice).toLocaleString('en-IN')}</div>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <div>RTO</div>
            <div>₹ {Number(carVariant?.pricingDetails?.rtoPrice).toLocaleString('en-IN')}</div>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <div>
              Insurance{" "}
              <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">
                {carVariant?.pricingDetails?.insuranceDescription}
              </Tooltip>}>
                <Image src="/images/icon/info.svg" width={15} height={15} alt="info icon of variant" />
              </OverlayTrigger>
            </div>
            <div>₹ {Number(carVariant?.pricingDetails?.insurance).toLocaleString('en-IN')}</div>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <div>
              Others{" "}
              <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">
                {
                  carVariant?.pricingDetails?.others?.map((other, index) => (
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
            <div>₹ {carVariant?.pricingDetails?.others?.reduce((acc, curr) => {
              const value = Number(curr.value);
              return acc + (isNaN(value) ? 0 : value);
            }, 0).toLocaleString('en-IN')}</div>
          </div>
          <ListGroup variant="flush">
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
          <div className='d-flex justify-content-between mt-3'>
            <div style={{ color: '#24272c', fontSize: '15px', fontWeight: '500' }}  >On-Road Price in {'Jaipur'}</div>
            <div style={{ color: '#24272c', fontSize: '15px', fontWeight: '500' }}>₹ 16,30,195*</div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default VariantPrice;
