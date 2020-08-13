import React from "react";

const Banner = ({ image, heading, description }) => {
  //   const renderImages()=>
  return (
    <React.Fragment>
      <div className={`col s12 ${image.length>1 ? "m6" :"m3"} padding-16 padding-right-0`}>
        <div className=" flex-container border-off-white rounded padding-16">
          <div>
            <h3 class="h4 font-weight-700 text-uppercase margin-none">{heading}</h3>
            <p class="font-size-12 margin-bottom-8">{description}</p>
          </div>
          {image.map((image, key) => (
            <div key={key} className="margin-bottom-16">
              <a href="index.html">
              <img className="width-100 " src={"/images/" + image} alt={image}></img>
              </a>
            </div>
          ))}

          <div className="">
            <a href="brand.html" className="button button-danger button-small font-size-14 rounded-0 width-100">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Banner;
