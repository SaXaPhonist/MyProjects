import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSetSort } from "../../actions/actions";
import { InitialState } from "../../reducers/reducer";
import "./sort-btns.css";
import { nameSort, priceSort, randomSort } from "./sorting";

const Sorting = (): JSX.Element => {
  const [currSort, setCurrSort] = useState("");
  const [type, setSortType] = useState("desc");
  let books = useSelector((state: InitialState) => state.newBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currSort === "Name" && books) {
      books = nameSort(books, type);
      dispatch(actionSetSort(books));
    } else if (currSort === "Price" && books) {
      books = priceSort(books, type);
      dispatch(actionSetSort(books));
    } else if (currSort === "Popularity" && books) {
      books = randomSort(books);
      dispatch(actionSetSort(books));
    }
  }, [currSort, type]);

  return (
    <div className="sort-btns__container">
      <p className="sort-title">Sorting by:</p>
      <div className="sort-btns__wrapper">
        <span
          className={
            currSort === "Popularity" ? `sort-btn ${type}` : "sort-btn"
          }
          onClick={(e) => {
            const el = e.target as HTMLElement;
            setCurrSort(el.innerText);
            setSortType((prev) => (prev === "desc" ? "asc" : "desc"));
          }}
        >
          Popularity
          {currSort === "Popularity" && type === "desc" ? (
            <div className="sort-by-desc"></div>
          ) : null}
          {currSort === "Popularity" && type === "asc" ? (
            <div className="sort-by-asc"></div>
          ) : null}
          {currSort !== "Popularity" ? <div className="plug"></div> : null}
        </span>
        <span
          className={currSort === "Name" ? `sort-btn ${type}` : "sort-btn"}
          onClick={(e) => {
            const el = e.target as HTMLElement;
            setCurrSort(el.innerText);
            setSortType((prev) => (prev === "desc" ? "asc" : "desc"));
          }}
        >
          Name
          {currSort === "Name" && type === "desc" ? (
            <div className="sort-by-desc"></div>
          ) : null}
          {currSort === "Name" && type === "asc" ? (
            <div className="sort-by-asc"></div>
          ) : null}
          {currSort !== "Name" ? <div className="plug"></div> : null}
        </span>
        <span
          className={currSort === "Price" ? `sort-btn ${type}` : "sort-btn"}
          onClick={(e) => {
            const el = e.target as HTMLElement;
            setCurrSort(el.innerText);
            setSortType((prev) => (prev === "desc" ? "asc" : "desc"));
          }}
        >
          Price
          {currSort === "Price" && type === "desc" ? (
            <div className="sort-by-desc"></div>
          ) : null}
          {currSort === "Price" && type === "asc" ? (
            <div className="sort-by-asc"></div>
          ) : null}
          {currSort !== "Price" ? <div className="plug"></div> : null}
        </span>
      </div>
    </div>
  );
};

export default Sorting;
