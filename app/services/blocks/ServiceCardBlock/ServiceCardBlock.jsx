"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SectionBlock from "../../../shared/Section";
import BlocksRendererClient from "../../../shared/BlocksRendererClient";
export default function ServiceCardBlock({ ServiceCardBlock }) {
  const data = ServiceCardBlock;
  console.log(data, "data");
  return (
    <SectionBlock className="text-lime-900">
      <>
        {data?.label && (
          <div className="text-md font-medium text-center">{data?.label}</div>
        )}

        {data?.Title && (
          <div
            className={
              "max-w-3xl lg:text-3xl text-xl font-semibold font-['Roboto_Condensed']  mx-auto text-center"
            }
            dangerouslySetInnerHTML={{ __html: data?.Title }}
          />
        )}
        <div>&nbsp;</div>
        <div
          className={`grid grid-cols-1 text-left  gap-10 lg:gap-30 ${
            data?.card?.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
          }`}
        >
          {data?.card?.map((card, i) => {
            return (
              <div key={i}>
                {card?.title && (
                  <h3
                    className="lg:text-xl text-lg font-semibold font-['Roboto_Condensed'] mb-2 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: card?.title }}
                  />
                )}
                <BlocksRendererClient content={card?.Description} />
                {card?.Message && (
                  <div className="p-5 bg-lime-50 rounded-[10px] inline-flex items-center gap-5">
                    <div className="font-normal leading-normal">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {card?.Message}
                      </ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {data?.Message && (
          <div className="p-5 bg-lime-50 rounded-[10px] gap-5 text-center">
            <div className="font-normal leading-normal">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {data?.Message}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </>
    </SectionBlock>
  );
}
