// TO-DO: update carousel for this posts images
// TO-DO: update this posts description section
// TO-DO: comment box

// TO-DO: allow user to view any tagged locations
// TO-DO: allow user to save this post to their dashboard
import React from "react";
import { Hero } from "react-daisyui";

import SimpleImageSlider from "react-simple-image-slider";
import { CarouselData } from "../components/Carousel/CarouselData";

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
  // console.log(postId);
  // const { loading, data } = useQuery(QUERY_SINGLE_POST, {
  //   // pass URL parameter
  //   variables: { postId: postId },
  // });

  // const post = data?.post || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const post = {
    _id: 3,
    author: "Ryan Gosling",
    createdAt: "MM-DD-YYYY",
    content:
      "Drank wine, ate pasta, partied with some cute italian girls, drove a fiat on the wrong side of the road, gained 5lbs.",
    title: "Italy",
    location: "Portofino",
    tags: ["#vineyards", "#pasta", "#wine"],
    images:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  };
  console.log(post);

  return (
    <div className="text-neutral-content">
      <Hero className="mb-28">
        <div className="postContainer bg-base-200 mx-9 my-9 pt-4 px-6 pb-7">
          <div>
            {/* show text of "save" on hover */}
            {/* onClick, save to collections */}
            {/* highlight when saved */}
            <div>
              <i class="fa-solid fa-bookmark fa-xl pt-3 float-right"></i>
            </div>
            <h2 className="text-bold text-2xl text-neutral-content">
              {post.title}
            </h2>
            <p>{post.author}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 py-3 pb-9">
            <div className="slider h-vh">
              <SimpleImageSlider
                width={720}
                height={800}
                images={CarouselData}
                showBullets={true}
                showNavs={true}
                overflow="hidden"
              />
              {post.tags &&
                post.tags.map((tag) => (
                  <div className="badge badge-outline">{tag}</div>
                ))}
            </div>

            <div className="bg-base-100 ml-14 mb-6">
              {/* <p className="float-right">{post.createdAt}</p> */}
              <div className="truncate">
                <h3>{post.content}</h3>
              </div>
            </div>
          </div>
          <div className="bg-base-100 px-8">
            {/* map through comments *ref thoughtList (26) */}
            <div className="pt-4">
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
