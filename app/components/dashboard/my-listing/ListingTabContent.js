import Pagination from "../../common/Pagination";
import ListingContent from "./ListingContent";

const ListingTabContent = () => {
  return (
    <>
      <div className="row">
        {/* <!-- Tab panes --> */}

        <div className="col-lg-12 mt50">
          <div className="tab-content row" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <ListingContent />
            </div>
            {/* End tab-content */}

            <div
              className="tab-pane fade"
              id="nav-shopping"
              role="tabpanel"
              aria-labelledby="nav-shopping-tab"
            >
              <ListingContent />
            </div>
            {/* End tab-content */}

            <div
              className="tab-pane fade"
              id="nav-hotels"
              role="tabpanel"
              aria-labelledby="nav-hotels-tab"
            >
              <ListingContent />
            </div>
          </div>
          {/* End tab-content */}

          <div className="mbp_pagination mt10">
            <Pagination />
          </div>
          {/* Pagination */}
        </div>
      </div>
    </>
  );
};

export default ListingTabContent;
