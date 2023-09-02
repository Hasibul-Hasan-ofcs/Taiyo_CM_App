import React from "react";
import GraphDataCases from "../../api/GraphDataCases";
import { useQuery } from "@tanstack/react-query";
import SimpleLineChart from "../../components/charts/linechart/SimpleLineChart";

const ChartsAndMaps = () => {
  // getting data from tan-stack query
  const [isLoading, error, data] = GraphDataCases();
  console.log(data);

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: + {error}</>;

  let dataKey: String[] = [],
    dataValue: Number[] = [];
  if (data) {
    dataKey = Object.keys(data.cases);
    dataValue = Object.values(data.cases);
  }

  return (
    <div>
      <SimpleLineChart
        dataKey={dataKey}
        dataValue={dataValue}
      ></SimpleLineChart>
    </div>
  );
};

export default ChartsAndMaps;
