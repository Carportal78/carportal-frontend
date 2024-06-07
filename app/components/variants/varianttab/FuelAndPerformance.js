import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabPane, Table } from "react-bootstrap";
import classnames from "classnames";
import './VerticalTab.css';

function FuelAndPerformace({ carVariant }) {

    return (
        <>
            <div>
                <div className="d-flex flex-column flex-grow-1">
                    <Table bordered hover responsive>
                        <tbody>
                            <tr>
                                <td>Fuel Type</td>
                                <td>{carVariant?.fuelAndPerformance?.fuelType}</td>
                            </tr>
                            <tr>
                                <td>City Mileage</td>
                                <td>{carVariant?.fuelAndPerformance?.mileageCity}</td>
                            </tr>
                            <tr>
                                <td>Arai Mileage</td>
                                <td>{carVariant?.fuelAndPerformance?.mileageArai}</td>
                            </tr>
                            <tr>
                                <td>Fuel Tank Capacity</td>
                                <td>{carVariant?.fuelAndPerformance?.fuelTankCapacity}</td>
                            </tr>
                            <tr>
                                <td>Emission Norm Compliance</td>
                                <td>{carVariant?.fuelAndPerformance?.emissionNormCompliance}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default FuelAndPerformace;
