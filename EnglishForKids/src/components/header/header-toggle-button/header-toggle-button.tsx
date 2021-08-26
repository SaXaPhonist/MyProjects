import React, { Dispatch } from "react";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  addDisabledCards,
  addGameClick,
  switchGameMode,
  TActions,
} from "../../../actions/actions";
import {
  IClickInfo,
  InitialState,
  WordCard,
} from "../../../interfaces/interfaces";
import { Game } from "../../gameMode/game";
import Popup from "../../Popup/popup";
import "./header-toggle-button.css";

interface Iprops {
  audioArr: InitialState["audioGameArr"];
  gameMode: InitialState["gameMode"];
  card: WordCard;
  disabledCards: InitialState["disabledCards"];
  addClickToState: (clickInfo: IClickInfo) => Dispatch<TActions>;
  addDisabledCards: (elements: HTMLElement[]) => Dispatch<TActions>;
  switchMode: (mode: boolean) => Dispatch<TActions>;
}

const ToggleButton = (props: Iprops) => {
  const disabledCards = props.disabledCards;
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const ToggleButton = () => {
    if (!props.gameMode) {
      //game on
      setChecked(true);
      props.switchMode(!props.gameMode);
      Game.getInstance().gameProcess(props.audioArr, !props.gameMode);
    } else {
      //game off
      setChecked(false);
      console.log("checked in toogle button", checked, props.gameMode);
      props.switchMode(!props.gameMode);
      Game.getInstance().gameProcess(props.audioArr, !props.gameMode);
      const clickInfo = Game.getInstance().getScore();

      for (let i = 0; i < disabledCards.length; i++) {
        const el = disabledCards[i];
        el.classList.remove("disabled");
      }
      dispatch({ type: "REMOVE_DISABLED_CARDS", payload: [] });
      dispatch({ type: "REMOVE_GAME_CLICK_INFO", payload: clickInfo });
    }
  };

  return (
    <div className="header-div__toggle-button">
      <label className="switch">
        <input
          className="toggle-button"
          type="checkbox"
          id="toggle-btn"
          defaultChecked={checked}
          onChange={() => ToggleButton()}
        />
        <span className="slider round"></span>
      </label>
      {disabledCards.length > 0 && !props.gameMode ? <Popup /> : null}
    </div>
  );
};

const mapStateToProps = (state: InitialState) => {
  return {
    gameMode: state.gameMode,
    cards: state.cards,
    audioArr: state.audioGameArr,
    disabledCards: state.disabledCards,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<TActions>) => {
  return {
    switchMode: (mode: boolean) => {
      dispatch(switchGameMode(mode));
    },
    addClickToState: (info: IClickInfo) => {
      dispatch(addGameClick(info));
    },
    addDisabledCards: (card: HTMLElement[]) => {
      dispatch(addDisabledCards(card));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);
