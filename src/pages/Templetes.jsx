import React from "react";
import {
  Search,
  Plus,
  Trash2,
  Eye,
  RotateCcw,
  ChevronDown,
  FileText,
} from "lucide-react";

const Templetes = () => {
  // Static Data
  const templatesData = [
    {
      id: 1,
      name: "Welcome Bot flow",
      templateId: "TMP-2024-001",
      type: "Marketing",
      botName: "Onboarding Bot",
      botId: "BOT-8821",
      lastUpdated: "2 mins ago",
      status: "Approved",
      reason: "-",
      user: "USR-7721",
    },
    {
      id: 2,
      name: "Order Confirmation",
      templateId: "TMP-2024-002",
      type: "Transactional",
      botName: "Sales Helper",
      botId: "BOT-1102",
      lastUpdated: "1 hour ago",
      status: "Pending",
      reason: "Under Review",
      user: "USR-3321",
    },
    {
      id: 3,
      name: "Password Reset",
      templateId: "TMP-2024-003",
      type: "Utility",
      botName: "Support AI",
      botId: "BOT-9931",
      lastUpdated: "1 day ago",
      status: "Rejected",
      reason: "Policy Violation",
      user: "USR-1123",
    },
    {
      id: 4,
      name: "Holiday Promo",
      templateId: "TMP-2024-004",
      type: "Marketing",
      botName: "Sales Helper",
      botId: "BOT-1102",
      lastUpdated: "3 days ago",
      status: "Approved",
      reason: "-",
      user: "USR-5542",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      {/* PAGE HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Templates
        </h1>
        <div className="mt-4 h-px w-full bg-slate-200"></div>
      </div>

      {/* TOP ACTION TOOLBAR */}
      <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* LEFT SIDE ELEMENTS */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Dropdown Styled Filter */}
          <div className="relative min-w-[200px] cursor-not-allowed group">
            <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all hover:border-blue-400">
              <span className="text-sm font-medium text-slate-600">
                Template Name
              </span>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>
          </div>

          {/* Search Input */}
          <div className="flex flex-1 items-center gap-2">
            <div className="relative flex-1 min-w-[280px]">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Enter Template Name"
                className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none shadow-sm"
                readOnly
              />
            </div>

            {/* Search Button */}
            <button className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-colors">
              <Search className="h-4 w-4" />
            </button>

            {/* Reset Button */}
            <button className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-600 shadow-sm hover:bg-slate-50 hover:text-blue-600 transition-colors">
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE ELEMENTS */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2.5 text-rose-500 shadow-sm hover:bg-rose-50 hover:border-rose-200 transition-colors">
            <Trash2 className="h-5 w-5" />
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-[1.01] active:scale-[0.98] transition-all">
            <Plus className="h-5 w-5" />
            <span>Create Template</span>
          </button>
        </div>
      </div>

      {/* MAIN DATA TABLE */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-4 font-semibold text-slate-600 w-12 text-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    disabled
                  />
                </th>
                <th className="px-4 py-4 font-semibold text-slate-600">
                  User ID
                </th>
                <th className="px-4 py-4 font-semibold text-slate-600">
                  Template Name
                </th>
                <th className="px-4 py-4 font-semibold text-slate-600">
                  Template ID
                </th>
                <th className="px-4 py-4 font-semibold text-slate-600">Type</th>
                <th className="px-4 py-4 font-semibold text-slate-600">
                  Bot Name
                </th>
                <th className="px-4 py-4 font-semibold text-slate-600">
                  Bot ID
                </th>
                <th className="px-4 py-4 font-semibold text-slate-600">
                  Last Updated
                </th>
                <th className="px-4 py-4 font-semibold text-slate-600">
                  Status
                </th>
                <th className="px-4 py-4 font-semibold text-slate-600">
                  Reason
                </th>
                <th className="px-4 py-4 font-semibold text-slate-600 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {templatesData.map((template) => (
                <tr
                  key={template.id}
                  className="group transition-colors hover:bg-blue-50/40"
                >
                  <td className="px-6 py-4 text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20"
                      disabled
                    />
                  </td>
                  <td className="px-4 py-4 font-medium text-slate-500">
                    {template.user}
                  </td>
                  <td className="px-4 py-4 font-semibold text-slate-900">
                    {template.name}
                  </td>
                  <td className="px-4 py-4 text-slate-500 font-mono text-xs bg-slate-100/50 rounded px-1.5 py-0.5 inline-block">
                    {template.templateId}
                  </td>
                  <td className="px-4 py-4 text-slate-600">{template.type}</td>
                  <td className="px-4 py-4 text-slate-600">
                    {template.botName}
                  </td>
                  <td className="px-4 py-4 text-slate-500 font-mono text-xs">
                    {template.botId}
                  </td>
                  <td className="px-4 py-4 text-slate-500">
                    {template.lastUpdated}
                  </td>
                  <td className="px-4 py-4">
                    {/* Status Badges */}
                    {template.status === "Approved" && (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
                        Approved
                      </span>
                    )}
                    {template.status === "Pending" && (
                      <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">
                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-600"></span>
                        Pending
                      </span>
                    )}
                    {template.status === "Rejected" && (
                      <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-600/20">
                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-rose-600"></span>
                        Rejected
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-slate-500">
                    {template.reason !== "-" ? (
                      <span
                        className="truncate max-w-[150px] inline-block text-xs"
                        title={template.reason}
                      >
                        {template.reason}
                      </span>
                    ) : (
                      <span className="text-slate-300">-</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-blue-600 transition-all">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination / Footer Dummy */}
        <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 text-xs text-slate-500">
          <span>Showing 1 to 4 of 4 entries</span>
          <div className="flex gap-1">
            <button
              className="rounded px-2 py-1 hover:bg-slate-100 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="rounded bg-blue-50 px-2 py-1 font-semibold text-blue-600">
              1
            </button>
            <button className="rounded px-2 py-1 hover:bg-slate-100" disabled>
              Next
            </button>
          </div>
        </div>
      </div>

      {/* EMPTY STATE DESIGN */}
      <div className="mt-12 flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/50 py-16 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-slate-100 p-4 ring-1 ring-slate-200">
          <FileText className="h-8 w-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">
          No Templates Found
        </h3>
        <p className="mt-1 max-w-sm text-sm text-slate-500">
          Get started by creating your first template. It will appear here once
          created.
        </p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition-all">
          <Plus className="h-4 w-4 text-slate-500" />
          Create First Template
        </button>
      </div>
    </div>
  );
};

export default Templetes;
