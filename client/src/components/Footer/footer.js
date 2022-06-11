import React from "react-daisyui";
import { Link } from 'react-router-dom';
import { Footer, Button } from "react-daisyui";
import Auth from '../../utils/auth';

const Foot = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
    <Footer className="footer footer-center p-4 bg-primary rounded text-secondary-content">
      <div>
        <div className="font-semibold text-lg">
          <Footer.Title>Company</Footer.Title>
        </div>
        <div className="sm:flex items-stretch space-x-4 mb-4 mt-4">
        {Auth.loggedIn() ? (
          <>
        <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/logout" onClick={logout}>logout</Link>
          </>
        ) : (
          <> 
                <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            </>
        )} 
        </div>

        <div className="font-semibold text-lg">
          <Footer.Title>Social</Footer.Title>
        </div>
        <div className="sm:flex items-stretch space-x-4 mb-5">
        <Button className="btn-sm hover:bg-accent-focus hover:shadow-lg rounded-full border-none mt-8 bg-accent text-base-content text-xs">Facebook</Button>
        <Button className="btn-sm hover:bg-accent-focus hover:shadow-lg rounded-full border-none mt-8 bg-accent text-base-content text-xs">Instagram</Button>
        <Button className="btn-sm rounded-full hover:bg-accent-focus hover:shadow-lg border-none mt-8 bg-accent text-base-content text-xs">Twitter</Button>
        </div>
        <div>
        <p>Copyright © 2022 - Made With Wanderlust</p>
      </div>
      </div>
    </Footer>
    
  );
};

export default Foot;
