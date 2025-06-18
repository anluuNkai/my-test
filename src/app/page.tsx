"use client";
import {
  HeartOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Carousel, ConfigProvider, Dropdown, Space } from "antd";

export default function Home() {
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <CustomDropdownContent />,
    },
  ];

  function CustomDropdownContent() {
    return (
      <div className="w-screen">
        <div className="mb-2 font-bold">Menu Section</div>
        <button className="mb-2 p-2 bg-blue-500 text-white rounded-none">
          Action 1
        </button>
        <div className="mb-2">Some extra info here</div>
        <input className="border p-1 w-full" placeholder="Type here..." />
      </div>
    );
  }
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
  return (
    <div className="mt-[60px] relative">
      <div className="absolute top-0 px-5 w-full py-3 flex justify-between  text-white z-10">
        {menuLink.map((item) => (
          <div key={item} className="p-4">
        <ConfigProvider
          theme={{
            components: {
          Dropdown: {
            controlItemBgHover: "none",
            controlPaddingHorizontal: 30,
            borderRadiusXS: 0,
          },
            },
          }}
        >
          <Dropdown
            menu={{ items, onClick }}
            popupRender={() => (
          <div
            style={{
              top: 0,
              left: 0,
              height: "50vh",
              background: "black",
              zIndex: 9999,
              padding: 20,
              marginTop: 40,
            }}
          >
            <div
              style={{ maxWidth: 600, margin: "auto", marginTop: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-white">Dropdown Fullscreen</h2>
              <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
              </ul>
            </div>
          </div>
            )}
          >
            <div className="relative">
          {item}{" "}
          <div className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </div>
          </Dropdown>
        </ConfigProvider>
          </div>
        ))}
        <UserOutlined className="text-[24px]" />
        <HeartOutlined className="text-[24px]" />
        <ShoppingCartOutlined className="text-[24px]" />
        <MenuUnfoldOutlined className="text-[24px]" />
      </div>
        <Carousel autoplay className="absolute top-0 h-[500px] bg-gray-200 flex items-center justify-center text-center text-2xl">
          <img src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg" alt="" className="w-full h-[500px] object-cover"/>
          <img src="https://shopnhiepanh.vn/admin/js/ckfinder/userfiles/images/49227190738_73af5343ee_b.jpg" alt="" className="w-full h-[500px] object-cover"/>
          <img src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474527LVO/5557920_cv.jpg" alt="" className="w-full h-[500px] object-cover"/>
        </Carousel>
      </div>
  );
}
