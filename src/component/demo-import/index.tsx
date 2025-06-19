"use client";
import {
  CodeSandboxOutlined,
  HeartOutlined,
  ImportOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Steps } from "antd";
import React from "react";

const DemoImport = () => {
  const steps = [
    {
      icon: <CodeSandboxOutlined />,
      status: "finish",
      title: <div className="text-white uppercase">Install Herion</div>,
    },
    {
      icon: <ImportOutlined />,
      status: "finish",
      title: <div className="text-white uppercase">Import Demo Content</div>,
    },
    {
      icon: <HeartOutlined />,
      status: "finish",
      title: <div className="text-white uppercase">Have Fun!</div>,
    },
  ];
  return (
    <div className="h-[770px] w-full bg-gray-900 grid grid-cols-1 md:grid-cols-2 gap-8  p-4 justify-center">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-5xl font-bold mb-2 italic text-gray-300 font-[cursive]">
            Demo Import
          </h2>
          <h3 className="text-2xl text-gray-300 font-extrabold uppercase mb-4">
            One-Click Demo Install
          </h3>
          <p className="text-gray-400 mb-2">
            Herion includes a One-Click Demo Importer, to allow you to import
            the demo content easily.
          </p>
          <p className="text-gray-400 mb-6">
            It is the cool way to set up your theme in a couple of minutes from
            this starting point.
          </p>
          <button className="bg-pink-600 hover:bg-pink-500 text-white font-bold px-6 py-2 text-sm uppercase">
            Get Your Copy
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:ps-40">
        {" "}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#fff", // Example color, replace with your desired color
            },
          }}
        >
          <Steps
            className="md:h-[70%] h-[100%] "
            direction="vertical"
            items={steps}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default DemoImport;
