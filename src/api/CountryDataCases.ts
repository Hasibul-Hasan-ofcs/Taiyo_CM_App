import { useQuery } from "@tanstack/react-query";

const CountryDataCases = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["countryWiseData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/countries").then((res) =>
        res.json()
      ),
  });
  return [isLoading, error, data];
};
export default CountryDataCases;
