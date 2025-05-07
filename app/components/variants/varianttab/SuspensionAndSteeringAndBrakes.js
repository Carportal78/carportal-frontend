import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabPane, Table } from "react-bootstrap";
import classnames from "classnames";
import './VerticalTab.css';

function SuspensionAndSteeringAndBrakes({ carVariant }) {
    console.log(carVariant);

    return (
        <>
            <div>
                <div className="d-flex flex-column flex-grow-1">
                    <Table bordered hover responsive>
                    <tbody>
                            <tr>
                                <td>Front Suspension</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.fontSuspension}</td>
                            </tr>
                           <tr>
                                <td>Rear Suspension</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.rearSuspension}</td>
                            </tr>
                            <tr>
                                <td>Steering Type</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.steeringType}</td>
                            </tr>
                            <tr>
                                <td>Steering Column</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.steeringColumn}</td>
                            </tr>
                            <tr>
                                <td>Turning Radius (Metres)</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.turningRadius}</td>
                            </tr>
                            <tr>
                                <td>Front Brake Type</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.frontBrakeType}</td>
                            </tr>
                            <tr>
                                <td>Rear Brake Type</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.rearBrakeType}</td>
                            </tr>
                            <tr>
                                <td>Emission Norm Compliance</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.emissionNormCompliance}</td>
                            </tr>
                            <tr>
                                <td>Tyre Size</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.tyreSize}</td>
                            </tr>
                            <tr>
                                <td>Tyre Type</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.tyreType}</td>
                            </tr>
                            <tr>
                                <td>Wheel Size</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.wheelSize}</td>
                            </tr>
                            <tr>
                                <td>Alloy Wheel Size</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.alloyWheelSize}</td>
                            </tr>
                            <tr>
                                <td>Alloy Wheel Size Front</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.alloyWheelSizeFront}</td>
                            </tr>
                            <tr>
                                <td>Alloy Wheel Size Rear</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.alloyWheelSizeRear}</td>
                            </tr>
                            <tr>
                                <td>Boot Space</td>
                                <td>{carVariant?.suspensionAndSteeringAndBrakes?.bootSpace}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default SuspensionAndSteeringAndBrakes;
