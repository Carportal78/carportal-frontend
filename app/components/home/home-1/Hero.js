import Image from "next/image";
import HeroFilter from "../../common/HeroFilter";

const Hero = () => {
  return (
    <section className="home-one bg-home1">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-10 m-auto">
            <div className="home_content home1_style">
              <div className="home-text text-center mb30">
                <h2 className="title">
                  Find Your Next Match
                </h2>
                <p className="para">Find the right price, dealer and advice.</p>
              </div>
              <div className="advance_search_panel">
                <div className="row">
                  <HeroFilter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
