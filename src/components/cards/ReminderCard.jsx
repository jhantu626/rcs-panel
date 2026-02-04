import React from "react";
import { motion } from "framer-motion";
import { Clock, Video } from "lucide-react";

const ReminderCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between h-full relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl -z-0 translate-x-10 -translate-y-10"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl">
            <Video size={24} />
          </div>
          <span className="bg-gray-50 px-2 py-1 rounded-lg text-xs font-semibold text-gray-500">
            Upcoming
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-800 mb-2 leading-tight">
          Design Team Sync
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          Discussion about the new mobile navigation flow.
        </p>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 font-medium">
          <Clock size={16} className="text-orange-400" />
          <span>10:00 AM - 11:30 AM</span>
        </div>
      </div>

      <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
        Start Meeting
      </button>
    </motion.div>
  );
};

export default ReminderCard;
