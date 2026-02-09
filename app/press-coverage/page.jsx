
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
import { fetchAPI } from "../lib/api";
import PressClient from "./PressClient";
export default async function page() {
  const PageData = await fetchAPI("press-coverages");
  return (
    <div>
      <HeroSection
        title="Press Coverage"
        description="Explore our featured news articles, media coverage, and recognition in leading publications for our pioneering work in regenerative medicine."
      />

    <PressClient PageData={PageData} />
      <CTASection />
    </div>
  );
}
