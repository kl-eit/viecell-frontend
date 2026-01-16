"use client";
import { Plus, Minus } from "lucide-react";
import { useState, useRef } from "react";
import SectionBlock from "../../../shared/Section";
import Typography from "../../../shared/Typography/Typography";
export default function FaqSection({ faqsData }) {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const contentRefs = useRef([]);
  return (
    <SectionBlock>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-10">
          <div>
            <Typography
              title="Frequently Asked Questions"
              headingLevel="h2"
              size="lg"
              color="primary"
              align="center"
            />
          </div>
          <div>
            {faqsData?.map((item, index) => {
              const isOpen = openIndex === index;
              const height = contentRefs.current[index]?.scrollHeight ?? 0;
              return (
                <div key={index} className="border-b border-[#E9EAEB] py-6">
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full flex justify-between items-center gap-4 select-none cursor-pointer"
                    id={`faq-question-${index}`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-lime-900 lg:text-lg text-md font-['Roboto'] text-left">
                      {item.question}
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center transition-transform duration-300">
                      {isOpen ? <Minus /> : <Plus />}
                    </div>
                  </button>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    style={{ height: isOpen ? `${height}px` : "0px" }}
                    className="overflow-hidden transition-[height] duration-300 ease-in-out"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="pr-14 pt-2 pb-6 text-lime-900 text-base font-normal font-['Roboto'] leading-normal">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
