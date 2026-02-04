import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Square } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

const TimerCard = () => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(3600 + 120 + 45); // 1h 2m 45s dummy start

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return {
      h: hours.toString().padStart(2, "0"),
      m: minutes.toString().padStart(2, "0"),
      s: secs.toString().padStart(2, "0"),
    };
  };

  const time = formatTime(seconds);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-gray-900 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between h-full"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative z-10 flex justify-between items-start mb-6">
        <div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">
            Time Tracker
          </h3>
          <p className="text-lg font-semibold">Wireframing</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex items-end gap-1 mb-8">
        <span className="text-4xl font-mono font-bold tracking-wider">
          {time.h}
        </span>
        <span className="text-2xl text-gray-500 font-mono mb-1">:</span>
        <span className="text-4xl font-mono font-bold tracking-wider">
          {time.m}
        </span>
        <span className="text-2xl text-gray-500 font-mono mb-1">:</span>
        <span className="text-4xl font-mono font-bold tracking-wider text-pink-400">
          {time.s}
        </span>
      </div>

      <div className="relative z-10 flex gap-3">
        <button
          onClick={() => setIsActive(!isActive)}
          className={cn(
            "flex-1 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all active:scale-95",
            isActive
              ? "bg-amber-500 hover:bg-amber-600 text-white"
              : "bg-pink-600 hover:bg-pink-700 text-white",
          )}
        >
          {isActive ? (
            <Pause size={18} fill="currentColor" />
          ) : (
            <Play size={18} fill="currentColor" />
          )}
          {isActive ? "Pause" : "Start"}
        </button>

        <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-white">
          <Square size={18} fill="currentColor" />
        </button>
      </div>
    </motion.div>
  );
};

export default TimerCard;
