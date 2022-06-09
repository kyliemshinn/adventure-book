import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "react-daisyui";
import "font-awesome/css/font-awesome.min.css";
import "../App.css";
import "../styles/CardStyles.css";
import DashCard from "../components/Card/DashCard";
import Sidebar from "../components/SideMenu/Sidebar";

const Dashboard = () => {
  return (
    <div className="pageContainer">
      <div>
        <h2 className="text-bold text-2xl text-accent-content text-center my-4 pt-4">
          Dashboard
        </h2>
        {/* Dynamically update container size based on posts */}
      </div>
      <div className="grid grid-cols-8 gap-4 text-neutral-content mr-12">
        <Sidebar />

        <Hero className="postContainer col-span-6 bg-base-200 mb-10 mt-5 mr-4 px-6 pb-7">
          <div>
            <div className="">
              <h2 className="text-bold text-lg text-center text-neutral-content my-4">
                My Posts
              </h2>
            </div>
            {/* Dynamically update based on users recent posts */}
            <div className="grid grid-cols-3 gap-4 place-items-center py-3 text-neutral-content">
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              {/* Add onClick function to render AddPost page*/}
              <div className="my-10 mx-10">
                <Link
                  to="/addpost"
                  className="btn rounded-full bg-accent border-none hover:bg-accent-focus hover:shadow-lg text-base-content"
                >
                  Add<i className="fa-solid fa-circle-plus fa-2xl ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </Hero>
      </div>
    </div>
  );
};

export default Dashboard;
