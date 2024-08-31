import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          Scholar Sphere
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <span className="text-base">Item 1</span>
          </li>
          <li>
            <span className="text-base">Item 2</span>
          </li>
          <li>
            <span className="text-base">Item 3</span>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary mx-2 p-3">Log In</button>
        <button className="btn btn-secondary p-3">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
