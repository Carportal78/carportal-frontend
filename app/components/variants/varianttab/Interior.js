import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabPane, Table } from "react-bootstrap";
import classnames from "classnames";
import './VerticalTab.css';

function Interior({ carVariant }) {
    return (
        <>
            <div>
                <div className="d-flex flex-column flex-grow-1">
                    <Table bordered hover responsive>
                    <tbody>
                            <tr>
                                <td>Tachometer</td>
                                <td>{carVariant?.interior?.tachometer}</td>
                            </tr>
                            <tr>
                                <td>Electronic Uti Tripmeter</td>
                                <td>{carVariant?.interior?.electronicutiTripmeter}</td>
                            </tr>
                            <tr>
                                <td>Fabric Upholestry</td>
                                <td>{carVariant?.interior?.fabricUpholestry}</td>
                            </tr>
                            <tr>
                                <td>Leather Steering Wheel</td>
                                <td>{carVariant?.interior?.leatherSteeringWheel}</td>
                            </tr>
                            <tr>
                                <td>gloveCompartment</td>
                                <td>{carVariant?.interior?.gloveCompartment}</td>
                            </tr>
                            <tr>
                                <td>digitalClock</td>
                                <td>{carVariant?.interior?.digitalClock}</td>
                            </tr>
                            <tr>
                                <td>outsideTemperatureisplay</td>
                                <td>{carVariant?.interior?.outsideTemperatureisplay}</td>
                            </tr>
                            <tr>
                                <td>digitalOdometer</td>
                                <td>{carVariant?.interior?.digitalOdometer}</td>
                            </tr>
                            <tr>
                                <td>dualToneDashboard</td>
                                <td>{carVariant?.interior?.dualToneDashboard}</td>
                            </tr>
                            <tr>
                                <td>Addition Features</td>
                                <td className="text-wrap">{carVariant?.interior?.additionFeatures}</td>
                            </tr>
                            <tr>
                                <td>Digital Cluster</td>
                                <td>{carVariant?.interior?.digitalCluster}</td>
                            </tr>
                            <tr>
                                <td>Digital ClusterSize</td>
                                <td>{carVariant?.interior?.digitalClusterSize}</td>
                            </tr>
                            <tr>
                                <td>Upholstery</td>
                                <td>{carVariant?.interior?.upholstery}</td>
                            </tr>
                       </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Interior;
