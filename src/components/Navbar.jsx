import React, { useEffect, useState } from "react";
import logo from "../assets/LogoFooter.png";
import {Link} from 'react-router-dom';
const Navbar = () => {
  
 
  
  const navItems=(<>
  <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/event">Events</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
  </>)
  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-0 w-full fixed top-0 z-10
      }
    `}>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown mt-4">
            <div tabIndex={0} role="buttn" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <div className="logo w-2/5 mt-6 mb-4 ml-8">
            <Link to='/' className="cursor-pointer">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-end mt-6 ">
        <div className="navbar-center hidden lg:flex pr-10 ">
          <ul className="menu menu-horizontal px-1 text-base">
          {navItems}
          </ul>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
