import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialState, WordCard } from "../../interfaces/interfaces";
import { getCategoryThunk } from "../../services/api-service";
import LoaderSpinner from "../loader-spinner/loader-spinner";
import "./admin-cards-panel.css";

interface IReturnCats {
  card: WordCard;
  indx: number;
}

const AdminCards = (props): JSX.Element => {
  const { catName } = props.match.params;
  const dispatch = useDispatch();
  const engRef = useRef<HTMLInputElement[]>([]);
  const rusRef = useRef<HTMLInputElement[]>([]);
  const adminCards = useSelector((state: InitialState) => state.cards);
  useEffect(() => {
    dispatch(getCategoryThunk(catName));
  }, []);

  const infocus = (indx: number | undefined) => {
    if (indx !== undefined && engRef.current[indx].className.includes("eng")) {
      engRef.current[indx].focus();
    } else if (
      indx !== undefined &&
      rusRef.current[indx].className.includes("rus")
    ) {
      rusRef.current[indx].focus();
    }
  };

  const ReturnCatList = ({ card, indx }: IReturnCats) => {
    return (
      <li className="card-list-item">
        <div className="category-card admin">
          <div className="category-card__card__front">
            <div
              className="category-card__content admin"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="control-btns">
                <div className="btn-control__wrapper">
                  <img
                    src="../icons/done-btn.png"
                    alt="save"
                    className="save-btn control-btn__img"
                  />
                </div>
                <div className="btn-control__wrapper">
                  <img
                    src="../icons/delte-icon.png"
                    alt="delete"
                    className="delete-btn control-btn__img"
                  />
                </div>
              </div>
              <div className="category-name__editor">
                <input
                  type="text"
                  className="category-name admin eng"
                  defaultValue={`${card.word}`}
                  ref={(el: HTMLInputElement) => (engRef.current[indx] = el)}
                ></input>
                <img
                  src="../icons/pencil-icon.png"
                  alt="change category name"
                  className="pencil"
                  onClick={() => infocus(indx)}
                />
              </div>
              <div className="category-translation__editor">
                <input
                  type="text"
                  ref={(el: HTMLInputElement) => (engRef.current[indx] = el)}
                  className="category-name admin rus"
                  defaultValue={card.translation}
                ></input>
                <img
                  src="../icons/pencil-icon.png"
                  alt="change category name"
                  className="pencil"
                  onClick={() => infocus(indx)}
                />
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
        {adminCards.length ? (
          adminCards.map((card, cardIndex) => (
            <ReturnCatList card={card} key={card._id} indx={cardIndex} />
          ))
        ) : (
          <LoaderSpinner />
        )}
        <li className="card-list-item">
          <div className="category-card">
            <div className="category-card__card__front">
              <div className="category-card__img admin">
                <img
                  src="../icons/add_btn.png"
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

export default AdminCards;
