import { WordCard } from "../../interfaces/interfaces";

export const categorySort = (
  arr: WordCard[],
  currSort: { field: string; order: string }
): WordCard[] => {
  return [...arr].sort((curr, next) => {
    if (currSort.order === "desc") {
      if (
        curr.category.toLocaleLowerCase() < next.category.toLocaleLowerCase()
      ) {
        return 1;
      }
      if (
        curr.category.toLocaleLowerCase() > next.category.toLocaleLowerCase()
      ) {
        return -1;
      }
      return 0;
    } else {
      if (
        curr.category.toLocaleLowerCase() < next.category.toLocaleLowerCase()
      ) {
        return -1;
      }
      if (
        curr.category.toLocaleLowerCase() > next.category.toLocaleLowerCase()
      ) {
        return 1;
      }
      return 0;
    }
  });
};

export const wordSort = (
  arr: WordCard[],
  currSort: { field: string; order: string }
): WordCard[] => {
  return [...arr].sort((curr, next) => {
    if (currSort.order === "desc") {
      if (curr.word.toLocaleLowerCase() < next.word.toLocaleLowerCase()) {
        return 1;
      }
      if (curr.word.toLocaleLowerCase() > next.word.toLocaleLowerCase()) {
        return -1;
      }
      return 0;
    } else {
      if (curr.word.toLocaleLowerCase() < next.word.toLocaleLowerCase()) {
        return -1;
      }
      if (curr.word.toLocaleLowerCase() > next.word.toLocaleLowerCase()) {
        return 1;
      }
      return 0;
    }
  });
};

export const translateSort = (
  arr: WordCard[],
  currSort: { field: string; order: string }
): WordCard[] => {
  return [...arr].sort((curr, next) => {
    if (currSort.order === "desc") {
      if (
        curr.translation.toLocaleLowerCase() <
        next.translation.toLocaleLowerCase()
      ) {
        return 1;
      }
      if (
        curr.translation.toLocaleLowerCase() >
        next.translation.toLocaleLowerCase()
      ) {
        return -1;
      }
      return 0;
    } else {
      if (
        curr.translation.toLocaleLowerCase() <
        next.translation.toLocaleLowerCase()
      ) {
        return -1;
      }
      if (
        curr.translation.toLocaleLowerCase() >
        next.translation.toLocaleLowerCase()
      ) {
        return 1;
      }
      return 0;
    }
  });
};

export const trueClicksSort = (
  arr: WordCard[],
  currSort: { field: string; order: string }
): WordCard[] => {
  return [...arr].sort((prev, next) => {
    if (currSort.order === "desc") {
      return next.trueClick - prev.trueClick;
    } else {
      return prev.trueClick - next.trueClick;
    }
  });
};

export const falseClicksSort = (
  arr: WordCard[],
  currSort: { field: string; order: string }
): WordCard[] => {
  return [...arr].sort((prev, next) => {
    if (currSort.order === "desc") {
      return next.falseClick - prev.falseClick;
    } else {
      return prev.falseClick - next.falseClick;
    }
  });
};

export const prsntgSort = (
  arr: WordCard[],
  currSort: { field: string; order: string }
): WordCard[] => {
  return [...arr].sort((prev, next) => {
    if (currSort.order === "desc") {
      return (
        (next.trueClick / (next.trueClick + next.falseClick)) * 100 -
        (prev.trueClick / (prev.trueClick + prev.falseClick)) * 100
      );
    } else {
      return (
        (prev.trueClick / (prev.trueClick + prev.falseClick)) * 100 -
        (next.trueClick / (next.trueClick + next.falseClick)) * 100
      );
    }
  });
};

export const randomSort = (arr: WordCard[]): WordCard[] => {
  return [...arr].sort(() => 0.5 - Math.random());
};
