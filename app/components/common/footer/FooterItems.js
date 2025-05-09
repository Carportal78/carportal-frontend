'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Accordion } from "react-bootstrap";

const FooterItems = () => {

  const router = useRouter();

  const handleContactUs = () => {
    router.push('/contact-us');
  }

  return (
    <>
      <div className="row d-block d-md-none">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About Carportal</Accordion.Header>
            <Accordion.Body>
              {/* Using <Link> without nested <a> for Next.js 12+ */}
              <p><Link href="/about-us">About</Link></p>
              {/* <p><Link href="/about-us">Career with us</Link></p> */}
              <p><Link href="/terms-conditions">Terms & Conditions</Link></p>
              <p><Link href="/privacy-policy">Privacy Policy</Link></p>
              <p><Link href="/faq">FAQs</Link></p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Connect With Us</Accordion.Header>
            <Accordion.Body>
            {/* <p><Link href="/about-us" style={{ color: 'white' }}>Feedback</Link></p> */}
            <p><Link href="/contact-us" style={{ color: 'white' }}>Contact Us</Link></p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>OPENING HOURS</Accordion.Header>
            <Accordion.Body>
              <p>Monday – Friday: 09:00AM – 09:00PM</p>
              <p>Saturday: 09:00AM – 07:00PM</p>
              <p>Sunday: Closed</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="row d-none d-md-flex">
        <div className="col-md-4">
          <div className="footer_about_widget">
            <h5 className="title">About Carportal</h5>
            <p><Link href="/about-us" style={{ color: 'white' }}>About</Link></p>
            {/* <p><Link href="/about-us" style={{ color: 'white' }}>Career with us</Link></p> */}
            <p><Link href="/terms-conditions" style={{ color: 'white' }}>Terms & Conditions</Link></p>
            <p><Link href="/privacy-policy" style={{ color: 'white' }}>Privacy Policy</Link></p>
            <p><Link href="/faq" style={{ color: 'white' }}>FAQs</Link></p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-4">
          <div className="footer_contact_widget">
            <h5 className="title">NEED HELP</h5>
            <div className="footer_phone">+91 9650774320</div>
            <p>shikeb@carportal.co.in</p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-4">
          <div className="footer_contact_widget">
            <h5 className="title">KEEP IN TOUCH</h5>
              <div className="wrapper">
                <div className="col-auto">
                  {/* <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email..."
                    required
                  /> */}
                  <button className="btn contact-btn ofr_btn1 btn-block mt0 mb20" onClick={handleContactUs} >
                        <span className="flaticon-profit-report mr10 fz18 vam" />
                        Contact Us
                      </button>
                </div>
              </div>
            <p>Get latest updates and offers.</p>
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default FooterItems;
