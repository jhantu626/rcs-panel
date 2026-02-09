import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { authService } from "./../services/AuthService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const login = useAuth("login");

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  //LOADING STATE
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!userName) {
      toast.error("Please enter username", {
        position: "top-center",
      });
      return;
    }
    if (!password) {
      toast.error("Please enter password", {
        position: "top-center",
      });
      return;
    }
    setIsLoading(true);
    try {
      console.log(userName, password);
      const data = await authService.login(userName, password);
      if (data.status) {
        setError("");
        console.log(data);
        login(data.token);
      } else {
        toast.error(data.message, {
          position: "top-center",
        });
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT PANEL - Image Section */}
      <div className="relative lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-auto overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
          alt="Modern office workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/90 via-pink-500/85 to-rose-600/90"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 lg:p-12 text-white">
          {/* Branding */}
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              Turain Software
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-pink-100 mt-1 sm:mt-2 font-light">
              Private Limited
            </p>
          </div>

          {/* Testimonial Section - Hidden on very small screens */}
          <div className="hidden sm:block space-y-4 lg:space-y-6 max-w-md">
            <div className="space-y-3 lg:space-y-4">
              <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed italic">
                "Simply all the tools that my team and I need."
              </p>
              <div className="space-y-1">
                <p className="text-sm sm:text-base lg:text-lg font-semibold">
                  Tarun Karan
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-pink-200 font-light">
                  Director of Turain Software Private Limited
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-white">
        <div className="w-full max-w-md">
          {/* Login Form */}
          <div className="space-y-8 sm:space-y-10">
            {/* Header */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                Welcome Back
              </h2>
              <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed">
                Sign in to access your account
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2.5">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-200 focus:border-pink-500 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-900 font-medium"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-4 pr-12 bg-transparent border-b-2 border-gray-200 focus:border-pink-500 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-900 font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-pink-600 transition-colors duration-200"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <p className="text-red-500">{error}</p>
              </div>

              {/* Login Button */}
              <button
                className="w-full mt-8 bg-gradient-to-r from-pink-600 to-rose-600 text-white
               py-4 px-6 rounded-lg font-semibold text-base hover:from-pink-700 hover:to-rose-700 
               focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50 active:scale-[0.98] 
               transition-all duration-200 shadow-md shadow-pink-500/20 hover:shadow-lg
                hover:shadow-pink-500/30"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
