import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./error-page.css";

export const WarningPage = (): JSX.Element => {
  return (
    <div className="warning__wrapper">
      <div className="warning__container">
        <h2 className="error-code">404</h2>
        <p className="error-message">Not Found</p>
        <p className="error-message">
          <NavLink exact to="/">
            back to search
          </NavLink>
        </p>
      </div>
    </div>
  );
};
