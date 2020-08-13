import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TrendingBrands = () => {
  const settings = {
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
        brandLogo: "tranding-brand/5.png",
      },
      {
        brandImage: "tranding-brand/5.jpg",
        brandLogo: "tranding-brand/4.png",
      },
      {
        brandImage: "tranding-brand/6.jpg",
        brandLogo: "tranding-brand/6.png",
      },
      {
        brandImage: "tranding-brand/7.jpg",
        brandLogo: "tranding-brand/1.png",
      },
    ].map((brand, key) => (
      <div key={key} className=" flex-container">
        <div className=" ">
          <img
            className="width-100 rounded border-off-white"
            src={"/images/" + brand.brandImage}
            alt={brand.brandImage}
          ></img>
          <div className="padding-x-10 padding-bottom-15 text-align-center">
            <div className="off-logo ">
              <img
              className="margin-auto"
                src={"/images/" + brand.brandLogo}
                alt={brand.brandLogo}
              ></img>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h3 className="font-size-22 text-uppercase font-weight-700 text-muted margin-bottom-8">
            <span>Trending Brands</span>
          </h3>
        </div>
        <div className="col s12">
          <Slider {...settings}>{renderSlides()}</Slider>
        </div>
      </div>
    </div>
  );
};
export default TrendingBrands;
