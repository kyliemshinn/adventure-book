import React from "react";
import { Link } from 'react-router-dom';
import { Hero } from "react-daisyui";
import "../App.css";
import ExploreCard from "../components/Card/ExploreCard";
import '../utils/CardStyles.css';

const Explore = () => {
  return (
    <div>
      <Hero className="py-10 bg-base-200">
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
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="#sailing #hiking #surfing..."
                class="input input-bordered"
              />
              <button className="btn bg-secondary hover:bg-neutral-focus btn-square">
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

      <div className="postContainer">
        <h2 className="text-bold text-2xl text-accent-content text-center my-4 pt-4">Most Recent Posts</h2>
        {/* Dynamically update based on most recent posts */}
        <div className="grid grid-cols-4 gap-3 py-8 pl-6 text-secondary-content">
          <Link to="viewPost"><ExploreCard /></Link>
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </div>
      </div>
    </div>
  );
};

export default Explore;
