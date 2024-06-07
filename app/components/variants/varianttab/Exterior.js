import React from "react";
import { Table } from "react-bootstrap";
import './VerticalTab.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Exterior = ({ carVariant }) => {
  const exteriorFields = [
    // { label: "Available Colors", key: "availableColors", isList: true, subKey: "name" },
    { label: "Body Type", key: "bodyType" },
    { label: "Adjustable Headlights", key: "adjustableHeadlights" },
    { label: "Fog Lights Front", key: "fogLightsFront" },
    { label: "Power Adjustable Exterior Rear View Mirror", key: "powerAdjustableExteriorRearViewMirror" },
    { label: "Manually Adjustable Exterior Rear View Mirror", key: "manuallyAdjustableExtRearViewMirror" },
    { label: "Electric Folding Rear View Mirror", key: "electricFoldingRearViewMirror" },
    { label: "Rear Window Wiper", key: "rearWindowWiper" },
    { label: "Rear Window Washer", key: "rearWindowWasher" },
    { label: "Rear Window Defogger", key: "rearWindowDefogger" },
    { label: "Wheel Covers", key: "wheelCovers" },
    { label: "Alloy Wheels", key: "alloyWheels" },
    { label: "Power Antenna", key: "powerAntenna" },
    { label: "Rear Spoiler", key: "rearSpoiler" },
    { label: "Outside Rear View Mirror Turn Indicators", key: "outsideRearViewMirrorTurnIndicators" },
    { label: "Integrated Antenna", key: "integratedAntenna" },
    { label: "Chrome Grille", key: "chromeGrille" },
    { label: "Chrome Garnish", key: "chromeGarnish" },
    { label: "Projector Headlamps", key: "projectorHeadlamps" },
    { label: "Halogen Headlamps", key: "halogenHeadlamps" },
    { label: "Roof Rail", key: "roofRail" },
    { label: "LED DRLs", key: "ledDrls" },
    { label: "LED Headlights", key: "ledHeadlights" },
    { label: "LED Taillights", key: "ledTaillights" },
    { label: "LED Fog Lamps", key: "ledFogLamps" },
    { label: "Fog Lights", key: "fogLights" },
    { label: "Additional Features", key: "additionalFeatures" },
    { label: "Antenna", key: "antenna" },
    { label: "Boot Opening", key: "bootOpening" },
    { label: "Puddle Lamps", key: "puddleLamps" },
    { label: "Tyre Size", key: "tyreSize" },
    { label: "Tyre Type", key: "tyreType" },
    { label: "Wheel Size", key: "wheelSize" },
    { label: "Alloy Wheel Size", key: "alloyWheelSize" },
  ];

  const renderFieldValue = (value, isList, subKey) => {
    if (isList) {
      return value ? value.map(item => item[subKey]).join(", ") : "N/A";
    }
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
            {exteriorFields.map((field) => (
              <tr key={field.key}>
                <td>{field.label}</td>
                <td>{renderFieldValue(carVariant?.exterior?.[field.key], field.isList, field.subKey)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Exterior;
