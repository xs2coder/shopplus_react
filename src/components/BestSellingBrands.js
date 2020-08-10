import React from "react";
import BestSellingBrandsItem from "./BestSellingBrandsItem";

const BestSellingBrands = () => {
  return (
    <React.Fragment>
      <div>
        <h3 className="h4 fw-700 text-uppercase">best selling brands</h3>
      </div>
      <div className="row">
        <BestSellingBrandsItem image="1.png" />
        <BestSellingBrandsItem image="2.png" />
        <BestSellingBrandsItem image="3.png" />
        <BestSellingBrandsItem image="4.png" />
        <BestSellingBrandsItem image="5.png" />
        <BestSellingBrandsItem image="6.png" />
      </div>
    </React.Fragment>
  );
};
export default BestSellingBrands;
