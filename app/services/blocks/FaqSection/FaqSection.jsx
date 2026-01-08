"use client";
import { useState } from "react";
import SectionBlock from "../../../shared/Section";
import Typography, {
} from "../../../shared/Typography/Typography";
import { motion } from "framer-motion";
export default function FaqSection({ faqsData }) {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleIndex = (index) => {
    if (index !== openIndex) setOpenIndex(index);
  };
  console.log(faqsData, "FaqSection");
  return (
    <SectionBlock>
      <div className="max-w-4xl  mx-auto ">
        <div className="flex flex-col gap-10">
          <div className="">
            <Typography
              title="Frequently Asked Questions"
              headingLevel="h2"
              size="lg"
              color="primary"
              align="center"
            />
          </div>
          <div>
            {faqsData?.map((item, index) => (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                key={item.id}
                className={`overflow-hidden border-b border-neutral-400/50 flex flex-col transition-colors duration-300 ${
                  openIndex === index ? "" : ""
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full py-6 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <div className="flex-1 text-lime-900 text-xl font-['Roboto'] text-left">
                    {item.question}
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
                    {item?.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
