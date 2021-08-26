import { ILocalStorage, WordCard } from "../interfaces/interfaces";

const getAllStorage = (): ILocalStorage[] => {
  const values = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    values.push(JSON.parse(localStorage.getItem(keys[i]) || "{}"));
  }
  return values;
};

export const getLocalStorage = (arr: WordCard[]): WordCard[] => {
  const copyArr = [...arr];
  const storageArr = getAllStorage();
  for (let i = 0; i < storageArr.length; i++) {
    for (let j = 0; j < copyArr.length; j++) {
      if (storageArr[i].cardId === copyArr[j]._id) {
        copyArr[j].trueClick = storageArr[i].trueClick;
        copyArr[j].falseClick = storageArr[i].falseClick;
      }
    }
  }
  return copyArr;
};
