"use client"
import Footer from "../../components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import AboutTextBlock from "../../components/pages/about-us/AboutTextBlock";
import WhyChoose from "../../components/common/WhyChoose";
import OurValues from "../../components/common/OurValues";
import LoginSignupModal from "../../components/common/login-signup";

const metadata = {
  title: "About Us || Carportal - Automotive & Car Dealer",
};

const AboutUs = () => {
  return (
    <div className="wrapper">
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* header top */}
      {/* <HeaderTop /> */}
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content">
                <h2 className="breadcrumb_title">About Us</h2>
                <p className="subtitle">About Us</p>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">About Us</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Breadcrumb */}

      {/* About Text Content */}
      <section className="about-section pb130">
        <div className="container">
          <div className="row">
            <AboutTextBlock /> 
          </div>
        </div>
      </section>

      <section className="why-chose pb90 pt0-md">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Our Values</h2>
              </div>
            </div>
          </div>
          <div className="row">
             <OurValues />
          </div>
        </div>
      </section>
      {/* End About Text Content */}
      {/* End Our Team */}
      {/* End Testimonials  */}
      {/* End  Our Partners */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default AboutUs;
