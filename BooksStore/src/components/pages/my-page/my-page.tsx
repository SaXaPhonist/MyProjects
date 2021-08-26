import React from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { ICard } from "../../../interfaces/interfaces";
import { InitialState } from "../../../reducers/reducer";

import "./my-page.css";

const MyPage: FC = () => {
  const { newAddedCards } = useSelector((state: InitialState) => ({
    newAddedCards: state.newCards,
  }));

  const cardMappingRender = (books: ICard[]) => {
    return books.map((card) => <MyCard card={card} key={card._id} />);
  };

  const MyCard: React.FC<{ card: ICard }> = (props) => {
    const { card } = props;
    return (
      <li className="list-item">
        <div className="my-card__container">
          <div className="img__container">
            {!card.image && <p>No image</p>}
            {card.image && (
              <img src={card.image} alt="book picture" className="card-img" />
            )}
          </div>
          <div className="content">
            <h4 className="title">{card.title}</h4>
            <div className="author">{card.author}</div>
            <div className="price">
              <small className="old-price">
                ${Math.floor(Number(card.price + 20))}
              </small>
              ${card.price}
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="cards-list__container">
      <ul className="cards-list">
        {newAddedCards.length === 0 && (
          <p className="error-message">
            You do not have any books to sell yet.
          </p>
        )}
        {newAddedCards && cardMappingRender(newAddedCards)}
      </ul>
    </div>
  );
};

export default MyPage;
