interface WordCard {
  _id: string;
  category: string;
  word: string;
  translation: string;
  audio: string;
  image: string;
  trainedClick: number;
  trueClick: number;
  falseClick: number;
}

interface InitialState {
  cards: WordCard[];
  allCards: WordCard[] | [];
  categories: IAggrCat[];
  playSound: boolean;
  repeat: string;
  gameMode: boolean;
  audioGameArr: string[];
  gameClick: {
    catName: string;
    word: string;
    res: boolean;
  };
  resultArr: boolean[];
  disabledCards: HTMLElement[];
  isLoggedIn: boolean;
}

interface IClickInfo {
  cardId: string;
  word: string;
  res: string;
  gameOver: boolean;
}

interface IAggrCat {
  _id: string;
  total: number;
}

interface IStateMenu {
  categories: IAggrCat[] | string[];
}

interface ILocalStorage {
  cardId: string;
  clicks: number;
  trueClick: number;
  falseClick: number;
}

const categoryTemplate = (catName: string) => {
  let count = 0;
  return function () {
    count += 1;
    return {
      categoryName:
        catName === "newCategory" ? `newCategory ${count}` : catName,
      word: `new Word ${count}`,
      translation: "",
      audio: "",
      image: "",
      trainedClick: 0,
      trueClick: 0,
      falseClick: 0,
    };
  };
};

export {
  WordCard,
  InitialState,
  IClickInfo,
  IAggrCat,
  IStateMenu,
  categoryTemplate,
  ILocalStorage,
};
