import React from "react";
import DiscountsOffersFavouritesItem from "./DiscountsOffersFavouritesItem";

const DiscountsOffersFavourites = () => {
  return (
    <div className="row">
      <div className="col s4">
        <DiscountsOffersFavouritesItem
          heading="BEST DISCOUNTS"
          initialSlide="0"
        />
      </div>
      <div className="col s4">
        <DiscountsOffersFavouritesItem heading="BEST OFFERS" initialSlide="2" />
      </div>
      <div className="col s4">
        <DiscountsOffersFavouritesItem
          heading="YOUR FAVOURITE"
          initialSlide="4"
        />
      </div>
    </div>
  );
};
export default DiscountsOffersFavourites;
