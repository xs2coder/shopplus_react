import React from "react";
import BestSellingBrandsItem from "./BestSellingBrandsItem";

const BestSellingBrands = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 className="h4 font-weight-700 text-uppercase">best selling brands</h3>
          </div>
          <div className="col s12 padding-x-16">
            <div className="row">
            <BestSellingBrandsItem image="1.png" />
            <BestSellingBrandsItem image="2.png" />
            <BestSellingBrandsItem image="3.png" />
            <BestSellingBrandsItem image="4.png" />
            <BestSellingBrandsItem image="5.png" />
            <BestSellingBrandsItem image="6.png" />
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default BestSellingBrands;
