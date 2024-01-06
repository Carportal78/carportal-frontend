import AdvanceMainFilter from "./AdvanceMainFilter";
import CheckBoxFilter from "./CheckBoxFilter";
import MainFilter from "./MainFilter";
import PriceRange from "./PriceRange";

const AdvanceFilter = () => {
  return (
    <>
      <div className="row">
        
        <MainFilter />
        <div className="col col-sm-4 col-lg-2 me-auto"></div>
        <div className="col col-sm-4 col-lg-2">
        </div>
        {/* End .col */}

        <div className="col col-sm-4 col-lg-2">
          <div className="advance_search_style">
            <button className="btn search_btn btn-thm">
              <span className="flaticon-magnifiying-glass" /> Search
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}

      <div className="collapse" id="collapseAdvanceSearch">
        <div className="row bgc-thm2">
          <AdvanceMainFilter />
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="advance_search_style">
              <div className="uilayout_range">
                <h6 className="ass_price_title text-white text-start">Price</h6>
                <PriceRange />
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-6 col-md-4 col-lg-6 ">
            <h6 className="font-600 ass_price_title text-white text-start mb-3">
              Features
            </h6>
            <CheckBoxFilter />
          </div>
          {/* End .col */}
        </div>
      </div>
    </>
  );
};

export default AdvanceFilter;
