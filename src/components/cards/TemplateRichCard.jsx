import React, { useState } from "react";
import CarouselRatioButtonInput from "../inputs/CarouselRatioButtonInput";
import AddBtnCard from "./AddBtnCard";
import ButtonInput from "../inputs/ButtonInput";
import ButtonNormalnput from "../inputs/ButtonNormalnput";
import FileUploadInput from "../inputs/FileUploadInput";
import { toast } from "react-toastify";

const TemplateRichCard = ({
  richCard,
  addButtons,
  removeButtons,
  updateBtnContent = (index, key, value) => {},
  updateContent = (key, value) => {},
}) => {
  const [titleVarCount, setTitleVarCount] = useState(1);
  const [bodyVarCount, setBodyVarCount] = useState(1);

  return (
    <>
      <CarouselRatioButtonInput
        title={"Card Orientation"}
        description={
          "Vertical rich cards display horizontal media at the top of the card. Horizontal rich cards display vertical media at on the left or right side of the card."
        }
        option1={"Vertical"}
        option2={"Horizontal"}
        fieldKey={"carouselRatio"}
        value={richCard.carouselRatio}
        update={updateContent}
      />
      <CarouselRatioButtonInput
        title={
          richCard.carouselRatio === "Vertical"
            ? "Card Height"
            : "Media Alignment"
        }
        description={
          richCard.carouselRatio === "Vertical"
            ? "Card must fit one of two heights."
            : "Media must fit one of two alignments"
        }
        option1={richCard.carouselRatio === "Vertical" ? "Short" : "Left"}
        option2={richCard.carouselRatio === "Vertical" ? "Medium" : "Right"}
        fieldKey={"heightAlignment"}
        value={richCard.heightAlignment}
        update={updateContent}
      />
      <CarouselRatioButtonInput
        title={"Header"}
        description={"Choose an option below to configure media type"}
        option1={"Image"}
        option2={"Video"}
        fieldKey={"headerType"}
        value={richCard.headerType}
        update={updateContent}
      />

      {richCard.headerType === "Image" && (
        <FileUploadInput
          fileName={richCard.uploadedImage?.name}
          label="Upload Image"
          subtitle={`The image you specify must have a max file size of 1 MB,
           have a resolution of ${richCard.imageWidth} x ${richCard.imageHeight} pixels and should be a JPEG, JPG, PNG , GIF.`}
          accept="image/jpeg,image/jpg,image/png,image/gif"
          onChange={(file) => {
            console.log("Selected file:", file);
            // You can handle the file upload here
            const size = file.size / (1024 * 1024);

            if (size > 1) {
              toast.error("File size must be less than 1MB", {
                position: "top-center",
              });
              return;
            }

            const image = new Image();
            image.onload = () => {
              console.log(image.height, image.width);
              if (
                image.width !== richCard.imageWidth ||
                image.height !== richCard.imageHeight
              ) {
                toast.error(
                  `Image resolution must be ${richCard.imageWidth} x ${richCard.imageHeight}`,
                  {
                    position: "top-center",
                  },
                );
                return;
              }
              updateContent("uploadedImage", file);
            };
            image.src = URL.createObjectURL(file);
          }}
        />
      )}

      <ButtonNormalnput
        label="Title"
        subtitle="Add a title for your card"
        placeholder="Enter Title"
        type="text"
        maxLength={200}
        value={richCard.title}
        onChange={(type, value, onSuccess) => {
          const newValue =
            type === "normal"
              ? value
              : `${richCard.title} [custom_param_text_${titleVarCount}]`;
          if (newValue.length <= 200) {
            updateContent("title", newValue);
            if (type === "variable") {
              setTitleVarCount(titleVarCount + 1);
            }
            onSuccess();
          }
          if (type === "normal" && !value) {
            setTitleVarCount(1);
          }
        }}
      />
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold text-slate-700">
            Body
          </label>
        </div>
        <p className="text-xs text-slate-500">
          Enter the text for your message
        </p>
        <div className="relative">
          <textarea
            placeholder="Enter the body text"
            className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 pr-16 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none shadow-sm resize-none min-h-[120px]"
            maxLength={2000}
            value={richCard.body}
            onChange={(e) => {
              e.target.value.length <= 2000 &&
                updateContent("body", e.target.value);
              if (!e.target.value) {
                setBodyVarCount(1);
              }
            }}
          />
          <div className="absolute bottom-3 right-3 pointer-events-none">
            <span className="text-xs text-slate-400">
              {richCard.body.length}/2000
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium 
                    text-slate-700 shadow-sm hover:bg-slate-50 hover:border-blue-500 
                    hover:text-blue-600 transition-all"
            onClick={() => {
              const newText = `[custom_param_desc_${bodyVarCount}]`;

              if (richCard.body.length + newText.length <= 2000) {
                updateContent("body", richCard.body + newText);
                setBodyVarCount((prev) => prev + 1);
              }
            }}
          >
            + Variable
          </button>
        </div>
      </div>
      <div className="space-y-1 gap-2">
        <>
          <div className="flex items-center gap-2">
            <label className="block text-sm font-semibold text-slate-700">
              Call to Action/Reply Buttons
            </label>
            <span className="rounded-md bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-600">
              Optional
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Create a Call to Action or Reply Buttons that let customers respond
            to your message or take action. You can add upto 4 buttons
          </p>
        </>
        {richCard?.buttons?.map((btn, index) => {
          return (
            <AddBtnCard
              key={index}
              index={index}
              selectedAction={btn.selectedAction}
              countryCode={btn.countryCode}
              phoneNumber={btn.phoneNumber}
              url={btn.url}
              urlMode={btn.urlMode}
              text={btn.text}
              label={btn.label}
              latitude={btn.latitude}
              longitude={btn.longitude}
              onClose={() => {
                removeButtons(index);
              }}
              onUpdate={updateBtnContent}
              query={btn.query}
              endDate={btn.endDate}
              startDate={btn.startDate}
              title={btn.title}
              description={btn.description}
            />
          );
        })}
        <div className="pt-1">
          <button
            className="flex items-center gap-1.5 rounded-lg border border-slate-200
                 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm 
                 hover:bg-slate-50 hover:border-blue-500 hover:text-blue-600
                  transition-all"
            onClick={() => {
              addButtons();
            }}
          >
            <span className="text-base">+</span>
            Add Button
          </button>
        </div>
      </div>
    </>
  );
};

export default TemplateRichCard;
