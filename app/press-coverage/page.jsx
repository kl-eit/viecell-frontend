import React from "react";
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
import SectionBlock from "../shared/Section";
import Typography from "../shared/Typography/Typography";

export default function page() {
  return (
    <div>
      <HeroSection
        title="Press Coverage"
        description="Global recognition for innovation in advanced cellular and regenerative medicine."
        //imageSrc={pageData?.hero?.imageSrc}
      />
      <SectionBlock className="text-center text-lime-900">
        <div>
             <h2 className="text-2xl lg:text-[2.625rem] leading-none font-['Roboto_Condensed'] font-semibold mb-4 uppercase">Coming Soon</h2>
        <div className=" font-normal font-['Roboto'] leading-6">
          This page is currently under development. Please check back soon.
        </div>
        </div>
      
      </SectionBlock>
      <CTASection />
    </div>
  );
}
