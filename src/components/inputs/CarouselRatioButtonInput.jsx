import { desc } from "framer-motion/client";
import React from "react";

const CarouselRatioButtonInput = ({
  title,
  description,
  option1,
  option2,
  fieldKey,
  value,
  update=(key,value)=>{},
}) => {
  return (
    <div className="border rounded-xl shadow-sm p-4 bg-white">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={fieldKey}
            value={option1}
            className="w-4 h-4"
            checked={value === option1}
            onChange={() => update(fieldKey, option1)}
          />
          <span className="text-sm">{option1}</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={fieldKey}
            value={option2}
            className="w-4 h-4"
            checked={value === option2}
            onChange={() => update(fieldKey, option2)}
          />
          <span className="text-sm">{option2}</span>
        </label>
      </div>
    </div>
  );
};

export default CarouselRatioButtonInput;
