import React from "react";
import SectionBlock from "../../../shared/Section";
import BlocksRendererClient from "../../../shared/BlocksRendererClient";

export default function WhyChooseSection({ whychooseData }) {
  const data = whychooseData;
  console.log(data, "whychooseData");
  return (
    <SectionBlock
      className={`bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900 text-center`}
      rounded
    >
      <div className="text-md font-medium">{data?.label}</div>
      <div
        className={
          "max-w-3xl lg:text-3xl text-xl font-['Roboto_Condensed'] mx-auto"
        }
        dangerouslySetInnerHTML={{ __html: data?.title }}
      />
      <div>
        <div className="w-[180px] flex justify-center mx-auto">
          <img
            src="/footer-logo.png"
            alt="Feature Logo"
            className="w-[140px] h-auto"
            loading="lazy"
            width={140}
            height={140}
          />
        </div>
      </div>
     
      <div className={`grid grid-cols-1 lg:grid-cols-3  text-left  gap-7 `}>
        {data?.card?.map((card, i) => {
          return (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl border border-[#979832]/20 inline-flex flex-col justify-center items-start gap-4"
            >
              {card?.title && (
                <h3
                  className="lg:text-2xl text-lg font-normal font-['Roboto_Condensed']"
                  dangerouslySetInnerHTML={{ __html: card?.title }}
                />
              )}
              <BlocksRendererClient content={card?.Description} />
            </div>
          );
        })}
      </div>
    </SectionBlock>
  );
}
