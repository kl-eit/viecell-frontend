import fs from "fs";
import path from "path";
import { fetchAPI, fetchAPINested } from "../../lib/api";
import HeroSection from "../../shared/HeroSection/HeroSection";
import CTASection from "../../component/CTASection/CTASection";
import ServiceCardSection from "../blocks/ServiceCardSection/ServiceCardSection";
import ServiceFetureSection from "../blocks/ServiceFetureSection/ServiceFetureSection";
import FaqSection from "../blocks/FaqSection/FaqSection";
import ContentSection from "../blocks/ContentSection/ContentSection";
import TestimonialSection from "../blocks/TestimonialSection";
import StepForm from "../../shared/Step-Form/StepForm";
import { Fragment } from "react";
import BlocksRendererClient from "../../shared/BlocksRendererClient";
export default async function ServiceDetailsPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const services = await fetchAPI(`services?filters[slug][$eq]=${id}`);
 const servicesData =
  (await fetchAPINested(
    `services?filters[slug][$eq]=${id}`,
    {
      Hero: { populate: "*" },
      Intro: { populate: "*" },
      Faq: { populate: "*" },
      components: { populate: "*" },
    }
  )) || [];
  const service = services?.[0] || null;
  const pageTitle = servicesData[0]?.Title || "";
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
  // const PageCategories = service?.CategoryPages?.slug || null;
  // const LinkCategories = await fetchAPI(
  //   `service-categories?filters[slug]=${PageCategories}`
  // );
const ServicetestimonialsData =
  Array.isArray(testimonial) && testimonial.length > 0
    ? testimonial[0]?.testimonials?.slice(0, 4)
    : [];

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
  const faqsData = servicesData[0]?.Faq || [];
  const servicePage = servicesData?.[0] || null;

  const heroData = {
    title: servicePage?.Hero?.Title ||  "",
    banner: servicePage?.Hero?.Banner?.url ||  "",
    description: servicePage?.Hero?.Content ||  "",
  };
  const intorData = {
    label: servicePage?.Intro?.label || "",
    Content: servicePage?.Intro?.Content || "",
  };
  return (
    <div>
      <HeroSection
        title={heroData?.title}
        description={heroData?.description}
        imageSrc={heroData?.banner}
        reverse={heroData?.hero?.reverse}
      />
      <div className="py-8 lg:py-15 text-lime-900 leading-1.2 container grid gap-7">
        <div>
          <span dangerouslySetInnerHTML={{ __html: intorData?.label || "" }} />
        </div>
        <div className="lg:text-3xl text-lg font-normal font-['Roboto_Condensed']">
          <BlocksRendererClient content={intorData?.Content || ""} />
        </div>
      </div>
      <div>
        
        {(servicePage?.components || []).map((section, i) => {
          const d = section;
          const componentRegistry = {
            "shared.feature-block": (
              <ServiceFetureSection
                fetureData={section}
                reverse={i % 2 !== 1}
                align={section?.Align}
              />
            ),
            "shared.support-and-resources": (
              <ServiceCardSection
                fetureData={d}
                reverse={d?.reverse}
                align={d?.align}
                fetureLogo={d?.fetureLogo}
              />
            ),
          };
          return (
            <Fragment key={section.id || i}>
              {componentRegistry[section.__component] || null}
              {id === "liver-cirrhosis" && i === 2 && <StepForm />}
            </Fragment>
          );
        })}
      </div>
      <div className="container mx-auto">
        <hr className="border-t border-[#979832]/30 opacity-40" />
      </div>
      {ServicetestimonialsData?.length > 0 && (
        <TestimonialSection ServicetestimonialsData={ServicetestimonialsData} />
      )}
      {faqsData?.length > 0 && <FaqSection faqsData={faqsData} />}
      <CTASection CTAdata={CTAData} pageTitle={pageTitle} />
    </div>
  );
}
