import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const members = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Designer",
    status: "online",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    id: 2,
    name: "Michael Foster",
    role: "Frontend Dev",
    status: "offline",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    id: 3,
    name: "Emily Wilson",
    role: "Copywriter",
    status: "online",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Backend Dev",
    status: "busy",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
  },
];

const TeamList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-gray-800">Team Members</h3>
        <button className="p-2 bg-pink-50 text-pink-600 rounded-xl hover:bg-pink-100 transition-colors">
          <Plus size={18} />
        </button>
      </div>

      <div className="space-y-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 group cursor-pointer p-2 hover:bg-gray-50 rounded-xl transition-all -mx-2"
          >
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  member.status === "online"
                    ? "bg-green-500"
                    : member.status === "busy"
                      ? "bg-red-500"
                      : "bg-gray-300"
                }`}
              ></span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-xs text-gray-400">{member.role}</p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-500">
                Message
              </span>
            </div>
          </div>
        ))}

        <button className="w-full py-2 border border-dashed border-gray-200 rounded-xl text-gray-400 text-sm hover:border-pink-300 hover:text-pink-600 transition-all flex items-center justify-center gap-2 mt-2">
          View All Members
        </button>
      </div>
    </motion.div>
  );
};

export default TeamList;
