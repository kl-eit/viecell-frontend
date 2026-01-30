import React from "react";
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
import SectionBlock from "../shared/Section";
import { fetchAPI } from "../lib/api";
import StoriesGrid from "./StoriesGrid";
export default async function page() {
  const StoriesData = await fetchAPI("testimonials");
  const StoriesCategory = await fetchAPI(
    "testimonial-categories?sort=name:asc",
  );
  // console.log("StoriesData:", StoriesData);
  return (
    <div>
      <HeroSection
        title="Client Stories"
        description="Discover real-world experiences from patients across different conditions and backgrounds, highlighting care approaches, recovery paths, and personal outcomes."
      />
      <SectionBlock className="text-lime-900">
        <StoriesGrid stories={StoriesData} categories={StoriesCategory} />
      </SectionBlock>
      <CTASection CTAdata />
    </div>
  );
}
