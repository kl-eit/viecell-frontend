import fs from "fs";
import path from "path";

import { PageHeaderSetter } from "../../lib/PageHeaderContext";
import { ArrowRightIcon } from "../../shared/icons/icons";
import { fetchAPI, getMediaUrl } from "../../lib/api";
import BlocksRendererClient from "../../shared/BlocksRendererClient";
import SectionBlock from "../../shared/Section";
import Link from "next/link";
import Testimonials from "../Testimonial";
import Blogs from "../../shared/Blogs/Blogs";
import HeroSection from "../../shared/HeroSection/HeroSection";
import CTASection from "../../component/CTASection/CTASection";
import ServiceCardSection from "../blocks/ServiceCardSection/ServiceCardSection";
import ServiceFetureSection from "../blocks/ServiceFetureSection/ServiceFetureSection";
import FaqSection from "../blocks/FaqSection/FaqSection";
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
const CTAData = jsonData?.CTAData
const pageData = jsonData?.pageData
const faqsData = jsonData?.faqs
 console.log("faqsData", faqsData);
  return (
    <div>
      {/* <PageHeaderSetter title={pageTitle} breadcrumbLast={service?.title} /> */}
      <HeroSection
        title={pageData?.hero?.title}
        description={pageData?.hero?.description}
        imageSrc={pageData?.hero?.imageSrc}
        reverse={pageData?.hero?.reverse}
      />
      {pageData.sections.map((section, i) => {
        const d = section.data;
        const componentRegistry = {
          intro: (
            <div
              key={i}
              className="py-8 lg:py-15 text-4xl font-normal font-['Roboto_Condensed'] text-lime-900 leading-1.2"
            >
              <div
                className="container grid gap-7"
                dangerouslySetInnerHTML={{ __html: d?.description || "1" }}
              />
            </div>
          ),
          feature: (
            <ServiceFetureSection
              key={i}
              fetureData={d}
              reverse={d?.reverse}
              align={d?.align}
            />
          ),
          cards: (
            <ServiceCardSection
              key={i}
              fetureData={d}
              reverse={d?.reverse}
              align={d?.align}
              fetureLogo={d?.fetureLogo}
            />
          ),
          cta: <CTASection key={i} CTAdata={d} reverse={d?.reverse} />,
        };

        return componentRegistry[section.key] || null;
      })}

      {/*   
      <SectionBlock className="pagebody">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9 gap-6 flex flex-col">
            <div className="relative w-full" data-aos="fade-in">
              {service?.Cover && (
                <img
                  src={getMediaUrl(service.Cover)}
                  alt={service?.Cover?.alternativeText || service?.Title}
                  width={service?.Cover.width || 800}
                  height={service?.Cover.height || 400}
                  className="w-full"
                />
              )}
            </div>
            <div
              className="prose prose-lg max-w-full text-lime-900 font-['Roboto']"
              data-aos="fade-in"
            >
              {service?.Body && (
                <BlocksRendererClient
                  content={service?.Body}
                  modifiers={{ bold: "bold", italic: "italic" }}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col col-span-12 md:col-span-3 gap-4">
            <div
              className="p-6 lg:p-8 bg-[#EEEEDD] rounded-2xl"
              data-aos="fade-in"
            >
              <div className="text-[1.25rem] leading-none text-lime-900 font-['Roboto_Condensed'] font-semibold mb-4">
                {service?.service_category
                  ? service?.service_category?.Name
                  : "Uncategorized"}
              </div>
              <div className="">
                <ul className="flex flex-col w-full space-y-2 text-[14px] gap-1">
                  {LinkCategories[0]?.services?.map((tag, index) => {
                    const isActive = id === tag?.slug;
                    return (
                      <li key={index} className="mb-2 w-full">
                        <Link
                          href={`/services/${tag?.slug}`}
                          className={`flex w-full px-3 rounded-lg py-2 ${
                            isActive
                              ? "bg-lime-800 text-white"
                              : "bg-white text-lime-800"
                          }`}
                        >
                          {tag?.Title}
                          <span className="icon-arrow-right ms-auto">
                            <ArrowRightIcon size={12} />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionBlock> */}

      {/* <ServiceCardSection fetureData={ServiceData} />
      <ServiceFetureSection fetureData={ServiceFetureData} reverse={false} />
      <ServiceFetureSection fetureData={ServiceFetureData} reverse={true} />
      <ServiceCardSection
        fetureData={ServiceData}
        align="left"
        fetureLogo={true}
      /> */}
      <div className="mb-4">&nbsp;</div>
      {testimonialCategory && (
        <>
          <Testimonials testimonials={testimonial} />
          <Blogs />
        </>
      )}
      <FaqSection faqsData={faqsData}  />
      <CTASection CTAdata={CTAData} />
    </div>
  );
}
