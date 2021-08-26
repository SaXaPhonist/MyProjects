import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { InitialState } from "../../interfaces/interfaces";
import "./popup.css";

const Popup = () => {
  const cards = useSelector((state: InitialState) => state.disabledCards);
  const dispatch = useDispatch();

  const refresh = () => {
    for (let i = 0; i < cards.length; i++) {
      const el = cards[i];
      el.classList.remove("disabled");
    }
    dispatch({ type: "REMOVE_DISABLED_CARD", payload: [] });
    const tglBtn = document.getElementById("toggle-btn") as HTMLInputElement;
    if (tglBtn) tglBtn.checked = false;
  };

  return (
    <div className="winner-popup">
      <span className="popup__text">Your game have ended</span>

      <button
        type="submit"
        className="popup__btn_close"
        onClick={() => refresh()}
      >
        Close
      </button>
    </div>
  );
};

export default connect()(Popup);
