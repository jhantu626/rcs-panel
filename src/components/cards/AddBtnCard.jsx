import { label } from "framer-motion/client";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { X } from "lucide-react";

const animatedComponents = makeAnimated();
const FIELD_HEIGHT = "42px";

/* ---------- Select Styles ---------- */
const customSelectStyles = {
  container: (base) => ({
    ...base,
    width: "fit-content",
  }),

  control: (base, state) => ({
    ...base,
    display: "inline-flex",
    width: "fit-content",
    minHeight: FIELD_HEIGHT,
    height: FIELD_HEIGHT,
    backgroundColor: "#fff",
    borderColor: state.isFocused ? "#3b82f6" : "#e2e8f0",
    borderRadius: "6px",
    boxShadow: state.isFocused
      ? "0 0 0 1px rgba(59,130,246,.4)"
      : "0 1px 2px rgba(0,0,0,.05)",
    whiteSpace: "nowrap",
    cursor: "pointer",
  }),

  valueContainer: (base) => ({
    ...base,
    padding: "0 10px",
    whiteSpace: "nowrap",
  }),

  singleValue: (base) => ({
    ...base,
    whiteSpace: "nowrap",
    maxWidth: "none",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  menu: (base) => ({
    ...base,
    width: "max-content",
    minWidth: "100%",
  }),
};

/* ---------- Options ---------- */
const actionTypesOptions = [
  {
    value: "dialer",
    label: "Dialer Action",
  },
  {
    value: "url",
    label: "Url Redirect",
  },
  {
    value: "reply",
    label: "Reply",
  },
  {
    value: "viewLocationlatlong",
    label: "View Location(Lat/Long)",
  },
  {
    value: "viewLocationQuery",
    label: "View Location(Location Query)",
  },
  {
    value: "shareLocation",
    label: "Share Location",
  },
  {
    value: "createCalendarEvent",
    label: "Create Calendar Event",
  },
];

const AddBtnCard = ({
  index,
  selectedAction = actionTypesOptions[0],
  text = "",
  setText,
  onClose = () => {},
}) => {
  return (
    <div
      className="relative my-10 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
      key={index}
    >
      {/* Close Button */}
      <button
        className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 
        hover:bg-slate-100 transition-colors"
        onClick={onClose}
      >
        <X size={16} />
      </button>

      {/* FLEX WRAP LAYOUT */}
      <div className="flex flex-wrap gap-3 items-end">
        {/* Select */}
        <div className="space-y-1 shrink-0">
          <label className="text-[11px] font-medium text-slate-500">
            Type of Action
          </label>

          <Select
            options={actionTypesOptions}
            value={selectedAction}
            styles={customSelectStyles}
            components={animatedComponents}
            isSearchable={false}
            menuPosition="fixed"
          />
        </div>

        {/* Text */}
        <div className="space-y-1 min-w-[220px] flex-1">
          <label className="text-[11px] font-medium text-slate-500">Text</label>

          <div className="relative">
            <input
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 25))}
              className="w-full h-[42px] rounded-md border border-slate-200 px-3 text-sm"
              placeholder="Enter text"
            />
            <span className="absolute right-2 top-2 text-[10px] text-slate-400">
              {text.length}/25
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBtnCard;
