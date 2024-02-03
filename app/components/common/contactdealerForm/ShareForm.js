import React from "react";
import ContactDealer from "./ContactDealer";
import SignupForm from "./SignupForm";
import Link from "next/link";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";

const ShareForm = ({ carModelDetails }) => {
    const shareUrl = "https://www.gulfania.com/listing/top-attractions/evening-desert-safari-dubai/65a66dd9093d05cb54f800ac";

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert("Link copied to clipboard!");
        });
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
                                       Share Link
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

                                    <div className="mb-2 mr-sm-2">
                                        <Row>
                                            <Col>
                                                <textarea style={{backgroundColor: '#D3D3D3'}} rows={6} type="text" name="city" className="form-control" readOnly defaultValue={shareUrl} />
                                            </Col>
                                            <Col md="auto">
                                                <Button className="btn btn-thm ofr_btn1 w-100" onClick={handleCopy}>
                                                    <span className="flaticon-profit-report mr-2 fz18 vam" />
                                                    Copy Link
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareForm;
