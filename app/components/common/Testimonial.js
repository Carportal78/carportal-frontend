"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const Testimonial = ({ testimonials }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        speed={1000}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          el: ".js-pagination-pag",
          spaceBetween: 10,
          clickable: true,
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className="testimonial_box">
              <div className="thumb">
                {/* <Image
                  width={70}
                  height={70}
                  className="rounded-circle"
                  src={`/images/testimonial/1.png`}
                  alt={`${testimonial._id}.png`}
                /> */}
                <h4 className="title">
                  {testimonial.name} <br />
                  <small>{testimonial.state}</small>
                </h4>
              </div>
              <div className="ml25">
                <div className="icon">  
                  <span className="fa fa-quote-left" />
                </div>
                <p>{testimonial.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 text-center">
        <div className=" js-pagination-pag" />
      </div>
    </>
  );
};

export default Testimonial;
