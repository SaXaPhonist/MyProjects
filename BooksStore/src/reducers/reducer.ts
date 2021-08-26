import { TActions } from "../actions/actions";
import { ICard, ISearchBook } from "../interfaces/interfaces";

export interface InitialState {
  newBooks: ISearchBook[];
  searchBooks: ISearchBook[];
  currPage: number;
  totalRes: number;
  error: string;
  searchValue: string;
  setNewRes: boolean;
  newCards: ICard[];
  status: number;
}

const initialState: InitialState = {
  newBooks: [],
  searchBooks: [],
  currPage: 1,
  error: "",
  totalRes: 0,
  searchValue: "",
  setNewRes: true,
  newCards: [],
  status: 0,
};

const reducer = (state = initialState, action: TActions): InitialState => {
  switch (action.type) {
    case "GET_NEW":
      return {
        ...state,
        newBooks: action.payload.books,
        totalRes: Number(action.payload.total),
        error: action.payload.error,
        setNewRes: false,
      };
    case "SET_SEARCH_RESULT":
      return {
        ...state,
        newBooks: action.payload.searchRes.books,
        totalRes: Number(action.payload.searchRes.total),
        error: action.payload.searchRes.error,
      };
    case "SET_CURR_PAGE":
      return {
        ...state,
        currPage: action.payload,
      };
    case "SET_SEARCH_VALUE":
      return {
        ...state,
        searchValue: action.payload,
      };
    case "CLEAR_SEARCH_VALUE":
      return {
        ...state,
        searchValue: "",
      };
    case "SET_SORTING":
      return {
        ...state,
        newBooks: action.payload,
      };
    case "ADD_NEW_CARD":
      return {
        ...state,
        newCards: [...state.newCards, action.payload],
      };
    case "DISPATCH_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
