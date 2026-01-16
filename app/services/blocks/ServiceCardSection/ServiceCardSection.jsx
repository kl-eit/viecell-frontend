"use client";
import SectionBlock from "../../../shared/Section";
export default function ServiceCardSection({
  fetureData,
  align = "center",
  fetureLogo = false,
  
}) {
  const data = fetureData;
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };
  return (
    <SectionBlock
      className={`bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900 text-center ${alignClass[align]}`}
      rounded
    >
      <div className="text-md font-medium">{data?.headingSmall}</div>
      <div
        className={
          fetureLogo ? "flex items-center justify-center gap-10" : "text-center"
        }
      >
        {fetureLogo && (
          <div className="w-[180px] flex justify-center">
            <img
              src="/footer-logo.png"
              alt="Feature Logo"
              className="w-[140px] h-auto"
              loading="lazy"
              width={140}
              height={140}
            />
          </div>
        )}

        <div
          className={`max-w-4xl lg:text-4xl text-xl font-['Roboto_Condensed']  ${fetureLogo ?"me-auto":"mx-auto"} `}
          dangerouslySetInnerHTML={{ __html: data?.titleBig }}
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="font-medium">{data?.cardslabel}</div>
        <div
          className={`grid grid-cols-1 text-left  gap-7 ${
            data?.cards?.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
          }`}
        >
          {data?.cards.map((card, i) => {
            return (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl border border-[#979832]/20 inline-flex flex-col justify-start items-start gap-4"
              >
                {card?.title && (
                  <h3 className="lg:text-2xl text-lg font-normal font-['Roboto_Condensed']">
                    {card?.title}
                  </h3>
                )}
                <div dangerouslySetInnerHTML={{ __html: card?.description }} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-md" dangerouslySetInnerHTML={{ __html: data?.note1 }}/>
      <div
        className={`max-w-4xl lg:text-4xl text-xl font-['Roboto_Condensed'] ${fetureLogo ? "":"mx-auto " }`}
        dangerouslySetInnerHTML={{ __html: data?.titleBig2 }}
      />
    </SectionBlock>
  );
}
