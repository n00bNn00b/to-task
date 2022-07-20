import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar fixed top-0 z-50 bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Task</Link>
            </li>
            <li tabIndex="0">
              <Link to="/completed" className="justify-between">
                Completed Tasks
              </Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          To Task
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Task</Link>
          </li>
          <li tabIndex="0">
            <Link to="/completed">Completed Tasks</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn btn-primary text-white">
            Login
          </Link>
        ) : (
          <div className="dropdown lg:mx-48 md:mx-40">
            <label tabIndex="0" className="btn btn-primary me-1">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://placeimg.com/192/192/people"
                    alt="profile_picture"
                  />
                </div>
              </div>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu shadow bg-primary rounded-box mt-3 w-52"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button
                  className="btn btn-primary"
                  onClick={() => signOut(auth)}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
