import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const BarChartCard = ({ sales }) => {
  const barData = useMemo(() => {
    return sales
      .sort((a, b) => b.stock - a.stock)
      .slice(0, 10)
      .map((item) => ({
        product: item.product,
        stock: item.stock,
        category: item.category,
        price: item.price,
      }));
  }, [sales]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium mb-2">Top 10 Products by Stock</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={barData}
          margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="product" width={150} />
          <Tooltip
            formatter={(value, name, props) => [`${value}`, "Stock"]}
            labelFormatter={(label, payload) =>
              payload.length > 0 ? `${payload[0].payload.category} | ${label}` : label
            }
          />
          <defs>
            <linearGradient id="stockColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#34D399" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Bar dataKey="stock" fill="url(#stockColor)">
            <LabelList dataKey="stock" position="right" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCard;
