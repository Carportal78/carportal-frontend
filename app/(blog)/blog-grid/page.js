"use client";
import Footer from "../../components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "../../components/common/login-signup";
import BlogGrid from "../../components/blog/BlogGrid";
import Pagination from "../../components/blog/Pagination";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const metadata = {
  title:
    "Car Blog || Carportal - Automotive & Car Dealer",
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isBlogsLoading, setIsBlogsLoading] = useState(false);

  useEffect(() => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
      setIsBlogsLoading(true);
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carblog/submitted/all/for/65538448b78add9eaa02d417`,
       {
        method: 'GET',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.carBlogsList) {
          setBlogs(data.data.carBlogsList);
        }
        setIsBlogsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching car models: ', error);
      })
      .finally(() => setIsBlogsLoading(false));
  },[]);

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
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content">
                <h2 className="breadcrumb_title">Blog</h2>
                <ol className="breadcrumb fn-sm">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">Blog</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Breadcrumb */}

      {/* <!-- Main Blog Post Content --> */}
      <section className="blog_post_container inner_page_section_spacing">
        <div className="container">
          <div className="row">
            {isBlogsLoading? (<Spinner className="d-flex" style={{marginLeft: 'auto', marginRight: 'auto'}} animation="border" role="status">
                     <span className="visually-hidden">Loading...</span>
                     </Spinner>) : <BlogGrid blogs={blogs} /> }
          </div>
          {/* End .row */}

          {/* <div className="row">
            <div className="col-lg-12">
              <div className="mbp_pagination mt20">
                <Pagination />
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <!-- Main Blog Post Content --> */}

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

export default Blog;
