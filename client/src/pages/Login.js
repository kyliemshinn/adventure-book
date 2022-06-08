import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutation"
import Auth from '../utils/auth';

import "font-awesome/css/font-awesome.min.css";
import "../styles/Login.css";
import { Button } from "react-daisyui";

const Login = () => {
  const [ loginState, setLoginState ] = useState({ username: "", password: "" });

  const [ loginUser, { error }] = useMutation(LOGIN_USER);

  function handleChange(e)
  {
    const newLoginState = { username: loginState.username, password: loginState.password }; // Copy state to new object
    newLoginState[e.target.name] = e.target.value; // Overwrite state key that was changed with new property
    setLoginState(newLoginState);
  }

  async function handleLogin(e)
  {
    try {
      // TODO save user to state so that we can use it in UI
      const { token/*, user*/ } = (await loginUser({ variables: { email: loginState.username, password: loginState.password } })).data.login;
      //console.log(token);
      //console.log(user);
      Auth.login(token);
    }
    catch(e) {
      console.error(error);
    }
    setLoginState({ username: "", password: "" });
  }

  return (
    <div className="justify-center flex ml-4 mr-4">
      <div className="card w-96 bg-base-100 shadow-xl m-36">
        <div className="card-body p-16">
          <h1 className="card-title p-4 justify-center text-secondary-content">WELCOME BACK</h1>
          <div className="input-icons">
            <i className="fa-solid fa-user text-secondary-content icon"></i>
            <input
              name="username"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content"
              onChange={handleChange}
            />
            <i className="fa-solid fa-lock text-secondary-content icon"></i>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs input-field text-secondary-content"
              onChange={handleChange}
            />
          </div>
          <div className="card-actions justify-center text-center">
            <Button className="btn btn-primary" onClick={handleLogin}>Login</Button>
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
