import React from "react";
import { RouteComponentProps } from "react-router";
import CardList from "../main/card-list";

interface IMatchParams {
  catName: string;
}

const Page = (props): JSX.Element => {
  const { catName } = props.match.params;

  return <CardList catName={catName} />;
};

export default Page;
