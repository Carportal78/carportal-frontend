const OurValues = () => {
    const reasons = [
      {
        iconClass: "flaticon-truck",
        title: "Transparency",
        description:
          "We believe in providing clear and accurate information to help you make informed decisions.",
        delay: 100,
        style: "style1",
      },
      {
        iconClass: "flaticon-car",
        title: "Innovation",
        description:
          "We continuously strive to improve and innovate our platform to meet your evolving needs.",
        delay: 200,
        style: "style2",
      },
      {
        iconClass: "flaticon-trust",
        title: "Trust",
        description:
          "We're committed to building trust with our users, dealers, and partners through our actions and services.",
        delay: 300,
        style: "style3",
      },
    ];
  
    return (
      <>
        {reasons?.map((reason, index) => (
          <div
            className="col-sm-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay={reason.delay}
            key={index}
          >
            <div className="why_chose_us home7_style">
              <div className={`icon ${reason.style}`}>
                <span className={reason.iconClass} />
              </div>
              <div className="details">
                <h5 className="title">{reason.title}</h5>
                <p>{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default OurValues;
  