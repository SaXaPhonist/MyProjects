import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = (): JSX.Element => {
  return (
    <div className="header__wrapper">
      <ul className="nav-menu">
        <NavLink exact to="/" activeClassName="active-nav">
          <li className="nav-item">Home</li>
        </NavLink>
        <NavLink exact to="/my-page" activeClassName="active-nav">
          <li className="nav-item">My Books</li>
        </NavLink>
        <NavLink exact to="/about-page" activeClassName="active-nav">
          <li className="nav-item">About us</li>
        </NavLink>
        <li className="nav-item">
          <a
            href="https://api.itbook.store/"
            rel="noopener noreferrer"
            target="_blank"
          >
            API
          </a>
        </li>
      </ul>
    </div>
  );
};
