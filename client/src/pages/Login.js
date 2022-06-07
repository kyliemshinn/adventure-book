import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="justify-center flex ml-4 mr-4">
      <div className="card w-96 shadow-xl m-36">
        <div className="card-body">
          <h1 className="card-title p-4">WELCOME BACK</h1>
          <div className="input-icons">
            <i className="fa-solid fa-user text-secondary-content icon"></i>
            <input
              type="username"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content"
            />
            <i class="fa-solid fa-lock text-secondary-content icon"></i>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content"
            />
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="justify-center ">
            <Link to="/signup">
              <h3 className="text-secondary-content p-4">Sign Up Today!</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
