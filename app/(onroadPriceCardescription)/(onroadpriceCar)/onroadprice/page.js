import Footer from "../../../components/common/Footer";
import DefaultHeader from "../../../components/common/DefaultHeader";
import HeaderSidebar from "../../../components/common/HeaderSidebar";
import HeaderTop from "../../../components/common/HeaderTop";
import MobileMenu from "../../../components/common/MobileMenu";
import LoginSignupModal from "../../../components/common/login-signup";
import BreadCrumb from "../../../components/listing/listing-single/BreadCrumb";
import ShareMeta from "../../../components/listing/listing-single/ShareMeta";
import ProductGallery from "../../../components/listing/listing-single/listing-single-v2/ProductGallery";
import Overview from "../../../components/listing/listing-single/Overview";
import Descriptions from "../../../components/listing/listing-single/Descriptions";
import Features from "../../../components/listing/listing-single/Features";
import Map from "../../../components/common/Map";
import ConsumerReviews from "../../../components/listing/listing-single/ConsumerReviews";
import ReviewBox from "../../../components/listing/listing-single/ReviewBox";
import ContactSeller from "../../../components/listing/listing-single/sidebar/ContactSeller";
import SellerDetail from "../../../components/listing/listing-single/sidebar/SellerDetail";
import Link from "next/link";
import ReleatedCar from "../../../components/listing/listing-single/ReleatedCar";
import OnRoadPriceDescription from "../../../components/onroadpricedescription/onroadprice/OnRoadPriceDescription";
import ProductDescripitons from "../../../components/shop/shop-single/pro-tab-content/ProductDescripitons";
import { Card } from "react-bootstrap";

export const metadata = {
  title: "OnRoad Price || Carportal - Automotive & Car Dealer",
};

const OnRoadPrice = () => {
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

      {/* Agent Single Grid View */}
      <section className="our-agent-single bgc-f9 pb90 mt70-992 pt30">
        <div className="container">
          <div className="row mb30">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <BreadCrumb breadCrumbDetails = "Cards for Sale / On road price" />
              </div>
            </div>
          </div>
          {/* End .row bradcrumb */}

          <div className="row mb30">
            <div className="col-lg-7 col-xl-8">
              <div className="single_page_heading_content">
                <div className="car_single_content_wrapper">
                  <ul className="car_info mb20-md">
                    <li className="list-inline-item">
                      <a href="#">BRAND NEW</a>
                    </li>
                  </ul>
                  <h2 className="title">Mercedez benz</h2>
                  <p className="para">
                    2.0h T8 11.6kWh Polestar Engineered Auto AWD (s/s) 5dr
                  </p>
                </div>
              </div>
            </div>
            

            {/* End .col-lg-7 */}

            <div className="col-lg-5 col-xl-4">
              <div className="single_page_heading_content text-start text-lg-end">
                <div className="share_content">
                  <ShareMeta />
                </div>
                <div className="price_content">
                  <div className="price mt60 mb10 mt10-md">
                    <h3>
                      <small className="mr15">
                        <del>Rs 92,480,000</del>
                      </small>
                      Rs 89,480,000
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End col-lg-5 */}
          </div>
          {/* End .row */}

          <div className="row listing_single_description">
            <div className="col-lg-12 col-xl-12">
           <OnRoadPriceDescription />
            </div>
          </div>

          <Card className="row">
            <div className="col-lg-12 col-xl-12">
           <ProductDescripitons />
            </div>
          </Card>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Agent Single Grid View */}

      {/* End Car For Rent */}
        {/* Car For Rent */}
        <section className="car-for-rent bb1">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-md-start mb10-520">
                <h2 className="title">Releated Best Car</h2>
              </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <div className="text-center text-md-end mb30-520">
                <Link href="/page-list-v1" className="more_listing">
                  Show All Cars
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home3_style"
              data-aos-delay="100"
            >
              <div className="listing_item_4grid_slider nav_none">
                <ReleatedCar />
              </div>
            </div>
          </div>
          {/* End .col-lg-12 */}
        </div>
        {/* End .container */}
      </section>

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

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

export default OnRoadPrice;
