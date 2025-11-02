import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const LineChartCard = ({ sales }) => {
  // Hitung best category per month
  const lineData = useMemo(() => {
    const map = {};

    sales.forEach((item) => {
      const month = new Date(item.date).toLocaleString("default", {
        month: "short",
        year: "numeric",
      });

      if (!map[month]) map[month] = {};
      if (!map[month][item.category]) map[month][item.category] = 0;

      map[month][item.category] += item.stock;
    });

    // Ambil kategori terbaik tiap bulan
    return Object.entries(map).map(([month, categories]) => {
      const best = Object.entries(categories).reduce(
        (a, b) => (b[1] > a[1] ? b : a)
      );
      return { month, category: best[0], stock: best[1] };
    });
  }, [sales]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium mb-2">Best Category per Month</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={lineData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value, name, props) => [`${value}`, props.payload.category]} />
          <Line
            type="monotone"
            dataKey="stock"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCard;
