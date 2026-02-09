import React, { useState } from "react";
import { Eye, EyeOff, Info, ChevronDown, X } from "lucide-react";

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
  const [showChannelDropdown, setShowChannelDropdown] = useState(false);

  // RCS Configuration state
  const [rcsConfig, setRcsConfig] = useState({
    apiDomain: "",
    botName: "",
    creditDeduction: "Submission",
  });

  // Available channels
  const availableChannels = ["RCS", "SMS", "WhatsApp", "Email"];

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (field) => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle channel selection
  const toggleChannel = (channel) => {
    setSelectedChannels((prev) =>
      prev.includes(channel)
        ? prev.filter((c) => c !== channel)
        : [...prev, channel],
    );
  };

  // Remove channel
  const removeChannel = (channel) => {
    setSelectedChannels((prev) => prev.filter((c) => c !== channel));
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
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
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
                <div className="relative">
                  <select
                    value={formData.accountType}
                    onChange={(e) =>
                      handleInputChange("accountType", e.target.value)
                    }
                    className="appearance-none w-full px-4 py-2.5 pr-10 bg-gray-50 border-none rounded-xl text-sm text-gray-700 focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none cursor-pointer"
                  >
                    <option value="">Select User Type</option>
                    <option value="User">User</option>
                    <option value="Reseller">Reseller</option>
                    <option value="Admin">Admin</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
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
                <div className="relative">
                  <select
                    value={formData.billingType}
                    onChange={(e) =>
                      handleInputChange("billingType", e.target.value)
                    }
                    className="appearance-none w-full px-4 py-2.5 pr-10 bg-gray-50 border-none rounded-xl text-sm text-gray-700 focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none cursor-pointer"
                  >
                    <option value="">Select Billing Type</option>
                    <option value="Prepaid">Prepaid</option>
                    <option value="Postpaid">Postpaid</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
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
                <div className="relative">
                  {/* Selected Channels Display */}
                  <div
                    onClick={() => setShowChannelDropdown(!showChannelDropdown)}
                    className="w-full min-h-[42px] px-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none cursor-pointer flex flex-wrap gap-2 items-center"
                  >
                    {selectedChannels.length > 0 ? (
                      selectedChannels.map((channel) => (
                        <span
                          key={channel}
                          className="inline-flex items-center gap-1 bg-pink-100 text-pink-700 px-3 py-1 rounded-lg text-xs font-medium"
                        >
                          {channel}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeChannel(channel);
                            }}
                            className="hover:text-pink-900"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400">Select channels</span>
                    )}
                  </div>

                  {/* Dropdown Options */}
                  {showChannelDropdown && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg">
                      {availableChannels.map((channel) => (
                        <div
                          key={channel}
                          onClick={() => toggleChannel(channel)}
                          className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer flex items-center gap-2 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={selectedChannels.includes(channel)}
                            onChange={() => {}}
                            className="w-4 h-4 rounded border-gray-300 text-pink-600 focus:ring-2 focus:ring-pink-500/20 cursor-pointer"
                          />
                          <span className="text-sm text-gray-700">
                            {channel}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
                        <div className="relative">
                          <select
                            value={rcsConfig.botName}
                            onChange={(e) =>
                              setRcsConfig((prev) => ({
                                ...prev,
                                botName: e.target.value,
                              }))
                            }
                            className="appearance-none w-full px-4 py-2.5 pr-10 bg-white border-none rounded-xl text-sm text-gray-700 focus:ring-2 focus:ring-pink-500/20 transition-all outline-none cursor-pointer shadow-sm"
                          >
                            <option value="">Select bot</option>
                            <option value="Bot1">Bot 1</option>
                            <option value="Bot2">Bot 2</option>
                            <option value="Bot3">Bot 3</option>
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          />
                        </div>
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
                        <div className="relative">
                          <select
                            value={rcsConfig.creditDeduction}
                            onChange={(e) =>
                              setRcsConfig((prev) => ({
                                ...prev,
                                creditDeduction: e.target.value,
                              }))
                            }
                            className="appearance-none w-full px-4 py-2.5 pr-10 bg-white border-none rounded-xl text-sm text-gray-700 focus:ring-2 focus:ring-pink-500/20 transition-all outline-none cursor-pointer shadow-sm"
                          >
                            <option value="Submission">Submission</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Read">Read</option>
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          />
                        </div>
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
