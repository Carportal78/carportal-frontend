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
                                <td>Max Torque (nm@rpm)</td>
                                <td className="text-wrap">{carVariant?.engineAndTransmission?.maxTorque.replace('@', ' ')}</td>
                            </tr>
                            <tr>
                                <td>Number of Cylinders</td>
                                <td>{carVariant?.engineAndTransmission?.noOfCylinders}</td>
                            </tr>
                            <tr>
                                <td>Max Power (bhp@rpm)</td>
                                <td>{carVariant?.engineAndTransmission?.maxPower?.replace('@', ' ')}</td>
                            </tr>
                            <tr>
                                <td>Value Per Cylinder</td>
                                <td>{carVariant?.engineAndTransmission?.valuePerCylinder}</td>
                            </tr>
                            <tr>
                                <td>Fuel Supply System</td>
                                <td>{carVariant?.engineAndTransmission?.fuelSupplySystem}</td>
                            </tr>
                            <tr>
                                <td>Compression Rati</td>
                                <td>{carVariant?.engineAndTransmission?.compressionRatio}</td>
                            </tr>
                            <tr>
                                <td>Turbo Charge</td>
                                <td>{carVariant?.engineAndTransmission?.turboCharge}</td>
                            </tr>
                            <tr>
                                <td>Transmission Type</td>
                                <td>{carVariant?.engineAndTransmission?.transmissionType}</td>
                            </tr>
                            <tr>
                                <td>Gear Box</td>
                                <td>{carVariant?.engineAndTransmission?.gearBox}</td>
                            </tr>
                            <tr>
                                <td>Mild Hybrid</td>
                                <td>{carVariant?.engineAndTransmission?.mildHybrid}</td>
                            </tr>
                            <tr>
                                <td>Driver Type</td>
                                <td>{carVariant?.engineAndTransmission?.driverType}</td>
                            </tr>
                            <tr>
                                <td>Clutch Type</td>
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
