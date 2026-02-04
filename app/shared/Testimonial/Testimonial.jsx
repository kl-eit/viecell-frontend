"use client";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import SectionBlock from "../Section";
import Typography, { TextDescription } from "../Typography/Typography";
import { fetchAPI, getMediaUrl } from "@/app/lib/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const getTestimonials = async () => {
      try {
        // Fetch testimonials from the API
        const data = await fetchAPI("testimonials");

        // Shuffle the testimonials array to get random items
        const shuffledData = data.sort(() => 0.5 - Math.random());

        // Get the first 10 items from the shuffled array
        const randomTestimonials = shuffledData.slice(0, 6);

        // Set the random testimonials to state
        setTestimonials(randomTestimonials);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
      }
    };

    getTestimonials();
  }, []);

  function richTextToString(blocks) {
    if (!blocks || !Array.isArray(blocks)) return "";
    return blocks
      .map((block) => {
        if (block.type === "paragraph" && block.children) {
          return block.children.map((c) => c.text || "").join("");
        }
        return "";
      })
      .join("\n\n");
  }
  const diagnosisTexts = [
    "Diagnosed with {condition}, now feeling more supported with Viecell",
    "After a {condition} diagnosis, finding confidence with Viecell",
    "Diagnosed with {condition}, now feeling more in control with Viecell",
  ];
  const [selectedText] = useState(() => {
    return diagnosisTexts[Math.floor(Math.random() * diagnosisTexts.length)];
  });

  return (
    <SectionBlock
      rounded
      className="bg-[linear-gradient(180deg,#E5F0CA_0%,#F7F9EF_100%)] text-lime-900 text-center"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <Typography
          title="Inspiring Stories"
          headingLevel="h2"
          size="xl"
          color="primary"
        />
        <div className="max-w-[600px] text-center">
          <TextDescription align="center" className="text-lime-900! ">
            Join hundreds of international patients who have discovered
            affordable, advanced, and ethical stem cell treatments in India.
          </TextDescription>
        </div>
      </div>
      <div className="flex w-full min-w-0">
        <div className="w-full min-w-0">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
           pagination={{ el: ".testimonials-pagination", clickable: true }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
            className="h-full"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex flex-col justify-between h-full p-7 bg-white rounded-[20px] gap-6">
                  {/* Testimonial message */}
                  <div className="font-['Roboto_Condensed'] text-lime-900 leading-1.2 max-w-[800px] text-left lg:text-xl text-md font-normal leading-1.2 my-auto">
                    <ReactMarkdown>{richTextToString(t.Message)}</ReactMarkdown>
                  </div>

                  {/* Author info */}
               
                    <div className="flex gap-4 flex-col justify-content-between ">
                      {/* {t.Photo && (
                        <img
                          src={getMediaUrl(t.Photo)}
                          alt={t.Name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      )} */}
                      <div className="flex flex-col gap-1 ">
                        <span className="text-md font-medium uppercase text-end">
                         - {t.Name}
                        </span>
                        {/* {t.Designation && (
                          <span className="font-medium">
                            <p>
                              {selectedText.replace(
                                "{condition}",
                                t?.Designation.replace("Ortho", "OA"),
                              )}
                            </p>
                          </span>
                        )} */}
                      </div>
                    </div>
                  
                
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
        
      </div>
       <div className="flex items-center justify-center gap-4">
            {/* <div className="custom-prev">
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
            </div> */}
            <div className="testimonials-pagination w-auto! flex items-center gap-2! p-5 bg-white/60 rounded-[100px]"></div>
            {/* <div className="custom-next">
              <button
                variant="white"
                className="p-4 bg-white/60 rounded-[100px] cursor-pointer group relative w-14 inline-flex flex-col justify-center items-center gap-2.5 h-14"
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
            </div> */}
          </div>
    </SectionBlock>
  );
}
