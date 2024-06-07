import React from "react";
import { Table } from "react-bootstrap";
import './VerticalTab.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Safety = ({ carVariant }) => {
  const safetyFields = [
    { label: "Anti-Lock Braking System", key: "antiLockBrakingSystem" },
    { label: "Brake Assist", key: "brakeAssist" },
    { label: "Central Locking", key: "centralLocking" },
    { label: "Power Door Locks", key: "powerDoorLocks" },
    { label: "Child Safety Locks", key: "childSafetyLocks" },
    { label: "Anti-Theft Alarm", key: "antiTheftAlarm" },
    { label: "Number of Airbags", key: "noOfAirbags" },
    { label: "Driver Airbag", key: "driverAirbag" },
    { label: "Passenger Airbag", key: "passengerAirbag" },
    { label: "Side Airbag Front", key: "sideAirbagFront" },
    { label: "Day/Night Rear View Mirror", key: "dayNightRearViewMirror" },
    { label: "Passenger Side Rear View Mirror", key: "passengerSideRearViewMirror" },
    { label: "Halogen Headlamps", key: "halogenHeadlamps" },
    { label: "Rear Seat Belts", key: "rearSeatBelts" },
    { label: "Seat Belt Warning", key: "seatBeltWarning" },
    { label: "Door Ajar Warning", key: "doorAjarWarning" },
    { label: "Traction Control", key: "tractionControl" },
    { label: "Adjustable Seats", key: "adjustableSeats" },
    { label: "Tyre Pressure Monitor", key: "tyrePressureMonitor" },
    { label: "Engine Immobilizer", key: "engineImmobilizer" },
    { label: "Crash Sensor", key: "crashSensor" },
    { label: "Engine Check Warning", key: "engineCheckWarning" },
    { label: "EBD", key: "ebd" },
    { label: "Electronic Stability Control", key: "electronicStabilityControl" },
    { label: "Advanced Safety Features", key: "advanceSafetyFeatures" },
    { label: "Rear Camera", key: "rearCamera" },
    { label: "Speed Alert", key: "speedAlert" },
    { label: "Speed Sensing Auto Door Lock", key: "speedSensingAutoDoorLock" },
    { label: "ISO Fix Child Seat Mounts", key: "isofixChildSeatMounts" },
    { label: "Pretensioners and Force Limiter Seatbelts", key: "pretensionersAndForceLimiterSeatbelts" },
    { label: "Geo-Fence Alert", key: "geoFenceAlert" },
    { label: "Hill Assist", key: "hillAssist" },
    { label: "Impact Sensing Auto Door Unlock", key: "impactSensingAutoDoorUnlock" },
    { label: "Electronic Brakeforce Distribution", key: "electronicBrakeforceDistribution" },
    { label: "Global NCAP Safety Rating", key: "globalNCAPSafetyRating" },
    { label: "Global NCAP Child Safety Rating", key: "globalNCAPChildSafetyRating" },
    { label: "Additional Features", key: "additionalFeatures" },
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
            {safetyFields.map((field) => (
              <tr key={field.key}>
                <td>{field.label}</td>
                <td>{renderFieldValue(carVariant?.safety?.[field.key])}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Safety;
