import DashboardHeader from "../../components/common/DashboardHeader";
import DashboardHeaderTop from "../../components/common/DashboardHeaderTop";
import DashboardSidebarMenu from "../../components/common/DashboardSidebarMenu";
import DashboardSidebarMobileMenu from "../../components/common/DashboardSidebarMobileMenu";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "../../components/common/login-signup";
import CarItems from "../../components/dashboard/favourites/CarItems";

export const metadata = {
  title: "Favourites || Carportal - Automotive & Car Dealer",
};

const Favourites = () => {
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
      <DashboardHeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Our Dashbord */}
      <section className="our-dashbord dashbord bgc-f9">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-2 dashboard_grid_space">
              <div className="row">
                <div className="col-lg-12">
                  <div className="extra-dashboard-menu dn-lg">
                    <div className="ed_menu_list">
                      <ul>
                        <DashboardSidebarMenu />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="dashboard_navigationbar dn db-lg mt50">
                <DashboardSidebarMobileMenu />
              </div>

              <div className="row">
                <div className="col-xl-8">
                  <div className="breadcrumb_content mb50">
                    <h2 className="breadcrumb_title">Favourites</h2>
                    <p>Ready to jump back in!</p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="dashboard_favorites_contents p10-520">
                <div className="row">
                  <CarItems />
                </div>
              </div>
              {/* End .row */}
            </div>
          </div>
        </div>
      </section>
      {/* End Our Dashbord */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard=""
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

export default Favourites;
