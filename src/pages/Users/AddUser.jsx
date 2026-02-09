import React, { useState } from "react";
import { Eye, EyeOff, Info } from "lucide-react";
import Select from "react-select";

const AddUser = () => {
  // Form state
  const [formData, setFormData] = useState({
    resellerName: "promo1", // Pre-filled and read-only
    userName: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    billingType: "",
    email: "",
    whiteLabelPanel: false,
    whiteLabelEmail: false,
  });

  // Password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Reseller-specific state
  const [selectedChannels, setSelectedChannels] = useState([]);

  // RCS Configuration state
  const [rcsConfig, setRcsConfig] = useState({
    apiDomain: "",
    botName: "",
    creditDeduction: "Submission",
  });

  // Available channels
  const channelOptions = [
    { value: "RCS", label: "RCS" },
    { value: "SMS", label: "SMS" },
    { value: "WhatsApp", label: "WhatsApp" },
    { value: "Email", label: "Email" },
  ];

  // Account type options
  const accountTypeOptions = [
    { value: "User", label: "User" },
    { value: "Reseller", label: "Reseller" },
    { value: "Admin", label: "Admin" },
  ];

  // Billing type options
  const billingTypeOptions = [
    { value: "Prepaid", label: "Prepaid" },
    { value: "Postpaid", label: "Postpaid" },
  ];

  // Bot name options
  const botNameOptions = [
    { value: "Bot1", label: "Bot 1" },
    { value: "Bot2", label: "Bot 2" },
    { value: "Bot3", label: "Bot 3" },
  ];

  // Credit deduction options
  const creditDeductionOptions = [
    { value: "Submission", label: "Submission" },
    { value: "Delivery", label: "Delivery" },
    { value: "Read", label: "Read" },
  ];

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (field) => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Custom styles for react-select
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#fff" : "#f9fafb",
      borderColor: "transparent",
      borderRadius: "0.75rem",
      padding: "0.125rem",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(236, 72, 153, 0.2)" : "none",
      "&:hover": {
        borderColor: "transparent",
      },
      minHeight: "42px",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "2px 12px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#9ca3af",
      fontSize: "0.875rem",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#374151",
      fontSize: "0.875rem",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#fce7f3",
      borderRadius: "0.5rem",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "#be185d",
      fontSize: "0.75rem",
      fontWeight: "500",
      padding: "4px 8px",
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: "#be185d",
      "&:hover": {
        backgroundColor: "#fbcfe8",
        color: "#9f1239",
      },
      borderRadius: "0 0.5rem 0.5rem 0",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "0.75rem",
      marginTop: "0.5rem",
      border: "1px solid #e5e7eb",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#ec4899"
        : state.isFocused
          ? "#f9fafb"
          : "white",
      color: state.isSelected ? "white" : "#374151",
      fontSize: "0.875rem",
      padding: "10px 16px",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "#ec4899",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#9ca3af",
      "&:hover": {
        color: "#6b7280",
      },
    }),
  };

  // Check if form is valid (basic check for demo)
  const isFormValid = () => {
    return (
      formData.userName &&
      formData.password &&
      formData.confirmPassword &&
      formData.accountType &&
      formData.billingType &&
      formData.email
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-t-2xl px-6 py-4 shadow-lg shadow-pink-500/20">
          <h1 className="text-white text-2xl font-bold">Add User</h1>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-b-2xl shadow-sm border border-gray-100 p-8">
          {/* Form Fields - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Reseller Name - Read Only */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reseller Name
                </label>
                <input
                  type="text"
                  value={formData.resellerName}
                  disabled
                  className="w-full px-4 py-2.5 bg-gray-100 border-none rounded-xl text-sm text-gray-500 cursor-not-allowed"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    placeholder="Enter password"
                    className="w-full px-4 py-2.5 pr-10 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none placeholder-gray-400 text-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Account Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Type <span className="text-red-500">*</span>
                </label>
                <Select
                  options={accountTypeOptions}
                  value={accountTypeOptions.find(
                    (opt) => opt.value === formData.accountType,
                  )}
                  onChange={(option) =>
                    handleInputChange("accountType", option?.value || "")
                  }
                  styles={customStyles}
                  placeholder="Select User Type"
                  isClearable
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* User Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.userName}
                  onChange={(e) =>
                    handleInputChange("userName", e.target.value)
                  }
                  placeholder="Enter username"
                  className="w-full px-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none placeholder-gray-400 text-gray-700"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    placeholder="Confirm password"
                    className="w-full px-4 py-2.5 pr-10 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none placeholder-gray-400 text-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Billing Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Billing Type <span className="text-red-500">*</span>
                </label>
                <Select
                  options={billingTypeOptions}
                  value={billingTypeOptions.find(
                    (opt) => opt.value === formData.billingType,
                  )}
                  onChange={(option) =>
                    handleInputChange("billingType", option?.value || "")
                  }
                  styles={customStyles}
                  placeholder="Select Billing Type"
                  isClearable
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter email address"
                  className="w-full px-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none placeholder-gray-400 text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Options Section - Checkboxes */}
          <div className="border-t border-gray-100 pt-6 mb-6">
            <div className="flex flex-wrap gap-6">
              {/* White Label Panel Required */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.whiteLabelPanel}
                  onChange={() => handleCheckboxChange("whiteLabelPanel")}
                  className="w-4 h-4 rounded border-gray-300 text-pink-600 focus:ring-2 focus:ring-pink-500/20 cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-700">
                  White Label Panel Required
                </span>
              </label>

              {/* White Label Email Required */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.whiteLabelEmail}
                  onChange={() => handleCheckboxChange("whiteLabelEmail")}
                  className="w-4 h-4 rounded border-gray-300 text-pink-600 focus:ring-2 focus:ring-pink-500/20 cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-700">
                  White Label Email Required
                </span>
              </label>
            </div>
          </div>

          {/* Conditional Reseller Section */}
          {formData.accountType === "Reseller" && (
            <div className="border-t border-gray-100 pt-6 space-y-6">
              {/* Channels Multi-Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Channels <span className="text-red-500">*</span>
                </label>
                <Select
                  options={channelOptions}
                  value={channelOptions.filter((opt) =>
                    selectedChannels.includes(opt.value),
                  )}
                  onChange={(selected) =>
                    setSelectedChannels(selected.map((opt) => opt.value))
                  }
                  styles={customStyles}
                  placeholder="Select channels"
                  isMulti
                  closeMenuOnSelect={false}
                />
              </div>

              {/* RCS Configuration Block - Show if RCS is selected */}
              {selectedChannels.includes("RCS") && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    RCS
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Side */}
                    <div className="space-y-4">
                      {/* RCS API Domain */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                          RCS API Domain
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Info size={16} />
                          </button>
                        </label>
                        <input
                          type="text"
                          value={rcsConfig.apiDomain}
                          onChange={(e) =>
                            setRcsConfig((prev) => ({
                              ...prev,
                              apiDomain: e.target.value,
                            }))
                          }
                          placeholder="Enter API domain"
                          className="w-full px-4 py-2.5 bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 transition-all outline-none placeholder-gray-400 text-gray-700 shadow-sm"
                        />
                      </div>

                      {/* Bot Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bot Name
                        </label>
                        <Select
                          options={botNameOptions}
                          value={botNameOptions.find(
                            (opt) => opt.value === rcsConfig.botName,
                          )}
                          onChange={(option) =>
                            setRcsConfig((prev) => ({
                              ...prev,
                              botName: option?.value || "",
                            }))
                          }
                          styles={customStyles}
                          placeholder="Select bot"
                          isClearable
                        />
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-4">
                      {/* Credit Deduction */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                          Credit Deduction
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Info size={16} />
                          </button>
                        </label>
                        <Select
                          options={creditDeductionOptions}
                          value={creditDeductionOptions.find(
                            (opt) => opt.value === rcsConfig.creditDeduction,
                          )}
                          onChange={(option) =>
                            setRcsConfig((prev) => ({
                              ...prev,
                              creditDeduction: option?.value || "Submission",
                            }))
                          }
                          styles={customStyles}
                          placeholder="Select deduction type"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Add Button - Bottom Right */}
          <div className="flex justify-end mt-8">
            <button
              disabled={!isFormValid()}
              className={`px-8 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                isFormValid()
                  ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 active:scale-[0.98]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
