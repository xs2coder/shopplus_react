import React from "react";
const TrendingCategoryItem = ({ categoryImage,logoImage }) => {
  return (
    <div className="trendingCategoryItem col s3">
      <div className=" flex-container border p-10">
        <div className="categoryImage padding">
          <img src={"/images/" + categoryImage} alt={categoryImage}></img>
        </div>
        <div className="borderTop padding">
          <div className="logoImage"><img src={"/images/logos/" + logoImage} alt={logoImage}></img></div>
          <div className="text-danger fw-700">SAVE UPTO 10%</div>
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
export default TrendingCategoryItem;
