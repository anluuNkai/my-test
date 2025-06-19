import { IMAGES_DISCOGRAPHY_RELASES } from "@/utils/discography-relases";
import React, { useState } from "react";

const DiscographyReleasePages = () => {
  const [activeTab, setActiveTab] = useState("single");

  const relaseSingalPages = [
    {
      label: "Info at Right",
      img: IMAGES_DISCOGRAPHY_RELASES.infoAtRight.src,
    },
    {
      label: "Info at Left",
      img: IMAGES_DISCOGRAPHY_RELASES.infoAtLeft.src,
    },
    {
      label: "Wide Width",
      img: IMAGES_DISCOGRAPHY_RELASES.wideWidth.src,
    },
    {
      label: "Custom Header",
      img: IMAGES_DISCOGRAPHY_RELASES.customHeader.src,
    },
    {
      label: "Custom Layout",
      img: IMAGES_DISCOGRAPHY_RELASES.customLayout.src,
    },
    {
      label: "Text Oriented",
      img: IMAGES_DISCOGRAPHY_RELASES.customLayout.src,
    },
    {
      label: "Compact",
      img: IMAGES_DISCOGRAPHY_RELASES.compact.src,
    },
    {
      label: "Minimal",
      img: IMAGES_DISCOGRAPHY_RELASES.minimal.src,
    },
    {
      label: "",
      img: IMAGES_DISCOGRAPHY_RELASES.endMore.src,
    },
  ];

  const relaseListing = [
    {
      label: "Standard",
      img: IMAGES_DISCOGRAPHY_RELASES.standard.src,
    },
    {
      label: "Gallery",
      img: IMAGES_DISCOGRAPHY_RELASES.gallery.src,
    },
    {
      label: "Label",
      img: IMAGES_DISCOGRAPHY_RELASES.label.src,
    },
    {
      label: "Broken Grid",
      img: IMAGES_DISCOGRAPHY_RELASES.brokenGrid.src,
    },
    {
      label: "Animated Cover",
      img: IMAGES_DISCOGRAPHY_RELASES.animatedCover.src,
    },
    {
      label: "Metro",
      img: IMAGES_DISCOGRAPHY_RELASES.metro.src,
    },
    {
      label: "Filtered",
      img: IMAGES_DISCOGRAPHY_RELASES.filtered.src,
    },
    {
      label: "Carousel",
      img: IMAGES_DISCOGRAPHY_RELASES.carousel.src,
    },
    {
      label: "",
      img: IMAGES_DISCOGRAPHY_RELASES.endMore.src,
    },
  ];
  const handleGetLast = (label: string) => {
    if (label === "") {
      return "";
    }
    return "shadow-xl transition-transform duration-200 ease-in-out hover:-translate-y-1";
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-12">
      <div className="text-center text-[20px] md:text-[25px] uppercase">
        {" "}
        Discography Release Pages
      </div>
      <div className="text-center text-[15px] text-gray-400 w-[90%] md:w-[70%]">
        {" "}
        Single release pages don’t have to be boring and all the same! You can
        use a different layout for each release, and use the page builder
        template system if you want all release pages with the same custom
        layout.
      </div>
      <div className="w-[90%] md:w-[70%] border-b border-gray-200">
        <div className="flex justify-center space-x-10 relative">
          <button
            onClick={() => setActiveTab("single")}
            className={`uppercase text-sm font-semibold pb-2 ${
              activeTab === "single"
                ? "text-black border-b-4 border-black"
                : "text-gray-600"
            }`}
          >
            Release Single Pages
          </button>

          <button
            onClick={() => setActiveTab("listing")}
            className={`uppercase text-sm font-semibold pb-2 ${
              activeTab === "listing"
                ? "text-black border-b-4 border-black"
                : "text-gray-600"
            }`}
          >
            Release Listing
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] md:w-[70%] mx-auto py-4">
        {activeTab === "single" ? (
          <>
            {relaseSingalPages.map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-7 justify-center items-center transition-all "
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={`md:w-[350px]  md:h-[220px] w-full ${handleGetLast(
                    _?.label
                  )}`}
                  src={_?.img}
                  alt=""
                />
                <p className="text-[#333333]">{_?.label}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            {relaseListing.map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-7 justify-center items-center transition-all "
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={`md:w-[350px]  md:h-[220px] w-full ${handleGetLast(
                    _?.label
                  )}`}
                  src={_?.img}
                  alt=""
                />
                <p className="text-[#333333]">{_?.label}</p>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="text-center  text-gray-400">and more...</div>
    </div>
  );
};

export default DiscographyReleasePages;
