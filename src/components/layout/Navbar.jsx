import React from "react";
import logo from "../../assets/LogoFooter.png";
import { Link } from 'react-router-dom';

/**
 * Navigation bar component with responsive design
 * Shows the main navigation links and logo
 */
const Navbar = () => {
  // Navigation items shared between mobile and desktop views
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/event">Events</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <div className="max-w-screen-2xl container mx-auto w-full fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-base-100 shadow-sm">
        {/* Left side - logo and mobile menu */}
        <div className="navbar-start">
          {/* Mobile dropdown menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            
            {/* Mobile menu items */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          
          {/* Logo */}
          <div className="logo w-2/5 ml-8">
            <Link to='/' className="cursor-pointer">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        
        {/* Right side - desktop navigation */}
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex pr-10">
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