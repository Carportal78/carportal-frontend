import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Image from 'next/image';
import { Camera, Palette } from 'react-bootstrap-icons'; // These are example icons from 'react-bootstrap-icons'

const ImageColorCounter = ({totalImgCount, colorImgCount, carModelDetails}) => {

  // You can define tooltips for additional information if needed
  const renderImageTooltip = (props) => (
    <Tooltip {...props}>Total images available</Tooltip>
  );

  const renderColorTooltip = (props) => (
    <Tooltip {...props}>Total colors available</Tooltip>
  );

  return (
    <Container className='mt8'>
      <Row className="justify-content-center">
        <Col xs="auto">
          <OverlayTrigger
            placement="top"
            overlay={renderImageTooltip}
          >
            <Button variant="link" className="p-0" data-bs-toggle="modal" data-bs-target="#imagesViewDialog" style={{ margin: "10px 0px", textDecoration: 'none'}}>
              <Camera /> +{totalImgCount} images
            </Button>
          </OverlayTrigger>
        </Col>
        <Col xs="auto">
          <OverlayTrigger
            placement="top" 
            overlay={renderColorTooltip}
          >
            <Button variant="link" className="p-0" data-bs-toggle="modal" data-bs-target="#imagesViewColorDialog" style={{ margin: "10px 0px", textDecoration: 'none'}}>
              <Palette /> +{colorImgCount} colors
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageColorCounter;
