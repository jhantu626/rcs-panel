import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const cn = (...inputs) => twMerge(clsx(inputs));

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  isPrimary = false,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "p-6 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:shadow-lg",
        isPrimary
          ? "bg-pink-600 text-white shadow-xl shadow-pink-200"
          : "bg-white text-gray-800 shadow-sm border border-gray-100 hover:border-pink-100",
      )}
    >
      {isPrimary && (
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      )}

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div
          className={cn(
            "p-3 rounded-2xl",
            isPrimary ? "bg-white/20 text-white" : "bg-pink-50 text-pink-600",
          )}
        >
          <Icon size={24} />
        </div>

        {trend && (
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
              isPrimary
                ? "bg-white/20 text-white"
                : trend === "up"
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-600",
            )}
          >
            {trend === "up" ? (
              <ArrowUpRight size={14} />
            ) : (
              <ArrowDownRight size={14} />
            )}
            <span>{trendValue}</span>
          </div>
        )}
      </div>

      <div className="relative z-10">
        <h3
          className={cn(
            "text-sm font-medium mb-1",
            isPrimary ? "text-pink-100" : "text-gray-400",
          )}
        >
          {title}
        </h3>
        <p className="text-3xl font-bold tracking-tight">{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
