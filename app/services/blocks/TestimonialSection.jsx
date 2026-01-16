"use client";
import SectionBlock from "../../shared/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
export default function TestimonialSection({ testimonialsData }) {

  console.log(testimonialsData,'testimonialsData')
  return (
    <SectionBlock
      className="bg-[linear-gradient(180deg,#E5F0CA_0%,#F7F9EF_100%)] text-lime-900 text-center"
      rounded
    >
      <div className="block w-full min-w-0">
        <div className="flex flex-col gap-10 text-center items-center">
          <div>
            <svg width="40" height="40" viewBox="0 0 67 50" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.7776 4.4764C17.1453 7.44602 10.2255 13.6553 8.50467 24.4614C8.03619 27.402 8.69049 25.1807 10.6704 23.6893C17.1348 18.8199 29.8452 20.5432 31.6092 31.668C35.1581 51.3619 10.6992 54.7715 3.46004 43.8943C1.77588 41.3661 0.660956 38.4149 0.259217 35.1739C-1.48514 21.0781 5.68988 8.52373 18.2943 2.62665C20.6262 1.53577 23.0837 0.682037 25.7284 0.0562297C27.0527 -0.213855 28.0145 0.512081 28.4581 1.73866C28.8337 2.78607 28.9619 3.9415 27.7776 4.4764ZM62.8192 4.4764C52.1868 7.44602 45.2657 13.6553 43.5462 24.4614C43.0777 27.402 43.732 25.1807 45.7119 23.6893C52.1764 18.8199 64.8867 20.5432 66.6494 31.668C70.1996 51.3619 45.7407 54.7715 38.5016 43.8943C36.8174 41.3661 35.7025 38.4149 35.3007 35.1739C33.5564 21.0781 40.7301 8.52373 53.3358 2.62665C55.6677 1.53577 58.1239 0.682037 60.7699 0.0562297C62.0942 -0.213855 63.056 0.512081 63.4996 1.73866C63.8752 2.78607 64.0034 3.9415 62.8192 4.4764Z"
                fill="#2D4213"
              />
            </svg>
          </div>
          <div className="block w-full">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade, Navigation]}
             // autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ el: ".testimonials-pagination", clickable: true }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              className="w-full"
              spaceBetween={20}
              slidesPerView={1}
              loop={testimonialsData?.length > 1}
            >
              {testimonialsData?.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col gap-10 text-center items-center">
                    <div className="max-w-[800px] text-center lg:text-3xl text-xl font-normal font-['Roboto_Condensed'] text-lime-900 leading-1.2">
                      The rheumatoid arthritis symptoms have reduced
                      substantially. My mobility has improved and the
                      inflammation markers are down.
                    </div>
                    <div className="text-md font-medium">
                      <span className="block">Mr. Prakash </span>
                      <span>
                        Diagnosed with Autoimmune, now feeling more supported
                        with Viecell
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="custom-prev">
              <button
                variant="white"
                className="p-4 bg-white/60 rounded-[100px] cursor-pointer group relative w-14 h-14 inline-flex flex-col justify-center items-center gap-2.5"
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#979832"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="testimonials-pagination w-auto! flex items-center gap-2! p-5 bg-white/60 rounded-[100px]"></div>
            <div className="custom-next">
              <button
                variant="white"
                className="p-4 bg-white/60 rounded-[100px] cursor-pointer group relative w-14 h-14 inline-flex flex-col justify-center items-center gap-2.5 h-14"
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#979832"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
