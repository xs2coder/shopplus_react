import React from "react";

const Navbar = ({ categories }) => {
  const renderNavbar = (props) =>
    props.map((category, key) => (
      <a key={key} className="flex-item" href="sass.html">
        <div className="flex-container">
          <div>
            <img src={category.icon_url} alt={category.name} />
          </div>

          <div className="name">{category.name}</div>
        </div>
      </a>
    ));
  return (
    <div className="row">
      <div className="nav-wrapper">
        <div className=" nav-item flex-container">
          {renderNavbar(categories)}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
