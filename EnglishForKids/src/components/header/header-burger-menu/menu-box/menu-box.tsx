import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionOnLogin, IActionsLogin } from "../../../../actions/actions";
import { IAggrCat, InitialState } from "../../../../interfaces/interfaces";
import { aggrCategory } from "../../../../services/api-service";
import withGameService from "../../../hoc/with-game-service";
import "./menu-box.css";

interface Iprops {
  isLoggedIn: boolean;
  cats: IAggrCat[];
  dispatch: (arg: IActionsLogin) => void;
}

const MenuBox = (props: Iprops): JSX.Element => {
  const dispatch = useDispatch();
  const addAdmin = () => {
    return (
      <li className=" menu__item">
        <Link to="/admin-page">Admin Panel</Link>
      </li>
    );
  };

  const onLogin = () => {
    dispatch(actionOnLogin());
  };

  useEffect(() => {
    dispatch(aggrCategory());
  }, []);

  return (
    <ul className="menu__box">
      {props.isLoggedIn ? addAdmin() : null}
      <li className="menu__item">
        <Link rel="styleseet" to="/category/">
          Main Page
        </Link>
      </li>
      {props.cats.map((cat, catIndex) => {
        return (
          <li
            key={typeof cat === "object" ? cat._id + catIndex : null}
            className="menu__item"
          >
            <Link rel="stylesheet" to={`/category/${cat._id}`}>
              {typeof cat === "object" ? cat._id : null}
            </Link>
          </li>
        );
      })}
      <li className="menu__item">
        <Link rel="stylesheet" to="/statistic-page">
          Statistics
        </Link>
      </li>
      <li className="menu__item" onClick={(e) => e.stopPropagation()}>
        <button className="login-btn" onClick={() => onLogin()}>
          {props.isLoggedIn ? "LogOut" : "LogIn"}
        </button>
      </li>
    </ul>
  );
};

const mapStateToProps = (state: InitialState) => {
  return {
    isLoggedIn: state.isLoggedIn,
    cats: state.categories,
  };
};

export default withGameService()(connect(mapStateToProps)(MenuBox));
