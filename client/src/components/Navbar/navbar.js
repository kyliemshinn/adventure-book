import React from "react";
import { Link } from 'react-router-dom';
import { Navbar } from "react-daisyui";
import Logo from '../../images/logo.png';
import Menu from './navMenu';

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
       <img src={Logo} alt="logo" width="75px" height="85px"/>
      </Navbar.Start>

      <Navbar.End className="flex-1 px-2 mx-2">
        <div className="md:flex items-stretch space-x-4 font-medium">
         {Auth.loggedIn() ? (
          <> 
            <Menu />
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/logout" onClick={logout}>Logout</Link>
             </>
        ) : (
          <> 
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
             </>
        )} 
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default Nav;