import React from "react";
import { Hero, Card } from "react-daisyui";
import 'font-awesome/css/font-awesome.min.css';

const Dashboard = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <div className="postContainer">
        <h2 className="text-bold text-2xl text-accent-content text-center my-4 pt-4">
          Dashboard
        </h2>
        {/* Dynamically update based on most recent posts */}
      </div>

      <Hero>
        <div className="postContainer bg-base-200 mb-10 mt-5 px-5 pb-3">
          <h2 className="text-bold text-lg text-center my-4">My Posts</h2>
          {/* Dynamically update based on users recent posts */}
          <div className="grid grid-cols-3 gap-2 py-3">
            <Card className="card w-96 bg-base-100 shadow-xl">
              <div className="card w-96 text-neutral-content">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Title</h2>
                  <div className="card-actions justify-end">
                    <button className="btn-sm rounded-full btn-primary">
                      Edit
                    </button>
                    <button className="btn-sm rounded-full btn-primary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card w-96 bg-base-100 shadow-xl">
              <div className="card w-96 text-neutral-content">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Title</h2>
                  <div className="card-actions justify-end">
                    <button className="btn-sm rounded-full btn-primary">
                      Edit
                    </button>
                    <button className="btn-sm rounded-full btn-primary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card w-96 bg-base-100 shadow-xl">
              <div className="card w-96 text-neutral-content">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Title</h2>
                  <div className="card-actions justify-end">
                    <button className="btn-sm rounded-full btn-primary">
                      Edit
                    </button>
                    <button className="btn-sm rounded-full btn-primary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card w-96 bg-base-100 shadow-xl">
              <div className="card w-96 text-neutral-content">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Title</h2>
                  <div className="card-actions justify-end">
                    <button className="btn-sm rounded-full btn-primary">
                      Edit
                    </button>
                    <button className="btn-sm rounded-full btn-primary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Card>
            {/* Add onClick function to render AddPost page*/}
            <div className="my-10 mx-10">
            <button className="btn rounded-full btn-secondary">Add<i class="fa-solid fa-circle-plus fa-2xl ml-2"></i></button>
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default Dashboard;
