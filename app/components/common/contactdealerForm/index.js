import React from "react";
import ContactDealer from "./ContactDealer";
import SignupForm from "./SignupForm";
import Link from "next/link";

const tabs = [
  {
    title: "Contact Dealer",
    id: "home",
    content: (
      <div className="login_form">
        <p>
          For Query? Please fill following details to contact a dealer.
        </p>
        <ContactDealer />
      </div>
    ),
  }
];

const ContactDealerForm = ({ carModelDetails }) => {

  

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* End Modal close button */}

        <div className="modal-body container p60">
          <div className="row">
            <div className="col-lg-12">
              <ul
                className="sign_up_tab nav nav-tabs"
                id="myTab"
                role="tablist"
              >
                {tabs.map(({ title, id }) => (
                  <li className="nav-item" key={id}>
                    <a
                      className={`nav-link ${id === "home" ? "active" : ""}`}
                      id={`${id}-tab`}
                      data-bs-toggle="tab"
                      href={`#${id}`}
                      role="tab"
                      aria-controls={id}
                      aria-selected={id === "home" ? true : false}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* End .row */}

          <div className="tab-content container p0" id="myTabContent">
            {tabs.map(({ id, content }) => (
              <div
                className={`row mt30 tab-pane fade ${
                  id === "home" ? "show active" : ""
                }`}
                id={id}
                role="tabpanel"
                aria-labelledby={`${id}-tab`}
                key={id}
              >
                <div className="col-lg-12">{content}</div>
              </div>
            ))}
          </div>
          {/* End tab-content */}
        </div>
        {/* End modal-body */}
      </div>
    </div>
  );
};

export default ContactDealerForm;
