import React from "react";
const TrendingCategoryItem = ({ categoryImage,logoImage }) => {
  return (
    <div class="trendingCategoryItem col s3">
      <div class=" flex-container border p-10">
        <div class="categoryImage padding">
          <img src={"/images/" + categoryImage} alt={categoryImage}></img>
        </div>
        <div class="borderTop padding">
          <div class="logoImage"><img src={"/images/logos/" + logoImage} alt={logoImage}></img></div>
          <div class="text-danger fw-700">SAVE UPTO 10%</div>
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
export default TrendingCategoryItem;
