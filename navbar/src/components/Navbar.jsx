import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// keep track of whether hamburger menu is open
// using useState()

// if menuOpen==true, assign class .open, otherwise no class
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Seung-hwan Leo Kim
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/interests">Interests</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};
