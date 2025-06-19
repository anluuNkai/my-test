import { IMAGES_TEMPLATES_HOMEPAGE } from "@/utils/img-templates";
import React from "react";

const TemplateComponent = () => {
  const list_images = [
    {
      label: "Main Home",
      img: IMAGES_TEMPLATES_HOMEPAGE.mainHome.src,
    },
    {
      label: "One Page",
      img: IMAGES_TEMPLATES_HOMEPAGE.onePage.src,
    },
    {
      label: "Band Home",
      img: IMAGES_TEMPLATES_HOMEPAGE.bandHome.src,
    },
    {
      label: "Home Alt",
      img: IMAGES_TEMPLATES_HOMEPAGE.home.src,
    },
    {
      label: "DJ Event",
      img: IMAGES_TEMPLATES_HOMEPAGE.djEvent.src,
    },
    {
      label: "Festival",
      img: IMAGES_TEMPLATES_HOMEPAGE.festival.src,
    },
    {
      label: "Main Home",
      img: IMAGES_TEMPLATES_HOMEPAGE.mainHome.src,
    },
    {
      label: "Interactive Links",
      img: IMAGES_TEMPLATES_HOMEPAGE.interactiveLinks.src,
    },
    {
      label: "Minimal",
      img: IMAGES_TEMPLATES_HOMEPAGE.minimal.src,
    },
  ];
  return (
    <div className="w-full">
      <div className="text-center text-[20px] md:text-[20px] uppercase">
        {" "}
        Templates Homepages
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] md:w-[70%] mx-auto py-4">
        {list_images.map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-7 justify-center items-center transition-all "
          >
            <img
              className="md:w-[350px] w-full md:h-[220px] w-[260px] shadow-xl transition-transform duration-200 ease-in-out  hover:-translate-y-1 "
              src={_.img}
              alt=""
            />
            <p className="text-[#333333]">{_.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateComponent;
