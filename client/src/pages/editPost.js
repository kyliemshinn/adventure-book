import React from "react";
import { Hero } from "react-daisyui";
import "../App.css";


const EditPost = () => {


  return (
    <div className="pageContainer">
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl m-24">
        <div className="card-body">
          <h1 className="card-title justify-center text-secondary-content text-3xl p-4">
            Update A Post!
          </h1>
          <div className="card bg-primary text-primary-content justify-center">
            <div className="card-body m-16 justify-center">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                // onChange={handleChange}
              />
              <input
                type="text"
                name="tags"
                placeholder="#Tags"
                className="input input-bordered"
                // onChange={handleChange}
              />
              <textarea
                name="content"
                className="textarea textarea-bordered"
                placeholder="Update Descripton"
                // onChange={handleChange}
              ></textarea>
                  <button
                    // onClick={handlePostSubmit}
                    className="btn btn-primary rounded-full"
                  >
                    Update POST
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;