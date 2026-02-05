import React, { useState } from "react";

const ButtonInput = ({
  label = "",
  value = "",
  maxLength = 15,
  type = "text",
  placeholder = "",
  showVariableButton = true,
  onChange = (type = "normal", value, onSuccess = () => {}) => {},
}) => {
  const [variableAdded, setVariableAdded] = useState(false);
  return (
    <div className="flex-1 min-w-[220px]">
      {/* Label - Standard typography matching image */}
      <label className="block text-[13px] font-medium text-slate-900 mb-1.5 ml-0.5">
        {label}
      </label>

      <div className="relative group">
        <input
          value={value}
          type={type}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) {
              onChange("normal", e.target.value, () => {});
            }
          }}
          className="w-full h-[42px] rounded-lg border border-slate-200 bg-white px-4 pr-20 text-[14px] 
          transition-all placeholder:text-slate-400 text-slate-700
          hover:border-slate-300 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 focus:outline-none 
          disabled:bg-slate-50 disabled:cursor-not-allowed"
          placeholder={placeholder}
          disabled={variableAdded}
        />

        {/* Character counter inside input - Subtle styling */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <span className="text-[13px] text-slate-400 tabular-nums">
            {value.length}/{maxLength}
          </span>
        </div>
      </div>

      {/* Bottom Action - Text link style matching image */}
      {showVariableButton && (
        <div className="flex justify-end mt-1.5 px-1">
          <button
            onClick={() => {
              onChange(variableAdded ? "remove" : "add", "", () => {
                setVariableAdded((prev) => !prev);
              });
            }}
            className="text-[13px] font-medium text-slate-500 hover:text-blue-600 transition-colors
            flex items-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {variableAdded ? (
              <span>- Remove Variable</span>
            ) : (
              <span>+ Add Variable</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonInput;
