import React from "react";
import StatisticTable from "./statistic-table/statistic-table.tsx";
import TableLegend from "./table-legend/table-legend.tsx";
import "./statistic.css";

const Statistic = (): JSX.Element => {
  return (
    <div className="statistic__wrapper">
      <TableLegend />
      <StatisticTable />
    </div>
  );
};

export default Statistic;
