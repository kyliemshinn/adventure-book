import React from "react";
import { Hero, Card } from "react-daisyui";

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
        <div className="postContainer bg-base-200 mb-10 mt-5 px-5 pb-3">
          <h2 className="text-bold text-lg text-center my-4">My Posts</h2>
          {/* Dynamically update based on users recent posts */}
          <div className="grid grid-cols-3 gap-2 py-3">
            <Card className="card w-96 bg-base-100 shadow-xl">
              <div class="card w-96 text-neutral-content">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Title</h2>
                  <div class="card-actions justify-end">
                    <button class="btn-sm rounded-full btn-secondary">
                      Edit
                    </button>
                    <button class="btn-sm rounded-full btn-secondary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card w-96 bg-base-100 shadow-xl">
              <div class="card w-96 text-neutral-content">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Title</h2>
                  <div class="card-actions justify-end">
                    <button class="btn-sm rounded-full btn-secondary">
                      Edit
                    </button>
                    <button class="btn-sm rounded-full btn-secondary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card w-96 bg-base-100 shadow-xl">
              <div class="card w-96 text-neutral-content">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Title</h2>
                  <div class="card-actions justify-end">
                    <button class="btn-sm rounded-full btn-secondary">
                      Edit
                    </button>
                    <button class="btn-sm rounded-full btn-secondary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card w-96 bg-base-100 shadow-xl">
              <div class="card w-96 text-neutral-content">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Title</h2>
                  <div class="card-actions justify-end">
                    <button class="btn-sm rounded-full btn-secondary">
                      Edit
                    </button>
                    <button class="btn-sm rounded-full btn-secondary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default Dashboard;
