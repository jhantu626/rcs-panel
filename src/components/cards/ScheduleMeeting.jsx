import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const ScheduleMeeting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl -z-0 translate-x-10 -translate-y-10"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl">
            <Clock size={24} />
          </div>
          <h3 className="font-bold text-lg text-gray-800">Schedule Meeting</h3>
        </div>

        <div className="space-y-4 mb-auto">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Meeting Title"
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-100 outline-none text-gray-700 placeholder-gray-400 font-medium"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">
                Date
              </label>
              <input
                type="date"
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-100 outline-none text-gray-700 font-medium"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">
                Time
              </label>
              <input
                type="time"
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-100 outline-none text-gray-700 font-medium"
              />
            </div>
          </div>
        </div>

        <button className="w-full py-3 mt-6 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
          Schedule Meeting
        </button>
      </div>
    </motion.div>
  );
};

export default ScheduleMeeting;
