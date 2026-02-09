import React, { useState } from "react";
import {
  Search,
  Download,
  Plus,
  MoreVertical,
  Filter,
  ChevronDown,
  Bot,
} from "lucide-react";
import { Link } from "react-router";

const Users = () => {
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [billingFilter, setBillingFilter] = useState("All Billing");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample user data based on the screenshot
  const users = [
    {
      username: "JKchandra_promo1",
      userType: "User",
      billingType: "prepaid",
      onboardedOn: "Feb 6, 2026, 4:23:44 PM",
      lastTransaction: "300,000",
      currentBalance: "0",
      bots: true,
      status: "Active",
    },
    {
      username: "New_pratima_promo1",
      userType: "User",
      billingType: "prepaid",
      onboardedOn: "Feb 5, 2026, 11:38:27 AM",
      lastTransaction: "50,000",
      currentBalance: "50,000",
      bots: true,
      status: "Active",
    },
    {
      username: "City_style_promo1",
      userType: "User",
      billingType: "prepaid",
      onboardedOn: "Jan 15, 2026, 3:07:04 PM",
      lastTransaction: "0",
      currentBalance: "0",
      bots: false,
      status: "Active",
    },
    {
      username: "Oak_promo1",
      userType: "User",
      billingType: "prepaid",
      onboardedOn: "Jan 6, 2026, 1:25:41 PM",
      lastTransaction: "0",
      currentBalance: "0",
      bots: true,
      status: "Active",
    },
    {
      username: "Amrita_promo1",
      userType: "User",
      billingType: "prepaid",
      onboardedOn: "Dec 27, 2025, 4:53:54 PM",
      lastTransaction: "100,000",
      currentBalance: "99,174",
      bots: true,
      status: "Active",
    },
    {
      username: "Pathway_promo_1",
      userType: "User",
      billingType: "prepaid",
      onboardedOn: "Dec 18, 2025, 11:43:45 AM",
      lastTransaction: "500,000",
      currentBalance: "485,329",
      bots: true,
      status: "Active",
    },
    {
      username: "Seven_Dimension_Promo1",
      userType: "User",
      billingType: "prepaid",
      onboardedOn: "Dec 1, 2025, 4:50:13 PM",
      lastTransaction: "300,000",
      currentBalance: "310,715",
      bots: true,
      status: "Active",
    },
    {
      username: "Bengal_store_promo1",
      userType: "User",
      billingType: "prepaid",
      onboardedOn: "Nov 6, 2025, 4:20:50 PM",
      lastTransaction: "50,000",
      currentBalance: "31,167",
      bots: true,
      status: "Active",
    },
    {
      username: "Cbm_promo1",
      userType: "User",
      billingType: "prepaid",
      onboardedOn: "Oct 20, 2025, 12:01:27 PM",
      lastTransaction: "1,100,000",
      currentBalance: "640,638",
      bots: true,
      status: "Active",
    },
    {
      username: "Aditya_Estate_Promo1",
      userType: "User",
      billingType: "prepaid",
      onboardedOn: "Oct 16, 2025, 5:20:09 PM",
      lastTransaction: "100,000",
      currentBalance: "64,003",
      bots: true,
      status: "Active",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and view all your users
          </p>
        </div>
        <Link to={"/add-user"} className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-5 py-2.5 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 font-medium">
          <Plus size={18} />
          <span>Add User</span>
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 min-w-[240px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by Username"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none placeholder-gray-400 text-gray-700"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-gray-50 border-none rounded-xl px-4 py-2.5 pr-10 text-sm text-gray-700 focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none cursor-pointer font-medium"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* Billing Filter */}
          <div className="relative">
            <select
              value={billingFilter}
              onChange={(e) => setBillingFilter(e.target.value)}
              className="appearance-none bg-gray-50 border-none rounded-xl px-4 py-2.5 pr-10 text-sm text-gray-700 focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none cursor-pointer font-medium"
            >
              <option>All Billing</option>
              <option>Prepaid</option>
              <option>Postpaid</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* Download Button */}
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2.5 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 font-medium">
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Username
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  User Type
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Billing Type
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Onboarded On
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Last Transaction
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Current Balance
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Bots
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-gray-700">
                      {user.username}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">
                      {user.userType}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">
                      {user.billingType}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">
                      {user.onboardedOn}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-gray-700">
                      {user.lastTransaction}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-gray-700">
                      {user.currentBalance}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50">
                      <Bot
                        size={16}
                        className={
                          user.bots ? "text-blue-500" : "text-gray-300"
                        }
                      />
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium text-green-600">
                        {user.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical size={18} className="text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
