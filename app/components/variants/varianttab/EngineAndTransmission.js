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
                                <td>Max Torque</td>
                                <td>{carVariant?.engineAndTransmission?.maxPower}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default EngineAndTransmisssions;
