'use client';
import Footer from "../../../components/common/Footer";
import DefaultHeader from "../../../components/common/DefaultHeader";
import HeaderSidebar from "../../../components/common/HeaderSidebar";
import HeaderTop from "../../../components/common/HeaderTop";
import MobileMenu from "../../../components/common/MobileMenu";
import LoginSignupModal from "../../../components/common/login-signup";
import Link from "next/link";
import ReleatedCar from "../../../components/listing/listing-single/ReleatedCar";
import DealersPageDescription from "../../../components/dealers/DealersPageDescription";
import { Card, Col, Image, Row, Spinner } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { selectBrandAtom, selectCarDealerAtom, selectCityAtom } from "../../../components/atoms/categoriesAtoms";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

const metadata = {
  title: "Dealers List || Carportal - Automotive & Car Dealer",
};

const Dealers = ({ carBrandsList, carModelsList}) => {

  // const [carBrandsList, setCarBrandsList] = useState([]);
  const [carModelDetails, setCarModelDetails] = useState({});
  const [carVariantsList, setCarVariantsList] = useState([]);
  // const [carModelsList, setCarModelsList] = useState([]);
  const [carBrand, setCarBrand] = useState({});
  const [selectCarVariantData, setSelectCarVariantData] = useAtom(selectCarDealerAtom);
  // Fetch cityData from Jotai state
  const [cityData] = useAtom(selectCityAtom);
  const [brandData] = useAtom(selectBrandAtom);
  const [carDealers, setCarDealers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBrandLoading, setIsBrandLoading] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   setIsBrandLoading(true);
  //   const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/66cac994eeca9633c29171e2';
  //   const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key

  //   fetch(apiUrl, {
  //     method: 'GET',
  //     headers: {
  //       'X-API-Key': apiKey,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data && data.data && data.data.carBrandsList) {
  //         setIsBrandLoading(false);
  //         setCarBrandsList(data.data.carBrandsList);
  //         setCarBrand(data.data.carBrandsList.find(brand => brand._id.toString() === brandData?.toString()));
  //         localStorage.setItem('carBrandsList', JSON.stringify(data.data.carBrandsList));
  //       }
  //     })
  //     .catch(error => {
  //       setIsBrandLoading(false);
  //       console.error('Error fetching data: ', error);
  //     })
  // }, [brandData]);

  // useEffect(() => {
  //   const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carmodels/for/66cac994eeca9633c29171e2';
  //   const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key
  //   fetch(apiUrl, {
  //     method: 'GET',
  //     headers: {
  //       'X-API-Key': apiKey,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data && data.data && data.data.carModelsList) {
  //         setCarModelsList(data.data.carModelsList);
  //       }
  //     })
  //     .catch(error => {
  //       setCarModelsList([]);
  //     });
  // }, []);

  useEffect(() => {
    if(brandData && cityData) {
    setIsLoading(true);
    const apiUrl = `https://api.univolenitsolutions.com/v1/cardealer/get/dealer/brand/${brandData}/cityCode/${cityData}/for/website/66cac994eeca9633c29171e2`;
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
        if (data && data.data && data.data.carDealersList) {
          setCarDealers(data.data.carDealersList);
          setIsLoading(false);
        }
      })
      .catch(error => {
        setCarDealers([]);
        setIsLoading(false);
      });
    }
  }, [brandData, cityData])

  // const handleBrandClick = (brand) => {
  //   alert(brand?._id)
  //   router.push(`/dealer/${brand?._id}`) 
  // }

  function handleSearchDealer(brandName, cityName, selectedBrandId) {
    console.log(brandName, cityName, selectedBrandId);
    // Store the selected brand ID, not the current brandData
    localStorage.setItem('dealer-type', JSON.stringify({ brand: selectedBrandId, city: cityData }))
    router.push(`/dealers/list/${brandName}/${cityName}`);
}

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
              <DealersPageDescription carModelDetails={carModelDetails} carVariantsList={carVariantsList} carBrandsList={carBrandsList} carBrand={carBrand} cityData={cityData} brandData={brandData} />
            </div>
          </div>

          {carDealers?.length > 0 && (<p className="col-lg-12 col-xl-12 mb-3" style={{ fontSize: '1.5em', fontWeight: "600", color: '#24272c' }}>
            {carDealers?.length} {carBrand?.brandName} Car Dealers in {cityData}
          </p>) }
          <Row className="g-3">
            {isLoading ? <Spinner className="d-flex" style={{ marginLeft: 'auto', marginRight: 'auto' }} animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> : carDealers?.map(dealer => (
              <Col xs={12} md={4} lg={4} className="d-flex align-items-stretch" key={dealer?._id}>
                <div style={{
                  width: '100%',
                  backgroundColor: "#fff",
                  border: "1px solid #eaeaea",
                  borderRadius: "8px",
                  marginBottom: "30px",
                  padding: "30px",
                  boxShadow: "0px 2px 12px rgba(36,40,44,.08)"
                }}>
                  <Card.Body>
                    <Card.Title style={{ marginBottom: "12px" }}>{dealer?.dealerName}</Card.Title>
                    <Card.Text style={{
                      fontWeight: "400",
                      lineHeight: "18px",
                      fontSize: "12px",
                      marginBottom: "12px",
                      color: "rgba(36, 39, 44, .7)",
                      textTransform: "capitalize"
                    }}>
                      <span style={{ color: 'black' }}>Address:</span> {dealer?.address} {dealer?.city} {dealer?.state}
                    </Card.Text>
                    <OverlayTrigger
                      trigger="click"
                      key={`tooltip-${dealer?._id}`}
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-${dealer?._id}`}>
                          {dealer?.phoneNumber}
                        </Tooltip>
                      }
                    >
                      <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20">
                        <span className="flaticon-profit-report mr10 fz18 vam" />
                        Click for Number
                      </button>
                    </OverlayTrigger>
                  </Card.Body>
                </div>
              </Col>
            ))}
          </Row>

          <p className="col-lg-12 col-xl-12 mb-3" style={{ fontSize: '1.5em', fontWeight: "600", color: '#24272c' }}>
            Other Brand Dealers to Explore
          </p>
          <Row className="g-3">
            {isBrandLoading ? <Spinner className="d-flex" style={{ marginLeft: 'auto', marginRight: 'auto' }} animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> : (carBrandsList?.map(brand => (
              <Col xs={6} md={4} lg={2} className="d-flex align-items-stretch pointer" key={brand?._id} onClick={() => handleSearchDealer(brand?.brandName, cityData, brand?._id)}>
                
                <div style={{
                  width: '100%',
                  backgroundColor: "#fff",
                  border: "1px solid #eaeaea",
                  borderRadius: "8px", 
                  marginBottom: "30px",
                  padding: "30px",
                  boxShadow: "0px 2px 12px rgba(36,40,44,.08)"
                }}>
                  <Card.Body>
                    <Image
                      width={120}
                      height={100}
                      src={brand.media.url || '/default-image.png'}
                      alt={brand.brandName}
                      className="d-flex"
                      style={{ marginLeft: 'auto', marginRight: 'auto' }}
                      layout='responsive'
                    />
                    <span className="d-flex justify-content-center font-600">{brand.brandName}</span>
                  </Card.Body>
                </div>
              </Col>
            )))
            }
          </Row>

          {/* End .row */}
        </div >

        {/* End .container */}
      </section >
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
    </div >
    // End wrapper
  );
};

export default Dealers;
