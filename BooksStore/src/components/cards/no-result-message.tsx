import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getNewReleases } from "../../serrvice/api-service";

const NoResults = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div className="no-result__wrapper">
      <div className="no-result">
        <span className="no-result__text">
          Oops, seems we do not have such book
        </span>
        <img
          src="https://phonoteka.org/uploads/posts/2021-04/1618475089_37-p-knigi-na-belom-fone-37.png"
          alt="not found"
          width={400}
          height={500}
        />
        <Link to="/" onClick={() => dispatch(getNewReleases())}>
          <p className="no-result__link">Back to search</p>
        </Link>
      </div>
    </div>
  );
};

export default NoResults;
