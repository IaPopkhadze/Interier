import React from "react";
import Section2Data from "./Section2Data";
import "./section2.css";

function Section2() {
  return (
    <div className="section2">
      <p className="section2_title">Why Choosing Us</p>
      <div className="four_box_container">
        {Section2Data.map((element) => {
          return (
            <div className="each_box_container" key={element.id}>
              <div className="img_container">
              <img className="img" src={element.image} alt="" />
              </div>
              <p className="box_title">{element.title}</p>
              <p className="box_text">{element.text}</p>
              <p className="more_info">More info</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section2;
