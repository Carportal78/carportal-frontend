import Footer from "../../../components/common/Footer";
import DefaultHeader from "../../../components/common/DefaultHeader";
import HeaderSidebar from "../../../components/common/HeaderSidebar";
import HeaderTop from "../../../components/common/HeaderTop";
import MobileMenu from "../../../components/common/MobileMenu";
import LoginSignupModal from "../../../components/common/login-signup";
import CarItems from "../../../components/listing/listing-styles/listing-v5/CarItems";
import SidebarAdvnaceFilter from "../../../components/listing/SidebarAdvanceFilter";
import ListGridFilter2 from "../../../components/listing/ListGridFilter2";

export const metadata = {
  title: "Listing V5 || Carportal - Automotive & Car Dealer",
};

const ListingV3 = () => {
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
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb style2 no-top-filter inner_page_section_spacing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">Used Vehicles For Sale</h2>
                <p className="subtitle">Listing-v5</p>
                <ol className="breadcrumb fn-sm mt15-sm">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Listing-v5
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Page Breadcrumb */}

      {/* Listing Grid View */}
      <section className="our-listing pt0 bgc-f9 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 dn-md">
              <SidebarAdvnaceFilter />
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-8 col-xl-9">
              <ListGridFilter2 />

              <div className="row">
                <CarItems />
              </div>
              {/* End .row */}
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="advanceSearchMobile"
          aria-labelledby="advanceSearchMobileLabel"
        >
          <div
            className="mb-cls-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-light fa-circle-xmark"></i>
          </div>
          <SidebarAdvnaceFilter />
        </div>
        {/* End SidebarAdvnaceFilter */}
      </section>
      {/* Listing Grid View */}

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

export default ListingV3;
