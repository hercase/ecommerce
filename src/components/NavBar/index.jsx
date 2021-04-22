import React from "react";
import CartWidget from "../CartWidget";
import "./styles.scss";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <h4 className="navbar__title">E-commerce</h4>
      <div>
        <ul className="navbar-nav">
          <NavLink exact to="/" className="navbar__link">
            <li>Home</li>
          </NavLink>
          <NavLink to={`/category/relojes`} className="navbar__link">
            <li>Relojes</li>
          </NavLink>
          <NavLink to={`/category/lentes`} className="navbar__link">
            <li>Lentes</li>
          </NavLink>
        </ul>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};
