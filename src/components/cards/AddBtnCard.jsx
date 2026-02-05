import { label } from "framer-motion/client";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  Calendar,
  CalendarDays,
  CornerUpRight,
  Globe,
  Link,
  LocateFixed,
  MapPin,
  MessageCircle,
  Phone,
  ReplyIcon,
  Share,
  X,
} from "lucide-react";
import ButtonInput from "../inputs/ButtonInput";

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
    icon: <Phone size={16} color="#2462eb" />,
  },
  {
    value: "url",
    label: "Url Redirect",
    icon: <Globe size={16} color="#2462eb" />,
  },
  {
    value: "reply",
    label: "Reply",
    icon: <ReplyIcon size={16} color="#2462eb" />,
  },
  {
    value: "viewLocationlatlong",
    label: "View Location(Lat/Long)",
    icon: <MapPin size={16} color="#2462eb" />,
  },
  {
    value: "viewLocationQuery",
    label: "View Location(Location Query)",
    icon: <MapPin size={16} color="#2462eb" />,
  },
  {
    value: "shareLocation",
    label: "Share Location",
    icon: <LocateFixed size={16} color="#2462eb" />,
  },
  {
    value: "createCalendarEvent",
    label: "Create Calendar Event",
    icon: <CalendarDays size={16} color="#2462eb" />,
  },
];

const countryCodeOptions = [
  {
    value: "+91",
    label: "+91",
  },
];

const AddBtnCard = ({
  index,
  selectedAction,
  text = "",
  onClose = () => {},
  onUpdate = (index, key, value) => {},
  phoneNumber = "",
  countryCode = countryCodeOptions[0],
}) => {
  return (
    <div
      className="relative my-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
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
      <div className="flex flex-wrap gap-3 items-start">
        {/* Select */}
        <div className="shrink-0">
          <label className="block text-[13px] font-medium text-slate-900 mb-1.5 ml-0.5">
            Type of Action
          </label>

          <Select
            options={actionTypesOptions}
            value={selectedAction}
            onChange={(value) => {
              onUpdate(index, "selectedAction", value);
            }}
            styles={customSelectStyles}
            components={animatedComponents}
            isSearchable={false}
            menuPosition="fixed"
          />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-[220px]">
          {/* Label - Standard typography matching image */}
          <label className="block text-[13px] font-medium text-slate-900 mb-1.5 ml-0.5">
            Text
          </label>

          <div className="relative group">
            <input
              value={text}
              type="text"
              onChange={(e) => {
                onUpdate(index, "text", e.target.value);
              }}
              className="w-full h-[42px] rounded-lg border border-slate-200 bg-white px-4 pr-20 text-[14px] 
          transition-all placeholder:text-slate-400 text-slate-700
          hover:border-slate-300 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 focus:outline-none 
          disabled:bg-slate-50 disabled:cursor-not-allowed"
              placeholder={'Enter text'}
            />

            {/* Character counter inside input - Subtle styling */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <span className="text-[13px] text-slate-400 tabular-nums">
                {text.length}/20
              </span>
            </div>
          </div>
        </div>

        {selectedAction.value === "dialer" && (
          <>
            {/* Country Code */}
            <div className="shrink-0">
              <label className="block text-[13px] font-medium text-slate-900 mb-1.5 ml-0.5">
                Country Code
              </label>

              <Select
                options={countryCodeOptions}
                value={countryCode}
                onChange={(value) => {
                  onUpdate(index, "countryCode", value);
                }}
                styles={customSelectStyles}
                components={animatedComponents}
                isSearchable={false}
                menuPosition="fixed"
              />
            </div>
            {/* Phone Number */}
            <ButtonInput
              label="Phone Number"
              value={phoneNumber}
              maxLength={15}
              placeholder="Enter number"
              onChange={(type = "normal", value, onSuccess = () => {}) => {
                if (type === "normal") {
                  onUpdate(index, "phoneNumber", value);
                } else if (type === "add") {
                  onUpdate(index, "phoneNumber", "[custom_param]");
                  onSuccess();
                } else {
                  onUpdate(index, "phoneNumber", "");
                  onSuccess();
                }
              }}
              showVariableButton={true}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AddBtnCard;
