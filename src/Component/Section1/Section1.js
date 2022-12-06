import React from "react";
import Background from "../Assets/headerImg.png";
import NavigationLeftIcon from "../Assets/navigationLeftIcon.svg";
import { BsFillBagFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import "./section1.css";
function Section1() {
  return (
    <div className="section1">
      <div className="image_container">
        <img className="img" src={Background} alt="" />
      </div>
      <div className="section1_content">
        <div className="header">
          <div className="leftSide">
            <img src={NavigationLeftIcon} alt="" />
            <p>
              Shady <br />
              Rhymes
            </p>
          </div>
          <div className="center">
            <ul>
              <li>Furniture</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="rightSide">
            <BsFillBagFill />
          </div>
        </div>
        <div className="content">
          <h1 className="content_title">
            Make Your Interior More <br /> Minimalistic & Modern
          </h1>
          <p className="content_text">
            Bringing interiors to life, understanding the person or people
            <br />
            living in a home is far greater need in design.
          </p>
          <div className="searcher">
            <input
              className="my_input"
              type="text"
              placeholder="Search Furniture"
            />
            <BiSearch className="search_icon"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
