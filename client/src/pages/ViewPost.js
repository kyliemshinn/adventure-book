// TO-DO: update carousel for this posts images
// TO-DO: update this posts description section
// TO-DO: comment box

// TO-DO: allow user to view any tagged locations
// TO-DO: allow user to save this post to their dashboard
import React from "react";
import { Hero } from "react-daisyui";

import SimpleImageSlider from "react-simple-image-slider";
import { CarouselData } from "../components/Carousel/CarouselData";
// import Carousel from '../components/Carousel/carousel';

import CommentSection from "../components/CommentSection/CommentSection";
import CommentForm from "../components/CommentForm/CommentForm";

// Import useParams Hook
// import { useParams } from 'react-router-dom';
// Import useQuery Hook to use Single Post query
// import { useQuery } from '@apollo/client';

const ViewPost = () => {
  return (
    <div className="text-neutral-content">
      <Hero className="">
        <div className="postContainer bg-base-200 mx-9 my-9 py-6 px-6 pb-7">
          <h2 className="text-bold text-lg text-neutral-content">Post Title</h2>
          <h3>Posted by "Username" </h3>

          <div className="grid grid-cols-2 gap-5 py-3 pb-9">
            <div className="slider h-vh">
              <SimpleImageSlider
                width={835}
                height={865}
                images={CarouselData}
                showBullets={true}
                showNavs={true}
                overflow="hidden"
              />
            </div>
            <div className="bg-base-100 ml-14 ">
              <h3>Description</h3>
            </div>
          </div>
          <div className="bg-base-100 px-8">
            <div className="pt-7">
              <CommentSection />
            </div>
            <div className="pb-7">
              <CommentForm />
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default ViewPost;
