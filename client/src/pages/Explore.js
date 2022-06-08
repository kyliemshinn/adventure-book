import React from "react";
import { Link } from 'react-router-dom';
import { Hero } from "react-daisyui";
import "../App.css";
import ExploreCard from "../components/Card/ExploreCard";
import '../styles/CardStyles.css';

// TO-DO: onClick of a post redirect to viewPost
// TO-DO: handle form submit of search bar that renders most recent posts with tags that were searched

const Explore = () => {
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
            palce you want to explore
          </h3>
        </div>
        <div className="pt-20 relative mx-auto text-gray-600">
          {/* handle form submit that renders posts with the tags that were searched */}
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="#sailing #hiking #surfing..."
                class="input input-bordered"
              />
              <button className="btn bg-accent border-none hover:bg-accent-focus btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" 
                >
                  <path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Hero>
    {/* dynamically update container based on amount of posts */}
    {/* add scroll reveal animation for addition posts */}
      <div className="postContainer pb-5">
        <h2 className="text-bold text-2xl text-base-300 text-center my-4 pt-4">Most Recent Posts</h2>
        {/* Dynamically update based on most recent posts */}
        <div className="grid grid-cols-4 gap-3 py-3 text-secondary-content place-items-center">
          {/* update link to redirect to that specific post */}
          <Link to="viewpost"><ExploreCard /></Link>
          <Link to="viewpost"><ExploreCard /></Link>
          <Link to="viewpost"><ExploreCard /></Link>
          <Link to="viewpost"><ExploreCard /></Link>
          <Link to="viewpost"><ExploreCard /></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Explore;
