"use client";

import React from "react";

const EasyToUse = () => {
  const stats = [
    { number: "200", label: "DEMO LAYOUTS" },
    { number: "110", label: "CONTENT ELEMENTS" },
  ];
  return (
    <div className="md:h-[670px] h-[max-content] w-full bg-gray-900 grid grid-cols-1 md:grid-cols-2 gap-8  p-4 justify-center">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center">
        <img
          className={`w-full md:h-[420px] w-[360px] object-cover`}
          src={
            "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/admin-1.png"
          }
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-5xl font-bold mb-2 italic text-gray-300 font-[cursive]">
            Easy To Use
          </h2>
          <h3 className="text-2xl text-gray-300 font-extrabold uppercase mb-4">
            No Coding Required
          </h3>
          <p className="text-gray-400 mb-2">
            Herion comes with an advanced drag and drop page builder to help you
            create your website easily and quickly.
          </p>
          <p className="text-gray-400 mb-6">
            It is the cool way to set up your theme in a couple of minutes from
            this starting point.
          </p>
          <div className=" text-white py-12 px-4">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-5xl font-extrabold">
                    <span>{stat.number}</span>
                    <span className="text-pink-500">+</span>
                  </h3>
                  <p className="mt-2 text-sm font-bold uppercase text-gray-300 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyToUse;
