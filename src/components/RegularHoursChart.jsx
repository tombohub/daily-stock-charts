import React, { useEffect, useState, useRef } from "react";

// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   ComposedChart,
//   Bar,
// } from "recharts";

import {
  VictoryChart,
  VictoryCandlestick,
  VictoryTooltip,
  VictoryZoomContainer,
  VictoryAxis,
  VictoryVoronoiContainer,
  Candle,
} from "victory";

const datak = [
  {
    id: 814861,
    stock: "TSLA",
    timestamp: "2020-07-20T09:31:00",
    date: "2020-07-20",
    time: "09:30:00",
    open: 303.8,
    high: 305,
    low: 303.41,
    close: 304,
    average: 304.2,
    is_regular: true,
    change: 0.0007,
  },
  {
    id: 814860,
    stock: "TSLA",
    timestamp: "2020-07-20T09:32:00",
    date: "2020-07-20",
    time: "09:31:00",
    open: 304.16,
    high: 305.4,
    low: 304.04,
    close: 304.63,
    average: 304.72,
    is_regular: true,
    change: 0.0015,
  },
  {
    id: 814859,
    stock: "TSLA",
    timestamp: "2020-07-20T09:33:00",
    date: "2020-07-20",
    time: "09:32:00",
    open: 304.61,
    high: 305.97,
    low: 304.2,
    close: 304.81,
    average: 305.08,
    is_regular: true,
    change: 0.0007,
  },
  {
    id: 814858,
    stock: "TSLA",
    timestamp: "2020-07-20T09:34:00",
    date: "2020-07-20",
    time: "09:33:00",
    open: 304.66,
    high: 304.77,
    low: 302.84,
    close: 304.01,
    average: 303.8,
    is_regular: true,
    change: -0.0021,
  },
  {
    id: 814857,
    stock: "TSLA",
    timestamp: "2020-07-20T09:35:00",
    date: "2020-07-20",
    time: "09:34:00",
    open: 304.03,
    high: 304.46,
    low: 303.2,
    close: 303.53,
    average: 303.83,
    is_regular: true,
    change: -0.0017,
  },
  {
    id: 814856,
    stock: "TSLA",
    timestamp: "2020-07-20T09:36:00",
    date: "2020-07-20",
    time: "09:35:00",
    open: 303.58,
    high: 303.66,
    low: 301.78,
    close: 301.82,
    average: 302.72,
    is_regular: true,
    change: -0.0058,
  },
  {
    id: 814855,
    stock: "TSLA",
    timestamp: "2020-07-20T09:37:00",
    date: "2020-07-20",
    time: "09:36:00",
    open: 301.82,
    high: 303.02,
    low: 301.4,
    close: 302.2,
    average: 302.21,
    is_regular: true,
    change: 0.0013,
  },
  {
    id: 814854,
    stock: "TSLA",
    timestamp: "2020-07-20T09:38:00",
    date: "2020-07-20",
    time: "09:37:00",
    open: 302.21,
    high: 302.41,
    low: 300.6,
    close: 301.61,
    average: 301.5,
    is_regular: true,
    change: -0.002,
  },
  {
    id: 814853,
    stock: "TSLA",
    timestamp: "2020-07-20T09:39:00",
    date: "2020-07-20",
    time: "09:38:00",
    open: 301.62,
    high: 302,
    low: 300.96,
    close: 301.14,
    average: 301.48,
    is_regular: true,
    change: -0.0016,
  },
];

/**
 *
 * Holds the actual single chart
 */
export default function RegularHoursChart(props) {
  const date = props.data[0].date;

  return (
    <span>
      <div style={{ textAlign: "center", color: "gray" }}> </div>
      <VictoryChart
        containerComponent={<VictoryVoronoiContainer responsive={false} />}
        width={4000}
        height={700}
      >
        <VictoryAxis dependentAxis />
        <VictoryAxis tickCount={4} tickFormat={x => x.slice(0, 5)} />
        <VictoryCandlestick
          data={props.data}
          x="time"
          candleRatio={0.8}
          labels={({ datum }) =>
            `open:${datum.open}\n high:${datum.high}\n low:${datum.low}\n close:${datum.close}`
          }
          labelComponent={<VictoryTooltip />}
          dataComponent={
            <Candle
              events={{
                onClick: (e, props) => console.log(props.datum.open),
              }}
            />
          }
        />
      </VictoryChart>
    </span>
  );
}

// <ResponsiveContainer width="100%" height={300}>
//   <ComposedChart data={props.data}>
//     <Line
//       type="monotone"
//       dataKey="open"
//       stroke="#8884d8"
//       isAnimationActive={false}
//     />
//     <Line
//       type="monotone"
//       dataKey="average"
//       stroke="#13152b"
//       isAnimationActive={false}
//       dot={false}
//       strokeWidth={2}
//     />
//     <Line
//       type="linear"
//       dataKey="low"
//       stroke="red"
//       isAnimationActive={false}
//     />

//     <XAxis
//       dataKey="time"
//       tickFormatter={x => x.slice(0, 5)}
//       tickCount="5"
//     />
//     <YAxis domain={["dataMin", "dataMax"]} />
//     <Tooltip />
//   </ComposedChart>
// </ResponsiveContainer>
