import Blogs from "../shared/Blogs/Blogs";
import Button from "../component/Button/Button";
import SectionBlock from "../shared/Section";
import Testimonial from "../shared/Testimonial/Testimonial";
import Typography, { TextDescription } from "../shared/Typography/Typography";
import FilterTabs from "../shared/FilterTabs/FilterTabs";
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
export async function generateMetadata() {
  // const seo = await getPageSEO("treatment-comparison"); // slug of the page
  return {
    title: "Compare Global Stem Cell Centers with India",
    // description: "Default description",
  };
}
export default async function page() {
  return (
    <div>
      <HeroSection
        title="Compare Global Stem Cell Centers with India"
        description="Quickly explore leading stem cell clinics and compare them with India by disease treatment, therapy type, technology, and clinical expertise."
        imageSrc="Vector-map-gray.svg"
      />

      <SectionBlock>
        <FilterTabs />
        <div className="container p-14 relative bg-linear-to-l from-lime-200 via-stone-100 to-lime-100 rounded-4xl inline-flex justify-start items-start gap-72 overflow-hidden">
          <div className="flex-1 self-stretch inline-flex flex-col justify-center items-center gap-4 z-2">
            <div className="justify-start text-lime-900 text-2xl lg:text-4xl font-semibold font-['Roboto_Condensed'] capitalize">
              Need Help Deciding the Best Clinic?
            </div>
            <div className="text-neutral-500 text-base font-normal font-['Roboto'] leading-7 text-center">
              Speak to our medical advisor for personalized guidance.
            </div>
            <Button icon href="https://wa.me/919001290028">
              Talk to a Regenerative Specialist
            </Button>
          </div>

          <img className="absolute z-1 max-w-[1025px]" src="vector-map.svg" />
        </div>
      </SectionBlock>
      <Testimonial />
      <Blogs />
      <CTASection CTAdata />
    </div>
  );
}
