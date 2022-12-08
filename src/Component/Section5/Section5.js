import React from "react";
import "./section5.css";
import Data from "./Section5Data";
function Section5() {
  return (
    <div className="section5">
      <p className="section5_title">What they say about our services</p>
      <div className="opinion_container">
        {Data.map((element) => {
          return (
            <div className="each_person_container" key={element.id}>
              <p className="title">{element.title}</p>
              <p className="text">{element.text}</p>
              <div className="name_image_profession">
                <div className="person_image_container">
                  <img className="person_image" src={element.image} alt="" />
                </div>
                <div className="name_profession">
                <p className="name">{element.name}</p>
                <p className="profession">{element.profession}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section5;
