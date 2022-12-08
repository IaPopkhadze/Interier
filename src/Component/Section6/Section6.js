import React from "react";
import "./section6.css";
import Data from "./section6Data";

function Section6() {
  return (
    <div className="section6">
      <div className="image_content_container">
        <div className="image_container">
          <img src={Data.image} alt="" />
        </div>
        <div className="content">
          <p className="title">{Data.title}</p>
          <p className="text">{Data.text}</p>
          <div className="search_container">
            <input
              className="section6_input"
              type="text"
              placeholder="Insert Your Email Adress"
            />
            <div className="arrowContainer">
              <img className="arrow" src={Data.button} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
