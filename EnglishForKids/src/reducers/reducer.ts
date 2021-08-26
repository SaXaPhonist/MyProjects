import { SetStateAction } from "react";
import { TActions } from "../actions/actions";
import { InitialState } from "../interfaces/interfaces";

const initialState: InitialState = {
  cards: [],
  allCards: [],
  categories: [],
  playSound: false,
  repeat: "",
  gameMode: false,
  audioGameArr: [],
  gameClick: {
    catName: "",
    word: "",
    res: "",
  },
  resultArr: [],
  disabledCards: [],
  isLoggedIn: false,
};

const reducer = (
  state: object = initialState,
  action: { type: string; payload: object }
) => {
  switch (action.type) {
    case "CARDS_LOADED":
      return {
        ...state,
        cards: action.payload,
        playSound: false,
      };
    case "ALL_CARDS_LOADED":
      return {
        ...state,
        allCards: action.payload,
      };
    case "CATEGORIES_LOADED":
      return {
        ...state,
        categories: action.payload,
      };
    case "PLAY_SOUND":
      return {
        ...state,
        playSound: action.payload.playSound,
        repeat: action.payload.audioSrc,
      };
    case "SWITCH_MODE":
      return {
        ...state,
        gameMode: action.payload,
      };
    case "ADD_TO_AUDIO_ARR":
      return {
        ...state,
        audioGameArr: action.payload,
      };
    case "ADD_GAME_CLICK_INFO":
      return {
        ...state,
        gameClick: action.payload,
        resultArr: [...state.resultArr, action.payload.res],
      };
    case "REMOVE_GAME_CLICK_INFO":
      return {
        ...state,
        gameMode: false,
        gameClick: action.payload,
        resultArr: [],
      };
    case "ADD_DISABLED_CARD":
      return {
        ...state,
        disabledCards: [...state.disabledCards, action.payload],
      };
    case "REMOVE_DISABLED_CARD":
      return {
        ...state,
        disabledCards: action.payload,
      };
    case "LOG_IN_OUT":
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };

    default:
      return state;
  }
};

export default reducer;
