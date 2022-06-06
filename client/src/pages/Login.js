import React from "react";
// import { Link } from 'react-router-dom';

const Login = () => {
  return (
    // <div class="justify-center flex ml-4 mr-4">
    //   <div className="card w-96 bg-base-100 shadow-xl m-36">
    //     <div className="card-body">
    //       <h1 className="card-title">Account Login</h1>
    //       <h2>Username</h2>
    //       <input
    //         type="username"
    //         placeholder="Type here"
    //         className="input input-bordered w-full max-w-xs"
    //       />
    //       <h2>Password</h2>
    //       <input
    //         type="password"
    //         placeholder="Type here"
    //         className="input input-bordered w-full max-w-xs"
    //       />
    //       <div className="card-actions justify-center">
    //         <button className="btn btn-primary">Login</button>
    //         {/* TODO: add in once router is set in App.js with page routes */}
    //         {/* <Link to="Signup">
    //         <p>Sign Up Today!</p>
    //         </Link> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="card lg:card-side bg-base-100 shadow-xl m-32">
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
          <button class="btn btn-primary">Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
