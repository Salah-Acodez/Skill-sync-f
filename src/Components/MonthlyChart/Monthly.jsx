import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jul", score: "10" },
  { month: "Aug", score: "25" },
  { month: "Sep", score: "45" },
  { month: "Oct", score: "72" },
  { month: "Nov", score: "20" },
  { month: "Dec", score: "52" },
  { month: "Jan", score: "25" },
  { month: "Feb", score: "58"},
];

const MonthlyChart = () => {
  return (
    <div className="chart_container">
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={400}
          data={data}
          className="chart"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4461F2" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#4461F2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          />
          <Area
            type="monotone"
            dataKey="score"
            stroke="#6E7BA3"
            strokeWidth={2}
            fill="url(#colorValue)"
            dot={{ fill: "#C1FFE7", stroke: "#07DF8A", strokeWidth: 2, r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
