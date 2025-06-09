"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const Testimonial = ({ testimonials }) => {
  return (
    <>
      <div className="position-relative">
        <Swiper
          slidesPerView={2}
          speed={1000}
          spaceBetween={30}
          modules={[Pagination, Navigation]}
          pagination={{
            el: ".js-pagination-pag",
            spaceBetween: 10,
            clickable: true,
          }}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
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
        
        {/* Navigation Arrows */}
        <div className="testimonial-prev" style={{
          position: 'absolute',
          top: '50%',
          left: '-50px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          cursor: 'pointer',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}>
          <i className="fas fa-chevron-left" style={{ color: '#333', fontSize: '16px' }}></i>
        </div>
        
        <div className="testimonial-next" style={{
          position: 'absolute',
          top: '50%',
          right: '-50px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          cursor: 'pointer',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}>
          <i className="fas fa-chevron-right" style={{ color: '#333', fontSize: '16px' }}></i>
        </div>
      </div>
      
      <div className="mt-5 text-center">
        <div className=" js-pagination-pag" />
      </div>

      {/* Custom styles for hover effects */}
      <style jsx>{`
        .testimonial-prev:hover,
        .testimonial-next:hover {
          background-color: #f8f9fa !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15) !important;
        }
        
        /* Pagination dots styling */
        .js-pagination-pag .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          background-color: #ddd !important;
          opacity: 1 !important;
          border-radius: 50% !important;
        }
        
        .js-pagination-pag .swiper-pagination-bullet-active {
          background-color: #007bff !important;
        }
        
        @media (max-width: 768px) {
          .testimonial-prev {
            left: -35px !important;
            width: 35px !important;
            height: 35px !important;
          }
          .testimonial-next {
            right: -35px !important;
            width: 35px !important;
            height: 35px !important;
          }
        }
        
        @media (max-width: 480px) {
          .testimonial-prev {
            left: 5px !important;
            width: 28px !important;
            height: 28px !important;
            background-color: rgba(255, 255, 255, 0.9) !important;
          }
          .testimonial-next {
            right: 5px !important;
            width: 28px !important;
            height: 28px !important;
            background-color: rgba(255, 255, 255, 0.9) !important;
          }
          .testimonial-prev i,
          .testimonial-next i {
            font-size: 10px !important;
          }
        }
        
        @media (max-width: 360px) {
          .testimonial-prev {
            left: 2px !important;
            width: 26px !important;
            height: 26px !important;
          }
          .testimonial-next {
            right: 2px !important;
            width: 26px !important;
            height: 26px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Testimonial;
