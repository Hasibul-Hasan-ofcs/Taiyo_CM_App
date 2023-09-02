import { useQuery } from "@tanstack/react-query";

const GraphDataCases = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["graphData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
        (res) => res.json()
      ),
  });
  return [isLoading, error, data];
};
export default GraphDataCases;
