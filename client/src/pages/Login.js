import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutation";
import Auth from "../utils/auth";
import { Button } from "react-daisyui";
import "font-awesome/css/font-awesome.min.css";
import "../styles/Login.css";
import "../styles/Balloons.css";

const Login = () => {
  const [loginState, setLoginState] = useState({ username: "", password: "" });

  const [loginUser, { error, data }] = useMutation(LOGIN);

  const handleChange = (e) => {
    const newLoginState = {
      username: loginState.username,
      password: loginState.password,
    }; // Copy state to new object
    newLoginState[e.target.name] = e.target.value; // Overwrite state key that was changed with new property
    setLoginState(newLoginState);
    const { name, value } = e.target;

    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(loginState);
    try {
      // TODO save user to state so that we can use it in UI
      const { token, user } =
      (
        await loginUser({
          variables: {
            email: loginState.username,
            password: loginState.password,
          },
        })
      ).data.login;
      const { data } = await loginUser({
        variables: { ...loginState },
      });
      console.log(token);
      console.log(user);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(error);
    }
    // clear form values
    setLoginState({ email: "", password: "" });
  };

  //balloons render on page
  //TODO: create function that holds all this and add it to onclick with a delay setting

  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `;
  }

  function createBalloons(num) {
    var balloonContainer = document.getElementById("balloon-container");
    for (var i = num; i > 0; i--) {
      var balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.cssText = getRandomStyles();
      balloonContainer.append(balloon);
    }
  }

//   setTimeout(function(){
//     window.location.reload();
//  }, 5000);

  window.onload = function () {
    createBalloons(100);
  };

  return (
    <div id="balloon-container">
      <div className="justify-center flex mr-4" id="loginForm">
        <div className="card w-96 bg-base-200 shadow-xl m-36" id="loginForm">
          <div className="card-body p-16">
            <h1 className="card-title p-4 justify-center text-secondary-content">
              WELCOME BACK
            </h1>
            {data ? (
              <p className="text-secondary-context">
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              
                <form onSubmit={handleFormSubmit}>
                  <div className="input-icons">
                    <i className="fa-solid fa-user text-secondary-content icon"></i>
                    <input
                      name="email"
                      value={loginState.email}
                      placeholder="Username"
                      className="input input-bordered w-full max-w-xs input-field text-secondary-content"
                      onChange={handleChange}
                    />
                    <i className="fa-solid fa-lock text-secondary-content icon"></i>
                    <input
                      name="password"
                      value={loginState.password}
                      type="password"
                      placeholder="Password"
                      className="input input-bordered w-full max-w-xs input-field text-secondary-content"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="card-actions justify-center text-center">
                    <Button
                      className="btn btn-primary rounded-full bg-accent hover:bg-accent-focus hover:shadow-lg border-none text-base-content"
                      type="submit"
                    >
                      Login
                    </Button>
                  </div>
                </form>
             
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}

            <div className="text-center p-4">
              <h3 className="text-secondary-content text-lg">
                Don't have an account?{" "}
              </h3>
              <Link to="/signup">
                <h3 className="text-neutral text-lg">Sign Up!</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
