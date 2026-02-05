import { fetchAPI, fetchAPINested, STRAPI_URL } from "../../lib/api";
import HeroSection from "../../shared/HeroSection/HeroSection";
import CTASection from "../../component/CTASection/CTASection";
import ServiceCardSection from "../blocks/ServiceCardSection/ServiceCardSection";
import ServiceFetureSection from "../blocks/ServiceFetureSection/ServiceFetureSection";
import FaqSection from "../blocks/FaqSection/FaqSection";
import TestimonialSection from "../blocks/TestimonialSection";
import StepForm from "../../shared/Step-Form/StepForm";
import { Fragment } from "react";
import BlocksRendererClient from "../../shared/BlocksRendererClient";
import SectionBlock from "../../shared/Section";
import WhyChooseSection from "../blocks/WhyChooseSection/WhyChooseSection";
import ServiceCardBlock from "../blocks/ServiceCardBlock/ServiceCardBlock";
export default async function ServiceDetailsPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const services = (await fetchAPI(`services?filters[slug][$eq]=${id}`)) || [];
  const servicesData = await fetchAPINested(
    `services?filters[slug][$eq]=${id}`,
    {
      Hero: { populate: "*" },
      Intro: { populate: "*" },
      Faq: { populate: "*" },
      whychoose: { populate: "*" },
      testimonial_category: { populate: "*" },
      components: { populate: "*" },
    },
  );
  const service = services?.[0] || null;
  const servicePage = servicesData?.[0] || null;
  const pageTitle = servicePage?.Title || "";
  const testimonialCategory = service?.testimonial_category?.slug;
  const testimonial = testimonialCategory
    ? await fetchAPI(
        `testimonial-categories?filters[slug]=${testimonialCategory}`,
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

  //const CTAData ;
  //const pageData = jsonData?.pageData;
  const faqsData = servicePage?.Faq || [];

  const heroData = {
    title: servicePage?.Hero?.Title || "",
    banner: servicePage?.Hero?.Banner?.url || "",
    description: servicePage?.Hero?.Content || "",
  };
  const intorData = {
    label: servicePage?.Intro?.label || "",
    Content: servicePage?.Intro?.Content || "",
  };
  const whychooseData = {
    label: servicePage?.whychoose?.label || "",
    title: servicePage?.whychoose?.Title || "",
    card: servicePage?.whychoose?.services || [],
  };
  if (!servicePage) {
    return (
      <div className="container  text-center text-xl  py-8 lg:py-30 ">
        Service not found or API error
      </div>
    );
  }
  return (
    <div>
      <HeroSection
        title={heroData?.title}
        description={heroData?.description}
        imageSrc={heroData?.banner}
        reverse={heroData?.hero?.reverse || false}
      />
      <div className="py-8 lg:py-10 text-lime-900 leading-1.2 container grid gap-4 lg:gap-6">
        <div>
          <span
            className="font-medium"
            dangerouslySetInnerHTML={{ __html: intorData?.label || "" }}
          />
        </div>
        <div className="lg:text-2xl text-lg font-normal font-['Roboto_Condensed']">
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
                reverse={i % 2 == 1}
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
            "shared.service-card-block": (
              <>
                <div className="container mx-auto">
                  <hr className="border-t border-[#979832]/20 " />
                </div>
                <ServiceCardBlock ServiceCardBlock={d} />
              </>
            ),
          };
          return (
            <Fragment key={section.id || i}>
              {componentRegistry[section.__component] || null}
              {id === "liver-cirrhosis" && i === 1 && <StepForm />}
              {id === "optic-atrophy" && i === 0 && (
                <SectionBlock
                  className={`bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900 text-center`}
                  rounded
                >
                  <div
                    className={`max-w-3xl lg:text-3xl text-xl font-['Roboto_Condensed'] mx-auto `}
                    dangerouslySetInnerHTML={{
                      __html: "Types and Stages of Vision Loss",
                    }}
                  />
                  <div className=" text-lime-900 flex flex-col gap-6">
                    <div className="grid grid-cols-1 text-left  gap-6 lg:gap-6 lg:grid-cols-2">
                      <div className="order-1 lg:order-1  p-12 bg-white rounded-2xl border border-[#979832]/20 inline-flex flex-col justify-center items-start gap-4">
                        <div className="flex flex-col gap-2">
                          <h3
                            className="text-2xl
    text-left
    text-lime-900
    font-['Roboto_Condensed']
    font-semibold leading-none
    max-w-[480px] lg:text-3xl!"
                          >
                            Optic Atrophy – Common Types
                          </h3>
                        </div>
                        <div className="w-full">
                          <ul className="list-disc pl-6 my-2">
                            <li>
                              <b>Hereditary: </b> Genetic optic neuropathies
                              (e.g., Leber’s hereditary optic neuropathy)
                            </li>
                            <li>
                              <b>Acquired:</b>
                              <ul className="list-disc pl-6 my-2">
                                <li>
                                  Mechanical stability is usually maintained
                                  without major looseness
                                </li>
                                <li>
                                  The body initiates healing through
                                  inflammation and scar tissue formation
                                </li>
                                <li>
                                  Scar-based healing may result in weaker,
                                  disorganized tissue if not optimized
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="order-2 lg:order-2">
                        <div className="h-full w-full flex flex-col justify-center items-center rounded-xl relative">
                            <img className="rounded-xl" src="/Optic-Atrophy-CommonTypes.png" alt="Optic Atrophy Common Types" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 text-left  gap-6 lg:gap-6 lg:grid-cols-2">
                      <div className="order-1 lg:order-2  p-12 bg-white rounded-2xl border border-[#979832]/20 inline-flex flex-col justify-center items-start gap-4">
                        <div className="flex flex-col gap-2">
                          <h3
                            className="text-2xl
    text-left
    text-lime-900
    font-['Roboto_Condensed']
    font-semibold leading-none
    max-w-[480px] lg:text-3xl!"
                          >
                            Retinal Degenerative Diseases
                          </h3>
                        </div>
                        <div className="w-full">
                          <ul className="list-disc pl-6 my-2">
                            <li>
                              Inherited retinal dystrophies (retinitis
                              pigmentosa, Stargardt disease, Usher syndrome)
                            </li>
                            <li>
                              Age-related macular degeneration (dry and wet AMD)
                            </li>
                            <li>Diabetic and metabolic retinal degeneration</li>
                          </ul>
                        </div>
                      </div>
                      <div className="order-2 lg:order-1">
                        <div className="h-full w-full flex flex-col justify-center items-center rounded-xl overflow-hidden relative">
                        
                            <img className="rounded-xl" src="/opticnerve-retinal-degenerative.png" alt="Retinal Degenerative Diseases" />
                        
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 text-left  gap-6 lg:gap-6 lg:grid-cols-2">
                      <div className="order-1 lg:order-1  p-12 bg-white rounded-2xl border border-[#979832]/20 inline-flex flex-col justify-center items-start gap-4">
                        <div className="flex flex-col gap-2">
                          <h3
                            className="text-2xl
    text-left
    text-lime-900
    font-['Roboto_Condensed']
    font-semibold leading-none
    max-w-[480px] lg:text-3xl!"
                          >
                            Functional Stages Patients Experience
                          </h3>
                        </div>
                        <div className="w-full">
                          <ul className="list-disc pl-6 my-2">
                            <li>
                              <b> Early:</b> Night vision difficulty, reduced
                              contrast, color perception changes
                            </li>
                            <li>
                              <b>Moderate:</b> Tunnel vision, central blind
                              spots, reading difficulty
                            </li>
                            <li>
                              <b>Advanced:</b> Legal blindness, major mobility
                              and independence challenges
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="order-2 lg:order-5">
                        <div className="h-full w-full flex flex-col justify-center items-center rounded-xl overflow-hidden relative">
                          <img className="rounded-xl" src="/Functional-StagesPatients-Experience.png" alt="Functional Stages Patients Experience" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionBlock>
              )}
            </Fragment>
          );
        })}
      </div>

      <WhyChooseSection whychooseData={whychooseData} />
      {ServicetestimonialsData?.length > 0 && (
        <TestimonialSection ServicetestimonialsData={ServicetestimonialsData} />
      )}
      {faqsData?.length > 0 && <FaqSection faqsData={faqsData} />}
      <CTASection CTAdata pageTitle={pageTitle} />
    </div>
  );
}
