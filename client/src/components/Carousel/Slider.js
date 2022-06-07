import React from "react";
import { SliderData } from "./SliderData";

const Slider = () => {
  return (
    <div className="slider">
    
      {SliderData.map((slide, index) => {
        return (
        <div key={index} className="slide" >
        {slide}
        </div>
      )
      })}
    </div>
  );
};

export default Slider;
