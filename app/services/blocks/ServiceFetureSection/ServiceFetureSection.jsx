"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SectionBlock from "../../../shared/Section";
import Typography from "../../../shared/Typography/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Navigation } from "swiper/modules";
import { STRAPI_URL } from "../../../lib/api";
let sectionCount = 0;
export default function ServiceFetureSection({ fetureData, reverse }) {
  const data = fetureData;
  sectionCount += 1;
  const paginationClass = `sliderImages-pagination-${sectionCount}`;
  const sliderImages = Array.isArray(data?.Slider)
    ? data.Slider.map((img) => ({
        id: img.id,
        url: img.url,
        alt: img.alternativeText || img.name || "Slide image",
      }))
    : [];
  return (
    <SectionBlock className="pt-0!">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-15 gap-10 items-center text-lime-900">
        <div
          className={
            reverse
              ? "order-2 lg:order-2 max-w-[600px]"
              : "order-2 lg:order-1 max-w-[600px]"
          }
        >
          <div className={`${!sliderImages?.length ? 'aspect-square' : ''} w-full flex flex-col justify-center items-center bg-[linear-gradient(360deg,#F7F9EF_0%,#E5F0CA_100%)] rounded-xl overflow-hidden relative`}>
            {!sliderImages?.length ? (
              <div>No Image Found</div>
            ) : sliderImages.length === 1 ? (
            
                <img
                  src={`${STRAPI_URL}${sliderImages[0].url}`}
                  alt={sliderImages[0].alt}
                />
              
            ) : (
              <div className="flex w-full min-w-0 my-auto">
                <Swiper
                  modules={[Pagination, EffectFade, Navigation]}
                  pagination={{ el: `.${paginationClass}`, clickable: true }}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={sliderImages?.length > 1}
                >
                  {data?.Slider?.map((image, idx) => {
                    return (
                      <SwiperSlide key={idx}>
                        <img
                          src={`${STRAPI_URL}${image?.url}`}
                          alt={image?.alt}
                          className="mx-auto"
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )}
            {sliderImages?.length > 1 && (
              <div className="absolute bottom-3! z-3">
                <div
                  className={`${paginationClass} w-auto! left-1/2 flex items-center gap-1.5 rounded-[100px] mt-3  bg-white/50! p-5 backdrop-blur-lg `}
                ></div>
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
            className="max-w-[480px] lg:text-3xl!"
          />
          <div className="w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 my-2 space-y-2" {...props} />
                ),
                 ol: ({ node, ...props }) => (
                  <ul className="list-decimal pl-6 my-2 space-y-2" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="mb-2 leading-relaxed"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold " {...props} />
                ),
              }}
            >
              {data?.Content}
            </ReactMarkdown>
          </div>

          {data?.Message && (
            <div className="p-5 bg-lime-50 rounded-[10px] inline-flex items-center gap-5">
              <div className="font-normal leading-normal">
                <ReactMarkdown remarkPlugins={[remarkGfm]}
                  components={{
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 space-y-1" {...props} />
                ),
                 ol: ({ node, ...props }) => (
                  <ul className="list-decimal pl-6 space-y-1" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="mb-2 leading-relaxed"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold " {...props} />
                ),
              }}>
                  {data?.Message}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionBlock>
  );
}
