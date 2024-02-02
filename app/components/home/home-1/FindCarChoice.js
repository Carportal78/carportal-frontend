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
    imgSrc: "/images/bodytype/suv.svg",
    route: "SUV",
  },
  {
    title: "Sedan",
    imgSrc: "/images/bodytype/sedan.svg",
    route: "Sedan",
  },
  {
    title: "Hatchback",
    imgSrc: "/images/bodytype/hatchback.svg",
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
    imgSrc: "/images/bodytype/muv.svg",
    route: "MuV",
  },
  {
    title: "Convertible",
    imgSrc: "/images/bodytype/convertible.svg",
    route: "Convertible",
  },
  {
    title: "Coupe",
    imgSrc: "/images/bodytype/coupe.svg",
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
  // ... Add other car types similarly ...
];

const fuelTypeData = [
    {
        title: "Petrol",
        imgSrc: "/images/fueltype/petrol.svg",
        route: "Petrol",
      },
      {
        title: "Diesel",
        imgSrc: "/images/fueltype/diesel.svg",
        route: "Diesel",
      },
      {
        title: "CNG",
        imgSrc: "/images/fueltype/cng.svg",
        route: "CNG",
      },
      {
        title: "Electric",
        imgSrc: "/images/fueltype/electric.svg",
        route: "Electric",
      },
      {
        title: "Hybrid",
        imgSrc: "/images/fueltype/hybrid.svg",
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
      className="mb-3"
    >
      <Tab
        eventKey="budget"
        title="Budget"
        className={`${styles.tabItem} ${key === "budget" ? styles.active : ""}`}
      >
        <div className="d-flex flex-wrap mb-2">
          {budgetButtons?.map((buttonType) => (
            <Link href={`listings?budget=${buttonType.route}`} key={buttonType.title}> 
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
            <Link href={`listings?fuelType=${bodyType.route}`} key={bodyType.title}>
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
            <Link href={`listings?transmissionType=${bodyType.route}`} key={bodyType.title}>
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
            <Link href={`listings?bodyType=${bodyType.route}`} key={bodyType.title}>
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
            <Link href={`listings?seatingCapacity=${buttonType.route}`} key={buttonType.title}>
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
