import React from "react";
import { Game } from "./game";

const RepeatButton = () => {
  const repeatWord = () => {
    Game.getInstance().repeatWord();
  };

  return (
    <div className="repeat-btn__container">
      <button
        className=" repeat-btn"
        onClick={(e) => {
          e.preventDefault();
          repeatWord();
        }}
      >
        Repeat word
      </button>
    </div>
  );
};

export default RepeatButton;
