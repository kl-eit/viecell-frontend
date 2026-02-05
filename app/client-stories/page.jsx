import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
import SectionBlock from "../shared/Section";
import { fetchAPI } from "../lib/api";
import StoriesGrid from "./StoriesGrid";
import TestimonialsMarquee from "../shared/TestimonialsMarquee/TestimonialsMarquee";
export default async function page() {
  const StoriesData = await fetchAPI("testimonials");
  return (
    <div>
      <HeroSection
        title="Client Stories"
        description="Discover real-world experiences from patients across different conditions and backgrounds, highlighting care approaches, recovery paths, and personal outcomes."
        imageSrc="Client-Stories.png"
      />
      {/* <SectionBlock className="text-lime-900">
        <StoriesGrid stories={StoriesData} />
      </SectionBlock> */}
      <TestimonialsMarquee stories={StoriesData} />
      <CTASection CTAdata />
    </div>
  );
}
