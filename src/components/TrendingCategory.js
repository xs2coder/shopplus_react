import React from "react";
import TrendingCategoryItem from "./TrendingCategoryItem";

const TrendingCategory = () => {
  return (
    <React.Fragment>
      <div className="col-12">
        <h3 className="h4 fw-700 text-uppercase">Trending Category</h3>
      </div>
      <div className="row">
        <TrendingCategoryItem categoryImage="1.jpg" logoImage="7.png" />
        <TrendingCategoryItem categoryImage="2.jpg" logoImage="8.png" />
        <TrendingCategoryItem categoryImage="3.jpg" logoImage="9.png" />
        <TrendingCategoryItem categoryImage="4.jpg" logoImage="10.png" />
      </div>
    </React.Fragment>
  );
};
export default TrendingCategory;
