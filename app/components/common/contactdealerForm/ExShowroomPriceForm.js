import React from "react";
import ContactDealer from "./ContactDealer";
import SignupForm from "./SignupForm";
import Link from "next/link";

const ExShowroomPriceForm = ({ carModelDetails }) => {
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
                                        City List
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="tab-content container p0" id="myTabContent">
                        <div
                            className={`row mt30 tab-pane fade show active`}
                            id={1}
                            role="tabpanel"
                            aria-labelledby={`1-tab`}
                            key={1}
                        >
                            <div className="col-lg-12">
                                <div className="login_form">
                                    <p>
                                        We need your city to customize your experience
                                    </p>
                                    <form>
                                        {/* Car Brand */}
                                        <div className="mb-2">
                                            <label className="form-label">Car Brand</label>
                                            <select name="carBrand" className="form-control" onChange={handleChange} value={formData.carBrand}>
                                                <option value="">Select Brand</option>
                                                {carBrands?.map(brand => <option key={brand._id} value={brand._id}>{brand.brandName}</option>)}
                                            </select>
                                        </div>
                                    </form>
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
