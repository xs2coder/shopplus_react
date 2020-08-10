import React from "react";
const BestSellingBrandsItem = ({ image }) => {
  return (
    <div className="bestSellingBrandItem col s2">
      <div className=" flex-container border">
        <div className="padding">
          <img src={"/images/logos/" + image} alt={image}></img>
        </div>
        <div className="borderTop padding">
          <div className="offDiv border">Upto 5% off</div>
          <div className="button">
            <a href="brand.html" className="waves-effect waves-light btn-small">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSellingBrandsItem;
