import React from "react";

const Navbar = ({ categories }) => {
  const renderNavbar = (props) =>
    props.map((category, key) => (
      <a key={key} className="flex-item" href="sass.html">
        <div className="flex-container padding-top-10">
          <div className="nav-icon">
            <img src={category.icon_url} alt={category.name} />
          </div>

          <div className="name">{category.name}</div>
        </div>
      </a>
    ));
  return (
    <div className="row container margin-bottom-none">
      <div className="nav-wrapper">
        <div className="nav-item flex-container">
          {renderNavbar(categories)}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
