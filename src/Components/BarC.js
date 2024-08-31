import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', value: 4000 },
  { name: 'B', value: 3000 },
  { name: 'C', value: 2000 },
  { name: 'D', value: 2780 },
  { name: 'E', value: 1890 },
];

function BarC() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={false} />
        <YAxis tick={false} />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarC;
