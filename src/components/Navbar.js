import React from "react";
// import DiscountsOffersFavouritesItem from "./DiscountsOffersFavouritesItem";

const Navbar = ({ categories, isLoaded }) => {
  if (isLoaded) {
    console.log("categories in navbar", categories);
    const renderNavbar = (props) =>
      props.map((category, key) => (
        // <li>
        <a class="flex-item" href="sass.html">
          <div class="flex-container">
            <div>
              <img src={category.icon_url} alt={category.name} />
            </div>

            <div class="name">{category.name}</div>
          </div>
        </a>
        // </li>
      ));
    return (
      <div class="row">
        {/* <nav> */}
        <div class="nav-wrapper">
          {/* <ul id="nav-mobile" class="right hide-on-med-and-down"> */}
          <div class=" nav-item flex-container">{renderNavbar(categories)}</div>
          {/* </ul> */}
        </div>
        {/* </nav> */}
      </div>
    );
  } else {
    console.log("else");
    return (
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    );
  }
};
export default Navbar;
