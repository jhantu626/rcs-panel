import React from "react";

const CarouselPreviewCard = ({ card }) => {
  return (
    <div className="min-w-full h-full flex-shrink-0 snap-center px-1">
      <div className="w-full max-w-md mx-auto" style={{ aspectRatio: "1/1" }}>
        <div
          className="h-full rounded-xl border border-slate-300 bg-white shadow-lg
         overflow-hidden flex flex-col"
        >
          {/* Top Media Block - 3:1 or 2:1 Aspect Ratio */}
          <div
            className="relative w-full bg-slate-200 flex-shrink-0"
            style={{
              height: card.cardHeight === "Short" ? "33.33%" : "50%",
            }}
          >
            {card.uploadedImage ? (
              <img
                className="w-full h-full object-cover"
                src={URL.createObjectURL(card.uploadedImage)}
                alt=""
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
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
                    {card.imageWidth} × {card.imageHeight}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Content Block */}
          <div
            className="flex-1 relative w-full bg-slate-50 p-2 overflow-y-auto min-h-0
                               [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent 
                               [&::-webkit-scrollbar-thumb]:bg-pink-200 [&::-webkit-scrollbar-thumb]:rounded-full 
                               [&::-webkit-scrollbar-thumb]:hover:bg-pink-300"
          >
            {/* Title */}
            <p className="font-bold text-black text-sm">{card.title}</p>
            <p className="text-sm text-gray-500 font-[500] py-4 whitespace-pre-wrap break-words">
              {card.body}
            </p>
            {card.buttons.map((item, index) => {
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
        </div>
      </div>

      <p className="mt-4 text-xs text-center text-slate-500">
        Rich media card preview - {card.cardHeight} ({card.imageWidth}×
        {card.imageHeight})
      </p>
    </div>
  );
};

export default CarouselPreviewCard;
