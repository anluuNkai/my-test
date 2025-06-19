"use client";
import ArtistPages from "@/component/artist-pages";
import DemoImport from "@/component/demo-import";
import DiscographyReleasePages from "@/component/discography-release-pages";
import EasyToUse from "@/component/easy-to-use";
import FeatureList from "@/component/features-list";
import SaveMoney from "@/component/save-money";
import SellYourMerch from "@/component/sell-your-merch";
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
      <div
        className={`fixed top-[60px] px-5 w-full py-3 flex shadow-lg justify-end z-10 transition-colors duration-300 ${
          typeof window !== "undefined" && typeof document !== "undefined"
        ? ""
        : ""
        }`}
        id="menu-bar"
        style={{
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <MenuUnfoldOutlined
          className="text-[24px]"
          onClick={() => setOpen(true)}
          id="menu-icon"
        />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function() {
          if (typeof window === "undefined") return;
          var menuBar = document.getElementById("menu-bar");
          var menuIcon = document.getElementById("menu-icon");
          window.addEventListener("scroll", function() {
            if (window.scrollY > 0) {
          menuBar.style.backgroundColor = "white";
          menuBar.style.color = "black";
          menuIcon.style.color = "black";
            } else {
          menuBar.style.backgroundColor = "transparent";
          menuBar.style.color = "white";
          menuIcon.style.color = "white";
            }
          });
        })();
          `,
        }}
      />
      <div>
        <div className="md:w-[600px] flex flex-col  absolute top-30  md:left-40 left-3 z-20 uppercase text-white">
          <span className="md:text-[46px] text-[32px]">Dedicated to brands, labels, festivals, music store and more...</span>
          <p className="md:text-[28px] text-[20px] ">No coding required</p>
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
      <DiscographyReleasePages/>
      <DemoImport/>
      <ArtistPages/>
      <EasyToUse/>
      <SellYourMerch/>
      <FeatureList/>
      <SaveMoney/>
      <img className="md:h-[600px] h-[400px] object-cover w-full" src={"https://s3.cloud.cmctelecom.vn/tinhte2/2019/08/4733782_tinhte-rock-n-roll-history-17.jpg"} alt=""/>
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
