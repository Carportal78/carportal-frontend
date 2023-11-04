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
           </p>
          <p className="mb30">

          </p>
          <p className="mb30">
          </p>
          <p className="mb30">
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
