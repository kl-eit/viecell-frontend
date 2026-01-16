import React from "react";
import { PageHeaderSetter } from "../lib/PageHeaderContext";
import SectionBlock from "../shared/Section";
import Testimonial from "../shared/Testimonial/Testimonial";
import Blogs from "../shared/Blogs/Blogs";
import Typography, { TextDescription } from "../shared/Typography/Typography";
import WizardForm from "../shared/LiverCirrhosisForm/WizardForm";
import ScrollVelocityText from "../shared/ScrollVelocityText/ScrollVelocityText";
import CTASection from "../component/CTASection/CTASection";
import StepForm from "../shared/Step-Form/StepForm";

export default function page() {
  return (
    <>
      <SectionBlock>
        {/* <SectionBlock>
          <div className="max-w-[750px] mx-auto text-center flex flex-col gap-10">
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
            <WizardForm />
          </div>
        </SectionBlock> */}
      </SectionBlock>
      <StepForm />
      {/* <CTASection />
      <ScrollVelocityText text="Repair  Regenerate  Rejuvenate" /> */}
    </>
  );
}
