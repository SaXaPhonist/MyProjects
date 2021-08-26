import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSetCurrPage } from "../../actions/actions";
import { InitialState } from "../../reducers/reducer";
import { getPageNumber } from "./paginaation";
import "./pagination-btns.css";

const PaginationBtns: FC = () => {
  const [pagination, setPagination] = useState<number[] | undefined>();
  const dispatch = useDispatch();
  const { searchBooks, total, currPage, searchValue } = useSelector(
    (state: InitialState) => ({
      searchBooks: state.searchBooks,
      total: state.totalRes,
      currPage: state.currPage,
      searchValue: state.searchValue,
    })
  );

  useEffect(() => {
    if (searchBooks) {
      setPagination(getPageNumber(total, 10, currPage));
    }
  }, [searchValue, total, currPage]);

  useEffect(() => {
    dispatch(actionSetCurrPage(currPage));
  }, [currPage]);

  return (
    <div className="pagination__container">
      <ul className="pages">
        {pagination
          ? pagination.map((pageN, indx) => (
              <li
                key={indx}
                className={
                  pageN === currPage ? `page-btn current-page` : `page-btn`
                }
                onClick={() => dispatch(actionSetCurrPage(pageN))}
              >
                {pageN}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default PaginationBtns;
