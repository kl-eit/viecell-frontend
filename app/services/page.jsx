import CTASection from "../component/CTASection/CTASection";
import { fetchAPI, fetchAPINested } from "../lib/api";
import HeroSection from "../shared/HeroSection/HeroSection";
import SectionBlock from "../shared/Section";
import Typography, { TextDescription } from "../shared/Typography/Typography";
import TreatmentsClient from "./TreatmentsClient"; // Client-side component
export default async function TreatmentsPage() {
  // const services = await fetchAPI("services","Hero.Banner");
  const services =
    (await fetchAPI("services", {
      Hero: { populate: "*" },
      Cover: { populate: "*" },
    })) || [];
  return (
    <div>
    
      <HeroSection
        title="Advanced Care. Personalized Approach."
        description="At Viecells, our services are designed to support patients with chronic, degenerative, and complex medical conditions through a combination of conventional evaluation and advanced regenerative approaches."
        // imageSrc={pageData?.hero?.imageSrc}
        // reverse={pageData?.hero?.reverse}
      />
      <SectionBlock>
        <div className="grid grid-cols-12 gap-6 items-center flex-col md:flex-row justify-between">
          <div className="col-span-12 lg:col-span-5">
            <Typography
              title="Advanced Health Treatments"
              headingLevel="h2"
              size="xl"
              color="primary"
              LineHeading={true}
            />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex justify-end">
            <TextDescription text="Explore our range of personalized therapies designed to restore balance, improve wellness, and support your body’s natural healing processes." />
          </div>
        </div>
        <TreatmentsClient services={services || []} />
      </SectionBlock>
      <CTASection CTAdata />
    </div>
  );
}
