"use client";
import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import Image from "next/image";
import Blog from "@/app/components/common/Blog";
import Meta from "@/app/components/blog/blog-single/Meta";
import Blockquote from "@/app/components/blog/blog-single/Blockquote";
import Features from "@/app/components/blog/blog-single/Features";
import Requirements from "@/app/components/blog/blog-single/Requirements";
import Share from "@/app/components/blog/blog-single/Share";
import Tag from "@/app/components/blog/blog-single/Tag";
import Pagination from "@/app/components/blog/blog-single/Pagination";
import Comments from "@/app/components/blog/blog-single/Comments";
import CommentForm from "@/app/components/blog/blog-single/CommentForm";
import { useEffect, useState } from "react";

const metadata = {
  title:
    "Carportal - Automotive & Car Dealer",
};

const BlogDynamicSingle = () => {

  const [blog, setBlog] = useState({});
  
  useEffect(() => {
    const blogData = JSON.parse(localStorage.getItem('selectedBlogPost'));
    setBlog(blogData);
  })

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

      {/* Blog Single Post */}
      <section className="blog_post_container bt1 pt50 pb0 mt70-992">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="for_blog blog_single_post">
                <div className="details">
                  <div className="wrapper">
                    <h2 className="title">
                      {blog?.blogName}
                    </h2>
                    <Meta blog={blog} />
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-post-thumb">
                <Image
                  width={1519}
                  height={475}
                  priority
                  style={{ objectFit: "cover" }}
                  className="img-whp"
                  src={blog?.carModel?.media?.url}
                  alt={blog?.carModel?.media?.altText}
                />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container-fluid */}
      </section>
      {/* Blog Single Post */}

      {/* Start Blog Single Post Description */}
      <section className="blog_post_container pt50 pb70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="main_blog_post_content">
                <div className="mbp_thumb_post">
                  <h4>Description</h4>
                  <p className="para mb25 mt20">
                    {blog?.blogDescription}
                  </p>
                  <div className="mbp_blockquote">
                    <Blockquote />
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <Image
                        width={796}
                        height={465}
                        style={{
                          objectFit: "cover",
                        }}
                        src={blog?.carModel?.media?.url}
                        alt={blog?.carModel?.media?.altText}
                      />
                    </div>
                  </div>
                  {/* End .row */}

                  <hr className="mb40" />
                </div>
                {/* End mbp_thumb_post */}

                {/* <hr className="mt50" />
                <Pagination />
                <hr /> */}
{/* 
                <div className="product_single_content mt50 mb50">
                  <div className="mbp_pagination_comments">
                    <h4 className="title mb10">Comment</h4>
                    <Comments />
                  </div>
                </div> */}
                {/* End comments */}

                {/* <div className="bsp_reveiw_wrt">
                  <CommentForm />
                </div> */}
                {/* End CommentForm */}
              </div>
              {/* End main_blog_post_content */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
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

export default BlogDynamicSingle;
