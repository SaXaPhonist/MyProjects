import React from "react";
import { useState } from "react";
import { WordCard } from "../../../interfaces/interfaces";
import { updateCard } from "../../../services/api-service";

const AdminWordCard = (props: { card: WordCard }) => {
  const { card } = props;

  const [word, changeWord] = useState(card.word);
  const [translation, changeTranslation] = useState(card.translation);
  const [audio, changeAudio] = useState(card.audio);
  const [image, changeImage] = useState(card.image);

  const updateWord = () => {
    const body = {
      id: card.id,
      category: card.category,
      word: word,
      translation: translation,
      audio: audio,
      image: image,
      trainedClick: card.trainedClick,
      trueClick: card.trueClick,
      falseClick: card.falseClick,
    };
    updateCard(body);
  };

  return (
    <form className="word-card">
      <label>
        Word:
        <input
          className="word-title"
          value={word}
          onChange={(e) => changeWord(e.target.value)}
        />
      </label>
      <label>
        <input
          className="translation"
          value={translation}
          onChange={(e) => changeTranslation(e.target.value)}
        />
      </label>
      <label>
        Audio:
        <input
          className="audio-source"
          value={audio}
          onChange={(e) => changeAudio(e.target.value)}
        />
      </label>
      <label>
        Image:
        <input
          className="image-source"
          value={image}
          onChange={(e) => changeImage(e.target.value)}
        />
      </label>
      <button className="change-btn" onClick={() => updateWord()}>
        {" "}
        CHANGE
      </button>
      <div className="delete-btn"></div>
    </form>
  );
};

export default AdminWordCard;
