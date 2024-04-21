import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Select from "react-select";
import { useAtom } from "jotai";
import { selectCityAtom } from "../atoms/categoriesAtoms";
import statesCitiesList from '../../../public/jsondata/state-and-city.json';
import BreadCrumb from "../listing/listing-single/BreadCrumb";

export default function DealersPageDescription({ carModelDetails, carVariantsList, carBrandsList, carBrand, cityData }) {
    // State for the UI
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");
    const [selectedBrandGroup, setselectedBrandGroup] = useState(null);
    const [selectedGroup, setselectedGroup] = useState(null);  // This seems to be unused and can be removed if not needed

    // State for the selected city and city options
    const [selectedCity, setSelectedCity] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);

    // URL parameter
    const { brandid } = useParams();

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

    useEffect(() => {
        if (cityData !== null && cityOptions.length > 0) {
            const matchingCity = cityOptions.find(option => option.value === cityData.toString());
            setSelectedCity(matchingCity || null);
        }
    }, [cityData, cityOptions]);

    function handleSelectBrandGroup(selected) {
        setselectedBrandGroup(selected);
    }

    function handleSelectCity(selected) {
        setSelectedCity(selected);
    }

    function handleSearchDealer() {
        // Perform search operation here
        alert('sds');
        router.push(`/dealers/${brand?._id}`);
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
                    {!carBrand && <h4></h4> }
                    {carBrand && <h4>{carBrand?.brandName} Cars Dealers and Showrooms in {selectedCity?.label}</h4>}
                    <p>
                        Carportal connects you with authorized {carBrand?.brandName} Showrooms and dealers in {selectedCity?.label} with their address and complete contact info.
                        For more information on {carBrand?.brandName} Cars Price, Offers, EMI options and test drive contact the below mentioned dealers in {selectedCity?.label}.
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
