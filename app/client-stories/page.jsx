import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
import SectionBlock from "../shared/Section";
import { fetchAPI } from "../lib/api";
import StoriesGrid from "./StoriesGrid";
// import { TestimonialsColumn } from "./testimonials-columns-1";
export default async function page() {
  const StoriesData = await fetchAPI("testimonials");
  // console.log("StoriesData:", StoriesData);
  // const firstColumn = StoriesData.slice(0, 3);
  // const secondColumn = StoriesData.slice(3, 6);
  // const thirdColumn = StoriesData.slice(6, 9);
  // console.log("StoriesData:", StoriesData);
  return (
    <div>
      <HeroSection
        title="Client Stories"
        description="Discover real-world experiences from patients across different conditions and backgrounds, highlighting care approaches, recovery paths, and personal outcomes."
      />
      <SectionBlock className="text-lime-900">
        <StoriesGrid stories={StoriesData} />
      </SectionBlock>

      {/* <SectionBlock className="bg-background relative">
        <div className="z-10 mx-auto">
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[940px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </div>
      </SectionBlock> */}
      <CTASection CTAdata />
    </div>
  );
}
