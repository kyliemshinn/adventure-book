import React from "react";
import { Hero } from "react-daisyui";
import "../../App.css";


const EditPost = () => {


  return (
    <div className="text-neutral-content">
      <Hero className="mb-28">
        <div className="postContainer bg-base-200 mx-9 my-9 pt-4 px-6 pb-7">
          <div>
            <div>
             <span className="bookmark"> <i className="fa-solid fa-bookmark fa-xl pt-3 float-right" title="save post"></i></span>
            </div>
            <h2 className="text-bold text-2xl text-neutral-content">
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 py-3 pb-9">
            <div className="slider h-vh">
              <div className="badge badge-outline"></div>
            </div>

            <div className="bg-base-100 mb-6 ">
              <p className="float-right"></p>
              <div className="max-w-2xl">
                <h3 className="pl-8 pt-5 overflow-wrap"> </h3>
              </div>
            </div>
          </div>
          <div className="bg-base-100 px-8">
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default EditPost;