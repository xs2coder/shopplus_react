import React,{useState} from "react";
import SideNav from "./SideNav";

const Header = ({ categories }) => {
  const [slider, setSlider] = useState(false);
  return (
    <React.Fragment>
    <header className="negative-margin-left-right border-bottom-off-white">
      <div className="container text-align-right">
        <a
          href="#"
          className="link-text"
          data-toggle="modal"
          data-target="#login"
        >
          Login/Register
        </a>
      </div>
      <div className="container flex-container padding-top-16 padding-bottom-16">
        <div className="flex-item flex-container">
          <div
            className="flex-item hamburger-icon margin-right-8"
            id="desktop-hamburger"
            onClick={() => setSlider(slider => !slider)}
          >
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
          </div>
          <span className="flex-item">
            <a href="tel:18001033314">
              <img src="images/call.png" alt="logo" />
            </a>{" "}
          </span>
          <span className="flex-item font-size-16 font-weight-700">
            1800-103-3314
          </span>
        </div>
        <div className="flex-item flex-basis-33">
          <div className="search">
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Search by Brand / Product"
            />
          </div>
        </div>
        <div className="flex-item">
          <img src="/images/logo.png" />
        </div>
      </div>
    </header>
    <SideNav slider={slider} setSlider={setSlider} categories={categories}/>
    </React.Fragment>
  );
};
export default Header;
