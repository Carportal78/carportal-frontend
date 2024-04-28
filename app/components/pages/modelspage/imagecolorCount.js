import { useState } from 'react';
import { Container, Row, Col, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Image from 'next/image';
import { Camera, Palette } from 'react-bootstrap-icons'; // These are example icons from 'react-bootstrap-icons'

const ImageColorCounter = () => {
  const [imageCount, setImageCount] = useState(48); // State for image count
  const [colorCount, setColorCount] = useState(6); // State for color count

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
            <Button variant="link" className="p-0">
              <Camera /> +{imageCount} images
            </Button>
          </OverlayTrigger>
        </Col>
        <Col xs="auto">
          <OverlayTrigger
            placement="top"
            overlay={renderColorTooltip}
          >
            <Button variant="link" className="p-0">
              <Palette /> +{colorCount} colors
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageColorCounter;
