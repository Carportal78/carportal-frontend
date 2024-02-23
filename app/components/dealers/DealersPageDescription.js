"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";

// import required modules
import Select from "react-select";
import { selectCityAtom } from "../atoms/categoriesAtoms";
import statesCitiesList from '../../../public/jsondata/state-and-city.json'
import { useAtom } from "jotai";

export default function DealersPageDescription({ carModelDetails, carVariantsList, carBrandsList }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");
    const [selectedBrandGroup, setselectedBrandGroup] = useState(null);
    const [selectedGroup, setselectedGroup] = useState(null);
    const [cityData] = useAtom(selectCityAtom);
    const { brandid } = useParams();
    const [cityOptions, setCityOptions] = useState([]);

    const openModal = (id) => {
        setVideoId(id);
        setOpen(true);
    };

    useEffect(() => {
        console.log('cityData ', cityData);
    })

    useEffect(() => {
        const allCities = [];
        Object.keys(statesCitiesList).forEach(state => {
            statesCitiesList[state].forEach(city => {
                allCities.push({
                    value: city.id,
                    label: city.city
                });
            });
        });
        setCityOptions(allCities);
    }, []);
    
    // New useEffect for setting initial selected city based on cityData
    useEffect(() => {
        if (cityData && cityOptions.length > 0) {
            const initialCity = cityOptions.find(city => city.value === cityData.id);
            if (initialCity) {
                setselectedGroup(initialCity);
            }
        }
    }, [cityData, cityOptions]);
    
    // No changes needed here if it's working as expected
    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }
    
    

    useEffect(() => {
        const selectedBrand = carBrandsList?.find(brand => brand._id === brandid);
        if (selectedBrand) {
            setselectedBrandGroup({ value: selectedBrand._id, label: selectedBrand.brandName });
        }
    }, [brandid, carBrandsList]);

    // Assuming each variant object in carVariantsList has an 'id' and 'name' property
    const brandOptionGroup = carBrandsList?.map(brand => ({
        value: brand._id, // Use the unique identifier of the variant here
        label: brand.brandName, // The name of the variant to be displayed
    }));

    // Assuming each variant object in carVariantsList has an 'id' and 'name' property
    const optionGroup = carVariantsList?.map(variant => ({
        value: variant._id, // Use the unique identifier of the variant here
        label: variant.name, // The name of the variant to be displayed
    }));

    useEffect(() => {
    }, [carVariantsList, carModelDetails]);

    function handleSelectBrandGroup(selectedGroup) {
        const modelId = carModelDetails?._id;
        const variantId = selectedGroup.value;
        setselectedBrandGroup(selectedGroup);
    }

    function handleSearchDealer() {

    }

    return (
        <>
            <div className=" p20 bdr_none pl0 pr0">
                <div className="wrapper">
                    <h4>Hyundai Cars Dealers and Showrooms in Bangalore</h4>
                    <p>
                        Carportal connects you with authorized Hyundai Showrooms and dealers in Bangalore with their address and complete contact info.
                        For more information on Hyundai Cars Price, Offers, EMI options and test drive contact the below mentioned dealers in Bangalore.
                    </p>
                </div>

                <div className="d-flex flex-wrap gap-2 align-items-center">
                    <Col xl={4} className=" mb-3 mt-4">
                        <Select
                            placeholder="Change Brand..."
                            value={selectedBrandGroup}
                            onChange={handleSelectBrandGroup}
                            options={brandOptionGroup}
                            className="select2-selection"
                        // styles={customStyles}
                        />
                    </Col>
                    <Col xl={4} className=" mb-3 mt-4">
                        <Select
                            placeholder="Select City..."
                            value={selectedGroup}
                            onChange={handleSelectGroup}
                            options={cityOptions}
                            className="select2-selection"
                        />
                    </Col>
                    <Col className=" mb-3 mt-md-5">
                        <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20" onClick={handleSearchDealer}>
                            <span className="flaticon-profit-report mr10 fz18 vam" />
                            Search Dealer
                        </button>
                    </Col>
                </div>
                {/* End opening_hour_widgets */}
            </div>
        </>
    );
}
