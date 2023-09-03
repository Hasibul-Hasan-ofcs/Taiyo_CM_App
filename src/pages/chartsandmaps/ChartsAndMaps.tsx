import React from "react";
import GraphDataCases from "../../api/GraphDataCases";
import { useQuery } from "@tanstack/react-query";
import SimpleLineChart from "../../components/charts/linechart/SimpleLineChart";
import ReactLeaflet from "../../components/reactleaflet/ReactLeaflet";
import CountryDataCases from "../../api/CountryDataCases";

const ChartsAndMaps = () => {
  let dataKey: String[] = [],
    dataValue: Number[] = [];
  (function graphBuilder() {
    // getting data from tan-stack query
    const [isLoading, error, data] = GraphDataCases();
    // console.log(data);

    if (isLoading) return <>Loading...</>;

    if (error) return <>An error has occurred: + {error}</>;

    if (data) {
      dataKey = Object.keys(data.cases);
      dataValue = Object.values(data.cases);
    }
  })();

  let leafletData: any[] = [];
  (function leafletMapBuilder() {
    // getting data from tan-stack query
    const [isLoading, error, data] = CountryDataCases();
    console.log(data);

    if (isLoading) return <>Loading...</>;

    if (error) return <>An error has occurred: + {error}</>;

    if (data) leafletData = data;
  })();

  return (
    <>
      <SimpleLineChart
        dataKey={dataKey}
        dataValue={dataValue}
      ></SimpleLineChart>

      <ReactLeaflet leafletData={leafletData}></ReactLeaflet>
    </>
  );
};

export default ChartsAndMaps;
