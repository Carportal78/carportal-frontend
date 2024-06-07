import React from "react";
import { Col, Table } from "react-bootstrap";
import './VerticalTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const ComfortAndConvinience = ({ carVariant }) => {
  const comfortAndConvenienceFields = [
    { label: "Power Steering", key: "powerSteering" },
    { label: "Power Windows-Front", key: "powerWindowsFront" },
    { label: "Power Windows-Rear", key: "powerWindowsRear" },
    { label: "Automatic Climate Control", key: "automaticClimateControl" },
    { label: "Air Quality Control", key: "airQualityControl" },
    { label: "Remote Engine", key: "remoteEngine" },
    { label: "Accessory Power Outlet", key: "accessoryPowerOutlet" },
    { label: "Trunk Light", key: "trunkLight" },
    { label: "Vanity Mirror", key: "vanityMirror" },
    { label: "Rear Reading Lamp", key: "rearReadingLamp" },
    { label: "Rear Seat Headrest", key: "rearSeatHeadrest" },
    { label: "Adjustable Headrest", key: "adjustibleHeadrest" },
    { label: "Rear Seat Centre Arm Rest", key: "rearSeatCentreArmRest" },
    { label: "Height Adjustable Front Seat Belts", key: "heightAdjustibleFrontSeatBelts" },
    { label: "Cup Holder Front", key: "cupHolderFront" },
    { label: "Cup Holder Rear", key: "cupHolderRear" },
    { label: "Rear AC Vents", key: "rearAcVents" },
    { label: "Multifunction Steering Wheel", key: "multifunctionSteeringWheel" },
    { label: "Cruise Control", key: "cruiseControl" },
    { label: "Parking Sensors", key: "parkingSensors" },
    { label: "Real-Time Vehicle Tracking", key: "realTimeVehicleTracking" },
    { label: "Foldable Rear Seat", key: "foldableRearSeat" },
    { label: "Smart Access Card Entry", key: "smartAccessCardEntry" },
    { label: "Engine Start/Stop Button", key: "engineStartStopButton" },
    { label: "Glove Box Cooling", key: "gloveBoxCooling" },
    { label: "Bottle Holder", key: "bottleHolder" },
    { label: "Voice Command", key: "voiceCommand" },
    { label: "Steering Wheel Gearshift Paddles", key: "steeringWheelGearshiftPaddles" },
    { label: "USB Charger", key: "usbCharger" },
    { label: "Central Control Armrest", key: "centralControlArmrest" },
    { label: "Hands-Free Tailgate", key: "handsFreeTelegate" },
    { label: "Gear Shift Indicator", key: "gearShiftIndicator" },
    { label: "Rear Curtain", key: "rearCurtain" },
    { label: "Luggage Hook And Net", key: "luggageHookAndNet" },
    { label: "Chit Chat Voice Interaction", key: "chitChatVoiceInteraction" },
    { label: "Air Conditioner", key: "airConditioner" },
    { label: "Heater", key: "heater" },
    { label: "Adjustable Steering", key: "adjustableSteering" },
    { label: "Keyless Entry", key: "keylessEntry" },
    { label: "Ventilated Seats", key: "ventilatedSeats" },
    { label: "Height Adjustable Driver Seats", key: "heightAdjustibleDriverSeats" },
    { label: "Electric Adjustable Seats", key: "electricAdjustibleSeats" },
    { label: "Automatic Headlamps", key: "automaticHeadlamps" },
    { label: "Follow Me Home Headlamps", key: "followMeHomeHeadlamps" },
    { label: "One Touch Operating Power Window", key: "oneTouchOperatingPowerWindow" },
    { label: "Drive Modes", key: "driveModes" },
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
            {comfortAndConvenienceFields.map((field) => (
              <tr key={field.key}>
                <td>{field.label}</td>
                <td>{renderFieldValue(carVariant?.comfortAndConvenience?.[field.key])}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ComfortAndConvinience;
