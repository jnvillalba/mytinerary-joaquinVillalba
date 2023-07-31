import React from "react";
import "./Header.css";
import { UserIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
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
              <a className="Home">Home</a>
            </li>
            <li>
              <a className="Cities">Cities</a>
            </li>
          </ul>
        </div>
        <a className="navLogo">My Tinerary</a>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="home">Home</a>
            </li>
            <li>
              <a className="cities">Cities</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-primary btnLogin">
          <UserIcon className="h-5 w-5 flex-none" />
          Login
        </a>
      </div>
    </div>
  );
};

export default Header;
