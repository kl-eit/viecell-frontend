"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { getMediaUrl } from "../../lib/api";
import Button from "../Button/Button";
import gsap from "gsap";
import { useEffect, useRef } from "react";
export default function IntroSlider({ Banner }) {
 const slideRefs = useRef([]);

  const animateSlide = (index) => {
    const slide = slideRefs.current[index];
    if (!slide) return;
    const title = slide.querySelector(".slide-title");
    const desc = slide.querySelector(".slide-desc");
    const buttons = slide.querySelectorAll(".slide-button");
    gsap.set([title, desc, buttons], { opacity: 0, y: 20 });
    gsap.to(title, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
    gsap.to(desc, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" });
    gsap.to(buttons, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.4,
      stagger: 0.1,
      ease: "power2.out",
    });
  };
  useEffect(() => {
    animateSlide(0);
  }, []);

  return (
    <>
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
        onSlideChange={(swiper) => animateSlide(swiper.activeIndex)}
      loop
      className="w-full min-h-screen"
    >
      {Banner?.map((slide, index) => {
        const BannerImage = getMediaUrl(slide?.BannerImage);
        return (
          <SwiperSlide key={index}
           ref={(el) => (slideRefs.current[index] = el)}
          >
            <div className="relative w-full h-screen items-center flex" >
              <img
                src={BannerImage}
                alt={slide?.title}
                className="absolute w-full h-full object-cover"
                
              />
                <div className="max-w-[1400px] px-4 sm:px-6 flex-1 relative inline-flex justify-start items-center mx-auto">
                  <div className="max-w-[700px] inline-flex flex-col justify-center items-start gap-6 py-[200px]">
                    <div className="slide-title max-w-[500px] justify-start text-lime-900 text-3xl lg:text-5xl font-extrabold font-['Roboto_Condensed'] capitalize leading-[1.1]" data-aos="fade-up" data-aos-duration="800">
                      {slide?.Title}
                    </div>
                    <div className="slide-desc max-w-[650px] justify-start text-lime-900 text-lg font-normal font-['Roboto'] leading-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                      {slide?.Description}
                    </div>
                  
                      <div className="slide-button inline-flex justify-center items-center gap-2.5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        {slide?.CTA1Link && (
                          <Link href={`/${slide.CTA1Link}`}>
                            <Button variant="primary" icon={true}>
                              {slide?.CTA1}
                            </Button>
                          </Link>
                        )}
                        {slide?.CTA2Link && (
                          <Link href={`/${slide.CTA2Link}`}>
                            <Button variant="white" icon={true}>
                              {slide?.CTA2}
                            </Button>
                          </Link>
                        )}
                      </div>
                   
                  </div>
                </div>
            
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #FFFFFF !important; 
          opacity: 1 !important;
          --swiper-pagination-bullet-width:14px;
           --swiper-pagination-bullet-height:14px;
           --swiper-pagination-bullet-horizontal-gap:6px;
        }
        .swiper-pagination-bullet-active {
          background-color: #35521D !important; 
        }
      `}</style>
    </>
  );
}
