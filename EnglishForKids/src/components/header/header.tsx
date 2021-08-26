import React, { ReactNode } from "react";
import BurgerMenu from "./header-burger-menu/header-burger-menu.tsx";
import ToggleButton from "./header-toggle-button/header-toggle-button.tsx";
import "./header.css";

export default class Header extends React.Component {
  render(): ReactNode {
    return (
      <header className="">
        <div className="header-div">
          <div className="header-div__wrapper">
            <BurgerMenu />
            <span className="app-title">English For Kids</span>
            <ToggleButton />
          </div>
        </div>
      </header>
    );
  }
}
