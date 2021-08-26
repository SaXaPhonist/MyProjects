import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionSetCurrPage, actionSetSearchValue } from "../../actions/actions";
import "./search-bar.css";

const SearchBar = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const submitSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue !== undefined) {
      dispatch(actionSetCurrPage(1));
      dispatch(actionSetSearchValue(searchValue));
    }
  };
  return (
    <div className="bar__wrapper">
      <input
        type="text"
        className="search__input"
        placeholder="Search.."
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={submitSearch}
      />
    </div>
  );
};

export default SearchBar;
