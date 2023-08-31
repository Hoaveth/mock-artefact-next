import React from 'react';

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string | number;
    name: string;
  };
}

const CustomXTick: React.FC<CustomTickProps> = (props) => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y} dy={16} textAnchor="middle" fill="#666" fontSize="11">
      {payload?.value}
    </text>
  );
};

export default CustomXTick;
