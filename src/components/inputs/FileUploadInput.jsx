import React, { useRef } from "react";

const FileUploadInput = ({
  label = "Upload Image",
  subtitle = "The image you specify must have a max file size of 1 MB, have a resolution of 1440 x 480 pixels and should be a JPEG, JPG, PNG , GIF.",
  accept = "image/jpeg,image/jpg,image/png,image/gif",
  onChange = (file) => {},
  fileName = "",
}) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <p className="text-xs text-slate-500">{subtitle}</p>

      <div className="flex items-center gap-0 rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* File input display area */}
        <div className="flex-1 px-4 py-2.5 text-sm text-slate-500">
          {fileName || "No file chosen"}
        </div>

        {/* Choose button */}
        <button
          type="button"
          onClick={handleButtonClick}
          className="px-6 py-2.5 bg-slate-600 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
        >
          Choose
        </button>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default FileUploadInput;
