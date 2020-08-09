import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const DiscountsOffersFavouritesItem = ({heading,initialSlide}) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide:parseInt(initialSlide)
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
    ].map((logo) => (
      <div class="logo border">
        <img src={"/images/" + logo} alt={logo}></img>
      </div>
    ));

  return (
    <div className="discountsOffersFavouritesItem">
      <h3 class="fs-16 fw-400 pb-2 mb-2 border-bottom">{heading}</h3>
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
};
export default DiscountsOffersFavouritesItem;
