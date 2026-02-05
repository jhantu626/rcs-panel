import React from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";

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

const ButtonSelectInput = ({
  label,
  options = [],
  value,
  onUpdate,
  index,
  keyToUpdate,
}) => {
  return (
    <div className="shrink-0">
      <label className="block text-[13px] font-medium text-slate-900 mb-1.5 ml-0.5">
        {label}
      </label>

      <Select
        options={options}
        value={value}
        onChange={(value) => {
          onUpdate(index, keyToUpdate, value);
        }}
        styles={customSelectStyles}
        components={animatedComponents}
        isSearchable={false}
        menuPosition="fixed"
      />
    </div>
  );
};

export default ButtonSelectInput;
