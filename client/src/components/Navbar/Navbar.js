import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
	<nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">NYT Search</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;