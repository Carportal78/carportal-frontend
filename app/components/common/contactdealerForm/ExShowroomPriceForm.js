import React, { useEffect, useRef, useState } from "react";
import Select from 'react-select';
import statesCitiesList from '../../../../public/jsondata/state-and-city.json';
import { useAtom } from "jotai";
import { selectCityAtom } from "../../atoms/categoriesAtoms";

const ExShowroomPriceForm = ({ carModelDetails }) => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [city, selectCityData] = useAtom(selectCityAtom);
    const [cityOptions, setCityOptions] = useState([]);
    // Create a ref to attach to the modal
    const modalRef = useRef(null);

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

    const handleCityChange = (selectedOption) => {
        selectCityData(selectedOption);
        setSelectedCity(selectedOption);
        const condition = true; // your condition

        if (condition) {
            const modalElement = modalRef.current;
            if (modalElement) {
                // Remove the 'show' class and set 'aria-hidden' attribute
                modalElement.classList.remove('show');
                modalElement.setAttribute('aria-hidden', 'true');
                // Hide the modal backdrop
                document.body.classList.remove('modal-open');
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.parentNode.removeChild(backdrop);
                }
            }
        }
    };

    return (
        <div className="modal-dialog modal-dialog-centered" ref={modalRef} >
            <div className="modal-content">
                <div className="modal-header">
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div className="modal-body container p60">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="select-city-tab" data-bs-toggle="tab" href="#select-city" role="tab" aria-controls="select-city" aria-selected="true">Select City</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content container p0" id="myTabContent">
                        <div className="row mt30 tab-pane fade show active" id="select-city" role="tabpanel" aria-labelledby="select-city-tab" key="select-city">
                            <div className="col-lg-12">
                                <div className="login_form">
                                    <p>We need your city to customize your experience</p>
                                    <Select
                                        placeholder="Select City..."
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                        options={cityOptions}
                                        className="select2-selection"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExShowroomPriceForm;