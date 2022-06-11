import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "react-daisyui";
import ExploreCard from "../components/Card/ExploreCard";
import SearchForm from '../components/SearchForm/SearchForm';
import "../App.css";
import "../styles/CardStyles.css";

import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_POSTS_WITH_TAG } from "../utils/queries";

const Explore = () => {

  const [ queryData, setQueryData ] = useState([]);

  //const { loading, data: unfilteredData } = useQuery(QUERY_POSTS);
  const [ getFilteredPosts, { called, loading, data } ] = useLazyQuery(QUERY_POSTS_WITH_TAG);

  function requestSearch(criteria) {
    getFilteredPosts({
      variables: {tags: criteria}
    }).then((res) => {
      console.log("a", res.data.postsByTag)
      if(res.data.postsByTag) {
        console.log("Wow!", res.data.postsByTag);
        setQueryData(res.data.postsByTag);
      }
    });
  }

  // TO-DO: handle form submit of search bar that renders most recent posts with tags that were searched
  return (
    <div className="pageContainer">
      <Hero className="pt-7 pb-2 bg-base-200 place-items-center">
        <div className="text-center mb-20 text-secondary-content">
          <h2 className="text-xl">
            Get Inspired<br></br>
            Plan Your Next Adventure
          </h2>
          <h3 className="py-5">
            Search for tags to find other user's posts with the activities or
            place you want to explore
          </h3>
        </div>
        <div className="pt-20 relative mx-auto text-gray-600">
          {/* handle form submit that renders posts with the tags that were searched */}
         <SearchForm onRequestSearch={requestSearch}/>
        </div>
      </Hero>
     
      <div className="postContainer pb-5 overflow-auto">
        <h2 className="text-bold text-2xl text-base-300 text-center my-4 pt-4">
          Most Recent Posts
        </h2>
        <div className="grid grid-cols-4 gap-3 py-3 text-secondary-content place-items-center">
          {/* Dynamically update based on most recent posts */}
          {/* map through posts */}
          {queryData.map((post) => (
            <Link key={post.id} to={`/explore/viewpost/${post.id}`}>
              <ExploreCard key={post.id}
                title={post.title}
                author={post.author.username}
                tags={post.tags}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
