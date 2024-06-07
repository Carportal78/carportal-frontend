import React from "react";
import { Table } from "react-bootstrap";
import './VerticalTab.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Interior = ({ carVariant }) => {
  const interiorFields = [
    { label: "Tachometer", key: "tachometer" },
    { label: "Electronic Tripmeter", key: "electronicutiTripmeter" },
    { label: "Fabric Upholstery", key: "fabricUpholestry" },
    { label: "Leather Steering Wheel", key: "leatherSteeringWheel" },
    { label: "Glove Compartment", key: "gloveCompartment" },
    { label: "Digital Clock", key: "digitalClock" },
    { label: "Outside Temperature Display", key: "outsideTemperatureisplay" },
    { label: "Digital Odometer", key: "digitalOdometer" },
    { label: "Dual Tone Dashboard", key: "dualToneDashboard" },
    { label: "Additional Features", key: "additionFeatures" },
    { label: "Digital Cluster", key: "digitalCluster" },
    { label: "Digital Cluster Size", key: "digitalClusterSize" },
    { label: "Upholstery", key: "upholstery" },
  ];

  const renderFieldValue = (value) => {
    if (typeof value === "boolean") {
        return value ? (
            <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          ) : (
            <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} />
          );
    }
    return value || "N/A";
  };

  return (
    <div>
      <div className="d-flex flex-column flex-grow-1">
        <Table bordered hover responsive>
          <tbody>
            {interiorFields.map((field) => (
              <tr key={field.key}>
                <td>{field.label}</td>
                <td>{renderFieldValue(carVariant?.interior?.[field.key])}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Interior;
