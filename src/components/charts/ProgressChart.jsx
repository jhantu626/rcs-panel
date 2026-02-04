import React from "react";
import { motion } from "framer-motion";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const data = [
  {
    name: "Completed",
    uv: 100,
    pv: 2400,
    fill: "#f70389", // pink-600
  },
  {
    name: "In Progress",
    uv: 65,
    pv: 4567,
    fill: "#3b82f6", // blue-500
  },
  {
    name: "Pending",
    uv: 30,
    pv: 1398,
    fill: "#f97316", // orange-500
  },
];

const ProgressChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center relative"
    >
      <h3 className="font-bold text-lg text-gray-800 absolute top-6 left-6">
        Progress
      </h3>

      <div className="w-full h-[250px] relative mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="30%"
            outerRadius="100%"
            barSize={10}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              minAngle={15}
              label={false}
              background
              clockWise
              dataKey="uv"
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <span className="text-3xl font-bold text-gray-800">75%</span>
          <p className="text-xs text-gray-400">Total</p>
        </div>
      </div>

      <div className="flex gap-4 text-xs font-semibold mt-[-20px]">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-pink-500"></span>
          <span className="text-gray-500">Done</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="text-gray-500">Active</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span className="text-gray-500">Pending</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressChart;
