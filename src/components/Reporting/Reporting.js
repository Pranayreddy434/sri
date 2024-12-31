import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Reporting = () => {
  const data = [
    { name: 'LinkedIn Post', value: 10 },
    { name: 'LinkedIn Message', value: 6 },
    { name: 'Email', value: 8 },
    { name: 'Phone Call', value: 4 },
  ];

  return (
    <div className="reporting">
      <h2>Communication Frequency</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Reporting;
