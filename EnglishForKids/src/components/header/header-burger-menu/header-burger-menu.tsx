import React from "react";
import MenuBox from "./menu-box/menu-box.tsx";
import "./header-burger-menu.css";
import { useState } from "react";

const BurgerMenu = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="menu__wrapper">
      <div
        className="header-menu__button"
        onClick={() => setVisible((prev) => !prev)}
      >
        <div
          className={
            visible ? "header__burger-menu_active" : "header__burger-menu"
          }
        >
          <div className="menu__btn">
            <span></span>
          </div>
          <MenuBox />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
