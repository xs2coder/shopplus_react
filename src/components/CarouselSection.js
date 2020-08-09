import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselSection = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  };

  return (
    <Slider className="carouselSection" {...settings}>
      <div class="logo border">
        <img src="/images/banner.jpg" alt="First slide"></img>
      </div>
      <div class="logo border">
        <img src="/images/banner.jpg" alt="First slide"></img>
      </div>
    </Slider>
  );
};
export default CarouselSection;
