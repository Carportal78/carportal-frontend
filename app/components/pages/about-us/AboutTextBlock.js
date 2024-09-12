import Image from "next/image";

const AboutTextBlock = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about_thumb mb30-md">
            <Image
              width={636}
              height={667}
              priority
              style={{ objectFit: "cover" }}
              className="thumb1 rounded"
              src="/images/about/Banner.jpg" 
              alt="carportallogo"
            />
            {/* <Image
              width={365}
              height={238}
              priority
              style={{ objectFit: "cover" }}
              className="img-fluid thumb2 rounded mt-4"
              src="/images/about/carportal-logo1.jpeg"
              alt="carportallogo1"
            /> */}
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div className="about_content">
            <h1 className="title display-4 font-weight-bold mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>Welcome To CarPortal</h1>
            <p className="mb4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem", lineHeight: "1.6" }}>
              {`Welcome to CarPortal.co.in, India's premier automotive portal that empowers you to make informed car-buying decisions. Our mission is to provide a comprehensive and immersive experience, helping you find the perfect car that suits your needs.`}
            </p>
            <p className="mb4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem", lineHeight: "1.6" }}>
              Our platform offers:
            </p>
            <ul className="mb4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem", lineHeight: "1.6", paddingLeft: "20px" }}>
              <li>Expert reviews and detailed specs and prices of all car brands and models available in India</li>
              <li>Unbiased comparisons and videos to aid your decision-making process</li>
              <li>Search and comparison tools by make, model, price, and features</li>
              <li>Live offers and promotions in all cities</li>
            </ul>
            <p className="mb4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem", lineHeight: "1.6" }}>
              We have established partnerships with leading auto manufacturers across PAN India and financial institutions to streamline your car-buying journey.
            </p>
            <p className="mb4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem", lineHeight: "1.6" }}>
              At CarPortal.co.in, we strive to be your trusted companion throughout the car-buying process. Explore our platform, and discover the perfect car for you!
            </p>
            <p className="mb4" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem", lineHeight: "1.6" }}>
              Come aboard CarPortal—the future of automobiles is just a click away.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTextBlock;
