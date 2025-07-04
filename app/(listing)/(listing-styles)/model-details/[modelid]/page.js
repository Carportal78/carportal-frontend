"use client"
import Footer from "../../../../components/common/Footer";
import DefaultHeader from "../../../../components/common/DefaultHeader";
import HeaderSidebar from "../../../../components/common/HeaderSidebar";
import HeaderTop from "../../../../components/common/HeaderTop";
import MobileMenu from "../../../../components/common/MobileMenu";
import LoginSignupModal from "../../../../components/common/login-signup";
import AdvanceFilter from "../../../../components/listing/advance-filter";
import Pagination from "../../../../components/common/Pagination";
import ListGridFilter from "../../../../components/listing/ListGridFilter";
import CarItems from "../../../../components/listing/listing-styles/listing-v3/CarItems";
import FeatureListingSlider from "../../../../components/listing/sidebar/FeatureListingSlider";
import RecentlyViewed from "../../../../components/listing/sidebar/RecentlyViewed";
import BannerWidget from "../../../../components/common/BannerWidget";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const metadata = {
  title: "Model Details || Carportal - Automotive & Car Dealer",
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
      {/* <HeaderTop /> */}
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Advance_search_menu_sectn*/}
      <section className="advance_search_menu_sectn bgc-thm2 pt20 pb0 mt70-992 filter-style_two">
        <div className="container">
          <AdvanceFilter />
        </div>
      </section>
      {/* End Advance_search_menu_sectn*/}

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb style2 inner_page_section_spacing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">Car Variants</h2>
                <p className="subtitle">Models</p>
                <ol className="breadcrumb fn-sm mt15-sm">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Model Details
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
            <div className="col-lg-4 col-xl-3">
              <div className="sidebar_feature_listing_widget">
                {/* <h4 className="title">{carCollections?.[0]?.name}</h4>
                <div className="listing_item_1grid_slider nav_none">
                  <FeatureListingSlider carCollection={carCollections?.[0]} />
                </div> */}
              </div>
              {/* End .FeatureListingSlider */}

              {/* <div className="sidebar_recent_viewed_widgets">
                <h4 className="title">Recently Viewed</h4>
                <RecentlyViewed />
              </div> */}
              {/* End RecentlyViewed */}

              <BannerWidget />
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-8 col-xl-9">
              <ListGridFilter />

              <div className="row">
                {/* <CarItems carVariants= {carVariants} /> */}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="mbp_pagination mt10">
                    <Pagination />
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
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
