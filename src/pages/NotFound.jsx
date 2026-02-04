import React from "react";
import { Home, LayoutTemplate, MapPinOff } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 max-w-lg w-full p-8 md:p-12 text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

        {/* Illustration Area */}
        <div className="mx-auto w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <MapPinOff size={40} className="text-blue-600" />
        </div>

        {/* Main Content */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-10 leading-relaxed text-base">
          Sorry, the page you are looking for could not be found. It might have
          been removed or renamed.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-md shadow-blue-200 gap-2">
            <LayoutTemplate size={18} />
            <span>Go to Templates</span>
          </button>

          <button className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-xl border border-gray-200 transition-all gap-2">
            <Home size={18} />
            <span>Return Home</span>
          </button>
        </div>

        {/* Footer Subtle Element */}
        <div className="mt-12 text-xs text-gray-400 font-medium uppercase tracking-widest">
          Error Code: 404-NF
        </div>
      </div>
    </div>
  );
};

export default NotFound;
