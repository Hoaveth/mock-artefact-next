import React from 'react';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { year: 2015, numberOfPoorInstallations: 3, numberOfGoodInstallations: 10 },
  { year: 2016, numberOfPoorInstallations: 5, numberOfGoodInstallations: 12 },
  { year: 2018, numberOfPoorInstallations: 5, numberOfGoodInstallations: 1 },
  { year: 2020, numberOfPoorInstallations: 3, numberOfGoodInstallations: 25 },
  { year: 2023, numberOfPoorInstallations: 10, numberOfGoodInstallations: 0 },
];

const getMaxYValue = (data) => {
  let max = -Infinity;
  for (const item of data) {
    if (item.numberOfPoorInstallations > max)
      max = item.numberOfPoorInstallations;
    if (item.numberOfGoodInstallations > max)
      max = item.numberOfGoodInstallations;
  }
  return max;
};

const generateYTicks = (maxValue: number) => {
  const extendedMaxValue = Math.ceil(maxValue / 10) * 10;

  console.log(extendedMaxValue);

  const ticks = [];
  for (let i = 0; i <= extendedMaxValue; i += 10) {
    ticks.push(i);
  }
  return ticks;
};

const maxYValue = getMaxYValue(data);
const yTicks = generateYTicks(maxYValue);

const SimpleLineChart = () => (
  <div
    style={{
      textAlign: 'center',
      border: '1px solid gray',
      padding: '20px',
      borderRadius: '10px',
    }}
  >
    <h2>Number of Urgent and Excellent Installations Over Time</h2>
    <LineChart
      width={600}
      height={250}
      data={data}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      style={{ textAlign: 'center', border: 'none!important' }}
    >
      <Line
        type="linear"
        dataKey="numberOfPoorInstallations"
        stroke="red"
        strokeWidth={2}
        name="Number of Very Poor Installations"
        dot={{ stroke: 'blue', strokeWidth: 1, fill: 'blue' }}
      />
      <Line
        type="linear"
        dataKey="numberOfGoodInstallations"
        stroke="green"
        strokeWidth={2}
        name="Number of Excellent Installations"
        dot={{ stroke: 'yellow', strokeWidth: 1, fill: 'yellow' }}
      />
      <CartesianGrid vertical={false} />
      <YAxis
        name="Number of Installations"
        type="number"
        ticks={yTicks}
        interval={'preserveEnd'}
        axisLine={false}
        domain={[0, 'dataMax']}
        tickLine={false}
      />
      <XAxis
        dataKey="year"
        type="number"
        domain={['auto', 'auto']}
        name="Year"
        padding={{ left: 50 }}
        allowDecimals={false}
        axisLine={false}
        height={50}
        dy={10}
        tickLine={false}
      />

      <Tooltip />
      <Legend wrapperStyle={{ fontSize: '12px', color: 'gray!important' }} />
    </LineChart>
  </div>
);

export default SimpleLineChart;
