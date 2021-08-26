import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  actionGetNew,
  actionGetSearchResult,
  IActionGetNew,
  IActionSearch,
} from "../actions/actions";
import { ICardInfo } from "../interfaces/interfaces";
import { InitialState } from "../reducers/reducer";

const URL = "https://api.itbook.store/1.0";

export const getSearchResult = (
  searchValue: string,
  page: number
): ThunkAction<void, InitialState, unknown, IActionSearch> => {
  return (dispatch: ThunkDispatch<InitialState, unknown, IActionSearch>) => {
    return fetch(`${URL}/search/${searchValue}/${page}`)
      .then((res) => res.json())
      .then((data) => dispatch(actionGetSearchResult(data, searchValue)));
  };
};

export const getCard = (id: string): Promise<ICardInfo> => {
  return fetch(`${URL}/books/${id}`).then((res) => res.json());
};

export const getNewReleases = (): ThunkAction<
  void,
  InitialState,
  unknown,
  IActionGetNew
> => {
  return (dispatch: ThunkDispatch<InitialState, unknown, IActionGetNew>) => {
    return fetch(`${URL}/new`)
      .then((res) => res.json())
      .then((data) => dispatch(actionGetNew(data)));
  };
};

export const getCards = (
  searchValue: string,
  page: number
): ThunkAction<void, InitialState, unknown, IActionSearch | IActionGetNew> => {
  return (
    dispatch: ThunkDispatch<
      InitialState,
      unknown,
      IActionSearch | IActionGetNew
    >
  ) => {
    if (searchValue.length === 0) {
      return fetch(`${URL}/new`)
        .then((res) => res.json())
        .then((data) => dispatch(actionGetNew(data)));
    } else {
      return fetch(`${URL}/search/${searchValue}/${page}`)
        .then((res) => res.json())
        .then((data) => dispatch(actionGetSearchResult(data, searchValue)));
    }
  };
};
