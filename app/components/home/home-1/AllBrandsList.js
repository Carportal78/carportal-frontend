"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "../../css/findCarOfChoice.module.css";
import { Button, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const allBrandsList = [
  {
    title: "Maruti Suzuki",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Tata",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Hyundai",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Maruti",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Toyota",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "BMW",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Kia",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Mercedes-Benz",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Land Rover",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Honda",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Skoda",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Audi",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "MG",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Volvo",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Citroen",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Porche",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Volkswegen",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Jaguar",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Jeep",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Lemborghini",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Nissan",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Lexus",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Ferrari",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Renault",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Rolls-Royce",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "MINI",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Meserati",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "BYD",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Aston Martin",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Force Motors",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  },
  {
    title: "Izusu",
    route: "/1",
    imgSrc: "/images/category-item/1.png"
  }
];

function AllBrandsList() {

  return (
    <div className="d-flex flex-wrap mb-2">
    {allBrandsList.map((bodyType) => (
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
  );
}

export default AllBrandsList;
