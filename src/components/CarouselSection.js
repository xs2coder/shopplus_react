import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselSection = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider className="carousel-section" {...settings}>
      <div>
        <img src="/images/banner.jpg" alt="First slide"></img>
      </div>
      <div>
        <img src="/images/banner.jpg" alt="First slide"></img>
      </div>
    </Slider>
  );
};
export default CarouselSection;
