import React, { useState } from "react";
import ContactDealer from "./ContactDealer";
import SignupForm from "./SignupForm";
import Link from "next/link";
import Select from 'react-select';
import cities from '../../../../public/jsondata/cities.json'

const ExShowroomPriceForm = ({ carModelDetails }) => {
    const [selectedCity, setSelectedCity] = useState(null);

    // Prepare options for React Select
    const cityOptions = cities.map(city => ({
        value: city.id, // Using city ID as value
        label: city.name // City name as label
    }));

    // Handler for change in city selection with React Select
    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };

    return (
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                {/* End Modal close button */}

                <div className="modal-body container p60">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul
                                className="sign_up_tab nav nav-tabs"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a
                                        className={`nav-link active`}
                                        id={`1-tab`}
                                        data-bs-toggle="tab"
                                        href={`#1`}
                                        role="tab"
                                        aria-controls={1}
                                        aria-selected={true}
                                    >
                                        Select City
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="tab-content container p0" id="myTabContent">
                        <div className="row mt30 tab-pane fade show active" id="1" role="tabpanel" aria-labelledby="1-tab" key="1">
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
                    {/* End tab-content */}
                </div>
                {/* End modal-body */}
            </div>
        </div>
    );
};

export default ExShowroomPriceForm;
