import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IAggrCat, InitialState } from "../../../interfaces/interfaces";
import LoaderSpinner from "../../loader-spinner/loader-spinner";
import "./admin-page.css";
interface IReturnCats {
  cat: IAggrCat;
  indx: number;
}

const AdminPage = (): JSX.Element => {
  const categories = useSelector((state: InitialState) => state.categories);
  const inputCat = useRef<HTMLInputElement[]>([]);

  const infocus = (indx: number | undefined) => {
    if (indx !== undefined) inputCat.current[indx].focus();
  };

  const ReturnCatList = ({ cat, indx }: IReturnCats) => {
    return (
      <li key={cat._id} className="card-list-item">
        <div className="category-card admin">
          <div className="category-card__card__front">
            <div
              className="category-card__content admin"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="control-btns">
                <div className="btn-control__wrapper">
                  <img
                    src="icons/done-btn.png"
                    alt="save"
                    className="save-btn control-btn__img"
                  />
                </div>
                <div className="btn-control__wrapper">
                  <img
                    src="icons/delte-icon.png"
                    alt="delete"
                    className="delete-btn control-btn__img"
                  />
                </div>
              </div>
              <div className="category-name__editor">
                <input
                  ref={(el: HTMLInputElement) => (inputCat.current[indx] = el)}
                  type="text"
                  className="category-name admin"
                  defaultValue={`${cat._id}`}
                ></input>
                <img
                  src="icons/pencil-icon.png"
                  alt="change category name"
                  className="pencil"
                  onClick={() => infocus(indx)}
                />
              </div>
              <div className="category-total__editor">
                <span className="category-total admin">
                  <p>{cat.total}</p>
                  <p>words</p>
                </span>
                <Link to={`/admin-page/${cat._id}`}>
                  <img
                    src="icons/pencil-icon.png"
                    alt="change category name"
                    className="pencil"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="main__wrapper">
      <ul className="card-list">
        {categories.length ? (
          categories.map((cat, catIndex) => (
            <ReturnCatList
              cat={cat}
              key={cat._id + cat.total}
              indx={catIndex}
            />
          ))
        ) : (
          <LoaderSpinner />
        )}
        <li className="card-list-item">
          <div className="category-card">
            <div className="category-card__card__front">
              <div className="category-card__img admin">
                <img
                  src="icons/add_btn.png"
                  alt="add category"
                  className="category-card__word-img category__add-btn"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AdminPage;
