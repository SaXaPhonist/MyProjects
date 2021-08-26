import { Action } from "redux";
import { IAggrCat, IClickInfo, WordCard } from "../interfaces/interfaces";

export type TActions =
  | IActionAddAudio
  | IActionsLoadCards
  | IActionsLoadCat
  | IActionsLoadCat
  | IActionAddClick
  | IActionDisableCard
  | IActionPlaySound
  | IActionSwitchMode;

export interface IActionsLogin extends Action {
  type: string;
}

export interface IActionsLoadCards {
  type: string;
  payload: WordCard[];
}

export interface IActionsLoadCat {
  type: string;
  payload: IAggrCat[];
}

export interface IActionAddAudio {
  type: "ADD_TO_AUDIO_ARR";
  payload: string[] | [];
}

export interface IActionAddClick {
  type: "REMOVE_GAME_CLICK_INFO" | "ADD_GAME_CLICK_INFO";
  payload: IClickInfo;
}

export interface IActionDisableCard {
  type: "ADD_DISABLED_CARD" | "REMOVE_DISABLED_CARD";
  payload: HTMLElement[];
}

export interface IActionPlaySound {
  type: "PLAY_SOUND";
  payload: {
    playSound: boolean;
    audioSrc: string;
  };
}

export interface IActionSwitchMode {
  type: "SWITCH_MODE";
  payload: boolean;
}

const cardsLoaded = (newCards: WordCard[]): IActionsLoadCards => {
  return {
    type: "CARDS_LOADED",
    payload: newCards,
  };
};

const allCardsLoaded = (newCards: WordCard[]): IActionsLoadCards => {
  return {
    type: "ALL_CARDS_LOADED",
    payload: newCards,
  };
};

const categoriesLoaded = (newCats: IAggrCat[]): IActionsLoadCat => {
  return {
    type: "CATEGORIES_LOADED",
    payload: newCats,
  };
};

const cardsPlaySound = (
  isPlay: boolean,
  audioSrc: string
): IActionPlaySound => {
  return {
    type: "PLAY_SOUND",
    payload: {
      playSound: isPlay,
      audioSrc: audioSrc,
    },
  };
};

const switchGameMode = (mode: boolean): IActionSwitchMode => {
  return {
    type: "SWITCH_MODE",
    payload: mode,
  };
};

const addToAudioArr = (audioSrc: string[] | []): IActionAddAudio => {
  return {
    type: "ADD_TO_AUDIO_ARR",
    payload: audioSrc,
  };
};

const addGameClick = (clickInfo: IClickInfo): IActionAddClick => {
  if (clickInfo.gameOver) {
    return {
      type: "REMOVE_GAME_CLICK_INFO",
      payload: clickInfo,
    };
  } else {
    return {
      type: "ADD_GAME_CLICK_INFO",
      payload: clickInfo,
    };
  }
};

const addDisabledCards = (card: HTMLElement[]): IActionDisableCard => {
  if (card.length === 0) {
    for (let i = 0; i < card.length; i++) {
      const deletedCard = card[i];
      deletedCard.classList.remove("disabled");
    }
    return {
      type: "REMOVE_DISABLED_CARD",
      payload: card,
    };
  } else {
    return {
      type: "ADD_DISABLED_CARD",
      payload: card,
    };
  }
};

const actionOnLogin = (): IActionsLogin => {
  return {
    type: "LOG_IN_OUT",
  };
};

export {
  cardsLoaded,
  categoriesLoaded,
  cardsPlaySound,
  switchGameMode,
  addToAudioArr,
  addGameClick,
  addDisabledCards,
  actionOnLogin,
  allCardsLoaded,
};
