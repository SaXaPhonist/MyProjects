import React from "react";
import { WordCard } from "../../interfaces/interfaces";
import { createCard, getCategory } from "../../services/api-service";
import AdminWordCard from "./admin-word-card/admin-word-card";

type EdditingProps = {
  match: { params: { catName: string } };
};

const EdditingWords = async (props: EdditingProps) => {
  const { catName } = props.match.params;

  const cards = await getCategory(catName);

  const addNewCard = () => createCard();

  return (
    <React.Fragment>
      <div className="main__wrapper">
        <ul className="card-list">
          {cards.map((card: WordCard) => {
            return (
              <li className="card-list-item">
                <AdminWordCard card={card} />
              </li>
            );
          })}
          <li>
            <div className="add-category" onClick={() => addNewCard()}>
              <span>Add new Word</span>
              <div className="img-wrapper"></div>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default EdditingWords;
