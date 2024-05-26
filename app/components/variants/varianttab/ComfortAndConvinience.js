import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabPane, Table } from "react-bootstrap";
import classnames from "classnames";
import './VerticalTab.css';

function ComfortAndConvinience({ carVariant }) {

    return (
        <>
            <div>
                <div className="d-flex flex-column flex-grow-1">
                    <Table bordered hover responsive>
                        <tbody>
                            <tr>
                                <td>Length (mm)</td>
                                <td>{carVariant?.comfortAndConvinience?.length}</td>
                            </tr>
                            <tr>
                                <td>Width (mm)</td>
                                <td>{carVariant?.comfortAndConvinience?.width}</td>
                            </tr>
                            <tr>
                                <td>Height (mm)</td>
                                <td>{carVariant?.comfortAndConvinience?.height}</td>
                            </tr>
                            <tr>
                                <td>Ground Clearance Unladen</td>
                                <td>{carVariant?.comfortAndConvinience?.groundClearanceUnladen}</td>
                            </tr>
                            <tr>
                                <td>Wheel Base (mm)</td>
                                <td>{carVariant?.comfortAndConvinience?.wheelBase}</td>
                            </tr>
                            <tr>
                                <td>Front Tread</td>
                                <td>{carVariant?.comfortAndConvinience?.frontTread}</td>
                            </tr>
                            <tr>
                                <td>Rear Tread</td>
                                <td>{carVariant?.comfortAndConvinience?.rearTread}</td>
                            </tr>
                            <tr>
                                <td>Kerb Weight</td>
                                <td>{carVariant?.comfortAndConvinience?.kerbWeight}</td>
                            </tr>
                            <tr>
                                <td>Gross Weight</td>
                                <td>{carVariant?.comfortAndConvinience?.grossWeight}</td>
                            </tr>
                            <tr>
                                <td>Seating Capacity</td>
                                <td>{carVariant?.comfortAndConvinience?.seatingCapacity}</td>
                            </tr>
                            <tr>
                                <td>Boot Space</td>
                                <td>{carVariant?.comfortAndConvinience?.bootSpace}</td>
                            </tr>
                            <tr>
                                <td>No Of Doors</td>
                                <td>{carVariant?.comfortAndConvinience?.noOfDoors}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default ComfortAndConvinience;
