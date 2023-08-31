import React from 'react';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';

import { CustomXTick, CustomYTick } from '@/components/charts';

const SimpleLineChart: React.FC = () => {
  interface InstallationData {
    year: number;
    numberOfPoorInstallations?: number;
    numberOfGoodInstallations?: number;
  }

  interface InstallationListData extends Array<InstallationData> {}

  interface CustomTooltipProps extends TooltipProps<number, string> {}

  const data: InstallationListData = [
    { year: 2015, numberOfPoorInstallations: 3, numberOfGoodInstallations: 10 },
    { year: 2016, numberOfPoorInstallations: 5, numberOfGoodInstallations: 12 },
    { year: 2018, numberOfPoorInstallations: 5 },
    { year: 2020, numberOfPoorInstallations: 3, numberOfGoodInstallations: 25 },
    { year: 2023, numberOfPoorInstallations: 10, numberOfGoodInstallations: 0 },
  ];

  const getMaxYValue = (data: InstallationListData): number => {
    const maxVal = Math.max(
      ...data.map(
        (item) =>
          (item.numberOfPoorInstallations || 0) +
          (item.numberOfGoodInstallations || 0)
      )
    );
    return Math.ceil(maxVal / 10) * 10;
  };

  const generateYTicks = (maxValue: number): Array<number> => {
    const ticks = [];
    for (let i = 0; i <= maxValue; i += 10) {
      ticks.push(i);
    }
    return ticks;
  };

  const maxYValue = getMaxYValue(data);
  const yTicks = generateYTicks(maxYValue);

  const CustomTooltip: React.FC = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '10px',
          }}
        >
          <p className="label">{payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  const renderLegendText = (value: string) => {
    return <span style={{ color: 'black', fontSize: '14px' }}>{value}</span>;
  };

  return (
    <div
      style={{
        textAlign: 'center',
        border: '1px solid gray',
        paddingTop: '10px',
        borderRadius: '10px',
        width: '100%',
        height: '100%',
      }}
    >
      <h2>Number of Urgent and Excellent Installations Over Time</h2>
      <ResponsiveContainer width="100%" aspect={2.5 / 1.0}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <Line
            type="linear"
            dataKey="numberOfPoorInstallations"
            stroke="red"
            strokeWidth={2}
            name="Number of Very Poor Installations"
            dot={{ stroke: 'blue', strokeWidth: 1, fill: 'blue' }}
            connectNulls
          />
          <Line
            type="linear"
            dataKey="numberOfGoodInstallations"
            stroke="green"
            strokeWidth={2}
            name="Number of Excellent Installations"
            dot={{ stroke: 'yellow', strokeWidth: 1, fill: 'yellow' }}
            connectNulls
          />

          <YAxis
            name="Number of Installations"
            type="number"
            ticks={yTicks}
            axisLine={false}
            domain={[0, 'dataMax']}
            tickLine={false}
            tick={<CustomYTick />}
          />
          <XAxis
            dataKey="year"
            type="number"
            domain={['auto', 'auto']}
            name="Year"
            padding={{ left: 30 }}
            allowDecimals={false}
            axisLine={false}
            height={50}
            dy={10}
            tickLine={false}
            tick={<CustomXTick />}
          />

          <Tooltip content={<CustomTooltip />} />

          <Legend
            formatter={renderLegendText}
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              fontSize: '12px',
              color: 'gray!important',
              marginLeft: '25px',
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;
