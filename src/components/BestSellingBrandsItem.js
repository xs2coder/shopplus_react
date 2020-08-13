import React from "react";
const BestSellingBrandsItem = ({ image }) => {
  return (
    <div className="col s2 padding-8">
      <div className="column-flex-container border-off-white">
        <div className="padding-bottom-16 padding-x-16 margin-5">
          <img src={"/images/logos/" + image} alt={image}></img>
        </div>
        <div className="border-top-off-white padding-16 text-align-center">
          <div className="off-div border-off-white ">Upto 5% off</div>
          <div className="">
            <a href="brand.html" className="button button-danger button-small font-size-14 rounded-0">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSellingBrandsItem;
