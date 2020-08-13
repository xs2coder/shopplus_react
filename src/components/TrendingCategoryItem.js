import React from "react";
const TrendingCategoryItem = ({ categoryImage,logoImage }) => {
  return (
    <div className="col s3 padding-8">
      <div className=" flex-container border-off-white rounded-top padding-10 text-align-center">
        <div className="">
          <img className="width-100 rounded-top" src={"/images/" + categoryImage} alt={categoryImage}></img>
        </div>
        <div className="padding-x-10 padding-bottom-5">
          <div className="logo-box"><img src={"/images/logos/" + logoImage} alt={logoImage}></img></div>
          <div className="text-danger font-weight-700 font-size-18 padding-y-8">SAVE UPTO 10%</div>
          <div className="">
            <a href="brand.html" className="button button-danger button-small font-size-14 rounded-0 width-100">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrendingCategoryItem;
