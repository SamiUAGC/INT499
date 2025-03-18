import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";

function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src="/HomeIcon.png" alt="HomeIcon" className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <img src="/MovieIcon.png" alt="MovieIcon" className="nav-icon" /> Movies
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src="/CartIcon.png" alt="CartIcon" className="nav-icon" /> Cart
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img src="/AboutIcon.png" alt="AboutIcon" className="nav-icon" /> About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
