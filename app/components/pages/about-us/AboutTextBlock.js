import Image from "next/image";

const AboutTextBlock = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0 mt-4 mt-lg-0">
          <div className="about_thumb">
            <Image
              width={636}
              height={667}
              priority
              className="thumb1 rounded img-fluid"
              src="/images/about/Banner.jpg" 
              alt="carportallogo"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div className="about_content">
            <h1 className="title display-4 font-weight-bold mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>Welcome To CarPortal</h1>
            <p className="mb-4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", lineHeight: "1.6" }}>
              {`Welcome to CarPortal.co.in, India's premier automotive portal that empowers you to make informed car-buying decisions. Our mission is to provide a comprehensive and immersive experience, helping you find the perfect car that suits your needs.`}
            </p>
            <p className="mb-3" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", lineHeight: "1.6", fontWeight: '800' }}>
              Our platform offers:
            </p>
            <ul className="mb-4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", lineHeight: "1.6" }}>
              <li>Expert reviews and detailed specs and prices of all car brands and models available in India</li>
              <li>Unbiased comparisons and videos to aid your decision-making process</li>
              <li>Search and comparison tools by make, model, price, and features</li>
              <li>Live offers and promotions in all cities</li>
            </ul>
            <p className="mb-4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", lineHeight: "1.6" }}>
              We have established partnerships with leading auto manufacturers across PAN India and financial institutions to streamline your car-buying journey.
            </p>
            <p className="mb-4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", lineHeight: "1.6" }}>
              At CarPortal.co.in, we strive to be your trusted companion throughout the car-buying process. Explore our platform, and discover the perfect car for you!
            </p>
            <p className="mb-4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", lineHeight: "1.6" }}>
              Come aboard CarPortal—the future of automobiles is just a click away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTextBlock;