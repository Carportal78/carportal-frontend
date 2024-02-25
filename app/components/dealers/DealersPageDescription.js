import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Select from "react-select";
import { useAtom } from "jotai";
import { selectCityAtom } from "../atoms/categoriesAtoms";
import statesCitiesList from '../../../public/jsondata/state-and-city.json';
import BreadCrumb from "../listing/listing-single/BreadCrumb";

export default function DealersPageDescription({ carModelDetails, carVariantsList, carBrandsList }) {
    // State for the UI
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");
    const [selectedBrandGroup, setselectedBrandGroup] = useState(null);
    const [selectedGroup, setselectedGroup] = useState(null);  // This seems to be unused and can be removed if not needed

    // State for the selected city and city options
    const [selectedCity, setSelectedCity] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);

    // Fetch cityData from Jotai state
    const [cityData] = useAtom(selectCityAtom);

    // URL parameter
    const { brandid } = useParams();

    // Populate city options
    useEffect(() => {
        const loadedCityOptions = Object.keys(statesCitiesList).flatMap(state => (
            statesCitiesList[state].map(city => ({
                value: city.id.toString(),  // Convert to string if cityData is a string
                label: city.city
            }))
        ));
        setCityOptions(loadedCityOptions);
    }, []);

    // Prepopulate selected city based on cityData ID
    useEffect(() => {
        if (cityData !== null && cityOptions.length > 0) {
            // Find the matching city by converting both values to the same type (string)
            const matchingCity = cityOptions.find(option => option.value === cityData.toString());
            setSelectedCity(matchingCity || null);
        }
    }, [cityData, cityOptions]);

    // Handle brand selection
    function handleSelectBrandGroup(selected) {
        setselectedBrandGroup(selected);
    }

    // Handle city selection
    function handleSelectCity(selected) {
        setSelectedCity(selected);
    }

    // Search dealer function
    function handleSearchDealer() {
        // Perform search operation here
    }

    // Populate brand options
    useEffect(() => {
        if (brandid) {
            const selectedBrand = carBrandsList.find(brand => brand._id === brandid);
            if (selectedBrand) {
                setselectedBrandGroup({ value: selectedBrand._id, label: selectedBrand.brandName });
            }
        }
    }, [brandid, carBrandsList]);

    // Brand options for the select component
    const brandOptionGroup = carBrandsList.map(brand => ({
        value: brand._id,
        label: brand.brandName
    }));

    return (
        <>
        <div className="row mb10">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <BreadCrumb breadCrumbDetails={`New Car / Dealers`} />
              </div>
            </div>
          </div>
            <div className="p20 bdr_none pl0 pr0">
                <div className="wrapper">
                    <h4>Hyundai Cars Dealers and Showrooms in Bangalore</h4>
                    <p>
                        Carportal connects you with authorized Hyundai Showrooms and dealers in Bangalore with their address and complete contact info.
                        For more information on Hyundai Cars Price, Offers, EMI options and test drive contact the below mentioned dealers in Bangalore.
                    </p>
                </div>

                <div className="d-flex flex-wrap gap-2 align-items-center">
                    <Col xl={4} className="mb-3 mt-4">
                        <Select
                            placeholder="Change Brand..."
                            value={selectedBrandGroup}
                            onChange={handleSelectBrandGroup}
                            options={brandOptionGroup}
                            className="select2-selection"
                        />
                    </Col>
                    <Col xl={4} className="mb-3 mt-4">
                        <Select
                            placeholder="Select City..."
                            value={selectedCity}
                            onChange={handleSelectCity}
                            options={cityOptions}
                            className="select2-selection"
                        />
                    </Col>
                    <Col className="mb-3 mt-md-5">
                        <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20" onClick={handleSearchDealer}>
                            <span className="flaticon-profit-report mr10 fz18 vam" />
                            Search Dealer
                        </button>
                    </Col>
                </div>
            </div>
        </>
    );
}
