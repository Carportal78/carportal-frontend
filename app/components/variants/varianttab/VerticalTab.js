import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabPane } from "react-bootstrap";
import classnames from "classnames";
import './VerticalTab.css';
import EngineAndTransmisssions from "./EngineAndTransmission";

function VerticalTab({ carModelDetails, carVariant }) {
  const [verticalActiveTab, setVerticalActiveTab] = useState("1");

  const toggleVertical = (tab) => {
    if (verticalActiveTab !== tab) {
      setVerticalActiveTab(tab);
    }
  };

  // Function to determine if the tab pane should be displayed
  const isTabActive = (tabId) => {
    return verticalActiveTab === tabId;
  };

  return (
    <>
      <div className="d-flex gap-2 gap-md-5">
        <div md="3">
          <Nav pills className="flex-column">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((tabId) => (
              <NavLink
              style={{ cursor: "pointer", borderRadius: '0.25rem', fontSize: '12px' }} // Added border-radius
              className={classnames("mb-2", { "active-tab": verticalActiveTab === tabId }, "btn-like")} // Added btn-like for additional styling
              onClick={() => toggleVertical(tabId)}
            >
              {tabId === "1" && "Engine and Transmission"}
              {tabId === "2" && "Fuel & Performance"}
              {tabId === "3" && "Suspension, Steering & Brakes"}
              {tabId === "4" && "Dimensions & Capacity"}
              {tabId === "5" && "Comfort & Convinience"}
              {tabId === "6" && "Interior"}
              {tabId === "7" && "Exterior"}
              {tabId === "8" && "Safety"}
              {tabId === "9" && "Entertainment and Communication"}
            </NavLink>
            
            ))}
          </Nav>
        </div>
        <div className="flex-grow-1 tab-content-area">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((tabId) => (
            <TabPane key={tabId} className={classnames("text-muted mt-md-0", { active: isTabActive(tabId) })} active={isTabActive(tabId)}>
              {tabId === "1" && (
                <p className="flex-column">
                  <EngineAndTransmisssions carVariant={carVariant} />
                </p>
              )}
              {tabId === "2" && (
                <p>
                  Profile content goes here. Food truck fixie locavore, accusamus mcsweeney's marfa nulla.
                </p>
              )}
              {tabId === "3" && (
                <p>
                  Messages content goes here. Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out.
                </p>
              )}
              {tabId === "4" && (
                <p>
                  Settings content goes here. Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.
                </p>
              )}
              {tabId === "5" && (
                <p>
                  Settings content goes here. Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.
                </p>
              )}
              {tabId === "6" && (
                <p>
                  Settings content goes here. Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.
                </p>
              )}
              {tabId === "7" && (
                <p>
                  Settings content goes here. Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.
                </p>
              )}
              {tabId === "8" && (
                <p>
                  Settings content goes here. Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.
                </p>
              )}
              {tabId === "" && (
                <p>
                  Settings content goes here. Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.
                </p>
              )}
            </TabPane>
          ))}
        </div>
      </div>
    </>
  );
}

export default VerticalTab;
