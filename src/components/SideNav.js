import React from "react";

const SideNav = ({ slider, setSlider, categories }) => {
  return (
    <>
      <div class="off-canvas-nav">
        <div class="left-nav-toplink">
          <div
            className="sidenav-overlay left-nav"
            onClick={() => setSlider((slider) => !slider)}
            style={{
              display: slider ? "block" : "none",
              opacity: "1",
            }}
          >
            <ul
              id="slide-out"
              className="sidenav list-unstyled m-0"
              style={{
                transform: slider ? "translateX(0%)" : "",
                transitionProperty: "transform",
                transitionDuration: ".25s",
              }}
            >
              {categories.map((category, key) => (
                <li key={key} onClick={() => setSlider((slider) => !slider)}>
                  <a onClick={() => setSlider(slider => !slider)} className="waves-effect">{category.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default SideNav;
