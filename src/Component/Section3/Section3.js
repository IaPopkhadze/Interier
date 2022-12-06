import React from "react";
import { useState } from "react";
import Section3Data from "./Section3Data";
import Section3Img from "../Assets/section3Img.png";
import "./section3.css";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
function Section3() {
  const [iconId, setIconId] = useState(false);

  return (
    <div className="section3">
      <div className="content_image_container">
        <div className="content_container">
          <p className="section3_title">Visualize your ideas with us</p>
          {Section3Data.map((element) => {
            return (
              <div className="each_text_container">
                <div>
                  <p>{element.title}</p>
                </div>
                {/* <FiMinus onClick={()=>setIconId(element.id)} className="icon"/>  */}
                <FiPlus
                  onClick={() => setIconId(element.id)}
                  className="icon"
                />
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
