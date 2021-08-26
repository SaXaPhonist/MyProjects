import React from "react";
import { connect, useSelector } from "react-redux";
import { InitialState } from "../../interfaces/interfaces";
import withGameService from "../hoc/with-game-service";
import "./star-list.css";

const StarList = (): JSX.Element => {
  const resultArr = useSelector((state: InitialState) => state.resultArr);
  console.log("res in stqars", resultArr);

  const addStar = (res: boolean) => {
    if (res) {
      return (
        <li className="star-win">
          <img src="img\star-win.svg" alt="star win" />
        </li>
      );
    } else {
      return (
        <li>
          <img src="img\star.svg" alt="" />
        </li>
      );
    }
  };

  return (
    <ul className="star-list">
      {resultArr.length > 0
        ? resultArr.map((res) => {
            return addStar(res);
          })
        : null}
    </ul>
  );
};

export default withGameService()(connect()(StarList));
