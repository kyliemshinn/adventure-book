import React from "react";
import { Navbar } from "react-daisyui";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <Navbar className="navbar bg-primary text-primary-content">
      <Navbar.Start className="px-2 mx-2">
        <span className="text-lg font-bold">Logo</span>
      </Navbar.Start>

      <Navbar.End className="flex-1 px-2 mx-2">
        <div className="md:flex items-stretch space-x-4 font-medium">
            <a href="#Home" onClick={() => handlePageChange('Home')}>Home</a>
            <a href="#Explore" onClick={() => handlePageChange('Explore')}>Explore</a>
            <a href="#Dashboard">Dashboard</a>
            <a href="#Login">Login</a>
            <a href="#Login">Logout</a>
            <a href="#Login">Signup</a>
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default Nav;