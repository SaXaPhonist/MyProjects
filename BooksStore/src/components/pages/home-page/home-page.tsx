import React from "react";
import AddButton from "../../add-button/add-button";
import AddForm from "../../add-form/add-form";
import Cards from "../../cards/cards";
import PaginationBtns from "../../pagination/pagination-btns";
import SearchBar from "../../search-bar/search-bar";
import Sorting from "../../sorting/sort-btns";
import "./home-page.css";

type THomeProps = {
  toggleAddBtn: () => void;
  onAdded: boolean;
};

export const HomePage = ({
  toggleAddBtn,
  onAdded,
}: THomeProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className="search-bar__wrapper">
        <AddButton onForm={toggleAddBtn} />
        <SearchBar />
      </div>
      <Sorting />
      <Cards />
      <PaginationBtns />
      {onAdded ? <AddForm onClose={toggleAddBtn} /> : null}
    </React.Fragment>
  );
};
