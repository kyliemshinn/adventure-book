import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "font-awesome/css/font-awesome.min.css";
import "../styles/Login.css";

// import create user mutation
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutation";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [createUser, { error, data }] = useMutation(CREATE_USER);

  // update state based on form input change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await createUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div class="justify-center flex ml-4 mr-4">
      <div className="card w-96 bg-base-100 shadow-xl m-36">
        <div className="card-body p-10">
          <h1 className="card-title p-4 justify-center text-secondary-content">
            PLEASE SIGN UP
          </h1>
          {data ? (
            <p className="text-secondary-content">
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="input-icons">
                <i className="fa-solid fa-user text-secondary-content icon"></i>
                <input
                  name="username"
                  placeholder="Username"
                  value={formState.username}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs input-field text-secondary-content p-4"
                />
                <i class="fa-solid fa-envelope text-secondary-content icon"></i>
                <input
                  name="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs input-field text-secondary-content p-4"
                />
                <i className="fa-solid fa-lock text-secondary-content icon"></i>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formState.password}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs input-field text-secondary-content p-4"
                />
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary bg-accent text-base-content hover:bg-accent-focus hover:shadow-lg rounded-full border-none" type="submit">
                  Signup
                </button>
              </div>
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
