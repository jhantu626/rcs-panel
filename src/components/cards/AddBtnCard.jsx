import { label } from "framer-motion/client";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  CalendarDays,
  Globe,
  LocateFixed,
  MapPin,
  Phone,
  ReplyIcon,
  X,
} from "lucide-react";
import ButtonInput from "../inputs/ButtonInput";
import ButtonSelectInput from "../inputs/ButtonSelectInput";
import { Calendar, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

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
const urlModeOptions = [
  {
    label: "Default (Browser)",
    value: "default",
  },
  {
    label: "Webview - Full",
    value: "webview-full",
  },
  {
    label: "Webview - Tall",
    value: "webview-tall",
  },
  {
    label: "Webview - Half",
    value: "webview-half",
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
  url = "",
  urlMode = urlModeOptions[0],
  latitude = "",
  longitude = "",
  label = "",
  query = "",
  startDate = new Date(),
  endDate = new Date(new Date().setDate(new Date().getDate() + 1)),
  title = "",
  description = "",
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
              max={25}
              type="text"
              onChange={(e) => {
                onUpdate(index, "text", e.target.value);
              }}
              className="w-full h-[42px] rounded-lg border border-slate-200 bg-white px-4 pr-20 text-[14px] 
          transition-all placeholder:text-slate-400 text-slate-700
          hover:border-slate-300 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 focus:outline-none 
          disabled:bg-slate-50 disabled:cursor-not-allowed"
              placeholder={"Enter text"}
            />

            {/* Character counter inside input - Subtle styling */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <span className="text-[13px] text-slate-400 tabular-nums">
                {text.length}/25
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

        {selectedAction.value === "url" && (
          <>
            {/* URL */}
            <ButtonInput
              label="URL/URL to open"
              value={url}
              maxLength={2048}
              placeholder="Enter URL"
              onChange={(type = "normal", value, onSuccess = () => {}) => {
                if (type === "normal") {
                  onUpdate(index, "url", value);
                } else if (type === "add") {
                  onUpdate(index, "url", "[custom_param]");
                  onSuccess();
                } else {
                  onUpdate(index, "url", "");
                  onSuccess();
                }
              }}
              showVariableButton={true}
            />
            <ButtonSelectInput
              index={index}
              label={"Mode"}
              keyToUpdate="urlMode"
              onUpdate={onUpdate}
              options={urlModeOptions}
              value={urlMode}
            />
          </>
        )}

        {selectedAction.value === "viewLocationlatlong" && (
          <>
            <div className="flex-1 min-w-[220px]">
              {/* Label - Standard typography matching image */}
              <label className="block text-[13px] font-medium text-slate-900 mb-1.5 ml-0.5">
                Lattitude*
              </label>

              <div className="relative group">
                <input
                  value={latitude}
                  type="text"
                  onChange={(e) => {
                    onUpdate(index, "latitude", e.target.value);
                  }}
                  className="w-full h-[42px] rounded-lg border border-slate-200 bg-white px-4 pr-20 text-[14px] 
          transition-all placeholder:text-slate-400 text-slate-700
          hover:border-slate-300 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 focus:outline-none 
          disabled:bg-slate-50 disabled:cursor-not-allowed"
                  placeholder={"Enter text"}
                />

                {/* Character counter inside input - Subtle styling */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="text-[13px] text-slate-400 tabular-nums"></span>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[220px]">
              {/* Label - Standard typography matching image */}
              <label className="block text-[13px] font-medium text-slate-900 mb-1.5 ml-0.5">
                Longitude*
              </label>

              <div className="relative group">
                <input
                  value={longitude}
                  type="text"
                  onChange={(e) => {
                    onUpdate(index, "longitude", e.target.value);
                  }}
                  className="w-full h-[42px] rounded-lg border border-slate-200 bg-white px-4 pr-20 text-[14px] 
          transition-all placeholder:text-slate-400 text-slate-700
          hover:border-slate-300 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 focus:outline-none 
          disabled:bg-slate-50 disabled:cursor-not-allowed"
                  placeholder={"Enter text"}
                />

                {/* Character counter inside input - Subtle styling */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="text-[13px] text-slate-400 tabular-nums"></span>
                </div>
              </div>
            </div>
            <ButtonInput
              label="Label"
              value={label}
              maxLength={25}
              placeholder="Enter text"
              onChange={(type = "normal", value, onSuccess = () => {}) => {
                if (type === "normal") {
                  onUpdate(index, "label", value);
                } else if (type === "add") {
                  onUpdate(index, "label", "[custom_param]");
                  onSuccess();
                } else {
                  onUpdate(index, "label", "");
                  onSuccess();
                }
              }}
              showVariableButton={false}
            />
          </>
        )}

        {selectedAction.value === "viewLocationQuery" && (
          <>
            <ButtonInput
              label="Query"
              value={query}
              maxLength={1024}
              placeholder="Enter query"
              onChange={(type = "normal", value, onSuccess = () => {}) => {
                if (type === "normal") {
                  onUpdate(index, "query", value);
                } else if (type === "add") {
                  onUpdate(index, "query", "[custom_param]");
                  onSuccess();
                } else {
                  onUpdate(index, "query", "");
                  onSuccess();
                }
              }}
              showVariableButton={false}
            />
          </>
        )}

        {selectedAction.value === "createCalendarEvent" && (
          <>
            <ButtonInput
              label="Event Title"
              value={title}
              maxLength={100}
              placeholder="Enter text"
              onChange={(type = "normal", value, onSuccess = () => {}) => {
                if (type === "normal") {
                  onUpdate(index, "title", value);
                } else if (type === "add") {
                  onUpdate(index, "title", "[custom_param]");
                  onSuccess();
                } else {
                  onUpdate(index, "title", "");
                  onSuccess();
                }
              }}
              showVariableButton={false}
            />
            <ButtonInput
              label="Event Description"
              value={description}
              maxLength={500}
              placeholder="Enter description"
              onChange={(type = "normal", value, onSuccess = () => {}) => {
                if (type === "normal") {
                  onUpdate(index, "description", value);
                } else if (type === "add") {
                  onUpdate(index, "description", "[custom_param]");
                  onSuccess();
                } else {
                  onUpdate(index, "description", "");
                  onSuccess();
                }
              }}
              showVariableButton={false}
            />
            <div className="shrink-0">
              <label className="block text-[13px] font-medium text-slate-900 mb-1.5 ml-0.5">
                Event Date & Time
              </label>

              <div className="mt-2 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => {
                    console.log("item", item);
                    onUpdate(index, "startDate", item.selection.startDate);
                    onUpdate(index, "endDate", item.selection.endDate);
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={[
                    {
                      startDate: startDate,
                      endDate: endDate,
                      key: "selection",
                    },
                  ]}
                  rangeColors={["#3b82f6"]}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddBtnCard;
