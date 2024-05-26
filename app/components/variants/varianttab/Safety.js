import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabPane, Table } from "react-bootstrap";
import classnames from "classnames";
import './VerticalTab.css';


function Safety({ carVariant }) {

    return (
        <>
            <div>
                <div className="d-flex flex-column flex-grow-1">
                    <Table bordered hover responsive>
                        <tbody>
                            <tr>
                                <td>AntiLock Braking System</td>
                                <td>{carVariant?.safety?.antiLockBrakingSystem}</td>
                            </tr>
                            <tr>
                                <td>Central Locking</td>
                                <td>{carVariant?.safety?.centralLocking}</td>
                            </tr>
                            <tr>
                                <td>Power Door Locks</td>
                                <td>{carVariant?.safety?.powerDoorLocks}</td>
                            </tr>
                            <tr>
                                <td>Anti Theft Alarm</td>
                                <td>{carVariant?.safety?.antiTheftAlarm}</td>
                            </tr>
                            <tr>
                                <td>No of Airbags</td>
                                <td>{carVariant?.safety?.noOfAirbags}</td>
                            </tr>
                            <tr>
                                <td>Driver Airbag</td>
                                <td>{carVariant?.safety?.driverAirbag}</td>
                            </tr>
                            <tr>
                                <td>Passenger Airbag</td>
                                <td>{carVariant?.safety?.passengerAirbag}</td>
                            </tr>
                            <tr>
                                <td>Side Airbag Front</td>
                                <td>{carVariant?.safety?.sideAirbagFront}</td>
                            </tr>
                            <tr>
                                <td>Day Night Rear View Mirror</td>
                                <td>{carVariant?.safety?.dayNightRearViewMirror}</td>
                            </tr>
                            <tr>
                                <td>Passenger Side Rear View Mirror</td>
                                <td>{carVariant?.safety?.passengerSideRearViewMirror}</td>
                            </tr>
                            <tr>
                                <td>Halogen Head Lamps</td>
                                <td>{carVariant?.safety?.halogenHeadlamps}</td>
                            </tr>
                            <tr>
                                <td>Rear Seat Belts</td>
                                <td>{carVariant?.safety?.rearSeatBelts}</td>
                            </tr>
                            <tr>
                                <td>Seat Belt Warning</td>
                                <td>{carVariant?.safety?.seatBeltWarning}</td>
                            </tr>
                            <tr>
                                <td>Tyre Pressure Monitor</td>
                                <td>{carVariant?.safety?.tyrePressureMonitor}</td>
                            </tr>
                            <tr>
                                <td>Engine Immobilizer</td>
                                <td>{carVariant?.safety?.engineImmobilizer}</td>
                            </tr>
                            <tr>
                                <td>Crash Sensor</td>
                                <td>{carVariant?.safety?.crashSensor}</td>
                            </tr>
                            <tr>
                                <td>EBD</td>
                                <td>{carVariant?.safety?.ebd}</td>
                            </tr>
                            <tr>
                                <td>Electronic Stability Control</td>
                                <td>{carVariant?.safety?.electronicStabilityControl}</td>
                            </tr>
                            <tr>
                                <td>Rear Camera</td>
                                <td>{carVariant?.safety?.rearCamera}</td>
                            </tr>
                            <tr>
                                <td>Speed Alert</td>
                                <td>{carVariant?.safety?.speedAlert}</td>
                            </tr>
                            <tr>
                                <td>Speed Sensing AutoDoor Lock</td>
                                <td>{carVariant?.safety?.speedSensingAutoDoorLock}</td>
                            </tr>
                            <tr>
                                <td>Pretensioners And Force Limiter Seatbelts</td>
                                <td>{carVariant?.safety?.pretensionersAndForceLimiterSeatbelts}</td>
                            </tr>
                            <tr>
                                <td>Hill Assist</td>
                                <td>{carVariant?.safety?.hillAssist}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Safety;
