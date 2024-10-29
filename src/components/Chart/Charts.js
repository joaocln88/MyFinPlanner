import React from "react";
import styles from "./styles.module.css";

import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
} from "recharts";

const Charts = ({ data }) => {
  return (
    <>
      {data.length > 0 && (
        <AreaChart
          width={512}
          height={400}
          data={data}
          className={styles.chart}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" interval={24} />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3 " />
          {/* <ReferenceLine y={1000000} stroke="red" label="1M" /> */}
          <ReferenceDot />
          <Area
            type="monotone"
            dataKey="total_accumulated"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <Area
            type="monotone"
            dataKey="accumulated_contribution"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      )}
    </>
  );
};

export default Charts;
