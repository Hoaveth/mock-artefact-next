import React from 'react';

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string | number;
    name: string;
  };
}

const CustomYTick: React.FC = ({ x, y, payload }: CustomTickProps) => {
  return (
    <text
      x={x}
      y={y}
      dy={5}
      dx={-5}
      textAnchor="middle"
      fill="#666"
      fontSize="11"
    >
      {payload?.value}
    </text>
  );
};

export default CustomYTick;
