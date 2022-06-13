import React from "react";
import { Hero, Badge } from "react-daisyui";
import "../App.css";
import SimpleImageSlider from "react-simple-image-slider";

import CommentSection from "../components/CommentSection/CommentSection";
import CommentForm from "../components/CommentForm/CommentForm";
import Map from "../components/Map";
import Bookmark from "../components/Bookmark";

// Import useParams Hook
import { useParams } from "react-router-dom";
// Import useQuery Hook to use Single Post query
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_POST } from "../utils/queries";

const ViewPost = () => {
  // Use useParams to retrieve value of the route parameter ':postId'
  const { postId } = useParams();
  const query = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });
  const { loading, data } = query;
  const post = data?.post || {};

  function requeryPost() {
    query.refetch();
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  function makeCarouselImageData(images) {
    const imageData = [];
    for (let image of images) {
      imageData.push({ url: image });
    }
    return imageData;
  }

  return (
    <div className="container text-neutral-content">
      <Hero className="flex">
        <div className="card md-flex postContainer bg-base-200 md:ml-48 md:mx-7 my-9 pt-4 px-5 pb-7 mb-28 ">
          <div>
            <Bookmark postId={postId} />

            <h2 className="text-semibold text-3xl text-neutral-content">
              {post.title}
            </h2>

            {post.tags.map((tag) => (
              <Badge
                key={tag}
                className="badge badge-outline text-base-300 mr-1"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="py-4">
            <SimpleImageSlider
              width={820}
              height={700}
              images={makeCarouselImageData(post.images)}
              showBullets={true}
              showNavs={true}
              overflow="hidden"
              className="slider"
            />
          </div>

          <div className="pt-6 ">
            <div className="bg-base-100 mb-3 place-items-center">
              <h3 className="pl-8 py-6 max-w-lg md:max-w-2xl overflow-auto md:scroll-auto">
                {post.content}
              </h3>
            </div>
          </div>

          <p className="text-indigo-400 pb-2 font-semibold">
            See My Pinned Locations Below
          </p>
          {/* show text on hover */}
          <div title="Scroll out to see this user's pinned locations!">
            <Map
              height="600px"
              width="820px"
              center={[post.location.latitude, post.location.longitude]}
              locations={[[post.location.latitude, post.location.longitude]]}
              onClick={() => {}}
            />
          </div>
          <div className="card bg-base-100 px-8 mt-4 py-3">
            <CommentSection
              comments={post.comments}
              onUpdatePost={requeryPost}
            />

            <CommentForm postId={postId} />
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default ViewPost;
