import Image from "next/image";
import CopyRight from "../../common/footer/CopyRight";
import FooterItems from "../../common/footer/FooterItems";
import Navigation from "../../common/footer/Navigation";

const Footer = () => {
  return (
    <section className="footer_one pt50 pb25">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xl-7">
            <div className="text-start mt-3">
              <div className="logo mb40 mb0-sm">
                <Image
                  width={140}
                  height={50}
                  className="logo2 img-fluid"
                  src="/images/carportal-logo-white.png"
                  alt="header"
                />
              </div>
            </div>
          </div>
          {/* End .col-md-4 */}

          <div className="col-md-8 col-xl-5">
            <div className="footer_menu_widget text-start text-md-end mt15">
              <ul>
                <Navigation />
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <hr />
      <div className="container pt80 pt20-sm pb70 pb0-sm">
        <FooterItems />
        {/* End .row */}
      </div>
      {/* End .container */}
      <CopyRight />
    </section>
  );
};

export default Footer;
