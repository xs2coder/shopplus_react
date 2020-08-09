import React from "react";
const BestSellingBrandsItem = ({ image }) => {
  return (
    <div class="bestSellingBrandItem col s2">
      <div class=" flex-container border">
        <div class="padding">
          <img src={"/images/logos/" + image} alt={image}></img>
        </div>
        <div class="borderTop padding">
          <div class="offDiv border">Upto 5% off</div>
          <div class="button">
            <a href="brand.html" class="waves-effect waves-light btn-small">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSellingBrandsItem;
