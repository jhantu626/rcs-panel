import React, { useState } from "react";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CreateTemplates = () => {
  //STATE VARIABLES
  const [templateName, setTemplateName] = useState("");

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      {/* PAGE HEADER */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Create RCS Template
          </h1>
          <div className="mt-4 h-px w-full bg-slate-200"></div>
        </div>

        {/* RIGHT SIDE - Action Buttons */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all">
            Cancel
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-[1.01] active:scale-[0.98] transition-all">
            Submit
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA - TWO PANEL LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-280px)]">
        {/* LEFT PANEL - FORM (SCROLLABLE) */}
        <div className="lg:col-span-8 overflow-y-auto">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5 p-6 space-y-6">
            {/* SECTION 1 - Username */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Username
              </label>
              <p className="text-xs text-slate-500">
                Please select the user for whom you would like to create a
                template
              </p>
              <input
                type="text"
                disabled
                value="Turain_Soft_promo1"
                className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 
                text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2
                 focus:ring-blue-500/20 focus:outline-none shadow-sm cursor-not-allowed"
                aria-disabled
              />
            </div>

            {/* SECTION 2 - Bot Name and Type */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Bot Name and Type
              </label>
              <p className="text-xs text-slate-500">
                Select the user above to see a list of Bot Name and Type
              </p>
              <div className="relative">
                <Select
                  options={options}
                  placeholder="Select Bot Name and Type..."
                  classNamePrefix="react-select"
                />
              </div>
            </div>

            {/* SECTION 3 - Template Name */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Template Name
              </label>
              <p className="text-xs text-slate-500">
                Name your template using lowercase letters, alphanumeric
                characters, and underscores
              </p>
              <div className="relative">
                <input
                  type="text"
                  value={templateName}
                  onChange={(e) => {
                    if (e.target.value.length < 20) {
                      setTemplateName(e.target.value);
                    }
                  }}
                  placeholder="Enter template name"
                  className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 pr-16 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none shadow-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <span className="text-xs text-slate-400">{templateName.length}/20</span>
                </div>
              </div>
            </div>

            {/* SECTION 4 - Template Type */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Template Type
              </label>
              <div className="relative">
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 shadow-sm cursor-not-allowed hover:border-blue-400 transition-all">
                  <span className="text-sm text-slate-600">
                    Rich Media Card
                  </span>
                  <svg
                    className="h-4 w-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* EXTRA SPACING FOR SCROLL DEMONSTRATION */}
            <div className="h-20"></div>
          </div>
        </div>

        {/* RIGHT PANEL - PREVIEW (FIXED/NON-SCROLLABLE) */}
        <div className="lg:col-span-4">
          <div className="sticky top-0 rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5 p-3">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Preview
            </h2>

            {/* RCS Card Preview Mock - Total height = Image width */}
            <div className="rounded-xl border border-slate-300 bg-white shadow-lg overflow-hidden">
              {/* Top Media Block - 3:1 Aspect Ratio (1440x480) */}
              <div
                className="relative w-full bg-slate-200"
                style={{ aspectRatio: "3/1" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="h-12 w-12 text-slate-400 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-xs text-slate-500">1440 × 480</p>
                  </div>
                </div>
              </div>

              {/* Bottom Content Block - Height is 2/3 of width (so total card height = width) */}
              <div
                className="relative w-full bg-slate-50"
                style={{ aspectRatio: "3/2" }}
              >
                {/* Blank area for content */}
              </div>
            </div>

            <p className="mt-4 text-xs text-center text-slate-500">
              Rich media card preview (1440×480)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplates;
