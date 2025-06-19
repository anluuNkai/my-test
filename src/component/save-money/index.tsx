import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

interface FeatureCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageUrl,
  title,
  subtitle,
  features,
}) => {
  return (
    <div className="bg-white border-[0.5] border-gray-200  p-19 text-center space-y-4 hover:shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.02]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageUrl} alt={title} className="h-12 mx-auto" />
      <h3 className="text-lg font-semibold ">{title}</h3>
      <p className="text-pink-500 font-mono font-semibold">{subtitle}</p>
      <ul className="space-y-2 text-sm text-gray-700">
        {features.map((item, index) => (
          <li key={index} className="flex items-start justify-center gap-1">
            <div className="text-pink-500 font-bold text-[10px] mt-[2px]">
              <CheckCircleOutlined />
            </div>
            <span className="text-gray-400">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SaveMoney = () => {
  const features = [
    {
      imageUrl:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/wpb-80x80.jpg",
      title: "WPBakery Page Builder",
      subtitle: "Save $74",
      features: [
        "Full Version Included",
        "Unlimited design options",
        "Easy to use, no coding",
        "Fast & Easy",
      ],
    },
    {
      imageUrl:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/sr-80x80.jpg",
      title: "Slider Revolution",
      subtitle: "Save $109",
      features: [
        "Full Version Included",
        "Powerful visual editor",
        "Advanced Animations",
        "For Sliders, Headers and more",
      ],
    },
    {
      imageUrl:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/new_avatar80_80.png",
      title: "Wolf Page Builder Extension",
      subtitle: "Exclusive",
      features: [
        "Only Available with our Themes",
        "Extends WPBakery Page Builder",
        "Adds Tons of Elements and Options",
      ],
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center gap-12">
      <div>
        <h2 className="text-5xl text-center font-bold mb-2 italic text-gray-600 font-[cursive]">
          Save Money
        </h2>
        <div className="text-center text-[20px] md:text-[25px] uppercase">
          {" "}
          $90 of Premium Plugin Included
        </div>
      </div>

      <div className="text-center text-[15px] text-gray-400 w-[90%] md:w-[70%]">
        {" "}
        Includes WPBakery Page Builder and Slider Revolution premium plugins.
        Save money and start building your website using the best tools
        available on the market today.
      </div>
      <div className="flex gap-3">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaveMoney;
