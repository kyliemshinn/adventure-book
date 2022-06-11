import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "react-daisyui";
import DashCard from "../components/Card/DashCard";
import Sidebar from "../components/SideMenu/Sidebar";

//import for functionality of query
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

//import styling
import "font-awesome/css/font-awesome.min.css";
import "../App.css";
import "../styles/CardStyles.css";


const Dashboard = () => {
  // const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    // variables: { userId: postId },
  });
  const user = data?.user || {};
  
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(user)
  console.log(user.posts)

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

            <h2 className="text-bold text-xl text-center text-neutral-content my-4">
              My Posts
            </h2>

            {/* Dynamically update based on users recent posts */}
            <div className="grid grid-cols-3 gap-4 place-items-center py-3 text-neutral-content">

              {user.posts.map((post) => (
                <DashCard title={post.title} post={post} image={post.images[0]} />
                ))}
          
              {/* Add onClick function to render AddPost page*/}
              <div className="m-10">
                <Link
                  to="/addpost"
                  className="btn rounded-full bg-accent border-none hover:bg-accent-focus hover:shadow-lg text-base-content" >
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
