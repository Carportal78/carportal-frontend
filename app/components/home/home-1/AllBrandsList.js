"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../css/findCarOfChoice.module.css';

function AllBrandsList() {
  const [carBrands, setCarBrands] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/65538448b78add9eaa02d417';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.data && data.data.carBrandsList) {
        setCarBrands(data.data.carBrandsList);
      }
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
  }, []);

  return (
    <div className="d-flex flex-wrap mb-2">
      {carBrands.map((brand) => (
        <Link href={`listing/lstingdata/${brand._id}` || '/fallback-route'} key={brand._id}>
          <div className={`bodyTypeItem ${styles.bodyTypeItem} d-flex`}>
            <div>
              <Image
                width={150}
                height={58}
                style={{ objectFit: "cover" }}
                src={brand?.media?.url}
                alt={brand?.brandName}
                className={styles.bodyTypeImage}
              />
            </div>
            <span className={styles.bodyTypeTitle}>{brand.brandName}</span>
          </div>
        </Link> 
      ))}
    </div>
  );
}

export default AllBrandsList;
