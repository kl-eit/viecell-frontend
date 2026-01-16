"use client";
import SectionBlock from "../../../shared/Section";
import Typography from "../../../shared/Typography/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, EffectFade, Navigation } from "swiper/modules";
let sectionCount = 0;
export default function ServiceFetureSection({ fetureData, reverse = false }) {
  const data = fetureData;
    sectionCount += 1;
     const paginationClass = `sliderImages-pagination-${sectionCount}`;
  return (
    <SectionBlock>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 items-center text-lime-900">
        <div
          className={
            reverse
              ? "order-2 lg:order-2 max-w-[600px]"
              : "order-2 lg:order-1 max-w-[600px]"
          }
        >
          <div className="aspect-square w-full flex flex-col justify-center items-center bg-[linear-gradient(360deg,#F7F9EF_0%,#E5F0CA_100%)] rounded-xl overflow-hidden relative">
            {!data?.sliderImages?.length ? (
              <div>No Image Found</div>
            ) : data.sliderImages.length === 1 ? (
              <div className="aspect-square w-full flex justify-center items-center bg-[linear-gradient(360deg,#F7F9EF_0%,#E5F0CA_100%)] p-6 rounded-xl">
                <img
                  src={data.sliderImages[0]}
                  alt="Slide"
                />
              </div>
            ) : (
              <div className="flex w-full min-w-0 my-auto">
                <Swiper
                  modules={[Pagination, EffectFade, Navigation]}
                  pagination={{ el: `.${paginationClass}`, clickable: true }}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={data.sliderImages.length > 1}
                >
                  {data.sliderImages.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={image}
                        alt={`Slide ${idx + 1}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            {data?.sliderImages?.length > 1 && (
               <div className="absolute bottom-3! z-3">
               <div className={`${paginationClass} w-auto! left-1/2 flex items-center gap-1.5 rounded-[100px] mt-3  bg-white/50! p-5 backdrop-blur-lg `}></div>
               </div>
            )}
          </div>
        </div>
        <div
          className={
            reverse
              ? "order-1 lg:order-1 flex flex-col gap-6 max-w-[600px]"
              : "order-1 lg:order-2 flex flex-col gap-6 max-w-[600px]"
          }
        >
          <Typography
            title={data?.title}
            headingLevel="h3"
            size="lg"
            color="primary"
            className="max-w-[480px] lg:text-4xl!"
          />
          <div
            className="w-full"
            dangerouslySetInnerHTML={{ __html: data?.contentHTML || "" }}
          />
          {data?.messageHTML && (
            <div className="p-5 bg-lime-50 rounded-[10px] inline-flex items-center gap-5">
              <div
                className="font-normal leading-normal"
                dangerouslySetInnerHTML={{ __html: data?.messageHTML || "" }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </SectionBlock>
  );
}
