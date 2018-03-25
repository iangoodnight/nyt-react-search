import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
	<nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">NYT Search</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/saved">
            Saved
          </Link>
        </li>
        <li>
          <Link to ="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;