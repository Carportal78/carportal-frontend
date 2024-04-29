import React, { useEffect, useState } from "react";

const ImagesViewDialog = ({ carModelDetails, carVariantsList }) => { 

  const [hideHeader, setHideHeader] = useState(false);

  const handleHeaderHide = () => {
    setHideHeader(true);
  }

  useEffect(() => {
    setHideHeader(false);
  }, [])
  
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
          {!hideHeader &&
          <div className="row">
            <div className="col-lg-12">
              <ul
                className="sign_up_tab nav nav-tabs"
                id="myTab"
                role="tablist"
              >
                  <li className="nav-item">
                    <a
                      className={`nav-link active`}
                      id={`1-tab`}
                      data-bs-toggle="tab"
                      href={`#1`}
                      role="tab"
                      aria-controls={1}
                      aria-selected={true}
                    >
                      Images
                    </a>
                  </li>
              </ul>
            </div>
          </div>
}
          {/* End .row */}

          <div className="tab-content container p0" id="myTabContent">
              <div
                className={`row mt30 tab-pane fade show active`}
                id={1}
                role="tabpanel"
                aria-labelledby={`1-tab`}
                key={1}
              >
                <div className="col-lg-12">
                <div className="login_form">
                {!hideHeader && <p>
                    For Query? Please fill following details to contact a dealer for <strong style={{color: 'blue'}}>{carModelDetails?.modelName}</strong>.
                  </p>}
                  {/* <ContactDealer carModelDetails={carModelDetails} carVariantsList={carVariantsList} onCLickHideHeader={handleHeaderHide} /> */}
                </div>
                </div>
              </div>
          </div>
          {/* End tab-content */}
        </div>
        {/* End modal-body */}
      </div>
    </div>
  );
};

export default ImagesViewDialog;
8