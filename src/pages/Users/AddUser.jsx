import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Select from "react-select";
import { useUser } from "./../../context/UserContext";
import { useAuth } from "./../../context/AuthContext";
import { botService } from "../../services/BotService";
import { validateEmail } from "../../utils/validations";
import { toast } from "react-toastify";
import { authService } from "../../services/AuthService";

const AddUser = () => {
  const userName = useUser("userName");
  const userId = useUser("id");
  const token = useAuth("authToken");

  const [user, setUser] = useState({
    resellerName: userName,
    userName: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    billingType: "",
    email: "",
    botName: [],
  });

  // Password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [botOptions, setBotOptions] = useState([]);

  // Account type options
  const accountTypeOptions = [
    { value: "RESELLER", label: "Reseller" },
    { value: "USER", label: "User" },
  ];

  // Billing type options
  const billingTypeOptions = [
    { value: "PREPAID", label: "Prepaid" },
    { value: "POSTPAID", label: "Postpaid" },
  ];

  // Handle input changes
  const handleInputChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
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
      user.userName &&
      user.password &&
      user.confirmPassword &&
      user.accountType &&
      user.billingType &&
      user.email &&
      user.botName.length > 0
    );
  };

  const getBotOptions = async () => {
    try {
      const opitons = await botService.getAllBots(token);
      setBotOptions(
        opitons.map((item) => ({ value: item.id, label: item.botName })),
      );
    } catch (error) {}
  };

  useEffect(() => {
    getBotOptions();
  }, []);

  const handleAdd = async () => {
    if (!validateEmail(user.email)) {
      toast.error("Invalid Email", {
        position: "top-center",
      });
      return;
    }
    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
      });
      return;
    }
    if (user.password.length < 6) {
      toast.error("Password must be at least 6 characters long", {
        position: "top-center",
      });
      return;
    }
    if (user.userName.length < 3) {
      toast.error("Username must be at least 3 characters long", {
        position: "top-center",
      });
      return;
    }
    if (user.botName.length === 0) {
      toast.error("Please select at least one bot", {
        position: "top-center",
      });
      return;
    }
    if (user.accountType === "") {
      toast.error("Please select an account type", {
        position: "top-center",
      });
      return;
    }
    if (user.billingType === "") {
      toast.error("Please select a billing type", {
        position: "top-center",
      });
      return;
    }
    if (user.resellerName === "") {
      toast.error("Please select a reseller name", {
        position: "top-center",
      });
      return;
    }
    if (user.userName === "") {
      toast.error("Please enter a username", {
        position: "top-center",
      });
      return;
    }
    if (user.password === "") {
      toast.error("Please enter a password", {
        position: "top-center",
      });
      return;
    }
    if (user.confirmPassword === "") {
      toast.error("Please enter a confirm password", {
        position: "top-center",
      });
      return;
    }
    if (user.email === "") {
      toast.error("Please enter an email", {
        position: "top-center",
      });
      return;
    }

    const payload = {
      userName: user.userName,
      email: user.email,
      password: user.password,
      role: user.accountType,
      billingType: user.billingType,
      parentId: userId,
      bots: user.botName.map((item) => {
        return {
          id: item,
        };
      }),
    };

    try {
      const data = await authService.createUser(token, payload);
      console.log(data);
      if (data?.status) {
        toast.success(data?.message, {
          position: "top-center",
        });
      } else {
        toast.error(data?.message || "Something went wrong", {
          position: "top-center",
        });
      }
    } catch (error) {
      const data = await error.response.data;
      toast.error(data?.message, {
        position: "top-center",
      });
    }

    console.log("payload", payload);
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
                  value={user.resellerName}
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
                    value={user.password}
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
                    (opt) => opt.value === user.accountType,
                  )}
                  onChange={(option) =>
                    handleInputChange("accountType", option?.value || "")
                  }
                  styles={customStyles}
                  placeholder="Select User Type"
                  isClearable
                />
              </div>

              {/* Bot Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bot Name
                </label>
                <Select
                  options={botOptions}
                  value={botOptions.filter((opt) =>
                    user.botName.includes(opt.value),
                  )}
                  onChange={(selected) =>
                    setUser((prev) => ({
                      ...prev,
                      botName: selected.map((opt) => opt.value),
                    }))
                  }
                  styles={customStyles}
                  placeholder="Select bot(s)"
                  isMulti
                  closeMenuOnSelect={false}
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
                  value={user.userName}
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
                    value={user.confirmPassword}
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
                    (opt) => opt.value === user.billingType,
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
                  value={user.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter email address"
                  className="w-full px-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all outline-none placeholder-gray-400 text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Add Button - Bottom Right */}
          <div className="flex justify-end mt-8">
            <button
              disabled={!isFormValid()}
              className={`px-8 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                isFormValid()
                  ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 active:scale-[0.98]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              onClick={handleAdd}
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
