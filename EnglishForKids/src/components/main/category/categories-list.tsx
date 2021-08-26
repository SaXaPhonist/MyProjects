import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IActionsLoadCards, IActionsLoadCat } from "../../../actions/actions";
import {
  IAggrCat,
  InitialState,
  WordCard,
} from "../../../interfaces/interfaces";
import { aggrCategory, getCategory } from "../../../services/api-service";
import withGameService from "../../hoc/with-game-service";
import LoaderSpinner from "../../loader-spinner/loader-spinner";
import "./category.css";

interface Iprops {
  cats: IAggrCat[];
  cards: WordCard[];
  getAggrCategories: () => Promise<void>;
  getCards: (catName: string) => Promise<void>;
}
interface IReturnCats {
  cat: IAggrCat;
}

const CategoriesList = ({ cats, getAggrCategories }: Iprops) => {
  useEffect(() => {
    getAggrCategories();
  }, []);

  const ReturnCatList = ({ cat }: IReturnCats) => {
    const [imgSrc, setImage] = useState("");

    useEffect(() => {
      getCategory(cat._id).then((data: WordCard[]) => {
        const img: string = data[0].image;
        setImage(img);
      });
    }, [imgSrc]);

    return (
      <li key={cat._id} className="card-list-item">
        <Link to={`/category/${cat._id}`}>
          <div className="category-card">
            <div className="category-card__card__front">
              <div className="category-card__img">
                <img
                  src={imgSrc}
                  alt="category"
                  className="category-card__word-img "
                />
                {imgSrc ? null : <LoaderSpinner />}
              </div>
              <div
                className="category-card__content"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="category-name">{cat._id}</span>
                <span className="category-total">
                  <p>{cat.total}</p>
                  <p>words</p>
                </span>
              </div>
              <div className="selected-indicator"></div>
            </div>
          </div>
        </Link>
      </li>
    );
  };

  return (
    <div className="main__wrapper">
      <ul className="card-list">
        {cats.length ? (
          cats.map((cat) => (
            <ReturnCatList cat={cat} key={cat._id + cat.total} />
          ))
        ) : (
          <LoaderSpinner />
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: InitialState) => {
  return {
    cats: state.categories,
    cards: state.cards,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<
    InitialState,
    unknown,
    Action<IActionsLoadCat | IActionsLoadCards>
  >
) => {
  return {
    getAggrCategories: async () => {
      await dispatch(aggrCategory());
    },
  };
};

export default withGameService()(
  connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
);
