import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "S", uv: 20 },
  { name: "M", uv: 45 },
  { name: "T", uv: 30 },
  { name: "W", uv: 55 },
  { name: "T", uv: 40 },
  { name: "F", uv: 70 },
  { name: "S", uv: 35 },
];

const AnalyticsChart = ({ title = "PERFORMANCE ANALYSIS" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <select className="bg-gray-50 border-none text-xs font-semibold text-gray-500 rounded-lg py-1 px-3 outline-none cursor-pointer hover:bg-gray-100 transition-colors">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <div className="flex-1 w-full min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={34}>
            <CartesianGrid
              strokeDasharray="3 4"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12, fontWeight: 600 }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip
              cursor={{ fill: "#f9fafb" }}
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <Bar dataKey="uv" radius={[8, 8, 8, 8]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 5 ? "#059669" : "#e5e7eb"}
                  className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default AnalyticsChart;
