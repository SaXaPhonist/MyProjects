import React from "react";
import { Link } from "react-router-dom";
import { ISearchBook } from "../../interfaces/interfaces";
import Loading from "./loading-text";

const Card: React.FC<{ card: ISearchBook }> = (props) => {
  const { card } = props;
  return (
    <li className="list-item">
      <div className="card__container">
        <Link to={`/details/${card.isbn13}`}>
          <div className="img__container">
            {!card.image && <Loading />}
            {card.image && (
              <img src={card.image} alt="book picture" className="card-img" />
            )}
          </div>
        </Link>
        <div className="content">
          <h3 className="title">{card.title}</h3>
          <div className="author">
            <p>{card.subtitle}</p>
          </div>
          <div className="price">
            <small className="old-price">
              ${Math.floor(Number(card.price.slice(1, card.price.length)) + 20)}
            </small>
            {card.price}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
