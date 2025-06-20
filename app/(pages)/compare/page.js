import Footer from "../../components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "../../components/common/login-signup";
import CompareTable from "../../components/pages/compare/CompareTable";

export const metadata = {
  title: "Compare || Carportal - Automotive & Car Dealer",
};

const Compare = () => {
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
      <section className="inner_page_breadcrumb_compare style2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content_compare style2">
                <h2 className="breadcrumb_title_compare">Compare</h2>
                <p className="subtitle">Compare</p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Page Breadcrumb */}

      {/* Compare Section Area */}
      <section className="our-compare pt0 pb100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="compare_table table-responsive">
                <CompareTable />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End  Compare Section Area */}

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

export default Compare;
