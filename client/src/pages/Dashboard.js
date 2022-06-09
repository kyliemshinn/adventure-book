import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "react-daisyui";
import DashCard from "../components/Card/DashCard";
import Sidebar from "../components/SideMenu/Sidebar";
//for card info
// import ViewPost from './ViewPost';
// import AddPost from './AddPost';

//import for functionality of query
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
// import Auth from '../utils/auth';

//import styling
import "font-awesome/css/font-awesome.min.css";
import "../App.css";
import "../styles/CardStyles.css";

const posts = [
  {
    _id: 1,
    image:
      "https://images.unsplash.com/photo-1654727433983-1b72489e291e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Mia Carmen",
    title: "Japan",
    tags: ["#boba", "#sushi"],
  },
  {
    _id: 2,
    image:
      "https://images.unsplash.com/photo-1654763001405-e714d19333e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    author: "Brad Pitt",
    title: "Australia",
    tags: "#scubadiving",
  },
  {
    _id: 3,
    image:
      "https://images.unsplash.com/photo-1654721094514-d7c8364178c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    author: "Ryan Gosling",
    title: "Italy",
    tags: "#vineyards",
  },
];

const Dashboard = () => {
  // NOTE: mau need to rename the userId
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

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

        <Hero className="postContainer bg-base-200 mb-10 mt-5 px-6 pb-7 overflow-auto mr-4 col-span-6">
          <div>
            <h2 className="text-bold text-lg text-center text-neutral-content my-4">
              {user.username} Posts
            </h2>
            {/* Dynamically update based on users recent posts */}
            <div className="grid grid-cols-3 gap-4 place-items-center py-3 text-neutral-content">
              {posts &&
                posts.map((post) => (
                  <Link to={`/dashboard/viewpost/${post._id}`}>
                    {" "}
                    <DashCard image={post.image} title={post.title} />
                  </Link>
                ))}
              {/*
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard /> */}
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
