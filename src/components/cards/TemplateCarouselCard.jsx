import React, { useState } from "react";
import CarouselRatioButtonInput from "../inputs/CarouselRatioButtonInput";
import FileUploadInput from "../inputs/FileUploadInput";
import { toast } from "react-toastify";
import ButtonNormalnput from "../inputs/ButtonNormalnput";
import AddBtnCard from "./AddBtnCard";
import { Phone, Plus } from "lucide-react";

const TemplateCarouselCard = ({ carousel, setCarousel }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onUpdateCarouselCard = (key, value) => {
    const newCarousel = carousel.map((item) => {
      if (key === "cardWidth" || key === "cardHeight") {
        const cw = key === "cardWidth" ? value : item.cardWidth;
        const ch = key === "cardHeight" ? value : item.cardHeight;

        if (cw === "Small" && ch === "Short") {
          return { ...item, [key]: value, imageWidth: 960, imageHeight: 768 };
        } else if (cw === "Medium" && ch === "Short") {
          return { ...item, [key]: value, imageWidth: 1440, imageHeight: 720 };
        } else if (cw === "Medium" && ch === "Medium") {
          return { ...item, [key]: value, imageWidth: 1440, imageHeight: 1080 };
        } else if (cw === "Small" && ch === "Medium") {
          return { ...item, [key]: value, imageWidth: 576, imageHeight: 720 };
        }
      }

      return { ...item, [key]: value };
    });

    setCarousel(newCarousel);
  };

  return (
    <>
      <div className="flex flex-row gap-2 flex-wrap mb-4">
        {carousel.map((_, index) => {
          const isSelected = selectedIndex === index;
          return (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex flex-row gap-1 flex-wrap w-fit px-3 py-2 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "bg-pink-600 border-pink-600 text-white"
                  : "bg-gray-100 border-gray-200 hover:border-pink-300 hover:bg-gray-50"
              }`}
            >
              <p className="text-sm font-semibold">Card {index + 1}</p>
            </div>
          );
        })}
        <div
          key={"add"}
          onClick={() => {
            setCarousel((prev) => [
              ...prev,
              {
                cardWidth: carousel[0]?.cardWidth,
                cardHeight: carousel[0]?.cardHeight,
                headerType: carousel[0]?.headerType,
                imageWidth: carousel[0]?.imageWidth,
                imageHeight: carousel[0]?.imageHeight,
                uploadedImage: null,
                title: "",
                body: "",
                buttons: [],
              },
            ]);
          }}
          className={`flex flex-row gap-1 flex-wrap w-fit px-3 py-2 rounded-lg border-2 cursor-pointer transition-all
             duration-200 bg-gray-100 border-gray-200 hover:border-pink-300 hover:bg-gray-50
              justify-center items-center`}
        >
          <Plus size={16} />
          <span className="text-sm font-semibold">Add</span>
        </div>
      </div>
      {selectedIndex === 0 && (
        <>
          <CarouselRatioButtonInput
            title={"Card Width"}
            description={
              "Cards in the carousel are vertical. Select the width of the card for your template."
            }
            option1={"Small"}
            option2={"Medium"}
            fieldKey={"cardWidth"}
            value={carousel[0].cardWidth}
            update={onUpdateCarouselCard}
          />
          <CarouselRatioButtonInput
            title={"Height Alignment"}
            description={"Card must fit one of two heights."}
            option1={"Short"}
            option2={"Medium"}
            fieldKey={"cardHeight"}
            value={carousel[0].cardHeight}
            update={onUpdateCarouselCard}
          />
          <CarouselRatioButtonInput
            title={"Header"}
            description={"Choose an option below to configure media type"}
            option1={"Image"}
            option2={"Video"}
            fieldKey={"headerType"}
            value={carousel[0].headerType}
            update={onUpdateCarouselCard}
          />
        </>
      )}

      {carousel[0].headerType === "Image" && (
        <>
          <FileUploadInput
            label="Upload Image"
            subtitle={`The image you specify must have a max file size of 1 MB,
             have a resolution of ${carousel[0].imageWidth} x ${carousel[0].imageHeight} pixels and should be a JPEG, JPG, PNG , GIF.`}
            accept=".jpeg,.jpg,.png,.gif"
            fileName={carousel[selectedIndex].uploadedImage?.name}
            onChange={(file) => {
              const image = new Image();

              image.onload = () => {
                if (
                  image.width !== carousel[0].imageWidth ||
                  image.height !== carousel[0].imageHeight
                ) {
                  console.log("yes not matcing");
                  toast.error(
                    `Image resolution is not matching. Required: ${carousel[0].imageWidth} x ${carousel[0].imageHeight}, Got: ${image.width} x ${image.height}`,
                  );
                  return;
                } else {
                  console.log("yes matcing");
                  setCarousel((prev) =>
                    prev.map((item, index) => {
                      if (index === selectedIndex) {
                        return { ...item, uploadedImage: file };
                      }
                      return item;
                    }),
                  );
                }
              };

              image.src = URL.createObjectURL(file);
            }}
          />
        </>
      )}

      <ButtonNormalnput
        label="Title"
        subtitle="Add a title for your card"
        placeholder="Enter the title"
        value={carousel[selectedIndex].title}
        maxLength={200}
        onChange={(type, value, onSuccess = () => {}) => {
          setCarousel((prev) =>
            prev.map((item, index) => {
              if (index === selectedIndex) {
                if (type === "variable") {
                  let i = 1;
                  while (item.title.includes(`[custom_param_text_${i}]`)) {
                    i++;
                  }
                  const finalValue = item.title + `[custom_param_text_${i}]`;
                  if (finalValue.length > 200) {
                    toast.error("Title length exceeds 200 characters");
                    return item;
                  }
                  console.log("final", finalValue);
                  return { ...item, title: finalValue };
                }

                return { ...item, title: value };
              }
              return item;
            }),
          );
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
            value={carousel[selectedIndex].body}
            onChange={(e) => {
              setCarousel((prev) =>
                prev.map((item, index) => {
                  if (index === selectedIndex) {
                    return { ...item, body: e.target.value };
                  }
                  return item;
                }),
              );
            }}
          />
          <div className="absolute bottom-3 right-3 pointer-events-none">
            <span className="text-xs text-slate-400">
              {carousel[selectedIndex].body.length}/2000
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium 
                    text-slate-700 shadow-sm hover:bg-slate-50 hover:border-blue-500 
                    hover:text-blue-600 transition-all"
            onClick={() => {
              setCarousel((prev) =>
                prev.map((item, index) => {
                  if (index === selectedIndex) {
                    let i = 1;
                    while (item.body.includes(`[custom_param_desc_${i}]`)) {
                      i++;
                    }
                    const finalValue = item.body + `[custom_param_desc_${i}]`;
                    if (finalValue.length > 2000) {
                      toast.error("Body length exceeds 2000 characters");
                      return item;
                    }
                    return { ...item, body: finalValue };
                  }
                  return item;
                }),
              );
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
        {carousel[selectedIndex]?.buttons?.map((btn, index) => {
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
              onClose={() => {}}
              onUpdate={(index, key, value) => {
                setCarousel((prev) =>
                  prev.map((item, i) => {
                    if (i === selectedIndex) {
                      return {
                        ...item,
                        buttons: item.buttons.map((btn, j) => {
                          if (j === index) {
                            return { ...btn, [key]: value };
                          }
                          return btn;
                        }),
                      };
                    }
                    return item;
                  }),
                );
              }}
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
              setCarousel((prev) =>
                prev.map((item, index) => {
                  if (index === selectedIndex) {
                    return {
                      ...item,
                      buttons: [
                        ...item.buttons,
                        {
                          selectedAction: {
                            value: "dialer",
                            label: "Dialer Action",
                            icon: <Phone size={16} color="#2462eb" />,
                          },
                          text: "",
                          phoneNumber: "",
                          countryCode: {
                            value: "+91",
                            label: "+91",
                          },
                          url: "",
                          urlMode: {
                            label: "Default (Browser)",
                            value: "default",
                          },
                          latitude: "",
                          longitude: "",
                          label: "",
                          query: "",
                          startDate: new Date(),
                          endDate: new Date(
                            new Date().setDate(new Date().getDate() + 1),
                          ),
                          title: "",
                          description: "",
                        },
                      ],
                    };
                  }
                  return item;
                }),
              );
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

export default TemplateCarouselCard;
