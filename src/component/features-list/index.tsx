import {
  AudioOutlined,
  CameraOutlined,
  CloudDownloadOutlined,
  CreditCardOutlined,
  CustomerServiceOutlined,
  DatabaseOutlined,
  EnvironmentOutlined,
  HighlightOutlined,
  MailOutlined,
  ReloadOutlined,
  SafetyOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import React from "react";

const FeatureList = () => {
  const featuresList = [
    {
      icon: <ToolOutlined />,
      label: "Enhanced Page Builder",
      description:
        "A boosted version of WPBakery Page Builder included ($74 value) with a clean admin design and a ton of additional elements for musicians.",
    },
    {
      icon: <ReloadOutlined />,
      label: "Slider Revolution",
      description:
        "Comes with the Revolution Slider plugin included ($109 value). All demo slider templates are included in your theme package.",
    },
    {
      icon: <HighlightOutlined />,
      label: "Live Customizer",
      description:
        "No more bloated theme options panels. Change the main appearance of your website and see the changes instantly in the live preview.",
    },
    {
      icon: <CloudDownloadOutlined />,
      label: "One-Click Demo Install",
      description:
        "Import the demo data in one click and edit the content to suits your need. The easiest way to create an awesome website quickly.",
    },
    {
      icon: <CustomerServiceOutlined />,
      label: "Power Elite Support",
      description:
        "Your theme package comes with 6 months of support included for free! We got a dedicated support forum with a very rich knowledge base and support staff tech guys to help you out.",
    },
    {
      icon: <SafetyOutlined />,
      label: "Lifetime Free Updates",
      description:
        "With Herion, you will get lifetime free updates. Updates may contain various theme improvements, bug fixes, and security updates.",
    },
    {
      icon: <EnvironmentOutlined />,
      label: "Translatable Ready",
      description:
        "Translation files are included to translate your site easily with plugins like Loco Translate or create a multilingual website using WPML.",
    },
    {
      icon: <CreditCardOutlined />,
      label: "Child Theme Included",
      description:
        "Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization.",
    },
    {
      icon: <DatabaseOutlined />,
      label: "Content Blocks",
      description:
        "Our integrated Content Block system allows you to create replicable headers, footers and sections of content that can be integrated into your pages.",
    },
    {
      icon: <AudioOutlined />,
      label: "Social Media Integration",
      description:
        "Integrates content from your favorite social media and music platform directly into your website, so your content is updated right away. Instagram, YouTube, Bandsintown, Spotify, Facebook, MailChimp and more...",
    },
    {
      icon: <CameraOutlined />,
      label: "Photos Included",
      description:
        "Except for disc artworks from the discography used for demo purpose, all photos are included and ready-to-use in your website without any additional license.",
    },
    {
      icon: <MailOutlined />,
      label: "Contact Form 7",
      description:
        "Herion offers support for the most popular contact form plugin. Contact Form 7 is responsive, easy to use and effective.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-[90%] md:w-[85%] mx-auto py-4">
      {featuresList.map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="text-[34px] text-red-500">{_.icon}</div>
            <div className="font-medium text-[24px] font-sans">{_.label}</div>
            <div className="text-[14px] text-gray-600 font-mono">
              {_.description}
            </div>
          </div>
      ))}
    </div>
  );
};

export default FeatureList;
