import React from "react";
import { Link } from 'react-router-dom';
import { Hero } from "react-daisyui";
import "font-awesome/css/font-awesome.min.css";
import "../styles/CardStyles.css";
import DashCard from "../components/Card/DashCard";

const Dashboard = () => {
  return (
    <div>
      <div className="postContainer">
        <h2 className="text-bold text-2xl text-accent-content text-center my-4 pt-4">
          Dashboard
        </h2>
        {/* Dynamically update based on most recent posts */}
      </div>

      <Hero>
        <div className="postContainer bg-base-200 mb-10 mt-5 px-6 pb-7">
          <h2 className="text-bold text-lg text-center text-neutral-content my-4">
            My Posts
          </h2>
          {/* Dynamically update based on users recent posts */}
          <div className="grid grid-cols-3 gap-2 py-3 text-neutral-content">
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
            {/* Add onClick function to render AddPost page*/}
            <div className="my-10 mx-10">
              <Link to="/addpost" className="btn rounded-full bg-accent border-none hover:bg-accent-focus text-base-content">
                Add<i className="fa-solid fa-circle-plus fa-2xl ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default Dashboard;
