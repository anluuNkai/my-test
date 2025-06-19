import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const SellYourMerch = () => {
  const listImages = [
    "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/product-gallery.jpg",
    "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/product-mp3.jpg",
    "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/checkout.jpg",
    "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/cart.jpg",
    "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/3-cols.jpg",
    "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/store-alt.jpg",
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-12">
      <div>
        <h2 className="text-5xl font-bold mb-2 italic text-gray-600 font-[cursive]">
          Sell Your Merch
        </h2>
        <div className="text-center text-[20px] md:text-[25px] uppercase">
          {" "}
          WooCommerce Shop
        </div>
      </div>

      <div className="text-center text-[15px] text-gray-400 w-[90%] md:w-[70%]">
        {" "}
        Sell your merch online using the most powerful and secure e-commerce
        WordPress theme: WooCommerce. Herion is built to integrates WooCommerce
        smoothly in its design.
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          height: "100%",
          width: "100%",
          margin: "2rem 3rem",
        }}
      >
        {listImages.map((_, idx) => (
          <SwiperSlide key={idx}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={_}
              alt=""
              className="w-[200px] h-[240px] md:w-[380px] md:h-[400px] object-cover shadow-2xl transition-transform duration-200 ease-in-out hover:-translate-y-1"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SellYourMerch;
