import React from "react";
import { motion } from "framer-motion";
import { Plus, MoreHorizontal, Calendar, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

const projects = [
  {
    id: 1,
    title: "Landing Page Redesign",
    client: "Stark Industries",
    deadline: "Oct 24, 2023",
    status: "In Progress",
    progress: 65,
    icon: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
  {
    id: 2,
    title: "Mobile App Development",
    client: "Wayne Ent.",
    deadline: "Nov 12, 2023",
    status: "Pending",
    progress: 15,
    icon: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
  {
    id: 3,
    title: "Dashboard Refresh",
    client: "Cyberdyne",
    deadline: "Sep 30, 2023",
    status: "Completed",
    progress: 100,
    icon: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    client: "Acme Corp",
    deadline: "Dec 15, 2023",
    status: "In Progress",
    progress: 42,
    icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
];

const StatusBadge = ({ status }) => {
  const styles = {
    Completed: "bg-pink-50 text-pink-600",
    "In Progress": "bg-blue-50 text-blue-600",
    Pending: "bg-orange-50 text-orange-600",
  };

  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-xs font-semibold",
        styles[status],
      )}
    >
      {status}
    </span>
  );
};

const ProjectList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 col-span-1 lg:col-span-2"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-gray-800">Active Projects</h3>
        <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
          <Plus size={16} />
          <span>New Project</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-50">
              <th className="pb-4 pl-2">Project info</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Deadline</th>
              <th className="pb-4">Progress</th>
              <th className="pb-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {projects.map((project) => (
              <tr
                key={project.id}
                className="group hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 pl-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={project.icon}
                      alt=""
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-400">{project.client}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <StatusBadge status={project.status} />
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{project.deadline}</span>
                  </div>
                </td>
                <td className="py-4 w-32">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-pink-500 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-500">
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="py-4 text-right pr-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-center">
        <button className="text-gray-500 text-sm font-medium hover:text-pink-600 flex items-center gap-1 transition-colors">
          View All Projects <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectList;
