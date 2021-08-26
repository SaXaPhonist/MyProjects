import { ICard, ICardInfo, IRes, ISearchBook } from "../interfaces/interfaces";

export type TActions =
  | IActionGetNew
  | IActionSearch
  | IActionSetCurrPage
  | IActionSetSearchValue
  | IActionClearSearchValue
  | IActionSetSort
  | IActionAddNew
  | IActionDispatchStatus;

export interface IActionGetNew {
  type: "GET_NEW";
  payload: IRes;
}

export interface IActionSetCurrPage {
  type: "SET_CURR_PAGE";
  payload: number;
}

export interface IActionSearch {
  type: "SET_SEARCH_RESULT";
  payload: { searchRes: IRes; searchValue: string };
}

export interface IActionGetDetails {
  type: "GET_DETAILS";
  payload: ICardInfo;
}

export interface IActionSetSearchValue {
  type: "SET_SEARCH_VALUE";
  payload: string;
}

export interface IActionClearSearchValue {
  type: "CLEAR_SEARCH_VALUE";
}

export const actionGetNew = (newCards: IRes): IActionGetNew => {
  return {
    type: "GET_NEW",
    payload: newCards,
  };
};

export const actionGetSearchResult = (
  searchRes: IRes,
  searchValue: string
): IActionSearch => {
  return {
    type: "SET_SEARCH_RESULT",
    payload: { searchRes, searchValue },
  };
};

export const actionSetCurrPage = (pageN: number): IActionSetCurrPage => {
  return {
    type: "SET_CURR_PAGE",
    payload: pageN,
  };
};

export const actionGetDetails = (details: ICardInfo): IActionGetDetails => {
  return {
    type: "GET_DETAILS",
    payload: details,
  };
};

export const actionSetSearchValue = (
  searchValue: string
): IActionSetSearchValue => {
  return {
    type: "SET_SEARCH_VALUE",
    payload: searchValue,
  };
};

export const actionClearSearchValue = (): IActionClearSearchValue => {
  return {
    type: "CLEAR_SEARCH_VALUE",
  };
};

export interface IActionSetSort {
  type: "SET_SORTING";
  payload: ISearchBook[];
}

export const actionSetSort = (sortedArr: ISearchBook[]): IActionSetSort => {
  return {
    type: "SET_SORTING",
    payload: sortedArr,
  };
};

interface IActionAddNew {
  type: "ADD_NEW_CARD";
  payload: ICard;
}

export const actionAddNew = (newCard: ICard): IActionAddNew => {
  return {
    type: "ADD_NEW_CARD",
    payload: newCard,
  };
};

interface IActionDispatchStatus {
  type: "DISPATCH_STATUS";
  payload: number;
}

export const actionDispatchStatus = (status: number): IActionDispatchStatus => {
  return { type: "DISPATCH_STATUS", payload: status };
};
