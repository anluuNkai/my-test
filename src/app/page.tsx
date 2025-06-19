"use client";
import TemplateComponent from "@/component/templates";
import {
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import {
  Carousel,
  Collapse,
  CollapseProps,
  Drawer,
} from "antd";
import { useState } from "react";

const menuLink = [
  "Home",
  "Pages",
  "Releases",
  "Artists",
  "Events",
  "Videos",
  "Shop",
  "Blog",
  "Elements",
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const items: CollapseProps["items"] = menuLink.map((item, index) => ({
    key: String(index + 1),
    label: <div className="uppercase text-[15px] md:text-[32px]">{item}</div>,
    children: (
      <p
        className="ms-2  uppercase text-[15px] md:text-[32px]"
        style={{ fontFamily: "'Staatliches', sans-serif" }}
      >
        {item} content
      </p>
    ),
    showArrow: false,
  }));

  return (
    <div className="mt-[60px] relative flex flex-col gap-30">
      <div className="absolute top-0 px-5 w-full py-3 flex justify-end  text-white z-10">
        <MenuUnfoldOutlined
          className="text-[24px]"
          onClick={() => setOpen(true)}
        />
      </div>
      <div>
        <div className="w-[600px] flex flex-col  absolute top-44 left-1/5 -translate-x-1/2 z-20 uppercase text-white">
          <span className="text-[46px]">Dedicated to brands, labels, festivals, music store and more...</span>
          <p className="text-[28px]">No coding required</p>
          <div className="px-2 py-4 border-2 inline-block mt-4 w-[200px] text-center">View Demos</div>
        </div>
        <Carousel
          autoplay
          className="absolute top-0 h-[100vh] bg-gray-200 flex items-center justify-center text-center text-2xl"
        >
          <img
            src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
            alt=""
            className="w-full h-[100vh] object-cover"
          />
          <img
            src="https://shopnhiepanh.vn/admin/js/ckfinder/userfiles/images/49227190738_73af5343ee_b.jpg"
            alt=""
            className="w-full h-[100vh] object-cover"
          />
          <img
            src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474527LVO/5557920_cv.jpg"
            alt=""
            className="w-full h-[100vh] object-cover"
          />
        </Carousel>
      </div>
      <TemplateComponent/>
      <Drawer
        width={"50vw"}
        // className="mt-[60px] "
        closable={{ "aria-label": "Close Button" }}
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="overflow-auto">
          <Collapse defaultActiveKey={["1"]} ghost items={items} />
        </div>
      </Drawer>
    </div>
  );
}
