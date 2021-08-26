import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCardsLoaded, cardsLoaded } from "../../../actions/actions";
import {
  ILocalStorage,
  InitialState,
  WordCard,
} from "../../../interfaces/interfaces";
import { getAllCards } from "../../../services/api-service";
import LoaderSpinner from "../../loader-spinner/loader-spinner";
import {
  categorySort,
  falseClicksSort,
  prsntgSort,
  translateSort,
  trueClicksSort,
  wordSort,
} from "../../sorting/sorting";
import "./statistic-table.css";

const StatisticTable = (): JSX.Element => {
  const allcards = useSelector((state: InitialState) => state.allCards);
  const dispatch = useDispatch();
  const [currSort, setSort] = useState({ field: "", order: "asc" });
  const [clicks, setClicks] = useState<ILocalStorage[] | []>([]);
  useEffect(() => {
    setClicks([]);
    dispatch(getAllCards());
  }, []);

  useEffect(() => {
    if (currSort.field === "Category") {
      dispatch(allCardsLoaded(categorySort(allcards, currSort)));
    }
    if (currSort.field === "Word") {
      dispatch(allCardsLoaded(wordSort(allcards, currSort)));
    }
    if (currSort.field === "Translation") {
      dispatch(allCardsLoaded(translateSort(allcards, currSort)));
    }
    if (currSort.field === "Practice Score") {
      dispatch(allCardsLoaded(trueClicksSort(allcards, currSort)));
    }
    if (currSort.field === "Mistakes") {
      dispatch(allCardsLoaded(falseClicksSort(allcards, currSort)));
    }
    if (currSort.field === "Presentage") {
      dispatch(allCardsLoaded(prsntgSort(allcards, currSort)));
    }
  }, [currSort]);
  return allcards.length ? (
    <table className="statistic-table">
      <thead>
        <tr className="table-title">
          <th className="index sort-btn">№</th>
          <th
            className={
              currSort.field === "Category"
                ? `sort-btn ${currSort.order}`
                : "sort-btn"
            }
            onClick={(e) => {
              const el = e.target as HTMLElement;
              setSort((prev) => ({
                field: el.innerText,
                order: prev.order === "asc" ? "desc" : "asc",
              }));
            }}
          >
            <p>Category</p>
            {currSort.field === "Category" && currSort.order === "desc" ? (
              <div className="sort-by-desc"></div>
            ) : null}
            {currSort.field === "Category" && currSort.order === "asc" ? (
              <div className="sort-by-asc"></div>
            ) : null}
            {currSort.field !== "Category" ? (
              <div className="plug"></div>
            ) : null}
          </th>
          <th
            className={
              currSort.field === "Word"
                ? `sort-btn ${currSort.order}`
                : "sort-btn"
            }
            onClick={(e) => {
              const el = e.target as HTMLElement;
              setSort((prev) => ({
                field: el.innerText,
                order: prev.order === "asc" ? "desc" : "asc",
              }));
            }}
          >
            <p>Word</p>
            {currSort.field === "Word" && currSort.order === "desc" ? (
              <div className="sort-by-desc"></div>
            ) : null}
            {currSort.field === "Word" && currSort.order === "asc" ? (
              <div className="sort-by-asc"></div>
            ) : null}
            {currSort.field !== "Word" ? <div className="plug"></div> : null}
          </th>
          <th
            className={
              currSort.field === "Translation"
                ? `sort-btn ${currSort.order}`
                : "sort-btn"
            }
            onClick={(e) => {
              const el = e.target as HTMLElement;
              setSort((prev) => ({
                field: el.innerText,
                order: prev.order === "asc" ? "desc" : "asc",
              }));
            }}
          >
            <p>Translation</p>
            {currSort.field === "Translation" && currSort.order === "desc" ? (
              <div className="sort-by-desc"></div>
            ) : null}
            {currSort.field === "Translation" && currSort.order === "asc" ? (
              <div className="sort-by-asc"></div>
            ) : null}
            {currSort.field !== "Translation" ? (
              <div className="plug"></div>
            ) : null}
          </th>
          <th
            className={
              currSort.field === "Practice Score"
                ? `sort-btn ${currSort.order}`
                : "sort-btn"
            }
            onClick={(e) => {
              const el = e.target as HTMLElement;
              setSort((prev) => ({
                field: el.innerText,
                order: prev.order === "asc" ? "desc" : "asc",
              }));
            }}
          >
            <p>Practice Score</p>
            {currSort.field === "Practice Score" &&
            currSort.order === "desc" ? (
              <div className="sort-by-desc"></div>
            ) : null}
            {currSort.field === "Practice Score" && currSort.order === "asc" ? (
              <div className="sort-by-asc"></div>
            ) : null}
            {currSort.field !== "Practice Score" ? (
              <div className="plug"></div>
            ) : null}
          </th>
          <th
            className={
              currSort.field === "Mistakes"
                ? `sort-btn ${currSort.order}`
                : "sort-btn"
            }
            onClick={(e) => {
              const el = e.target as HTMLElement;
              setSort((prev) => ({
                field: el.innerText,
                order: prev.order === "asc" ? "desc" : "asc",
              }));
            }}
          >
            <p>Mistakes</p>
            {currSort.field === "Mistakes" && currSort.order === "desc" ? (
              <div className="sort-by-desc"></div>
            ) : null}
            {currSort.field === "Mistakes" && currSort.order === "asc" ? (
              <div className="sort-by-asc"></div>
            ) : null}
            {currSort.field !== "Mistakes" ? (
              <div className="plug"></div>
            ) : null}
          </th>
          <th
            className={
              currSort.field === "Presentage"
                ? `sort-btn ${currSort.order}`
                : "sort-btn"
            }
            onClick={(e) => {
              const el = e.target as HTMLElement;
              setSort((prev) => ({
                field: el.innerText,
                order: prev.order === "asc" ? "desc" : "asc",
              }));
            }}
          >
            <p>Presentage</p>
            {currSort.field === "Presentage" && currSort.order === "desc" ? (
              <div className="sort-by-desc"></div>
            ) : null}
            {currSort.field === "Presentage" && currSort.order === "asc" ? (
              <div className="sort-by-asc"></div>
            ) : null}
            {currSort.field !== "Presentage" ? (
              <div className="plug"></div>
            ) : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {allcards.map((card, cardIndex) => {
          return (
            <tr key={card._id}>
              <td>{cardIndex + 1}</td>
              <td>{card.category}</td>
              <td>{card.word}</td>
              <td>{card.translation}</td>
              <td>{!card.trueClick ? 0 : card.trueClick}</td>
              <td>{!card.falseClick ? 0 : card.falseClick}</td>
              <td>
                {!card.trueClick
                  ? 0
                  : `${Math.floor(
                      (card.trueClick / (card.trueClick + card.falseClick)) *
                        100
                    )}%`}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <LoaderSpinner />
  );
};

export default StatisticTable;
