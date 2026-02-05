import { Phone } from "lucide-react";
import React, { useState } from "react";
import AddBtnCard from "./AddBtnCard";

const TemplateStandardCard = ({
  body = "",
  setBody,
  actionButtons = [],
  setActionButtons,
}) => {
  const [bodyVariableCount, setBodyVariableCount] = useState(1);

  const addNewButton = () => {
    setActionButtons((prev) => [
      ...prev,
      {
        selectedAction: {
          value: "dialer",
          label: "Dialer Action",
          icon: <Phone size={16} color="#2462eb" />,
        },
        text: "",
        phoneNumber: "",
        countryCode: {
          value: "+91",
          label: "+91",
        },
        url: "",
        urlMode: {
          label: "Default (Browser)",
          value: "default",
        },
        latitude: "",
        longitude: "",
        label: "",
        query: "",
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        title: "",
        description: "",
      },
    ]);
  };

  const updateBtnContent = (index, key, value) => {
    setActionButtons((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
    );
  };

  return (
    <>
      {/* Body Section */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold text-slate-700">
            Body
          </label>
        </div>
        <p className="text-xs text-slate-500">
          Enter the text for your message
        </p>
        <div className="relative">
          <textarea
            placeholder="Enter the body text"
            className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 pr-16 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none shadow-sm resize-none min-h-[120px]"
            maxLength={2000}
            value={body}
            onChange={(e) => {
              e.target.value.length <= 2000 && setBody(e.target.value);
              if (!e.target.value) {
                setBodyVariableCount(1);
              }
            }}
          />
          <div className="absolute bottom-3 right-3 pointer-events-none">
            <span className="text-xs text-slate-400">{body.length}/2500</span>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium 
                    text-slate-700 shadow-sm hover:bg-slate-50 hover:border-blue-500 
                    hover:text-blue-600 transition-all"
            onClick={() => {
              const newText = `[custom_param_desc_${bodyVariableCount}]`;

              if (body.length + newText.length <= 2500) {
                setBody((prev) => prev + newText);
                setBodyVariableCount((prev) => prev + 1);
              }
            }}
          >
            + Variable
          </button>
        </div>
      </div>
      <div className="space-y-1 gap-2">
        <>
          <div className="flex items-center gap-2">
            <label className="block text-sm font-semibold text-slate-700">
              Call to Action/Reply Buttons
            </label>
            <span className="rounded-md bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-600">
              Optional
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Create a Call to Action or Reply Buttons that let customers respond
            to your message or take action. You can add upto 11 buttons
          </p>
        </>
        {actionButtons.map((btn, index) => {
          return (
            <AddBtnCard
              key={index}
              index={index}
              selectedAction={btn.selectedAction}
              countryCode={btn.countryCode}
              phoneNumber={btn.phoneNumber}
              url={btn.url}
              urlMode={btn.urlMode}
              text={btn.text}
              label={btn.label}
              latitude={btn.latitude}
              longitude={btn.longitude}
              onClose={() => {
                setActionButtons((prev) => prev.filter((_, i) => i !== index));
              }}
              onUpdate={updateBtnContent}
              query={btn.query}
              endDate={btn.endDate}
              startDate={btn.startDate}
              title={btn.title}
              description={btn.description}
            />
          );
        })}
        <div className="pt-1">
          <button
            className="flex items-center gap-1.5 rounded-lg border border-slate-200
                 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm 
                 hover:bg-slate-50 hover:border-blue-500 hover:text-blue-600
                  transition-all"
            onClick={() => {
              if (actionButtons.length <= 11) {
                addNewButton();
              } else {
                toast.info("You exceeded the limit of buttons", {
                  position: "top-center",
                });
              }
            }}
          >
            <span className="text-base">+</span>
            Add Button
          </button>
        </div>
      </div>
    </>
  );
};

export default TemplateStandardCard;
