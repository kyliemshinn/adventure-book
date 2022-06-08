// TO-DO: carousel for images
// TO-DO: description section
// TO-DO: comment box

// TO-DO: add comment form submission box
// TO-DO: handle form submit to post comment
// TO-DO: allow user to view any tagged locations
// TO-DO: allow user to save this post to their dashboard
import React from "react";
import { Hero } from "react-daisyui";

// import SimpleImageSlider from "react-simple-image-slider";
// import { CarouselData } from "../components/Carousel/CarouselData";
// import Carousel from '../components/Carousel/carousel';

// import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm/CommentForm';

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

          <div className="grid grid-cols-2 gap-5 py-3">
            {/* <div className="slider h-vh">
              <SimpleImageSlider
                width={896}
                height={900}
                images={CarouselData}
                showBullets={true}
                showNavs={true}
                overflow="hidden"
              /> */}
            
            

            <div className="bg-base-100 ml-14 ">
              <h3>Description</h3>
            </div>
          </div>
          <div>
            {/* <p>Add Comment or Question</p>
            <Textarea className="w-full">Comment Section</Textarea>
            <p class="text-sm text-blue-900 float-right">Max 280 characters</p>
            <Button className="btn-sm hover:bg-secondary-focus hover:shadow-lg rounded-full border-none">
              Add Comment
            </Button> */}
            <CommentForm />
          </div>
          </div>
        {/* </div> */}
      </Hero>
    </div>
  );
};

export default ViewPost;
