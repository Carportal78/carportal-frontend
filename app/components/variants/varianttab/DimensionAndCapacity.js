import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabPane, Table } from "react-bootstrap";
import classnames from "classnames";
import './VerticalTab.css';

function DimensionAndCapacity({ carVariant }) {

    return (
        <>
            <div>
                <div className="d-flex flex-column flex-grow-1">
                    <Table bordered hover responsive>
                        <tbody>
                            <tr>
                                <td>Length (mm)</td>
                                <td>{carVariant?.dimensionAndCapacity?.length}</td>
                            </tr>
                            <tr>
                                <td>Width (mm)</td>
                                <td>{carVariant?.dimensionAndCapacity?.width}</td>
                            </tr>
                            <tr>
                                <td>Height (mm)</td>
                                <td>{carVariant?.dimensionAndCapacity?.height}</td>
                            </tr>
                            <tr>
                                <td>Ground Clearance Unladen</td>
                                <td>{carVariant?.dimensionAndCapacity?.groundClearanceUnladen}</td>
                            </tr>
                            <tr>
                                <td>Wheel Base (mm)</td>
                                <td>{carVariant?.dimensionAndCapacity?.wheelBase}</td>
                            </tr>
                            <tr>
                                <td>Front Tread</td>
                                <td>{carVariant?.dimensionAndCapacity?.frontTread}</td>
                            </tr>
                            <tr>
                                <td>Rear Tread</td>
                                <td>{carVariant?.dimensionAndCapacity?.rearTread}</td>
                            </tr>
                            <tr>
                                <td>Kerb Weight</td>
                                <td>{carVariant?.dimensionAndCapacity?.kerbWeight}</td>
                            </tr>
                            <tr>
                                <td>Gross Weight</td>
                                <td>{carVariant?.dimensionAndCapacity?.grossWeight}</td>
                            </tr>
                            <tr>
                                <td>Seating Capacity</td>
                                <td>{carVariant?.dimensionAndCapacity?.seatingCapacity}</td>
                            </tr>
                            <tr>
                                <td>Boot Space</td>
                                <td>{carVariant?.dimensionAndCapacity?.bootSpace}</td>
                            </tr>
                            <tr>
                                <td>No Of Doors</td>
                                <td>{carVariant?.dimensionAndCapacity?.noOfDoors}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default DimensionAndCapacity;
