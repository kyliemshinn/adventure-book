import React from "react";
// import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="card-title">Account Login</h1>
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
          <button className="btn btn-primary">Login</button>
          {/* TODO: add in once router is set in App.js with page routes */}
        {/* <Link to="Signup">
            <p>Sign Up Today!</p>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
