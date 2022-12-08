import React from "react";
import { useState } from "react";
import Section3Data from "./Section3Data";
import Section3Img from "../Assets/section3Img.png";
import "./section3.css";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
function Section3() {
  const [data, setData] = useState(Section3Data);
  const handleVisibility = (id) => {
    const findElement = data.map((element) =>
      element.id === id
        ? { ...element, isSelected: !element.isSelected }
        : element
    );
    setData(findElement);
  };
  return (
    <div className="section3">
      <div className="content_image_container">
        <div className="content_container">
          <p className="section3_title">Visualize your ideas with us</p>
          {data.map((element) => {
            return (
              <div key={element.id} className="each_text_container">
                <div className="title_text">
                  <p>{element.title}</p>
                  {element.isSelected ? (
                    <p style={{ width: "80%" }}>{element.description}</p>
                  ) : null}
                </div>
                {element.isSelected ? (
                  <div className="iconContainer">
                    <FiMinus
                      style={{ flex: "1", marginRight: "0" }}
                      onClick={() => handleVisibility(element.id)}
                      className="icon"
                    />
                  </div>
                ) : (
                  <FiPlus
                    onClick={() => handleVisibility(element.id)}
                    className="icon"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="image_container">
          <img src={Section3Img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section3;
