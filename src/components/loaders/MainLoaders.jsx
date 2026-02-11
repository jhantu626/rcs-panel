import React from "react";

const MainLoaders = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-8 p-6 relative">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl"></div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
          <div className="absolute inset-0 rounded-full animate-spin">
            <div
              className="w-full h-full rounded-full border-transparent bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600"
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "3px",
              }}
            ></div>
          </div>

          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-600/30 via-rose-500/30 to-pink-600/30 blur-md animate-spin"></div>

          <div
            className="absolute inset-3 rounded-full border-4 border-transparent bg-gradient-to-l from-rose-500 to-pink-500 animate-spin-slow-reverse"
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "4px",
            }}
          ></div>

          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-pink-600 to-rose-600 animate-pulse shadow-lg shadow-pink-500/50"></div>

          <div className="absolute inset-8 rounded-full bg-white/90 flex items-center justify-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 animate-ping"></div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Turain Software
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-light">
            Loading your experience...
          </p>
        </div>

        <div className="flex gap-2">
          <div
            className="w-2 h-2 rounded-full bg-pink-600 animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-pink-600 animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-pink-600 animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        <style jsx>{`
          @keyframes spin-slow-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          .animate-spin-slow-reverse {
            animation: spin-slow-reverse 3s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MainLoaders;
