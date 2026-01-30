"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
export default function Infrastructure() {
  const infraImages = [
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.webp",
    "6.webp",
    "7.webp",
  ];
  return (
    <div className="flex w-full min-w-0 relative">
      <Swiper
        modules={[Pagination, EffectFade, Navigation]}
        pagination={{ el: `.paginationClass`, clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={infraImages?.length > 1}
        className="h-full"
        autoplay={{
        delay: 3000, // 3 seconds per slide
        disableOnInteraction: false, // keep autoplay active even after interaction
      }}
      >
        {infraImages.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                key={index}
                src={`/Infrastructure/${img}`}
                alt={`Infrastructure ${index + 1}`}
                className="w-full self-stretch rounded-[20px]"
                propertys={{ width: 619, height: 412 }}
                width={619}
                height={412}
                loading="lazy"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {infraImages?.length > 1 && (
        <div className="absolute bottom-3! z-3 w-full flex justify-center">
          <div>
            <div
              className={`paginationClass w-auto! left-1/2 flex items-center gap-1.5 rounded-[100px] mt-3  bg-white/50! p-5 backdrop-blur-lg `}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
