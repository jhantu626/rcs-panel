import React from "react";

const Login = () => {

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
                  Karen Yue
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-pink-200 font-light">
                  Director of Digital Marketing Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Form Section */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 lg:p-12 space-y-8 sm:space-y-10 backdrop-blur-sm">
            {/* Header */}
            <div className="space-y-3 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Welcome Back
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Sign in to access your account
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2.5">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-800 tracking-wide"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-white outline-none transition-all duration-300 hover:border-gray-300 placeholder:text-gray-400 text-gray-900"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800 tracking-wide"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-white outline-none transition-all duration-300 hover:border-gray-300 placeholder:text-gray-400 text-gray-900"
                />
              </div>

              {/* Login Button */}
              <button className="w-full mt-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 px-6 rounded-xl font-semibold text-base hover:from-pink-700 hover:to-rose-700 focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
