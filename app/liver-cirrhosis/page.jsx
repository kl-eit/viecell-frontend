import React from "react";
import { PageHeaderSetter } from "../lib/PageHeaderContext";
import SectionBlock from "../shared/Section";
import Testimonial from "../shared/Testimonial/Testimonial";
import Blogs from "../shared/Blogs/Blogs";
import Typography, { TextDescription } from "../shared/Typography/Typography";
import Button from "../shared/Button/Button";

export default function page() {
  return (
    <>
      <SectionBlock>
        <PageHeaderSetter
          title="Liver Cirrhosis"
          breadcrumbLast="Liver Cirrhosis"
        />
        <h1>Page Data coming soon!</h1>
        <SectionBlock>
          <div className="max-w-[800px] mx-auto text-center">
            <div className="">
              <Typography
                title="Liver Cirrhosis Cause Finder"
                headingLevel="h2"
                size="lg"
                color="primary"
                align="center"
                subtitle="Answer a few questions to explore possible causes of liver cirrhosis based on symptoms and medical history. Not for diagnosis."
              />
            </div>
            <div className="p-10 rounded-[20px] outline-1 outline-black/10 inline-flex flex-col justify-start items-center gap-7">
              <div className="text-center justify-start text-lime-900 text-2xl font-semibold font-['Roboto_Condensed'] leading-6">
                Has the individual had chronic alcohol use?
              </div>
              <div className="self-stretch inline-flex justify-center items-center gap-7">
                <div className="flex-1 h-72 p-7 relative bg-stone-100 rounded-[20px] outline-1 outline-lime-900 flex justify-center items-center gap-2.5">
                  <div className="text-center justify-start text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-6">
                    Alcoholic Cirrhosis (ALD)
                  </div>
                  <div className="right-5 top-[17px] absolute flex justify-start items-center gap-2.5">
                    <div className="text-center justify-start text-lime-900 text-base font-semibold font-['Roboto_Condensed'] leading-6">
                      Yes
                    </div>
                    <div className="w-6 h-6 rounded-full border-[5px] border-lime-900" />
                  </div>
                </div>
                <div className="flex-1 h-72 p-7 relative bg-white rounded-[20px] outline-1 outline-black/10 flex justify-center items-center gap-2.5">
                  <div className="text-center justify-start text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-6">
                    Non-Alcoholic Cirrhosis
                  </div>
                  <div className="right-5 top-[15px] absolute flex justify-start items-center gap-2.5">
                    <div className="text-center justify-start text-lime-900 text-base font-semibold font-['Roboto_Condensed'] leading-6">
                      NO
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-4">
              <Button icon>NEXT</Button>
            </div>
          </div>
        </SectionBlock>
      </SectionBlock>
      <Testimonial />
      <Blogs />
    </>
  );
}
