"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { getMediaUrl } from "../../lib/api";
import Button from "../../component/Button/Button";
import CarouselNav from "../../shared/CarouselNav/CarouselNav";
import { useEffect, useRef, useState } from "react";
export default function IntroSlider({ Banner }) {
  const paginationRef = useRef(null);
  const slideRefs = useRef([]);
  const animateSlide = (index) => {
    const slide = slideRefs.current[index];
    if (!slide) return;
  };
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    animateSlide(0);
  }, []);
  return (
    <div
      className={`rounded-[30px] bg-[#F7F9EF] pt-30 pb-5 min-h-[calc(100vh-24px)] flex flex-col items-center justify-center ${
        pageLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
      //  autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ el: paginationRef.current, clickable: true }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        className="container my-auto"
        onInit={() => setPageLoaded(false)}
         onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ".custom-prev";
          swiper.params.navigation.nextEl = ".custom-next";
          swiper.params.pagination.el = paginationRef.current;
        }}
      >
        {Banner?.map((slide, index) => {
          const BannerImage = getMediaUrl(slide?.BannerImage);
          return (
            <SwiperSlide
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
            >
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-15 justify-center items-center">
                <div className="flex flex-col px-4 sm:px-6 gap-4 lg:gap-6 max-w-[500px]">
                  <div className="slide-title text-lime-900 text-2xl lg:text-5xl font-extrabold font-['Roboto_Condensed'] uppercase leading-none">
                    {slide?.Title}
                  </div>
                  <div className="slide-desc text-lime-900 lg:text-lg font-normal font-['Roboto'] lleading-none">
                    {slide?.Description}
                  </div>

                  <div className="slide-button inline-flex justify-start gap-2.5">
                    {slide?.CTA1Link && (
                      <Link href={`${slide?.CTA1Link}`}>
                        <Button variant="primary">{slide?.CTA1}</Button>
                      </Link>
                    )}
                    {slide?.CTA2Link && (
                      <Link href={`${slide?.CTA2Link}`}>
                        <Button variant="white">{slide?.CTA2}</Button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="px-4 lg:p-0">
                  <Image
                    src={BannerImage}
                    alt={slide?.Title || "Banner"}
                    className="object-contain max-h-[calc(100vh-100px)]"
                    property="true"
                    width={slide?.BannerImage?.width}
                    height={slide?.BannerImage?.height}
                    unoptimized
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <CarouselNav
        paginationRef={paginationRef}
      />
      {/* <style>{`
        .swiper-pagination-bullet {
          background-color: #E6F1CD !important;
          opacity: 1 !important;
          --swiper-pagination-bullet-width: 10px;
          --swiper-pagination-bullet-height: 10px;
          --swiper-pagination-bullet-horizontal-gap: 4px;
             cursor: pointer;
        }
        .swiper-pagination-bullet-active {
          background-color: #2D4213 !important;
        }
          .swiper-fade .swiper-slide {
          transition: opacity 1.2s ease-in-out !important;
        }
      `}</style> */}
    </div>
  );
}
