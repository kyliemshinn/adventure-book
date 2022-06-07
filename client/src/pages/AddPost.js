import React from "react";

import { ReactBingmaps } from 'react-bingmaps-plus';

const AddPost = () => {
    return (
        <div>    <div class="card lg:card-side bg-base-100 shadow-xl m-32">
        <div class="card-body">
          <h1 class="card-title justify-center">Add A Post!</h1>
          {/* nested card for adding a photo */}
          <div class="card bg-primary text-primary-content justify-center">
            <div class="card-body m-16">
              <h2 class="card-title justify-center">Add Photo</h2>
              {/* link to browse */}
              <div class= "justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
          </div>
          {/* nested card for adding a description */}
          <textarea
            class="textarea textarea-bordered"
            placeholder="Description of where you went activities, restaurants..."
          ></textarea>
          {/* nested for adding a location or title */}
          <textarea
            class="textarea textarea-bordered"
            placeholder="Location or Title"
          ></textarea>
  
          <div class="card-actions justify-end">
            <button class="btn btn-primary rounded-full">Add Post</button>
          </div>
        </div>
      </div>
            <div style={{ height: "600px", width: "800px"}}>
                <ReactBingmaps bingmapKey="AuobAMXGIQwgjimas4B-M6-ohLbmLaLNDIUojn2nI-VCDEh1VxaL__j48GUmEu-C" key={"A"}/>
            </div>
        </div>
  );
};

export default AddPost;
