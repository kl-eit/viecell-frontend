"use client";
import React, { useEffect, useState } from "react";
import { fetchAPI, getMediaUrl } from "../../lib/api";
import SectionBlock from "../Section";
import Typography, { TextDescription } from "../Typography/Typography";
import { motion, AnimatePresence } from "framer-motion";
export default function Faqs() {
  const [faqsData, setFaqsData] = useState({
    Title: "",
    Description: "",
    faqs: [],
  });
  const [openIndex, setOpenIndex] = useState(0);
  const toggleIndex = (index) => {
    if (index !== openIndex) setOpenIndex(index);
  };
  useEffect(() => {
    async function loadFaqs() {
      try {
        fetchAPI("faq-section").then((data) => setFaqsData(data));
      } catch (error) {
        console.error("Failed to load FAQs:", error);
      }
    }
    loadFaqs();
  }, []);
  return (
    <SectionBlock>
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-4">
          <Typography
            title={faqsData.Title}
            headingLevel="h2"
            size="xl"
            color="primary"
            LineHeading
          />
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-8 lg:flex justify-end">
          <TextDescription>{faqsData.Description}</TextDescription>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="grid lg:col-span-6 col-span-12 gap-2.5">
          <AnimatePresence>
            {faqsData.faqs?.map((item, index) => (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                key={item.id}
                className={`overflow-hidden px-5 rounded-[20px] border-b border-neutral-400/50 flex flex-col transition-colors duration-300 ${
                  openIndex === index ? "bg-lime-100" : ""
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <div className="flex-1 text-lime-900 text-base font-semibold font-['Roboto'] text-left">
                    {item.Title}
                  </div>
                  <div className="w-5 h-5 flex justify-center items-center transition-transform duration-300">
                    <svg
                      className={`transform ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7L7 1L13 7"
                        stroke="#4F5D64"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pr-14 pb-8 text-lime-900 text-base font-normal font-['Roboto'] leading-6">
                    {item.Description}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <img
            className="self-stretch rounded-[20px]"
            src={getMediaUrl(faqsData?.FaqImg)}
            alt="FAQ Illustration"
          />
        </div>
      </div>
    </SectionBlock>
  );
}
