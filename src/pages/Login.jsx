import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT PANEL - Image Section */}
      <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
          alt="Modern office workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-violet-600/85 to-indigo-700/90"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8 lg:p-12 text-white">
          {/* Branding */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
              Turain Software
            </h1>
            <p className="text-sm lg:text-base text-purple-100 mt-2 font-light">
              Private Limited
            </p>
          </div>

          {/* Testimonial Section */}
          <div className="space-y-6 max-w-md">
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl font-light leading-relaxed italic">
                "Simply all the tools that my team and I need."
              </p>
              <div className="space-y-1">
                <p className="text-base lg:text-lg font-semibold">Karen Yue</p>
                <p className="text-sm lg:text-base text-purple-200 font-light">
                  Director of Digital Marketing Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 space-y-8">
            {/* Header */}
            <div className="space-y-2 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Welcome back to Turain Software
              </h2>
              <p className="text-sm lg:text-base text-gray-500 font-light">
                Access your account to continue
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                {/* Remember Me Toggle */}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-purple-600 transition-all duration-200 peer-focus:ring-2 peer-focus:ring-purple-500 peer-focus:ring-offset-2"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-5"></div>
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    Remember me
                  </span>
                </label>

                {/* Forgot Password Link */}
                <a
                  href="#"
                  className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-200 shadow-sm hover:shadow-md">
                Log in
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-light">
                    OR
                  </span>
                </div>
              </div>

              {/* Google Login Button */}
              <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 focus:ring-4 focus:ring-gray-200 transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
