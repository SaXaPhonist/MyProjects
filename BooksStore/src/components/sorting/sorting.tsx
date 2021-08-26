import { ISearchBook } from "../../interfaces/interfaces";

export const nameSort = (
  arr: ISearchBook[],
  sortType: string
): ISearchBook[] => {
  return [...arr].sort((curr, next) => {
    if (sortType === "desc") {
      if (curr.title.toLocaleLowerCase() < next.title.toLocaleLowerCase()) {
        return 1;
      }
      if (curr.title.toLocaleLowerCase() > next.title.toLocaleLowerCase()) {
        return -1;
      }
      return 0;
    } else {
      if (curr.title.toLocaleLowerCase() < next.title.toLocaleLowerCase()) {
        return -1;
      }
      if (curr.title.toLocaleLowerCase() > next.title.toLocaleLowerCase()) {
        return 1;
      }
      return 0;
    }
  });
};

export const priceSort = (
  arr: ISearchBook[],
  sortType: string
): ISearchBook[] => {
  return [...arr].sort((curr, next) => {
    if (sortType === "desc") {
      return (
        Number(next.price.slice(1, next.price.length)) -
        Number(curr.price.slice(1, curr.price.length))
      );
    } else {
      return (
        Number(curr.price.slice(1, curr.price.length)) -
        Number(next.price.slice(1, next.price.length))
      );
    }
  });
};

export const randomSort = (arr: ISearchBook[]): ISearchBook[] => {
  return [...arr].sort(() => 0.5 - Math.random());
};
