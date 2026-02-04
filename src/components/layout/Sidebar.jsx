import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Megaphone,
  Share2,
  FileText,
  Wrench,
  Download,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const cn = (...inputs) => twMerge(clsx(inputs));

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activePath, setActivePath] = useState("/dashboard");
  const [expandedMenus, setExpandedMenus] = useState(["/dashboard"]);

  const menuItems = [
    {
      icon: Megaphone,
      label: "Broadcast",
      path: "/broadcast",
      children: [
        { label: "Campaign List", path: "/broadcast/campaign-list" },
        { label: "Create Campaign", path: "/broadcast/create-campaign" },
        { label: "Campaign Report", path: "/broadcast/campaign-report" },
        { label: "Downloads", path: "/broadcast/downloads" },
      ],
    },
    {
      icon: Share2,
      label: "Channels",
      path: "/dashboard",
      children: [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Report", path: "/report" },
      ],
    },
    { icon: FileText, label: "Templates", path: "/templates" },
    { icon: Wrench, label: "Utilities", path: "/utilites" },
    { icon: Download, label: "Downloads", path: "/downloads" },
    { icon: Users, label: "Audience", path: "/audience" },
  ];

  const toggleSubmenu = (path) => {
    setExpandedMenus((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path],
    );
  };

  const handleItemClick = (item) => {
    if (item.children) {
      if (collapsed) {
        setCollapsed(false);
        setTimeout(() => toggleSubmenu(item.path), 150);
      } else {
        toggleSubmenu(item.path);
      }
    } else {
      setActivePath(item.path);
    }
  };

  const isExpanded = (path) => expandedMenus.includes(path);
  const isActive = (path) =>
    activePath === path || activePath.startsWith(path + "/");

  return (
    <aside
      className={cn(
        "h-screen bg-white border-r border-gray-100 flex flex-col transition-all duration-300 relative",
        collapsed ? "w-20" : "w-64",
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-8 bg-white border border-gray-100 p-1 rounded-full shadow-sm hover:bg-gray-50 text-gray-500 z-50"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0">
            <img src="./public/images/logo/logo.png" alt="Logo" />
          </div>
          {!collapsed && (
            <span className="font-bold text-xl text-gray-800 tracking-tight">
              Turain Software
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6 flex flex-col gap-6 overflow-y-auto">
        {/* Main Menu */}
        <div className="px-3">
          {!collapsed && (
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Menu
            </h3>
          )}
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <div key={item.path}>
                <button
                  onClick={() => handleItemClick(item)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                    isActive(item.path) && !item.children
                      ? "bg-pink-50 text-pink-700 font-medium"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
                  )}
                >
                  <item.icon
                    size={20}
                    className={cn(
                      "shrink-0 transition-colors",
                      isActive(item.path) && !item.children
                        ? "text-pink-600"
                        : "text-gray-400 group-hover:text-gray-600",
                    )}
                  />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.children && (
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-200",
                            isExpanded(item.path) ? "rotate-180" : "",
                          )}
                        />
                      )}
                    </>
                  )}
                  {collapsed && isActive(item.path) && !item.children && (
                    <div className="absolute right-0 top-2 bottom-2 w-1 bg-pink-600 rounded-l-full" />
                  )}
                </button>

                {/* Submenu */}
                <AnimatePresence>
                  {item.children && isExpanded(item.path) && !collapsed && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 mt-1 pl-12 pr-2 pb-1">
                        {item.children.map((subItem) => (
                          <button
                            key={subItem.path}
                            onClick={() => setActivePath(subItem.path)}
                            className={cn(
                              "w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-200",
                              activePath === subItem.path
                                ? "text-pink-600 bg-pink-50/50 font-medium"
                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50",
                            )}
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* User Info */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-50">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-bold">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-700">
                John Doe
              </span>
              <span className="text-xs text-gray-400">john@donezo.com</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
