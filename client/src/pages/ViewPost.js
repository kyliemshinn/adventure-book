import React from "react";
import { Carousel } from 'react-daisyui';
import img from '../images/hot-air-balloon.png';

const ViewPost = () => {
  return (
   
    <Carousel className="rounded-box">
          
          <Carousel.Item
            alt="balloon" src={img}
          />
          <Carousel.Item
           
          />
          <Carousel.Item
            
          />
          <Carousel.Item
           
          />
          <Carousel.Item
            
          />
         
        </Carousel>
  );
};

export default ViewPost;
