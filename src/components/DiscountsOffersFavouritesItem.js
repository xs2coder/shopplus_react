import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const DiscountsOffersFavouritesItem = ({ heading, initialSlide }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: parseInt(initialSlide),
    // centerPadding:"50px"
  };

  const renderSlides = () =>
    [
      "logos/1.png",
      "logos/2.png",
      "logos/3.png",
      "logos/4.png",
      "logos/5.png",
      "logos/6.png",
      "logos/7.png",
      "logos/8.png",
      "logos/9.png",
      "logos/10.png",
    ].map((logo, key) => (
      <div key={key} className="border-off-white">
        <img className="margin-auto" src={"/images/" + logo} alt={logo}></img>
      </div>
    ));

  return (
    <div className="">
      <h3 className="font-size-16 font-weight-400 border-bottom-off-white padding-bottom-8 margin-bottom-8">{heading}</h3>
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
};
export default DiscountsOffersFavouritesItem;
