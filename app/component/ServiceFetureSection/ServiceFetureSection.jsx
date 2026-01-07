import SectionBlock from "../../shared/Section";
import Typography from "../../shared/Typography/Typography";
export default function ServiceFetureSection({ fetureData, reverse = false }) {
    const data = fetureData;
    console.log(fetureData,'fetureData')
  return (
    <SectionBlock>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 items-center text-lime-900">
        <div className={reverse ? "order-2 lg:order-2 max-w-[600px]" : "order-2 lg:order-1 max-w-[600px]"}>
{/* {data?.sliderImages.map((image)=>
<div></div>
)} */}

          <svg width="602" height="602" viewBox="0 0 602 602" fill="none">
            <rect width="602" height="602" rx="26" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="301" y1="602" x2="301" y2="0">
                <stop stopColor="#F7F9EF" />
                <stop offset="1" stopColor="#E5F0CA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={reverse ? "order-1 lg:order-1 flex flex-col gap-6 max-w-[600px]" : "order-1 lg:order-2 flex flex-col gap-6 max-w-[600px]"}>
          <Typography
            title={data?.title}
            headingLevel="h3"
            size="xl"
            color="primary"
          />
         <div className="w-full" dangerouslySetInnerHTML={{ __html: data?.contentHTML || "" }} />
          {/* <div>
            <p>{data?.label}</p>
            <ul className="list-disc list-inside ml-2.5">
              {data?.list?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div> */}
          {data?.messageHTML && <div className="p-5 bg-lime-50 rounded-[10px] inline-flex items-center gap-5">
            <div className="font-normal leading-normal" dangerouslySetInnerHTML={{ __html: data?.messageHTML || "" }}>
            </div>
          </div>}
        
        </div>

      </div>
    </SectionBlock>
  );
}
