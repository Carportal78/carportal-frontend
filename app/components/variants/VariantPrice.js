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
    <h4 style={{wordBreak: 'break-word'}}>{carVariant?.name} {carVariant?.fuelAndPerformance?.fuelType} Price</h4>
    <p>{carVariant?.fuelAndPerformance?.fuelType}</p>
    </div>
    <div className="row mt-3">
    <Col key={carVariant?.engineAndTransmission?.engineType} className="mb-2">
    <div className='d-flex justify-content-between'>
      <div>Ex-showroom Price</div>
      <div>₹ 13,67,700</div>
    </div>
    <div className='d-flex justify-content-between mt-3'>
      <div>RTO</div>
      <div>₹ 1,87,139</div>
    </div>
    <div className='d-flex justify-content-between mt-3'>
      <div>Insurance</div>
      <div>₹ 61,679</div>
    </div>
    <div className='d-flex justify-content-between mt-3'>
      <div>Others</div>
      <div>₹ 13,677</div>
    </div>
    <ListGroup variant="flush">
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
      <div className='d-flex justify-content-between mt-3'>
      <div style={{color: '#24272c', fontSize: '15px', fontWeight: '500'}}>On-Road Price in {'Jaipur'}</div>
      <div style={{color: '#24272c', fontSize: '15px', fontWeight: '500'}}>₹ 16,30,195*</div>
    </div>
   </Col>
    </div>
    </>
  );
};

export default VariantPrice;
