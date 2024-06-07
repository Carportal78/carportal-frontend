"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "../../css/findCarOfChoice.module.css";
import { Button, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { Container, Col } from 'react-bootstrap';

const budgetButtons = [
  {
    title: "Under 5 Lakh",
    route: "under_5",
  },
  {
    title: "Under 10 Lakh",
    route: "under_10",
  },
  {
    title: "Under 15 Lakh",
    route: "under_15",
  },
  {
    title: "Under 20 Lakh",
    route: "under_20",
  },
  {
    title: "Under 25 Lakh",
    route: "under_25",
  },
  {
    title: "Under 30 Lakh",
    route: "under_30",
  },
  {
    title: "Luxury Cars",
    route: "above_15",
  },
];

const seatingCapacityButtons = [
  {
    title: "4 Seater",
    route: "4_seater",
  },
  {
    title: "5 Seater",
    route: "5_seater",
  },
  {
    title: "6 Seater",
    route: "6_seater",
  },
  {
    title: "7 Seater",
    route: "7_seater",
  },
  {
    title: "8 Seater",
    route: "8_seater",
  },
];

const bodyTypeData = [
  {
    title: "SUV",
    imgSrc: "/images/bodytype/car-suv.avif",
    route: "SUV",
  },
  {
    title: "Sedan",
    imgSrc: "/images/bodytype/car-sedan.avif",
    route: "Sedan",
  },
  {
    title: "Hatchback",
    imgSrc: "/images/bodytype/car-hatchback.avif",
    route: "Hatchback",
  },
  {
    title: "Compact SUV",
    imgSrc: "/images/bodytype/compactsuv.svg",
    route: "Compact-Suv",
  },
  {
    title: "Compact Sedan",
    imgSrc: "/images/bodytype/compactsedan.svg",
    route: "Compact-Sedan",
  },
  {
    title: "MUV",
    imgSrc: "/images/bodytype/car-muv.avif",
    route: "MuV",
  },
  {
    title: "Convertible",
    imgSrc: "/images/bodytype/car-convertible.avif",
    route: "Convertible",
  },
  {
    title: "Coupe",
    imgSrc: "/images/bodytype/car-coupe.avif",
    route: "Coupe",
  },
  {
    title: "Station Wegon",
    imgSrc: "/images/bodytype/wagon.svg",
    route: "Station-Wegon",
  },
  {
    title: "Minivan",
    imgSrc: "/images/bodytype/van.svg",
    route: "Minivan",
  },
  {
    title: "Truck",
    imgSrc: "/images/bodytype/truck.svg",
    route: "Truck",
  },
];

const fuelTypeData = [
  {
    title: "Petrol",
    imgSrc: "/images/fueltype/fuel-petrol.avif",
    route: "Petrol",
  },
  {
    title: "Diesel",
    imgSrc: "/images/fueltype/fuel-diesel.avif",
    route: "Diesel",
  },
  {
    title: "CNG",
    imgSrc: "/images/fueltype/fuel-cng.avif",
    route: "CNG",
  },
  {
    title: "Electric",
    imgSrc: "/images/fueltype/fuel-electric.avif",
    route: "Electric",
  },
  {
    title: "Hybrid",
    imgSrc: "/images/fueltype/fuel-hybrid.avif",
    route: "Hybrid",
  }
];

const transmissionTypeData = [
  {
    title: "Automatic",
    imgSrc: "/images/transmissiontype/automatic.svg", 
    route: "Automatic",
  },
  {
    title: "Manual",
    imgSrc: "/images/transmissiontype/manual.svg",
    route: "Manual",
  }
];

function FindCarChoice() {
  const [key, setKey] = useState("budget");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className={`${styles.tabItem} ${key === "budget" ? styles.active : ""} mb-2`}
    >
      <Tab eventKey="budget" title="Budget">
        <Row className="mt-3">
          {budgetButtons?.map((buttonType) => (
            <Col xs={6} sm={3} md={2} lg={2} xl={2} key={buttonType.title}> {/* Responsive grid setup */}
              <Link href={`cars?budget=${buttonType.route}`}>
                <Button variant="outline-secondary" size="md" className={`mb-2 ${styles.budgetCarButton} w-100`}>
                  {buttonType.title}
                </Button>
              </Link>
            </Col>
          ))}
        </Row>
      </Tab>

      <Tab eventKey="fuelType" title="Fuel Type" className={`${styles.tabItem} ${key === "fuelType" ? styles.active : ""}`}>
        <Row className="mt-3">
          {fuelTypeData?.map((bodyType) => (
            <Col xs={3} sm={3} md={2} lg={2} xl={1} key={bodyType.title} className="mb-2">
              <Link href={`cars?fuelType=${bodyType.route}`}>
                <div className={`bodyTypeItem ${styles.bodyTypeItem} d-flex flex-column align-items-center text-center`}>
                  <Image
                    width={150}
                    height={58}
                    style={{ objectFit: "cover" }}
                    src={bodyType.imgSrc}
                    alt={bodyType.title}
                    className={styles.bodyTypeImage}
                    layout='responsive'
                  />
                  <span className={styles.bodyTypeTitle}>{bodyType.title}</span>
                </div>
              </Link>
            </Col>
          ))}

        </Row>
      </Tab>
      <Tab
        eventKey="transmissionType"
        title="Transmission Type"
        className={`${styles.tabItem} ${key === "transmissionType" ? styles.active : ""}`}
      >
        <Row className="mt-3">
          {transmissionTypeData?.map((bodyType) => (
            <Col xs={3} sm={3} md={2} lg={1} xl={1} className="mb-2 text-center" key={bodyType.title}>
              <Link href={`cars?transmissionType=${bodyType.route}`}>
                <div className="d-inline-block text-center"> {/* Ensure link is block-level for spacing, centered content */}
                  <Image
                    width={150}
                    height={58}
                    src={bodyType.imgSrc}
                    alt={bodyType.title}
                    style={{ objectFit: "cover" }}
                    className={styles.bodyTypeImage}
                    layout='responsive'
                  />
                  <div className={styles.bodyTypeTitle}>{bodyType.title}</div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Tab>

      <Tab
        eventKey="bodyType"
        title="Body Type"
        className={`${styles.tabItem} ${key === "bodyType" ? styles.active : ""}`}
      >
        <Row className="g-4 flex-wrap mt-3"> {/* Adjusted gap for closer packing */}
          {bodyTypeData?.map((bodyType) => (
            <Col xs={4} sm={3} md={2} lg={2} xl={1} key={bodyType.title} className="mb-2 text-center">
              <Link href={`cars?bodyType=${bodyType.route}`}>
                <div className="d-inline-block text-center">
                  <div className="position-relative" style={{ width: '100%', height: 58 }}>
                    <Image
                      src={bodyType.imgSrc}
                      alt={bodyType.title}
                      // layout="fill" 
                      // objectFit="contain"
                      width={150}
                      height={58}
                      className={styles.bodyTypeCheckImage}
                      layout='responsive'
                    />
                  </div>
                  <div className={styles.bodyTypeTitle}>{bodyType.title}</div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Tab>

      <Tab
        eventKey="seatingCapacity"
        title="Seating Capacity"
      >
          <Row className="mt-3">
            {seatingCapacityButtons?.map((buttonType) => (
              <Col xs={6} sm={2} md={2} lg={2} xl={2} key={buttonType.title}>
                <Link href={`cars?seatingCapacity=${buttonType.route}`}>
                  <Button variant="outline-secondary" size="md" className={`mb-2 ${styles.budgetCarButton} w-100`}>
                    {buttonType.title}
                  </Button>
                </Link>
              </Col>
            ))}
          </Row>
      </Tab>
    </Tabs>
  );
}

export default FindCarChoice;
