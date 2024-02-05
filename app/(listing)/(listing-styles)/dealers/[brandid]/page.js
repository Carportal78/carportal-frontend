'use client';
import Footer from "../../../../components/common/Footer";
import DefaultHeader from "../../../../components/common/DefaultHeader";
import HeaderSidebar from "../../../../components/common/HeaderSidebar";
import HeaderTop from "../../../../components/common/HeaderTop";
import MobileMenu from "../../../../components/common/MobileMenu";
import LoginSignupModal from "../../../../components/common/login-signup";
import Link from "next/link";
import ReleatedCar from "../../../../components/listing/listing-single/ReleatedCar";
import DealersPageDescription from "../../../../components/dealers/DealersPageDescription";
import ProductDescripitons from "../../../../components/shop/shop-single/pro-tab-content/ProductDescripitons";
import { Card } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const metadata = {
  title: "OnRoad Price || Carportal - Automotive & Car Dealer",
};

const Dealers = () => {

  const { brandid } = useParams();

  const [carBrandsList, setCarBrandsList] = useState([]);
  const [carModelDetails, setCarModelDetails] = useState({});
  const [carVariantsList, setCarVariantsList] = useState([]);
  const [carModelsList, setCarModelsList] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/65538448b78add9eaa02d417';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.carBrandsList) {
          setCarBrandsList(data.data.carBrandsList);
          localStorage.setItem('carBrandsList', JSON.stringify(data.data.carBrandsList));
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, [brandid]);

  useEffect(() => {
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carmodels/for/65538448b78add9eaa02d417';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.carModelsList) {
          setCarModelsList(data.data.carModelsList);
        }
      })
      .catch(error => {
        setCarModelsList([]);
      });
  }, []);

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

          <div className="row" style={{
            backgroundColor: "#fff",
            border: "1px solid #eaeaea",
            borderRadius: "8px",
            marginBottom: "30px",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "30px",
            position: "relative"
          }}>
            <div className="col-lg-12 col-xl-12">
              <DealersPageDescription carModelDetails={carModelDetails} carVariantsList={carVariantsList} carBrandsList={carBrandsList} />
            </div>
          </div>



          <Card className="row">
            <div className="col-lg-12 col-xl-12">
              <ProductDescripitons carModelDetails={carModelDetails} carVariantsList={carVariantsList} />
            </div>
          </Card>
          {/* End .row */}
        </div>

        <div className="container">

          <div className="row" style={{
            backgroundColor: "#fff",
            border: "1px solid #eaeaea",
            borderRadius: "8px",
            marginBottom: "30px",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "30px",
            position: "relative"
          }}>
            <div className="col-lg-12 col-xl-12">
              <DealersPageDescription carModelDetails={carModelDetails} carVariantsList={carVariantsList} carBrandsList={carBrandsList} />
            </div>
          </div>
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
                <h2 className="title">Related Best Car</h2>
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
                <ReleatedCar bodyType={carModelDetails?.bodyType} carModelDetails={carModelDetails} relatedCars={carModelsList} />
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

export default Dealers;