import React from "react";
import Banner from "./Banner";

const Section = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row negative-margin-left-right">
          <Banner
            image={["deals.jpg"]}
            heading="DEAL OF THE DAY"
            description="Amazing Deals from choicest brands!"
          />
          <Banner
            image={["offers-1.jpg", "offers-2.jpg"]}
            heading="OFFERS"
            description="Top discounts & deals on leading brands!"
          />
          <Banner
            image={["discount.jpg"]}
            heading="DISCOUNTS"
            description="Buy fast moving brands just for you"
          />
        </div>
        </div>

    </React.Fragment>
  );
};
export default Section;
