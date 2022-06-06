import React from "react";

const Signup = () => {
  return (
    <div class="justify-center flex ml-4 mr-4">
      <div className="card w-96 bg-base-100 shadow-xl m-36">
        <div className="card-body">
          <h1 className="card-title">Sign Up</h1>
          <h2>Username</h2>
          <input
            type="username"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <h2>Password</h2>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
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
