"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "../../css/findCarOfChoice.module.css";
import { Button, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const budgetButtons = [
  {
    title: "Under 5 Lakh",
    route: "/1",
  },
  {
    title: "Under 10 Lakh",
    route: "/1",
  },
  {
    title: "Under 15 Lakh",
    route: "/1",
  },
  {
    title: "Under 20 Lakh",
    route: "/1",
  },
  {
    title: "Under 25 Lakh",
    route: "/1",
  },
  {
    title: "Under 30 Lakh",
    route: "/1",
  },
  {
    title: "Luxury Cars",
    route: "/1",
  },
];

const seatingCapacityButtons = [
  {
    title: "5 Seater",
    route: "/1",
  },
  {
    title: "6 Seater",
    route: "/1",
  },
  {
    title: "7 Seater",
    route: "/1",
  },
  {
    title: "8 Seater",
    route: "/1",
  },
];

const bodyTypeData = [
  {
    title: "SUV",
    imgSrc: "/images/bodytype/suv.svg",
    route: "/suv-route",
  },
  {
    title: "Sedan",
    imgSrc: "/images/bodytype/sedan.svg",
    route: "/sedan-route",
  },
  {
    title: "Hatchback",
    imgSrc: "/images/bodytype/hatchback.svg",
    route: "/hatchback-route",
  },
  {
    title: "Compact SUV",
    imgSrc: "/images/bodytype/compactsuv.svg",
    route: "/compact-suv-route",
  },
  {
    title: "Compact Sedan",
    imgSrc: "/images/bodytype/compactsedan.svg",
    route: "/compact-sedan-route",
  },
  {
    title: "MUV",
    imgSrc: "/images/bodytype/muv.svg",
    route: "/muv-route",
  },
  {
    title: "Convertible",
    imgSrc: "/images/bodytype/convertible.svg",
    route: "/convetible-route",
  },
  {
    title: "Coupe",
    imgSrc: "/images/bodytype/coupe.svg",
    route: "/coupe-route",
  },
  {
    title: "Station Wegon",
    imgSrc: "/images/bodytype/wagon.svg",
    route: "/station-wegon-route",
  },
  {
    title: "Minivan",
    imgSrc: "/images/bodytype/van.svg",
    route: "/minivan-route",
  },
  {
    title: "Truck",
    imgSrc: "/images/bodytype/truck.svg",
    route: "/truck-route",
  },
  // ... Add other car types similarly ...
];

const fuelTypeData = [
    {
        title: "Petrol",
        imgSrc: "/images/fueltype/petrol.svg",
        route: "/petrol-route",
      },
      {
        title: "Diesel",
        imgSrc: "/images/fueltype/diesel.svg",
        route: "/diesel-route",
      },
      {
        title: "CNG",
        imgSrc: "/images/fueltype/cng.svg",
        route: "/cng-route",
      },
      {
        title: "Electric",
        imgSrc: "/images/fueltype/electric.svg",
        route: "/electric-route",
      },
      {
        title: "Hybrid",
        imgSrc: "/images/fueltype/hybrid.svg",
        route: "/hybrid-route",
      }
];

const transmissionTypeData = [
    {
        title: "Automatic",
        imgSrc: "/images/transmissiontype/automatic.svg",
        route: "/automatic-route",
      },
      {
        title: "Manual",
        imgSrc: "/images/transmissiontype/manual.svg",
        route: "/manual-route",
      }
];

function FindCarChoice() {
  const [key, setKey] = useState("budget");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab
        eventKey="budget"
        title="Budget"
        className={`${styles.tabItem} ${key === "budget" ? styles.active : ""}`}
      >
        <div className="d-flex flex-wrap mb-2">
          {budgetButtons?.map((buttonType) => (
            <Link href={buttonType.route} key={buttonType.title}>
              <Button
                variant="outline-secondary"
                size="lg"
                key={buttonType.title}
                className={`mr10 mt-2 ${styles.budgetCarButton} pl30 pr30`}
              >
                {buttonType.title}
              </Button>
            </Link>
          ))}
        </div>
      </Tab>
      <Tab
        eventKey="fuelType"
        title="Fuel Type"
        className={`${styles.tabItem} ${
          key === "fuelType" ? styles.active : ""
        }`}
      >
        <div className="d-flex flex-wrap mb-2">
          {fuelTypeData?.map((bodyType) => (
            <Link href={bodyType.route} key={bodyType.title}>
              <div className={`bodyTypeItem ${styles.bodyTypeItem} d-flex`}>
                <div>
                 <Image
                    width={150}
                    height={58}
                    style={{ objectFit: "cover" }}
                    src={bodyType.imgSrc}
                    alt={bodyType.title}
                    className={styles.bodyTypeImage}
                />
                </div>
                <span className={styles.bodyTypeTitle}>{bodyType.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </Tab>
      <Tab
        eventKey="transmissionType"
        title="Transmission Type"
        className={`${styles.tabItem} ${
          key === "transmissionType" ? styles.active : ""
        }`}
      >
           <div className="d-flex flex-wrap mb-2">
          {transmissionTypeData?.map((bodyType) => (
            <Link href={bodyType.route} key={bodyType.title}>
              <div className={`bodyTypeItem ${styles.bodyTypeItem} d-flex`}>
                <div>
                 <Image
                    width={150}
                    height={58}
                    style={{ objectFit: "cover" }}
                    src={bodyType.imgSrc}
                    alt={bodyType.title}
                    className={styles.bodyTypeImage}
                />
                </div>
                <span className={styles.bodyTypeTitle}>{bodyType.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </Tab>
      <Tab
        eventKey="bodyType"
        title="Body Type"
        className={`${styles.tabItem} ${
          key === "bodyType" ? styles.active : ""
        }`}
      >
        <div className="d-flex flex-wrap mb-2">
          {bodyTypeData?.map((bodyType) => (
            <Link href={bodyType.route} key={bodyType.title}>
              <div className={`bodyTypeItem ${styles.bodyTypeItem} d-flex`}>
                <div>
                 <Image
                    width={150}
                    height={58}
                    style={{ objectFit: "cover" }}
                    src={bodyType.imgSrc}
                    alt={bodyType.title}
                    className={styles.bodyTypeCheckImage}
                />
                </div>
                <span className={styles.bodyTypeTitle}>{bodyType.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </Tab>

      <Tab
        eventKey="seatingCapacity"
        title="Seating Capacity"
        className={`${styles.tabItem} ${
          key === "bodyType" ? styles.active : ""
        }`}
      >
        <div className="d-flex flex-wrap mb-2">
          {seatingCapacityButtons?.map((buttonType) => (
            <Link href={buttonType.route} key={buttonType.title}>
              <Button
                variant="outline-secondary"
                size="lg"
                key={buttonType.title}
                className={`mr10 mt-2 ${styles.budgetCarButton} pl30 pr30`}
              >
                {buttonType.title}
              </Button>
            </Link>
          ))}
        </div>
      </Tab>
    </Tabs>
  );
}

export default FindCarChoice;
