import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabPane, Table } from "react-bootstrap";
import classnames from "classnames";
import './VerticalTab.css';

function EngineAndTransmisssions({ carVariant }) {
    const [verticalActiveTab, setVerticalActiveTab] = useState("1");

    return (
        <>
            <div>
                <div className="d-flex flex-column flex-grow-1">
                    <Table bordered hover responsive>
                    <tbody>
                            <tr>
                                <td>Engine Type</td>
                                <td>{carVariant?.engineAndTransmission?.engineType}</td>
                            </tr>
                            <tr>
                                <td>Displacement (cc)</td>
                                <td>{carVariant?.engineAndTransmission?.displacement}</td>
                            </tr>
                            <tr>
                                <td>MaxTorque</td>
                                <td>{carVariant?.engineAndTransmission?.maxTorque}</td>
                            </tr>
                            <tr>
                                <td>noOfCylinders</td>
                                <td>{carVariant?.engineAndTransmission?.noOfCylinders}</td>
                            </tr>
                            <tr>
                                <td>maxPower</td>
                                <td>{carVariant?.engineAndTransmission?.maxPower}</td>
                            </tr>
                            <tr>
                                <td>valuePerCylinder</td>
                                <td>{carVariant?.engineAndTransmission?.valuePerCylinder}</td>
                            </tr>
                            <tr>
                                <td>fuelSupplySystem</td>
                                <td>{carVariant?.engineAndTransmission?.fuelSupplySystem}</td>
                            </tr>
                            <tr>
                                <td>compressionRatio</td>
                                <td>{carVariant?.engineAndTransmission?.compressionRatio}</td>
                            </tr>
                            <tr>
                                <td>turboCharge</td>
                                <td>{carVariant?.engineAndTransmission?.turboCharge}</td>
                            </tr>
                            <tr>
                                <td>transmissionType</td>
                                <td>{carVariant?.engineAndTransmission?.transmissionType}</td>
                            </tr>
                            <tr>
                                <td>gearBox</td>
                                <td>{carVariant?.engineAndTransmission?.gearBox}</td>
                            </tr>
                            <tr>
                                <td>mildHybrid</td>
                                <td>{carVariant?.engineAndTransmission?.mildHybrid}</td>
                            </tr>
                            <tr>
                                <td>driverType</td>
                                <td>{carVariant?.engineAndTransmission?.driverType}</td>
                            </tr>
                            <tr>
                                <td>cluchType</td>
                                <td>{carVariant?.engineAndTransmission?.cluchType}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default EngineAndTransmisssions;
