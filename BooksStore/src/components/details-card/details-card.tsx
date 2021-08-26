import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ICardInfo } from "../../interfaces/interfaces";
import { getCard } from "../../serrvice/api-service";
import "./details-card.css";

interface IProps {
  cardInfo: ICardInfo;
}

interface IMatchParams {
  id: string;
}
export const DetailsCard = (): JSX.Element => {
  const { id } = useParams<IMatchParams>();
  const [cardInfo, setCard] = useState<ICardInfo | undefined>();

  useEffect(() => {
    getCard(id).then((data) => {
      setCard(data);
    });
  }, [id]);

  const DetailsContainer = ({ cardInfo }: IProps) => {
    return (
      <div className="card-details__container">
        <div className="img__container">
          <img className="card-image" src={cardInfo.image} alt="image" />
        </div>
        <div className="info__container">
          <h2 className="card-title">{cardInfo?.title}</h2>
          {cardInfo.subtitle ? (
            <span className="subtitle card-detail">{cardInfo.subtitle}</span>
          ) : null}
          <span className="authors card-detail">
            <p>{cardInfo?.authors}</p>
          </span>
          <span className="card-detail">
            Publisher: <p>{cardInfo.publisher}</p>
          </span>
          <span className="card-detail">
            Pages: <p>{cardInfo.pages}</p>
          </span>
          <div className="rating card-detail">
            raiting: <p>{cardInfo.rating}</p>
          </div>
          <div className="card-detail">
            <p className="description">{cardInfo.desc}</p>
          </div>
          <span className="card-detail">{cardInfo.price}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="details__wrapper">
      {cardInfo !== undefined ? (
        <DetailsContainer cardInfo={cardInfo} />
      ) : (
        <p>Loading...</p>
      )}
      <div className="download__container">
        {cardInfo && cardInfo.pdf
          ? Object.keys(cardInfo.pdf).map((src, indx) => (
              <span className={`src-${indx} card-detail`} key={indx}>
                Download links:
                <a href={`${cardInfo.pdf[src]}`}>{src}</a>
              </span>
            ))
          : null}
      </div>
    </div>
  );
};
