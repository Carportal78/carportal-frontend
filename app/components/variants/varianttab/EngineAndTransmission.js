import React from "react";
import { Table } from "react-bootstrap";
import './VerticalTab.css';

function EngineAndTransmissions({ carVariant }) {
    const fuelType = carVariant?.basicInformation?.fuelType;

    return (
        <>
            <div>
                <div className="d-flex flex-column flex-grow-1">
                    <Table bordered hover responsive>
                        <tbody>
                            {fuelType !== 'Electric' && (
                                <>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>{carVariant?.engineAndTransmission?.engineType || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td>Displacement (cc)</td>
                                        <td>{carVariant?.engineAndTransmission?.displacement || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td>Number of Cylinders</td>
                                        <td>{carVariant?.engineAndTransmission?.noOfCylinders || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td>Value Per Cylinder</td>
                                        <td>{carVariant?.engineAndTransmission?.valuePerCylinder || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td>Gear Box</td>
                                        <td>{carVariant?.engineAndTransmission?.gearBox || 'N/A'}</td>
                                    </tr>
                                </>
                            )}
                            {(fuelType === 'Electric' || fuelType === 'Hybrid') && (
                                <>
                                    <tr>
                                        <td>Motor Type</td>
                                        <td>{carVariant?.engineAndTransmission?.motorType || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td>Battery Type</td>
                                        <td>{carVariant?.engineAndTransmission?.batteryType || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td>Charging Port</td>
                                        <td>{carVariant?.engineAndTransmission?.chargingPort || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td>Fast Charging</td>
                                        <td>{carVariant?.engineAndTransmission?.fastCharging || 'N/A'}</td>
                                    </tr>
                                </>
                            )}
                            <tr>
                                <td>Max Power (bhp@rpm)</td>
                                <td>{carVariant?.engineAndTransmission?.maxPower?.replace('@', ' ') || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Max Torque (nm@rpm)</td>
                                <td>{carVariant?.engineAndTransmission?.maxTorque?.replace('@', ' ') || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Fuel Supply System</td>
                                <td>{carVariant?.engineAndTransmission?.fuelSupplySystem || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Compression Ratio</td>
                                <td>{carVariant?.engineAndTransmission?.compressionRatio || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Turbo Charge</td>
                                <td>{carVariant?.engineAndTransmission?.turboCharge || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Transmission Type</td>
                                <td>{carVariant?.engineAndTransmission?.transmissionType || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Mild Hybrid</td>
                                <td>{carVariant?.engineAndTransmission?.mildHybrid || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Driver Type</td>
                                <td>{carVariant?.engineAndTransmission?.driverType || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Clutch Type</td>
                                <td>{carVariant?.engineAndTransmission?.cluchType || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default EngineAndTransmissions;
