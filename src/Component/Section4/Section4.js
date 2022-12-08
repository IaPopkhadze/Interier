import React from "react";
import Images from "./Section4Data";
import "./section4.css";
import Star from '../Assets/star.png'
function Section4() {
    const stars= [Star,Star,Star,Star]
  return (
    <div className="section4">
      <p className="section4_title">Featured Product</p>
      <div className="chair_container">
        {Images.map((element) => {
          return (
            <div  key={element.id}>
              <div className="chair_img_container">
                <img src={element.image} alt="image" />
              </div>
              <p className="product_name">Product</p>
              <p className="product_category">Category</p>
              <div className="start">
               {stars.map((element,index)=> <img key={index} src={element} />)}
              </div>
              <p className="idr">IDR: {element.IDR} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section4;
