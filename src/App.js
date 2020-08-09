import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import CarouselSection from "./components/CarouselSection";
import BestSellingBrands from "./components/BestSellingBrands";
import TrendingCategory from "./components/TrendingCategory";
// import ReactSlickDemo from "./components/ReactCarousel";
import DiscountsOffersFavourites from "./components/DiscountsOffersFavourites";
import TrendingBrands from "./components/TrendingBrands";
import FloatingButton from "./components/FloatingButton";

const ShopPlus = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result", result);
          setIsLoaded(true);
          setCategories(result.data);
        },
        (error) => {
          console.log("error", error);
          setError(error);
        }
      );
  }, []);
  return (
    // <div className="App ">
    <React.Fragment>
      <div className="container">
        {isLoaded && <Navbar categories={categories} isLoaded={isLoaded} />}
      </div>
      <CarouselSection />
      <div className="container">
        <BestSellingBrands />
        <TrendingCategory />
        {/* <ReactSlickDemo/> */}
        <DiscountsOffersFavourites />
        <TrendingBrands />
        <FloatingButton/>
      </div>
    </React.Fragment>
    // </div>
  );
};

export default ShopPlus;
