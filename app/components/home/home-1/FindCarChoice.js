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
    title: "1 - 5 Lakh",
    route: "under_5",
  },
  {
    title: "5 - 10 Lakh",
    route: "under_10",
  },
  {
    title: "10 - 15 Lakh",
    route: "under_15",
  },
  {
    title: "15 - 20 Lakh",
    route: "under_20",
  },
  {
    title: "20 - 25 Lakh",
    route: "under_25",
  },
  {
    title: "25 - 30 Lakh",
    route: "under_30",
  },
  {
    title: "Above 30 Lakh",
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
    imgSrc: "/images/bodytype/newbodytype/suv_clr.jpg",
    route: "SUV",
  },
  {
    title: "Sedan",
    imgSrc: "/images/bodytype/newbodytype/sedan_clr.jpg",
    route: "Sedan",
  },
  {
    title: "Hatchback",
    imgSrc: "/images/bodytype/newbodytype/hatchback_clr.jpg",
    route: "Hatchback",
  },
  {
    title: "Compact SUV",
    imgSrc: "/images/bodytype/compactsuv.svg",
    route: "Compact-Suv",
  },
  {
    title: "Compact Sedan",
    imgSrc: "/images/bodytype/newbodytype/compactsedan_clr.jpg",
    route: "Compact-Sedan",
  },
  {
    title: "MUV",
    imgSrc: "/images/bodytype/newbodytype/muv.jpg",
    route: "MuV",
  },
  {
    title: "Convertible",
    imgSrc: "/images/bodytype/newbodytype/convertible_clr.jpg",
    route: "Convertible",
  },
  {
    title: "Coupe",
    imgSrc: "/images/bodytype/newbodytype/coupe_clr.jpg",
    route: "Coupe",
  },
  {
    title: "Station Wegon",
    imgSrc: "/images/bodytype/newbodytype/wagon_clr.jpg",
    route: "Station-Wegon",
  },
  {
    title: "Minivan",
    imgSrc: "/images/bodytype/newbodytype/van_clr.jpg",
    route: "Minivan",
  },
  {
    title: "Truck",
    imgSrc: "/images/bodytype/newbodytype/truck_clr-removebg-preview.png",
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
                <div className={`bodyTypeItem ${styles.bodyTypeItem} d-flex flex-column align-items-center text-center`} style={{
                  minHeight: "120px",
                  padding: "15px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}>
                  <div style={{
                    width: "70px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px"
                  }}>
                    <Image
                      width={160}
                      height={80}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                      src={bodyType.imgSrc}
                      alt={bodyType.title}
                    />
                  </div>
                  <span style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    color: "#333",
                    textAlign: "center",
                    lineHeight: "1.2"
                  }}>{bodyType.title}</span>
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
                <div className="d-inline-block text-center" style={{
                  minHeight: "120px",
                  padding: "15px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <div style={{
                    width: "70px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px"
                  }}>
                    <Image
                      width={160}
                      height={80}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                      src={bodyType.imgSrc}
                      alt={bodyType.title}
                    />
                  </div>
                  <div style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    color: "#333",
                    textAlign: "center",
                    lineHeight: "1.2"
                  }}>{bodyType.title}</div>
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
        <Row className="gap-4 flex-wrap mt-3"> {/* Adjusted gap for closer packing */}
          {bodyTypeData?.map((bodyType) => (
            <Col xs={4} sm={3} md={2} lg={2} xl={1} key={bodyType.title} className="mb-2 text-center">
              <Link href={`cars?bodyType=${bodyType.route}`}>
                <div className="d-inline-block text-center" style={{
                  minHeight: "120px",
                  padding: "15px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <div style={{
                    width: "70px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px"
                  }}>
                    <Image
                      src={bodyType.imgSrc}
                      alt={bodyType.title}
                      // layout="fill" 
                      // objectFit="contain"
                      width={160}
                      height={80}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    color: "#333",
                    textAlign: "center",
                    lineHeight: "1.2"
                  }}>{bodyType.title}</div>
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
