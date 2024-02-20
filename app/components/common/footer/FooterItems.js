import Link from "next/link";
import { Accordion } from "react-bootstrap";

const FooterItems = () => {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_about_widget">
          <h5 className="title">OFFICE</h5>
          <p>
            Cyberhub —<br />
            Gurugram,
            <br />
            India
          </p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterItems;
