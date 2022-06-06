import React from "react";

const Signup = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
        <div className="card-actions justify-end">
          <button className="btn btn-primary" type="submit">Signup</button>
          {/* link sign up  page */}
        </div>
      </div>
    </div>
  );
};

export default Signup;