import React from "react";
import { Link } from 'react-router-dom';
import { Navbar } from "react-daisyui";
import logo from '../../images/briefcase.png';

import Auth from '../../utils/auth';

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Navbar className="navbar bg-primary
    text-primary-content">
      <Navbar.Start className="px-2 mx-2">
        <span className="text-lg font-bold"><img alt="logo" src={logo} width="70px" height="70px"></img></span>
      </Navbar.Start>

      <Navbar.End className="flex-1 px-2 mx-2">
        <div className="md:flex items-stretch space-x-4 font-medium">
        {/* {Auth.loggedIn() ? (
          <> */}
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/logout" onClick={logout}>Logout</Link>
            {/* </>
        ) : (
          <> */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            {/* </>
        )} */}
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default Nav;