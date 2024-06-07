import React from "react";
import { Table } from "react-bootstrap";
import './VerticalTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const EntertainmentAndCommunication = ({ carVariant }) => {
  const entertainmentFields = [
    { label: "Radio", key: "radio" },
    { label: "Speaker Front", key: "speakerFront" },
    { label: "Speaker Rear", key: "speakerRear" },
    { label: "Integrated 2DIN Audio", key: "integrated2DINAudio" },
    { label: "Wireless Phone Charging", key: "wirelessPhoneCharging" },
    { label: "Bluetooth Connectivity", key: "bluetoothConnectivity" },
    { label: "WiFi Connectivity", key: "wifiConnectivity" },
    { label: "Touch Screen", key: "touchScreen" },
    { label: "Touch Screen Size", key: "touchScreenSize" },
    { label: "Connectivity", key: "connectivity" },
    { label: "Android Auto", key: "androidAuto" },
    { label: "Apple CarPlay", key: "appleCarPlay" },
    { label: "Number of Speakers", key: "noOfSpeakers" },
    { label: "Additional Features", key: "additionalFeatures" },
    { label: "USB Ports", key: "usbPorts" },
    { label: "Inbuilt Apps", key: "inbuiltApps" },
    { label: "Tweeter", key: "tweeter" },
    { label: "Sub Woofer", key: "subWoofer" },
    { label: "Rear Touch Screen Size", key: "rearTouchScreenSize" },
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
            {entertainmentFields.map((field) => (
              <tr key={field.key}>
                <td>{field.label}</td>
                <td>{renderFieldValue(carVariant?.entertainmentAndCommunication?.[field.key])}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default EntertainmentAndCommunication;
