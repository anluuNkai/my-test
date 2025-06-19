import { IMAGES_DISCOGRAPHY_RELASES } from "@/utils/discography-relases";
import React, { useState } from "react";

const ArtistPages = () => {
  const [activeTab, setActiveTab] = useState("single");

  const relaseSingalPages = [
    {
      label: "Default",
      img: IMAGES_DISCOGRAPHY_RELASES.infoAtRight.src,
    },
    {
      label: "Minimal",
      img: IMAGES_DISCOGRAPHY_RELASES.infoAtLeft.src,
    },
    {
      label: "Dark",
      img: IMAGES_DISCOGRAPHY_RELASES.wideWidth.src,
    },
    {
      label: "Standard Custom Layout",
      img: IMAGES_DISCOGRAPHY_RELASES.customHeader.src,
    },
    {
      label: "Discography Oriented",
      img: IMAGES_DISCOGRAPHY_RELASES.customLayout.src,
    },
    {
      label: "Band Oriented",
      img: IMAGES_DISCOGRAPHY_RELASES.customLayout.src,
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
        Artist Pages Simple or Custom Layouts
      </div>
      <div className="text-center text-[15px] text-gray-400 w-[90%] md:w-[70%]">
        {" "}
        Herion can be used for your record label website. You can create an
        unlimited number of pages for each artist and choose between simple
        default layouts, automatically generated from the release, videos and
        events artist category, or create a custom page. It’s all up-to-you!
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
            Artist Single Pages
          </button>

          <button
            onClick={() => setActiveTab("listing")}
            className={`uppercase text-sm font-semibold pb-2 ${
              activeTab === "listing"
                ? "text-black border-b-4 border-black"
                : "text-gray-600"
            }`}
          >
            Artist Listing
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
                  className={`md:w-[350px] md:h-[220px] w-full ${handleGetLast(
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

export default ArtistPages;
