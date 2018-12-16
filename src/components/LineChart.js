import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend
  } from "recharts";

const chart = (props) => {
  return (
    <LineChart width={600} height={300} data={props.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Legend />
      <Line
        type="monotone"
        dataKey={props.dataKey}
        stroke={props.stroke}
        isAnimationActive={props.isAnimationActive}
      />
    </LineChart>
  );
};

export default chart;
