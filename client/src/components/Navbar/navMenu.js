import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import { AiOutlineBars } from 'react-icons/ai';

const Menu = () => {
  const [expandMenu, setExpandMenu] = useState(false);
  // const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="dropdown mobile-nav">
      <label
        tabindex="0"
        type="checkbox"
        className="dropMenu btn btn-ghost btn-circle"
        onClick={() => setExpandMenu(!expandMenu)}
      >
        {/* toggle menu state on click */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      <ul
        tabindex="0"
        className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>Home</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Menu;
