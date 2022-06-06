import React from "react";
import { Hero, Card } from "react-daisyui";
import "../App.css";
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
              <button className="btn bg-primary hover:bg-primary-focus btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
          <Card className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Bali</h2>
              {/* create link to user profile */}
              <p>Username Link</p>
              <div class="card-actions justify-end text-accent-content">
                {/* convert to buttons or links to see other posts with same tags */}
                <div class="badge badge-outline ">#Surfing</div>
                <div class="badge badge-outline">#Beach</div>
                <div class="badge badge-outline">#Hiking</div>
                <div class="badge badge-outline">#Spearfishing</div>
              </div>
            </div>
          </Card>

          <Card className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Brazil</h2>
              <p>Username Link</p>
              <div class="card-actions justify-end text-accent-content">
                <div class="badge badge-outline">#Carnival</div>
                <div class="badge badge-outline">#Beach</div>
                <div class="badge badge-outline">#Hiking</div>
              </div>
            </div>
          </Card>

          <Card className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Thailand</h2>
              <p>Username Link</p>
              <div class="card-actions justify-end text-accent-content">
                <div class="badge badge-outline">#Food</div>
                <div class="badge badge-outline">#Elephants</div>
                <div class="badge badge-outline">#Beach</div>
              </div>
            </div>
          </Card>

          <Card className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Japan</h2>
              <p>Username Link</p>
              <div class="card-actions justify-end text-accent-content">
                <div class="badge badge-outline">#Sushi</div>
                <div class="badge badge-outline">#Snowboarding</div>
                <div class="badge badge-outline">#Boba</div>
              </div>
            </div>
          </Card>

          <Card className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Australia</h2>
              <p>Username Link</p>
              <div class="card-actions justify-end text-accent-content">
                <div class="badge badge-outline">#Fitness</div>
                <div class="badge badge-outline">#Snorkling</div>
                <div class="badge badge-outline">#Beach</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Explore;
