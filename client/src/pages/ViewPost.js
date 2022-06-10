// TO-DO: update carousel for this posts images
// TO-DO: allow user to view any tagged locations
// TO-DO: allow user to save this post to their dashboard
import React from "react";
import { Hero } from "react-daisyui";
import "../App.css";
import SimpleImageSlider from "react-simple-image-slider";
import { CarouselData } from "../components/Carousel/CarouselData";

import CommentSection from "../components/CommentSection/CommentSection";
import CommentForm from "../components/CommentForm/CommentForm";
import Map from "../components/Map";
import Bookmark from '../components/Bookmark';

// Import useParams Hook
import { useParams } from "react-router-dom";
// Import useQuery Hook to use Single Post query
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_POST } from "../utils/queries";
// import { comment } from "postcss";

const ViewPost = () => {
  // Use useParams to retrieve value of the route parameter ':postId'
  const { postId } = useParams();
  console.log(postId);
  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });
  console.log(data);
  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(post);

  // const [iconState, setIconState] = useState(false);

  return (
    <div className="text-neutral-content">
      <Hero className="mb-28">
        <div className="postContainer bg-base-200 mx-9 my-9 pt-4 px-6 pb-7">
          <div>
            {/* show text of "save" on hover */}
            {/* onClick, save to collections */}
            {/* highlight when saved */}
            <div>
              <Bookmark />
            </div>
            <h2 className="text-bold text-2xl text-neutral-content">
              {post.title}
            </h2>
            {/* <p>{post.author.username}</p> */}
          </div>
          <div className="grid grid-cols-2 gap-4 py-3 pb-9">
            <div className="slider h-vh">
              <SimpleImageSlider
                width={720}
                height={800}
                images={CarouselData}
                showBullets={true}
                showNavs={true}
                overflow="hidden"
              />

              <div className="badge badge-outline">{post.tags}</div>
            </div>

            <div className="bg-base-100 mb-6 ">
              <p className="float-right">{post.createdAt}</p>
              <div className="max-w-2xl">
                <h3 className="pl-8 pt-5 overflow-wrap">{post.content}</h3>
              </div>
            </div>
            <div>
              <Map
                height="600px"
                width="800px"
                center={[61.1, -149.8]}
                locations={[[61.1, -149.8]]}
                onClick={() => {}}
              />
            </div>
          </div>
          <div className="bg-base-100 px-8">
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
