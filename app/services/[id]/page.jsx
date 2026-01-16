import fs from "fs";
import path from "path";
import { fetchAPI, getMediaUrl } from "../../lib/api";
import HeroSection from "../../shared/HeroSection/HeroSection";
import CTASection from "../../component/CTASection/CTASection";
import ServiceCardSection from "../blocks/ServiceCardSection/ServiceCardSection";
import ServiceFetureSection from "../blocks/ServiceFetureSection/ServiceFetureSection";
import FaqSection from "../blocks/FaqSection/FaqSection";
import ContentSection from "../blocks/ContentSection/ContentSection";
import TestimonialSection from "../blocks/TestimonialSection";
import StepForm from "../../shared/Step-Form/StepForm";
import { Fragment } from "react";
export default async function ServiceDetailsPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const services = await fetchAPI(`services?filters[slug][$eq]=${id}`);
  const service = services?.[0];
  const pageTitle = service?.Title;
  const newLink = {
    id: service?.id,
    Title: service?.Title,
    slug: id,
  };
  const testimonialCategory = service?.testimonial_category?.slug;
  const testimonial = testimonialCategory
    ? await fetchAPI(
        `testimonial-categories?filters[slug]=${testimonialCategory}`
      )
    : null;
  const PageCategories = service?.CategoryPages?.slug;
  const LinkCategories = await fetchAPI(
    `service-categories?filters[slug]=${PageCategories}`
  );
  const Faqs = await fetchAPI(`services?filters[slug][$eq]=${id}`, "Faqs.faqs");
  let jsonData = null;
  try {
    const filePath = path.join(process.cwd(), "public", "data", `${id}.json`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    jsonData = JSON.parse(fileContent);
  } catch (err) {
    console.log("JSON Load Error:", err.message);
  }
  const CTAData = jsonData?.CTAData;
  const pageData = jsonData?.pageData;
  const faqsData = jsonData?.faqs;
  const testimonialsData = jsonData?.testimonials;
  return (
    <div>
      <HeroSection
        title={pageData?.hero?.title}
        description={pageData?.hero?.description}
        imageSrc={pageData?.hero?.imageSrc}
        reverse={pageData?.hero?.reverse}
      />
      <div>
        {pageData.sections.map((section, i) => {
          const d = section.data;
          const componentRegistry = {
            intro: (
              <div className="py-8 lg:py-15 text-lime-900 leading-1.2 container grid gap-7">
                <div>
                  <span dangerouslySetInnerHTML={{ __html: d?.lable || "" }} />
                </div>
                <div
                  className="lg:text-3xl text-lg font-normal font-['Roboto_Condensed']"
                  dangerouslySetInnerHTML={{ __html: d?.description || "" }}
                />
              </div>
            ),
            feature: (
              <ServiceFetureSection
                fetureData={d}
                reverse={d?.reverse}
                align={d?.align}
              />
            ),
            cards: (
              <ServiceCardSection
                fetureData={d}
                reverse={d?.reverse}
                align={d?.align}
                fetureLogo={d?.fetureLogo}
              />
            ),
            contactdata:
              d?.title || d?.contentHTML ? (
                <ContentSection contactData={d} align={d?.align} />
              ) : null,
          };
          return (
            <Fragment key={i}>
              {componentRegistry[section.key] || null}
              {id === "liver-cirrhosis" && i === 2 && <StepForm />}
            </Fragment>
          );
        })}
      </div>
      <div className="container mx-auto">
        <hr className="border-t border-[#979832]/30 opacity-40" />
      </div>
      <TestimonialSection testimonialsData={testimonialsData} />
      <FaqSection faqsData={faqsData} />
      <CTASection CTAdata={CTAData} />
    </div>
  );
}
