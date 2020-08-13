// this is for category and brand links in footer
import React from "react";

const FooterCategoryBrands = () => {
  const categories = [
    "Apparel & Accessories",
    "Food & Beverage",
    "Mobile & Electronics",
    "Health & Wellness",
    "Movie & Magazines",
    "Cabs & Travel",
    "e-Com & Online",
    "Grocery & Home Needs",
    "Apparel & Accessories",
    "Food & Beverage",
    "Mobile & Electronics",
    "Health & Wellness",
    "Movie & Magazines",
    "Cabs & Travel",
    "e-Com & Online",
    "Grocery & Home Needs",
  ];
  const brands = [
    "ALDO",
    "Allen Solly",
    "Armani Exchange",
    "Arrow",
    "BEBE",
    "Bata",
    "Benetton",
    "Central",
    "Club SP",
    "Coach",
    "Elle",
    "Fastrack",
    "Flying Machine",
    "Baskin Robbins",
    "Cafe Coffee Day Online",
    "Costa Coffee",
    "KFC",
    "Machaan",
    "Mainland China",
    "ALDO",
    "Allen Solly",
    "Armani Exchange",
    "Arrow",
    "BEBE",
    "Bata",
    "Benetton",
    "Central",
    "Club SP",
    "Coach",
    "Elle",
    "Fastrack",
    "Flying Machine",
    "Baskin Robbins",
    "Cafe Coffee Day Online",
    "Costa Coffee",
    "KFC",
    "Machaan",
  ];
  const renderLinks = (props) =>
    props.map((prop, key) => (
      <li key={key} className="footerVerticalLinks-item">
        <a href="index.html">{prop}</a>
      </li>
    ));

  return (
    <div className="container">
      <div className="row padding-x-16">
        <div className="padding-bottom-16">
          <ol className="footerVerticalLinks">
            <li className="footerVerticalLinks-item">CATEGORY</li>
            {renderLinks(categories)}
          </ol>
        </div>
        <div className="padding-bottom-16">
          <ol className="footerVerticalLinks">
            <li className="footerVerticalLinks-item">BRANDS</li>
            {renderLinks(brands)}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default FooterCategoryBrands;
