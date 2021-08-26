import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ISearchBook } from "../../interfaces/interfaces";
import { InitialState } from "../../reducers/reducer";
import { getCards } from "../../serrvice/api-service";
import Loader from "../loader/loader";
import Card from "./card";
import "./cards.css";

const Cards: React.FC = () => {
  const dispatchNew = useDispatch();
  const { newCards, searchValue, currPage } = useSelector(
    (state: InitialState) => ({
      newCards: state.newBooks,
      searchValue: state.searchValue,
      currPage: state.currPage,
    })
  );

  useEffect(() => {
    dispatchNew(getCards(searchValue, currPage));
  }, [currPage, searchValue]);

  const cardMappingRender = (books: ISearchBook[]) => {
    return books.map((card) => <Card card={card} key={card.isbn13} />);
  };

  return (
    <div className="cards-list__container">
      <ul className="cards-list">
        {newCards.length === 0 && <Loader />}
        {newCards.length ? cardMappingRender(newCards) : null}
      </ul>
    </div>
  );
};

export default Cards;
