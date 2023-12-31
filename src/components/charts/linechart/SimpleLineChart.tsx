import React from "react";
import { Line } from "react-chartjs-2";

// This fixes "category" is not a registered scale.
import "chart.js/auto";

interface Props {
  dataKey: any[];
  dataValue: any[];
}

const SimpleLineChart = (props: Props) => {
  let dataKey = props.dataKey;
  let dataValue = props.dataValue;

  console.log(dataKey, dataValue);

  return (
    <div className="bs_common flex flex-col gap-5 border p-9">
      <Line
        data={{
          // x-axis label values
          labels: dataKey,
          datasets: [
            {
              label: "Disease Cases",
              // y-axis data plotting values
              data: dataValue,
              fill: false,
              borderWidth: 4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "green",
              // responsive: true,
            },
          ],
        }}
      />
    </div>
  );
};

export default SimpleLineChart;
