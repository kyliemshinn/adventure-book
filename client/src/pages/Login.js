import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "../styles/Login.css";
import { Button } from "react-daisyui";

const Login = () => {
  return (
    <div className="justify-center flex ml-4 mr-4">
      <div className="card w-96 bg-base-100 shadow-xl m-36">
        <div className="card-body p-16">
          <h1 className="card-title p-4 justify-center text-secondary-content">WELCOME BACK</h1>
          <div className="input-icons">
            <i className="fa-solid fa-user text-secondary-content icon"></i>
            <input
              type="username"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content"
            />
            <i className="fa-solid fa-lock text-secondary-content icon"></i>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content"
            />
          </div>
          <div className="card-actions justify-center text-center">
            <Button className="btn btn-primary">Login</Button>
          </div>
          <div className="text-center p-4">
            <h3 className="text-secondary-content text-lg">Don't have an account? </h3>
            <Link to="/signup">
              <h3 className="text-neutral text-lg">Sign Up!</h3>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
