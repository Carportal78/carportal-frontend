import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabPane, Table } from "react-bootstrap";
import classnames from "classnames";
import './VerticalTab.css';

function EntertainmentAndCommunication({ carVariant }) {

    return (
        <>
            <div>
                <div className="d-flex flex-column flex-grow-1">
                    <Table bordered hover responsive>
                        <tbody>
                            <tr>
                                <td>Length (mm)</td>
                                <td>{carVariant?.entertainmentAndCommunication?.length}</td>
                            </tr>
                            <tr>
                                <td>Width (mm)</td>
                                <td>{carVariant?.entertainmentAndCommunication?.width}</td>
                            </tr>
                            <tr>
                                <td>Height (mm)</td>
                                <td>{carVariant?.entertainmentAndCommunication?.height}</td>
                            </tr>
                            <tr>
                                <td>Ground Clearance Unladen</td>
                                <td>{carVariant?.entertainmentAndCommunication?.groundClearanceUnladen}</td>
                            </tr>
                            <tr>
                                <td>Wheel Base (mm)</td>
                                <td>{carVariant?.entertainmentAndCommunication?.wheelBase}</td>
                            </tr>
                            <tr>
                                <td>Front Tread</td>
                                <td>{carVariant?.entertainmentAndCommunication?.frontTread}</td>
                            </tr>
                            <tr>
                                <td>Rear Tread</td>
                                <td>{carVariant?.entertainmentAndCommunication?.rearTread}</td>
                            </tr>
                            <tr>
                                <td>Kerb Weight</td>
                                <td>{carVariant?.entertainmentAndCommunication?.kerbWeight}</td>
                            </tr>
                            <tr>
                                <td>Gross Weight</td>
                                <td>{carVariant?.entertainmentAndCommunication?.grossWeight}</td>
                            </tr>
                            <tr>
                                <td>Seating Capacity</td>
                                <td>{carVariant?.entertainmentAndCommunication?.seatingCapacity}</td>
                            </tr>
                            <tr>
                                <td>Boot Space</td>
                                <td>{carVariant?.entertainmentAndCommunication?.bootSpace}</td>
                            </tr>
                            <tr>
                                <td>No Of Doors</td>
                                <td>{carVariant?.entertainmentAndCommunication?.noOfDoors}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default EntertainmentAndCommunication;
