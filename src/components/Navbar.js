import React from "react";

const Navbar = ({ categories }) => {
  const renderDropdown = (props) =>
  props.map((brand, key) => (
        <a key={key}
          class="dropdown-item"
          href="index.html"
        >
          {brand}
        </a>
  ));
  const renderNavbar = (props) =>
    props.map((category, key) => (
      <li key={key} class="dropdown spriteMenu">
        <a href="index.html">
          <figure>
            <img
              src={category.icon_url}
              alt={category.name}
            />
            <figcaption>{category.name}</figcaption>
          </figure>
        </a>
        <div class="dropdown-menu" aria-labelledby="Accessories-Dropdown">
        {renderDropdown(category.brands_name.split(','))}
        </div>
      </li>
    ));
  return (
    <div class="row">
      <div class="container px-0 desktopNav bg-white">
        <ul class="border-bottom d-none d-lg-block">
          {renderNavbar(categories)}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
