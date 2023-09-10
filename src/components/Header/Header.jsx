import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";
const Header = ({ textColor }) => {
  const headerStyle = {
    color: textColor,
  };
  return (
    <div className="navbar lg:py-6 lg:px-24" style={headerStyle}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <Link to="/" className="text-black">
                Home
              </Link>
            </li>
            <li>
            <Link to="/cities" className="text-black">
                Cities
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="navLogo">
          My Tinerary
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link to="/" className="home">
                Home
              </Link>
            </li>
            <li>
            <Link to="/cities" className="cities">
                Cities
              </Link>
            </li>
          </ul>
        </div>
        <AuthButton />
      </div>
    </div>
  );
};

export default Header;
