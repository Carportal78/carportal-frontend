import blogPosts from "../../../data/blog";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const BlogGrid = ({ blogs }) => {

  const handleReadMoreClick = (post, e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedBlogPost', JSON.stringify(post));
      window.location.href = `/blog/${post.carBrand.brandName}/${post._id}`;
    }
  };

  return (
    <>
      {blogs?.map((post) => (

        <div
          key={post?._id}
          className="col-md-6 col-xl-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Link href={`/blog/${post.carBrand.brandName}/${post._id}`}>
            <div className="for_blog">
              <div className="thumb">
                <div className="tag">
                  <span className="p-2">{post?.carBrand?.brandName}</span>
                </div>
                <Image
                  width={394}
                  height={254}
                  style={{ objectFit: "cover" }}
                  className="img-whp"
                  src={post?.media?.url}
                  alt={post?.media?.altText}
                />
              </div>
              <div className="details">
                <div className="wrapper"> 
                  <div className="bp_meta">
                    <ul>
                      <li className="list-inline-item">
                        <Link href={`/blog/${post.carBrand.brandName}/${post._id}`}>
                          <span className="flaticon-user" />
                          {post?.carBrand?.brandName}
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href={`/blog/${post.carBrand.brandName}/${post._id}`}>
                          <span className="flaticon-chat" />
                          {post?.carModel?.modelName} Model
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href={`/blog/${post.carBrand.brandName}/${post._id}`}>
                          <span className="flaticon-calendar-1" />
                          {post?.carModel?.year}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title">
                    <Link href={`/blog/${post.carBrand.brandName}/${post._id}`}>{post?.blogName}</Link>
                  </h4>
                  <Link
                    href={`/blog/${post.carBrand.brandName}/${post._id}`}
                    onClick={(e) => handleReadMoreClick(post, e)}
                    className="more_listing"
                  >
                    Read More{" "}
                    <span className="icon">
                      <span className="fas fa-plus" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlogGrid;
