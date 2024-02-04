import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabPane, Table } from "react-bootstrap";
import classnames from "classnames";
import './VerticalTab.css';

function Exterior({ carVariant }) {
    return (
        <>
            <div>
                <div className="d-flex flex-column flex-grow-1">
                    <Table bordered hover responsive>
                        <tbody>
                            <tr>
                                <td>Body Type</td>
                                <td>{carVariant?.exterior?.bodyType}</td>
                            </tr>
                            <tr>
                                <td>Adjustable Head Lights</td>
                                <td>{carVariant?.exterior?.adjustableHeadlights}</td>
                            </tr>
                            <tr>
                                <td>Fog Lights Front</td>
                                <td>{carVariant?.exterior?.fogLightsFront}</td>
                            </tr>
                            <tr>
                                <td>Fog Lights Front</td>
                                <td>{carVariant?.exterior?.fogLightsFront}</td>
                            </tr>
                            <tr>
                                <td>Manually Adjustable Ext Rear View Mirror</td>
                                <td>{carVariant?.exterior?.manuallyAdjustableExtRearViewMirror}</td>
                            </tr>
                            <tr>
                                <td>Electric Folding Rear View Mirror</td>
                                <td>{carVariant?.exterior?.electricFoldingRearViewMirror}</td>
                            </tr>
                            <tr>
                                <td>Rear Window Wiper</td>
                                <td>{carVariant?.exterior?.rearWindowWiper}</td>
                            </tr>
                            <tr>
                                <td>Rear Window Washer</td>
                                <td>{carVariant?.exterior?.rearWindowWasher}</td>
                            </tr>
                            <tr>
                                <td>Rear Window Defogger</td>
                                <td>{carVariant?.exterior?.rearWindowDefogger}</td>
                            </tr>
                            <tr>
                                <td>Wheel Covers</td>
                                <td>{carVariant?.exterior?.wheelCovers}</td>
                            </tr>
                            <tr>
                                <td>Alloy Wheels</td>
                                <td>{carVariant?.exterior?.alloyWheels}</td>
                            </tr>
                            <tr>
                                <td>Power Antenna</td>
                                <td>{carVariant?.exterior?.powerAntenna}</td>
                            </tr>
                            <tr>
                                <td>Rear Spoiler</td>
                                <td>{carVariant?.exterior?.rearSpoiler}</td>
                            </tr>
                            <tr>
                                <td>Outside Rear View Mirror Turn Indicators</td>
                                <td>{carVariant?.exterior?.outsideRearViewMirrorTurnIndicators}</td>
                            </tr>
                            <tr>
                                <td>Integrated Antenna</td>
                                <td>{carVariant?.exterior?.integratedAntenna}</td>
                            </tr>
                            <tr>
                                <td>Chrome Grille</td>
                                <td>{carVariant?.exterior?.chromeGrille}</td>
                            </tr>
                            <tr>
                                <td>Chrome Garnish</td>
                                <td>{carVariant?.exterior?.chromeGarnish}</td>
                            </tr>
                            <tr>
                                <td>Projector  Head Lamps</td>
                                <td>{carVariant?.exterior?.projectorHeadlamps}</td>
                            </tr>
                            <tr>
                                <td>Roof Rail</td>
                                <td>{carVariant?.exterior?.roofRail}</td>
                            </tr>
                            <tr>
                                <td>Led Drls</td>
                                <td>{carVariant?.exterior?.ledDrls}</td>
                            </tr>
                            <tr>
                                <td>Led Head lights</td>
                                <td>{carVariant?.exterior?.ledHeadlights}</td>
                            </tr>
                            <tr>
                                <td>Led Tail lights</td>
                                <td>{carVariant?.exterior?.ledTaillights}</td>
                            </tr>
                            <tr>
                                <td>Led Fog Lamps</td>
                                <td>{carVariant?.exterior?.ledFogLamps}</td>
                            </tr>
                            <tr>
                                <td>Fog Lights</td>
                                <td>{carVariant?.exterior?.fogLights}</td>
                            </tr>
                            <tr>
                                <td>Additional Features</td>
                                <td>
                                    <div className="text-wrap">
                                        {carVariant?.exterior?.additionalFeatures}
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>Antenna</td>
                                <td>{carVariant?.exterior?.antenna}</td>
                            </tr>
                            <tr>
                                <td>Boot Opening</td>
                                <td>{carVariant?.exterior?.bootOpening}</td>
                            </tr>
                            <tr>
                                <td>Puddle Lamps</td>
                                <td>{carVariant?.exterior?.puddleLamps}</td>
                            </tr>
                            <tr>
                                <td>Tyre Size</td>
                                <td>{carVariant?.exterior?.tyreSize}</td>
                            </tr>
                            <tr>
                                <td>Tyre Type</td>
                                <td>{carVariant?.exterior?.tyreType}</td>
                            </tr>
                            <tr>
                                <td>Wheel Size</td>
                                <td>{carVariant?.exterior?.wheelSize}</td>
                            </tr>
                            <tr>
                                <td>Allow Wheel Size</td>
                                <td>{carVariant?.exterior?.allowWheelSize}</td>
                            </tr>
                            <tr>
                                <td>Available Colors</td>
                                <td>{carVariant?.exterior?.availableColors}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Exterior;
