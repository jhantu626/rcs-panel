import React from "react";
import {
  Layers,
  MessageSquare,
  CheckCircle,
  Truck,
  BookOpen,
  Send,
} from "lucide-react";
import StatCard from "../components/cards/StatCard";
import AnalyticsChart from "../components/charts/AnalyticsChart";
import ReminderCard from "../components/cards/ReminderCard";
import ProjectList from "../components/lists/ProjectList";
import TeamList from "../components/lists/TeamList";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Hello, John 👋</h1>
          <p className="text-gray-400 mt-1">Let's check your daily progress.</p>
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {[
            "Yesterday",
            "Last 7 Days",
            "Last 30 Days",
            "Custom Date Range",
          ].map((filter, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-white border border-gray-100 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 hover:border-gray-200 transition-all shadow-sm"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-8">
        <StatCard
          title="Messages Sent"
          value="12,450"
          icon={MessageSquare}
          isPrimary={true}
          delay={0.1}
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          title="Total Success"
          value="11,200"
          icon={CheckCircle}
          delay={0.2}
          trend="up"
          trendValue="+8%"
        />
        <StatCard
          title="Delivered"
          value="10,890"
          icon={Truck}
          delay={0.3}
          trend="up"
          trendValue="+5%"
        />
        <StatCard
          title="Read"
          value="9,450"
          icon={BookOpen}
          delay={0.4}
          trend="down"
          trendValue="-2%"
        />
        <StatCard title="Sent" value="1,560" icon={Send} delay={0.5} />
      </div>

      {/* Performance & Message Types Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Performance Analysis - Takes up 2/3 width on large screens */}
        <div className="xl:col-span-2 min-h-[400px]">
          <AnalyticsChart />
        </div>

        {/* Message Type Cards - Takes up 1/3 width, displayed in a grid */}
        <div className="xl:col-span-1 grid grid-cols-2 gap-4 content-start">
          {[
            {
              title: "Standard Message",
              value: "45%",
              color: "bg-blue-50 text-blue-600",
            },
            {
              title: "Rich Card Message",
              value: "25%",
              color: "bg-purple-50 text-purple-600",
            },
            {
              title: "Carousel Message",
              value: "20%",
              color: "bg-orange-50 text-orange-600",
            },
            {
              title: "Incoming Message",
              value: "10%",
              color: "bg-green-50 text-green-600",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center h-full hover:shadow-md transition-shadow"
            >
              <div className={`p-3 rounded-2xl mb-3 ${item.color}`}>
                <Layers size={20} />
              </div>
              <h4 className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                {item.title}
              </h4>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Projects + Team + Reminder */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-2">
          <ProjectList />
        </div>
        <div className="xl:col-span-1">
          <TeamList />
        </div>
        <div className="xl:col-span-1">
          <ReminderCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
