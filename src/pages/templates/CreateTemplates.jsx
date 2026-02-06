import React, { useEffect, useState } from "react";
import Select from "react-select";
import { validateName } from "../../utils/validations";
import AddBtnCard from "../../components/cards/AddBtnCard";
import { Phone } from "lucide-react";
import { toast } from "react-toastify";
import "react-date-range/dist/styles.css";
import CarouselRatioButtonInput from "../../components/inputs/CarouselRatioButtonInput";
import TemplateStandardCard from "../../components/cards/TemplateStandardCard";
import TemplateRichCard from "../../components/cards/TemplateRichCard";
import { body } from "framer-motion/client";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const templateTypeOptions = [
  { value: "standard", label: "Standard Card" },
  { value: "rich", label: "Rich Media Card" },
  { value: "carousel", label: "Carousel" },
];

const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "white",
    borderColor: state.isFocused ? "#3b82f6" : "#e2e8f0",
    borderRadius: "0.5rem",
    minHeight: "42px",
    boxShadow: state.isFocused
      ? "0 0 0 3px rgba(59, 130, 246, 0.1)"
      : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "&:hover": {
      borderColor: "#3b82f6",
    },
    cursor: "pointer",
    transition: "all 0.2s",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0.625rem 1rem", // py-2.5 px-4
  }),
  input: (base) => ({
    ...base,
    margin: "0",
    padding: "0",
    color: "#1e293b",
    fontSize: "0.875rem", // text-sm
  }),
  placeholder: (base) => ({
    ...base,
    color: "#94a3b8",
    fontSize: "0.875rem", // text-sm
    margin: "0",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#1e293b",
    fontSize: "0.875rem", // text-sm
    margin: "0",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? "#3b82f6" : "#94a3b8",
    padding: "0.5rem",
    "&:hover": {
      color: "#3b82f6",
    },
    transition: "all 0.2s",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "0.5rem",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
    overflow: "hidden",
    marginTop: "0.25rem",
  }),
  menuList: (base) => ({
    ...base,
    padding: "0.25rem",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#3b82f6"
      : state.isFocused
        ? "#eff6ff"
        : "white",
    color: state.isSelected ? "white" : "#1e293b",
    cursor: "pointer",
    fontSize: "0.875rem", // text-sm
    padding: "0.625rem 0.75rem",
    "&:active": {
      backgroundColor: "#3b82f6",
    },
  }),
};

const CreateTemplates = () => {
  //STATE VARIABLES
  const [templateName, setTemplateName] = useState("");
  const [selectedTemplateType, setSelectedTemplateType] = useState(
    templateTypeOptions[1],
  );

  // FOR STANDARD CARCD
  const [standardBody, setStandardBody] = useState("");
  const [standardActionButtons, setStandardActionButtons] = useState([]);

  // FOR RICH CARCD
  const [richCard, setRichCard] = useState({
    carouselRatio: "Vertical",
    heightAlignment: "Short",
    headerType: "Image",
    imageWidth: 1440,
    imageHeight: 480,
    title: "",
    body: "",
    uploadedImage: null,
    buttons: [],
  });

  // ADD NEW BUTTONS IN RICH CARD BUTTON
  const addRichCardButton = () => {
    if (richCard.buttons.length < 4) {
      setRichCard((prev) => {
        return {
          ...prev,
          buttons: [
            ...prev.buttons,
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
          ],
        };
      });
    } else {
      toast.info("You exceeded the limit of buttons", {
        position: "top-center",
      });
    }
  };
  // REMOVE BUTTON FROM RICH CARD BUTTON
  const removeRichCardButton = (index) => {
    setRichCard((prev) => {
      return {
        ...prev,
        buttons: prev.buttons.filter((_, i) => i !== index),
      };
    });
  };
  // UPDATE RICH CARD BUTTON CONTENT
  const updateRichCardButtonContent = (index, key, value) => {
    setRichCard((prev) => {
      return {
        ...prev,
        buttons: prev.buttons.map((btn, i) => {
          if (i === index) {
            return {
              ...btn,
              [key]: value,
            };
          }
          return btn;
        }),
      };
    });
  };
  // UPDATE RICH CARD CONTENT
  const updateRichCardContent = (key, value) => {
    setRichCard((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
    if (key === "carouselRatio") {
      setRichCard((prev) => {
        if (value === "Vertical") {
          return {
            ...prev,
            heightAlignment: "Short",
            imageWidth: 1440,
            imageHeight: 480,
            uploadedImage: null,
          };
        } else {
          return {
            ...prev,
            heightAlignment: "Left",
            imageWidth: 768,
            imageHeight: 1024,
            uploadedImage: null,
          };
        }
      });
    }

    if (key === "heightAlignment") {
      switch (value) {
        case "Short":
          setRichCard((prev) => {
            return {
              ...prev,
              imageWidth: 1440,
              imageHeight: 480,
              uploadedImage: null,
            };
          });
          break;
        case "Medium":
          setRichCard((prev) => {
            return {
              ...prev,
              imageWidth: 1440,
              imageHeight: 720,
              uploadedImage: null,
            };
          });
          break;
        case "Left":
          setRichCard((prev) => {
            return {
              ...prev,
              imageWidth: 768,
              imageHeight: 1024,
            };
          });
          break;
        case "Right":
          setRichCard((prev) => {
            return {
              ...prev,
              imageWidth: 768,
              imageHeight: 1024,
            };
          });
          break;
      }
    }
  };

  const handleSubmit = () => {
    if (selectedTemplateType.value === "standard") {
      console.log(standardBody);
      console.log(standardActionButtons);
    }
  };

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
          <button
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5
           text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700
            hover:scale-[1.01] active:scale-[0.98] transition-all"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA - TWO PANEL LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(108vh-280px)]">
        {/* LEFT PANEL - FORM (SCROLLABLE) */}
        <div className="lg:col-span-8 overflow-y-auto">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5 p-6 space-y-4">
            {/* SECTION 1 - Username */}
            <div className="space-y-1">
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

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-slate-700">
                Bot Name and Type
              </label>
              <p className="text-xs text-slate-500">
                Select the user above to see a list of Bot Name and Type
              </p>
              <div className="relative">
                <Select
                  options={options}
                  styles={customSelectStyles}
                  placeholder="Select Bot Name and Type..."
                  classNamePrefix="react-select"
                />
              </div>
            </div>

            <div className="space-y-1">
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
                  <span className="text-xs text-slate-400">
                    {templateName.length}/20
                  </span>
                </div>
              </div>
              <label className="text-xs text-red-500">
                {templateName.length > 0 &&
                  !validateName(templateName) &&
                  "Invalid name"}
              </label>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-slate-700">
                Template Type
              </label>
              <p className="text-xs text-slate-500">
                Choose a message template
              </p>
              <div className="relative">
                <Select
                  value={selectedTemplateType}
                  onChange={(option) => setSelectedTemplateType(option)}
                  options={templateTypeOptions}
                  styles={customSelectStyles}
                  placeholder="Select Template Type..."
                  classNamePrefix="react-select"
                />
              </div>
            </div>

            {/* TTL Section */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-slate-700">
                TTL
              </label>
              <p className="text-xs text-slate-500">
                Set the time-to-live for the template
              </p>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter TTL value"
                  className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 pr-24 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none shadow-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="rounded-md bg-slate-600 px-3 py-1.5 text-xs font-medium text-white">
                    Seconds
                  </span>
                </div>
              </div>
            </div>

            {selectedTemplateType.value === "standard" && (
              <TemplateStandardCard
                body={standardBody}
                setBody={setStandardBody}
                actionButtons={standardActionButtons}
                setActionButtons={setStandardActionButtons}
              />
            )}

            {selectedTemplateType.value === "rich" && (
              <TemplateRichCard
                richCard={richCard}
                addButtons={addRichCardButton}
                removeButtons={removeRichCardButton}
                updateBtnContent={updateRichCardButtonContent}
                updateContent={updateRichCardContent}
              />
            )}

            {/* EXTRA SPACING FOR SCROLL DEMONSTRATION */}
            <div className="h-20"></div>
          </div>
        </div>

        {/* RIGHT PANEL - PREVIEW (FIXED/NON-SCROLLABLE) */}
        <div className="lg:col-span-4 h-full">
          <div className="sticky top-0 rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5 p-3 h-full flex flex-col">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Preview
            </h2>

            {selectedTemplateType.value === "standard" && (
              <>
                <div className="rounded-xl bg-gray-100 shadow-none overflow-y-auto min-h-[150px] max-h-[300px] px-6 py-6">
                  <p className="text-base text-slate-800 leading-normal break-words overflow-wrap-anywhere pb-2">
                    {standardBody}
                  </p>

                  {standardActionButtons.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="my-2 flex items-center justify-center gap-2"
                      >
                        <span className="flex items-center">
                          {item?.selectedAction?.icon}
                        </span>

                        <p className="text-[14px] font-bold text-blue-600">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {selectedTemplateType.value === "rich" && (
              <>
                {/* Conditional Layout based on heightAlignment */}
                {richCard.heightAlignment === "Left" ||
                richCard.heightAlignment === "Right" ? (
                  <>
                    {/* Horizontal Layout - Image on Left or Right */}
                    <div className="w-full" style={{ aspectRatio: "1/1" }}>
                      <div
                        className={`h-full rounded-xl border border-slate-300 bg-white shadow-lg overflow-hidden flex ${richCard.heightAlignment === "Right" ? "flex-row-reverse" : ""}`}
                      >
                        {/* Image Block - Portrait 768x1024 */}
                        <div
                          className="relative bg-slate-200 flex-shrink-0"
                          style={{ width: "40%", height: "100%" }}
                        >
                          {richCard.uploadedImage ? (
                            <img
                              className="w-full h-full"
                              src={URL.createObjectURL(richCard.uploadedImage)}
                              alt=""
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <svg
                                  className="h-10 w-10 text-slate-400 mx-auto mb-2"
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
                                <p className="text-[10px] text-slate-500">
                                  768 × 1024
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content Block */}
                        <div className="flex-1 bg-slate-50 p-2 flex flex-col">
                          <p>Hello Mr Pritam Bala What are you doing here</p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-center text-slate-500">
                      Rich media card preview - {richCard.heightAlignment}{" "}
                      aligned (768×1024)
                    </p>
                  </>
                ) : (
                  <>
                    {/* Vertical Layout - Image on Top (Short/Medium) */}
                    <div className="w-full" style={{ aspectRatio: "1/1" }}>
                      <div className="h-full rounded-xl border border-slate-300 bg-white shadow-lg overflow-hidden flex flex-col">
                        {/* Top Media Block - 3:1 or 2:1 Aspect Ratio */}
                        <div
                          className="relative w-full bg-slate-200"
                          style={{
                            height:
                              richCard.heightAlignment === "Short"
                                ? "33.33%"
                                : "50%",
                          }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            {richCard.uploadedImage ? (
                              <img
                                className="w-full h-full"
                                src={URL.createObjectURL(
                                  richCard.uploadedImage,
                                )}
                                alt=""
                              />
                            ) : (
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
                                <p className="text-xs text-slate-500">
                                  {richCard.imageWidth} × {richCard.imageHeight}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Bottom Content Block */}
                        <div className="flex-1 relative w-full bg-slate-50 p-2">
                          {/* Blank area for content */}
                          <p>Hello Mr Pritam Bala What Are you doing </p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-center text-slate-500">
                      Rich media card preview - {richCard.heightAlignment} (
                      {richCard.imageWidth}×{richCard.imageHeight})
                    </p>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplates;
