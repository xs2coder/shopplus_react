import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TrendingBrands = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const renderSlides = () =>
    [
      {
        brandImage: "tranding-brand/1.jpg",
        brandLogo: "tranding-brand/1.png",
      },
      {
        brandImage: "tranding-brand/2.jpg",
        brandLogo: "tranding-brand/2.png",
      },
      {
        brandImage: "tranding-brand/3.jpg",
        brandLogo: "tranding-brand/3.png",
      },
      {
        brandImage: "tranding-brand/4.jpg",
        brandLogo: "tranding-brand/4.png",
      },
      {
        brandImage: "tranding-brand/5.jpg",
        brandLogo: "tranding-brand/5.png",
      },
      {
        brandImage: "tranding-brand/6.jpg",
        brandLogo: "tranding-brand/6.png",
      },
      {
        brandImage: "tranding-brand/7.jpg",
        brandLogo: "tranding-brand/1.png",
      },
    ].map((brand) => (
      <div class=" flex-container">
        <div class="brandImage padding">
          <img src={"/images/" + brand.brandImage} alt={brand.brandImage}></img>
        </div>
        <div class="brandLogo padding">
          <img src={"/images/" + brand.brandLogo} alt={brand.brandLogo}></img>
        </div>
      </div>
    ));

  return (
    <div className="trendingBrands">
      <div class="col-12">
        <h3 class="fs-22 text-uppercase fw-700 text-muted">
          <span>Trending Brands</span>
        </h3>
      </div>
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
};
export default TrendingBrands;
