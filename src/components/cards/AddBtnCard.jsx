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
        <ButtonInput
          label="Text"
          value={text}
          maxLength={25}
          placeholder="Enter text"
          onChange={(value) => {
            onUpdate(index, "text", value);
          }}
          showVariableButton={false}
        />

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
