"use client";
import React, { useEffect, useState } from "react";

// import required modules
import { Table } from "react-bootstrap";
import Link from "next/link";
import ExShowroomPriceForm from "../../common/contactdealerForm/ExShowroomPriceForm";
import statesCitiesList from '../../../../public/jsondata/state-and-city.json';
import { selectCityAtom } from "../../atoms/categoriesAtoms";
import { useAtom } from "jotai";

export default function OnRoadPriceDescription({ carModelDetails, carVariantsList }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); 
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [cityData] = useAtom(selectCityAtom);
  const [cityOptions, setCityOptions] = useState([]);

  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  // Populate city options
  useEffect(() => {
    const loadedCityOptions = Object.keys(statesCitiesList)?.flatMap(state => (
      statesCitiesList[state].map(city => ({
        value: city.id.toString(),
        label: city.city
      }))
    ));
    setCityOptions(loadedCityOptions);
  }, []);

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="nav-overview"
        role="tabpanel"
        aria-labelledby="nav-overview-tab"
      > 
        <div className="opening_hour_widgets p30 bdr_none pl0 pr0">
          <div className="wrapper">
            <h3>On Road Price of {carModelDetails?.modelName} in <span data-bs-toggle="modal" data-bs-target="#onRoadPriceForm" style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>{cityOptions?.find(option => option.value == cityData)?.label}<i class="fa-solid fa-pen-to-square" style={{fontSize: '15px'}}></i></span></h3> 
            <p>
              {carModelDetails?.modelName} price in New Delhi start at ₹ {carModelDetails?.priceRange?.minPrice} {carModelDetails?.priceRange?.minPriceType}. The
              lowest price model is {carVariantsList?.[0]?.basicInformation?.onRoadPrice} and the most priced
              model of {carModelDetails?.modelName} priced at ₹ {carModelDetails?.priceRange?.maxPrice} {carModelDetails?.priceRange?.maxPriceType}.
              Visit your nearest {carModelDetails?.modelName} showroom
              in New Delhi for best offers. View all{carModelDetails?.modelName} cars price
              in your city.
            </p>
          </div>
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Variants</th>
          <th>On-Road Price</th>
        </tr>
      </thead>
      <tbody>
      {carVariantsList?.map((variant, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <Link className="tdu color-blue ml10" href={`/${variant?.name}/${variant?._id}`}>
                {`${variant?.name} ${variant.carModel?.modelName}`}
              </Link>
            </td>
            <td>₹ {`${Number(variant?.pricingDetails?.exShowroomPrice).toLocaleString('en-IN')}*`}</td>
          </tr>
        ))}
      </tbody>
        </Table>
    </div>
        {/* End opening_hour_widgets */}
      </div>
    </>
  );
}
