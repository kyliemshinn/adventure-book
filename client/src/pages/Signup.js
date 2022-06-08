import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "../styles/Login.css";

const Signup = () => {
  return (
    <div class="justify-center flex ml-4 mr-4">
      <div className="card w-96 bg-base-100 shadow-xl m-36">
        <div className="card-body p-10">
        <h1 className="card-title p-4 justify-center text-secondary-content">PLEASE SIGN UP</h1>
          <div className="input-icons">
            <i className="fa-solid fa-user text-secondary-content icon"></i>
            <input
              type="username"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content p-4"
            />
            <i className="fa-solid fa-lock text-secondary-content icon"></i>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content p-4"
            />
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" type="submit">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
