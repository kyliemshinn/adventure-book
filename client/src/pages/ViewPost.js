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
// import { useParams } from "react-router-dom";
// Import useQuery Hook to use Single Post query
// import { useQuery } from "@apollo/client";
// import { QUERY_SINGLE_POST } from "../utils/queries";
// import { comment } from "postcss";

const ViewPost = () => {
  //Use useParams to retrieve value of the route parameter ':postId'
  // const { postId } = useParams();
  // const { loading, data } = useQuery(QUERY_SINGLE_POST, {
  //   // pass URL parameter
  //   variables: { postId: postId },
  // });

  // const post = data?.post || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="text-neutral-content">
      <Hero>
        <div className="postContainer bg-base-200 mx-9 my-9 pt-4 px-6 pb-7">
          <h2 className="text-bold text-2xl text-neutral-content">Title </h2>
          <h3>Posted by </h3>
          <h3>Created at </h3>

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
              <div className="badge badge-outline">#Tags </div>
            </div>
            <div className="bg-base-100 ml-14 mb-6">
              <h3>Post Content </h3>
            </div>
          </div>
          <div className="bg-base-100 px-8">
            <div className="pt-7">
              <CommentSection />
              Comment Section
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
