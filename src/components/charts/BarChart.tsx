import React from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { CustomXTick, CustomYTick } from '@/components/charts';

const SimpleBarChart: React.FC = () => {
  interface CustomTooltipProps {
    active?: boolean;
    payload?: {
      value: string | number;
      fill: string;
      dataKey: string;
    }[];
  }

  const data = [
    {
      name: 'Mural',
      unknown: 0,
      veryPoor: 0,
      poor: 1,
      good: 4,
      great: 8,
      excellent: 3,
    },
    {
      name: 'Sculpture',
      unknown: 0,
      veryPoor: 4,
      poor: 10,
      good: 1,
      great: 5,
      excellent: 3,
    },
    {
      name: 'Statue',
      unknown: 3,
      veryPoor: 2,
      poor: 5,
      good: 1,
      great: 2,
      excellent: 3,
    },
    {
      name: 'Digital',
      unknown: 0,
      veryPoor: 1,
      poor: 5,
      good: 1,
      great: 2,
      excellent: 3,
    },
  ];

  const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const renderLegendText = (value: string) => {
    return (
      <span style={{ color: 'black', fontSize: '14px' }}>
        {value === 'veryPoor' ? 'Very Poor' : capitalizeFirstLetter(value)}
      </span>
    );
  };

  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload) {
      return payload.map((item) => {
        return (
          <div
            key={item.dataKey}
            className="custom-tooltip"
            style={{
              backgroundColor: 'white',
              padding: '4px',
            }}
          >
            <p
              style={{
                fontSize: '12px',
              }}
            >
              {item.dataKey === 'veryPoor'
                ? 'Very Poor'
                : capitalizeFirstLetter(item.dataKey)}
              : {item.value}
            </p>
          </div>
        );
      });
    }

    return null;
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
      <h2>Condition Summary Per Installation Type</h2>
      <ResponsiveContainer width="100%" aspect={2.5 / 1.0}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={<CustomXTick />}
          />
          <YAxis tickLine={false} axisLine={false} tick={<CustomYTick />} />
          <Tooltip content={<CustomTooltip />} />

          <Legend
            formatter={renderLegendText}
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ lineHeight: '40px', marginLeft: '25px' }}
          />

          <Bar dataKey="unknown" stackId="a" fill="gray" barSize={50} />
          <Bar dataKey="veryPoor" stackId="a" fill="red" />
          <Bar dataKey="poor" stackId="a" fill="orange" />
          <Bar dataKey="good" stackId="a" fill="yellow" />
          <Bar dataKey="great" stackId="a" fill="lightgreen" />
          <Bar dataKey="excellent" stackId="a" fill="green" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
