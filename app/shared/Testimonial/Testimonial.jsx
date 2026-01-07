"use client";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import SectionBlock from "../Section";
import Typography, { TextDescription } from "../Typography/Typography";
import { QuoteIcon } from "../icons/icons";
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
  return (
    <SectionBlock
      mode="light"
      rounded
      className=" bg-lime-50/50 bg-[url('/Testimonial-bg.png')] bg-cover bg-center"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <Typography
          title="Inspiring Stories"
          headingLevel="h2"
          size="xl"
          color="primary"
        />
        <div className="max-w-[600px] text-center">
          <TextDescription align="center">
            Join hundreds of international patients who have discovered
            affordable, advanced, and ethical stem cell treatments in India.
          </TextDescription>
        </div>
      </div>
      <div className="flex w-full min-w-0">
        <div className="w-full min-w-0">
          <Swiper
            modules={[Pagination, Autoplay,Navigation]}
            slidesPerView={1}
            spaceBetween={20}
          
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="h-full"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex flex-col justify-between h-full p-7 bg-white rounded-[20px] gap-6">
                  {/* Testimonial message */}
                  <div className="text-neutral-500 font-normal italic leading-7 flex-1">
                    <ReactMarkdown>{richTextToString(t.Message)}</ReactMarkdown>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4 mt-4 justify-between">
                    <div className="flex items-center gap-4">
                      {t.Photo && (
                        <img
                          src={getMediaUrl(t.Photo)}
                          alt={t.Name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      )}
                      <div className="flex flex-col text-left">
                        <span className="text-lime-900 font-semibold">
                          {t.Name}
                        </span>
                        {t.Designation && (
                          <span className="text-gray-500 text-sm">
                            {t.Designation}
                          </span>
                        )}
                      </div>
                    </div>
                    <QuoteIcon size={24} aria-label="Quote Icon" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SectionBlock>
  );
}
