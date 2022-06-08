import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_USER } from "../utils/mutation"
import Auth from '../utils/auth';

import "font-awesome/css/font-awesome.min.css";
import "../styles/Login.css";

const Signup = () => {
  const [ loginState, setLoginState ] = useState({ username: "", email: "", password: "" });

  const [ createUser, { error }] = useMutation(CREATE_USER);

  function handleChange(e)
  {
    const newLoginState = { username: loginState.username, email: loginState.email, password: loginState.password }; // Copy state to new object
    newLoginState[e.target.name] = e.target.value; // Overwrite state key that was changed with new property
    setLoginState(newLoginState);
  }

  async function handleSignup(e)
  {
    try {
      // TODO save user to state so that we can use it in UI
      const { token/*, user*/ } = (await createUser({ variables: { username: loginState.username, email: loginState.email, password: loginState.password } })).data.createUser;
      //console.log(token);
      //console.log(user);
      Auth.login(token);
    }
    catch(e) {
      console.error(e, error);
    }
    setLoginState({ username: "", email: "", password: "" });
  }

  return (
    <div class="justify-center flex ml-4 mr-4">
      <div className="card w-96 bg-base-100 shadow-xl m-36">
        <div className="card-body p-10">
        <h1 className="card-title p-4 justify-center text-secondary-content">PLEASE SIGN UP</h1>
          <div className="input-icons">
            <i className="fa-solid fa-user text-secondary-content icon"></i>
            <input
              name="username"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content p-4"
              onChange={handleChange}
            />
            <i className="fa-solid fa-user text-secondary-content icon"></i>
            <input
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content p-4"
              onChange={handleChange}
            />
            <i className="fa-solid fa-lock text-secondary-content icon"></i>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content p-4"
              onChange={handleChange}
            />
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" type="submit" onClick={handleSignup}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
