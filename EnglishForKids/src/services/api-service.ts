import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  allCardsLoaded,
  cardsLoaded,
  categoriesLoaded,
  IActionsLoadCards,
  IActionsLoadCat,
} from "../actions/actions";

import {
  categoryTemplate,
  InitialState,
  WordCard,
} from "../interfaces/interfaces";
import { getLocalStorage } from "./localStorageService";

const URL = "https://shielded-hamlet-25529.herokuapp.com/api";

export const createCard = async (
  catName = "newCategory"
): Promise<WordCard> => {
  const body = categoryTemplate(catName);
  const res = await fetch(`${URL}/cards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const result = await res.json();
  return result;
};

export const getAllCards = (): ThunkAction<
  void,
  InitialState,
  unknown,
  IActionsLoadCards
> => {
  return (
    dispatch: ThunkDispatch<InitialState, unknown, IActionsLoadCards>
  ) => {
    return fetch(`${URL}/cards`)
      .then((res) => res.json())
      .then((data) => dispatch(allCardsLoaded(getLocalStorage(data))));
  };
};

export const getCard = async (id: string): Promise<WordCard> => {
  const res = await fetch(`${URL}/cards/${id}`);
  const data = await res.json();
  return data;
};

export const updateCard = async (body: WordCard) => {
  await fetch(`${URL}/cards/${body.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const updateCategory = async (
  catName: string,
  body: { newCatName: string }
) => {
  await fetch(`${URL}/category/${catName}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const deleteCard = async (id: string) => {
  await fetch(`${URL}/cards/${id}`, {
    method: "DELETE",
  });
};

export const deleteCategory = async (catName: string) => {
  await fetch(`${catName}/category/${catName}`, {
    method: "DELETE",
  });
};

export const getCategory = (catName: string): Promise<WordCard[]> => {
  return fetch(`${URL}/category/${catName}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const getCategoryThunk = (
  catName: string
): ThunkAction<void, InitialState, unknown, IActionsLoadCards> => {
  return (
    dispatch: ThunkDispatch<InitialState, unknown, IActionsLoadCards>
  ): Promise<IActionsLoadCards> => {
    return fetch(`${URL}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => dispatch(cardsLoaded(data)));
  };
};

export const aggrCategory = (): ThunkAction<
  void,
  InitialState,
  unknown,
  IActionsLoadCat
> => {
  return (
    dispatch: ThunkDispatch<InitialState, unknown, IActionsLoadCat>
  ): Promise<IActionsLoadCat> => {
    return fetch(`${URL}/category`)
      .then((res) => res.json())
      .then((data) => dispatch(categoriesLoaded(data)));
  };
};
