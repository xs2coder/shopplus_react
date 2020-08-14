import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Navbar from "./components/Navbar";
import CarouselSection from "./components/CarouselSection";
import BestSellingBrands from "./components/BestSellingBrands";
import TrendingCategory from "./components/TrendingCategory";
import DiscountsOffersFavourites from "./components/DiscountsOffersFavourites";
import TrendingBrands from "./components/TrendingBrands";
import FloatingButton from "./components/FloatingButton";
import Section from "./components/Section";
import Footer from "./components/footer_components/Footer";

const ShopPlus = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCategories(result.data);
        },
        (error) => {
          console.log("error in API:", error);
          setIsLoaded(false);
        }
      );
  }, []);
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Header categories={categories}/>
        
        {!isLoaded && (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        )}
        {isLoaded && <Navbar categories={categories} />}

        <CarouselSection />
        <Section />
        <BestSellingBrands />
        <TrendingCategory />
        <DiscountsOffersFavourites />
        <TrendingBrands />
        <FloatingButton />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ShopPlus;
