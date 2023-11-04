import Image from "next/image";

const AboutTextBlock = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="about_thumb mb30-md">
          <Image
            width={636}
            height={667}
            priority
            style={{ objectFit: "cover" }}
            className="thumb1"
            src="/images/about/1.jpg"
            alt="1.jpg"
          />
          <Image
            width={365}
            height={238}
            priority
            style={{ objectFit: "cover" }}
            className="img-fluid thumb2"
            src="/images/about/2.jpg"
            alt="2.jpg"
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-5 offset-lg-1">
        <div className="about_content">
          <h2 className="title">Welcome To The Carportal</h2>
          <p className="mb30">
            Established in 2022, Carportal stands as the beacon of automotive
            innovation in India. Born from the visionary minds at Unicorn Tech
            Media, we&apos;re more than just an automotive website—we&apos;re a movement.
          </p>
          <p className="mb30">
            Our platform is crafted by industry veterans, merging passion with
            expertise. Dive deep into our comprehensive car reviews, immersive
            3D showcases, and real-time updates, ensuring you&apos;re always ahead of
            the curve.
          </p>
          <p className="mb30">
            We don&apos;t just inform; we collaborate. With strong ties to top
            manufacturers and dealerships, we’re reshaping the car buying and
            selling experience. And with our sister platforms delving into Tyres
            and Services, Carportal is driving the future of automotive
            digitalization.
          </p>
          <p className="mb30">
            Collaboration lies at the heart of Carportal&apos;s ethos. We maintain a
            synergistic relationship with automotive manufacturers and
            dealerships, assisting them with cutting-edge IT solutions that
            optimize business performance and elevate conversion rates.
          </p>
          <p className="mb30">
          Come aboard Carportal—the future of automobiles is just a click away.
          </p>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default AboutTextBlock;
