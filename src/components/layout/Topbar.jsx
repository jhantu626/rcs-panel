import React from "react";
import { Search, Bell, MessageSquare, Menu } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

const Topbar = () => {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 px-6 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full max-w-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search tasks, projects, teams..."
            className="block w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none placeholder-gray-400 text-gray-700"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
          <MessageSquare size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>

        <button className="flex items-center gap-2 hover:bg-gray-50 p-1.5 rounded-full pr-3 transition-colors">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
          />
          <div className="flex flex-col items-start hidden sm:flex">
            <span className="text-sm font-semibold text-gray-700 leading-none">
              Oliver S.
            </span>
            <span className="text-[10px] text-gray-400 leading-none mt-1">
              Admin
            </span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
