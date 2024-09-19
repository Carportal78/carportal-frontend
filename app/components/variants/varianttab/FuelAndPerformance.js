import React from "react";
import { Table } from "react-bootstrap";
import './VerticalTab.css';

function FuelAndPerformance({ carVariant }) {
    const fuelType = carVariant?.basicInformation?.fuelType;

    return (
        <div>
            <div className="d-flex flex-column flex-grow-1">
                <Table bordered hover responsive>
                    <tbody>
                    <tr>
                                    <td>Fuel Type</td>
                                    <td>{fuelType}</td>
                                </tr>
                        {fuelType !== 'Electric' && fuelType !== 'Hybrid' && (
                            <>
                                <tr>
                                    <td>City Mileage</td>
                                    <td>{carVariant?.fuelAndPerformance?.mileageCity || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td>Arai Mileage</td>
                                    <td>{carVariant?.fuelAndPerformance?.mileageArai || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td>Fuel Tank Capacity</td>
                                    <td>{carVariant?.fuelAndPerformance?.fuelTankCapacity || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td>Emission Norm Compliance</td>
                                    <td>{carVariant?.fuelAndPerformance?.emissionNormCompliance || 'N/A'}</td>
                                </tr>
                            </>
                        )}
                        {(fuelType === 'Electric' || fuelType === 'Hybrid') && (
                            <>
                                <tr>
                                    <td>Battery Capacity</td>
                                    <td>{carVariant?.fuelAndPerformance?.batteryCapacity || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td>Range</td>
                                    <td>{carVariant?.fuelAndPerformance?.range || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td>Charging Time</td>
                                    <td>{carVariant?.fuelAndPerformance?.chargingTime || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td>Power</td>
                                    <td>{carVariant?.fuelAndPerformance?.power || 'N/A'}</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default FuelAndPerformance;
