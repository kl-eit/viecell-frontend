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
import ServiceCardSection from "../../component/ServiceCardSection/ServiceCardSection";
import ServiceFetureSection from "../../component/ServiceFetureSection/ServiceFetureSection";

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
  console.log("faq", Faqs);
  const heroData = {
    title: "Liver Cirrhosis",
    description: `
    <p class="mb-3">
      <b>Liver Cirrhosis</b> is a progressive condition where healthy liver tissue is replaced with <i>scar tissue</i>, leading to reduced liver function.
    </p>
    <p class="mb-3">
      This scarring prevents the liver from functioning properly — affecting <b>digestion, detoxification</b>, and overall health.
    </p>
  `,
    imageSrc: "/Liver-Cirrhosis-intro.png",
    reverse: true,
  };

  const ServiceFetureData = [
    {
      title: "Why does this happen?",
      label: "People experience different symptoms, but common ones include:",
      list: [
        "Genetics (family history)",
        "Infections",
        "Hormonal changes",
        "Stress",
        "Lifestyle and environmental triggers",
      ],
      message: "Once triggered, the immune system gets stuck in attack mode.",
    },
  ];
  const ServiceData = {
    headingSmall: "Different Autoimmune Diseases, Same Root Problem",
    titleBig:
      "Autoimmune diseases can affect different parts of the body, but the underlying issue is similar.",
    cardslabel: "Our approach includes:",
    cards: [
      {
        title: "Joint-focused",
        description: "Rheumatoid Arthritis (RA)\nPain, stiffness, joint damage",
      },
      {
        title: "Multi-organ",
        description:
          "Systemic Lupus Erythematosus (SLE)\nSkin, joints, kidneys, blood, lungs",
      },
      {
        title: "Skin & Organ Hardening",
        description:
          "Scleroderma\nTight skin, breathing problems, digestion issues",
      },
    ],
    note1:
      "Some people also develop autoimmune conditions that affect the liver, lungs, kidneys, or nerves.",
    titleBig2:
      "Autoimmune diseases can affect different parts of the body, but the underlying issue is similar.",
  };

  const CTAData = [
    {
      label: "Take the first step",
      titleSmall: "Take the first step toward Liver Regeneration",
      titleBig:
        "Understanding your condition is the first step. Viecell helps you explore personalized regenerative solutions based on your medical profile.",
      buttons: [
        {
          text: "Book Consultation",
          variant: "primary",
          href: null,
        },
        {
          text: "Talk to a Regenerative Specialist",
          variant: "outline-primary",
          href: "/appointment-booking",
        },
      ],
    },
  ];
  const pageData = {
    hero: {
      title: "Liver Cirrhosis",
      description: `
          <p class="mb-3"><b>Liver Cirrhosis</b> is a progressive condition...</p>
          <p class="mb-3">Scar tissue reduces liver function and affects <b>detox & digestion</b>.</p>
        `,
      imageSrc: "/Liver-Cirrhosis-intro.png",
      reverse: true,
    },

    sections: [
      {
        key: "intro",
        data: {
          description: ` <p>
          If you’ve been feeling constantly tired, dealing with pain, swelling,
          rashes, stiffness, or unexplained symptoms — and no one has given you
          a clear answer — you’re not alone.
        </p>
        <p>
          Autoimmune diseases are often invisible, confusing, and slow to
          diagnose. Many people live with symptoms for years before
          understanding what’s happening inside their body.
        </p> `,
        },
      },
      {
        key: "cards",
        data: {
          headingSmall: "What is an Autoimmune Disease?",
          titleBig: `<div>Your immune system’s job is simple:</div><div>Protect you from infections.</div><br/><div>But in Autoimmune Disease, something goes wrong.</div>`,
          cardslabel: "",
          cards: [
            {
              title: "Instead of attacking germs, the immune system:",
              description:
                "Mistakes your own body as a threat, Attacks healthy tissues, Never fully “switches off”",
            },
            {
              title: "This leads to:",
              description: `<div>Long-lasting inflammation, Pain and swelling, Damage to organs <b>over time</b></div>`,
            },
          ],
          note1: "",
          titleBig2: `<div>In simple words:</div><div>Your body is fighting the wrong battle — and hurting itself.</div>`,
        },
      },
      {
        key: "feature",
        data: {

          title: "Why does this happen?",
          contentHTML: `<div><p>The exact cause isn’t always clear, but autoimmune diseases are often linked to:</p><ul class="list-disc list-inside ml-2.5"><li>Genetics (family history)</li><li>Infections</li><li>Hormonal changes</li><li>Stress</li><li>Lifestyle and environmental triggers</li></ul></div>`,
          message:
            "Once triggered, the immune system gets stuck in attack mode.",
          reverse: false,
          align: "left",
             sliderImages: [
      "/slider1.png",
      "/slider2.png",
      "/slider3.png",
      "/slider4.png"
    ],
        },
      },
      {
        key: "feature",
        data: {
          title: "What does Autoimmune Disease feel like?",
          contentHTML:`<div><p>People experience different symptoms, but common ones include:</p><ul class="list-disc list-inside ml-2.5"><li>Extreme fatigue (even after rest)</li><li>Joint pain or morning stiffness</li><li>Swelling in hands, knees, or feet</li><li>Skin rashes or sensitivity to sunlight</li><li>Digestive issues</li><li>Brain fog or low energy</li><li>Symptoms that come and go in flares</li></ul></div>`,
          messageHTML:
            "Many patients say: I don’t look sick, but I don’t feel normal.",
          reverse: true,
          align: "left",
        },
      },
      {
        key: "cards",
        data: {
          headingSmall: "Different Autoimmune Diseases, Same Root Problem",
          titleBig: `<div>Autoimmune diseases can affect different parts of the body, but the underlying issue is similar.</div>`,
          cardslabel: "",
          cards: [
            {
              title: "Joint-focused",
              description: `<div>Rheumatoid Arthritis (RA)<br/> Pain, stiffness, joint damage</div>`,
            },
            {
              title: "Multi-organ",
              description: `<div>Systemic Lupus Erythematosus (SLE)</br> Skin, joints, kidneys, blood, lungs</div>`,
            },
            {
              title: "Skin & Organ Hardening",
              description: `<div>Scleroderma</br> Tight skin, breathing problems, digestion issues</div>`,
            },
          ],
          note1:
            "Some people also develop autoimmune conditions that affect the <b>liver, lungs, kidneys, or nerves.</b>",
          titleBig2: `<div>Autoimmune diseases can affect different parts of the body, but the underlying issue is similar.</div>`,
        },
      },
      {
        key: "feature",
        data: {
          title: "How Autoimmune Diseases are diagnosed?",
          contentHTML: `<div><p class="text-md font-medium mb-2">Clinical History</p>
          <ul class="list-disc list-inside ml-2.5 mb-2">
            <li>Genetics (family history)</li>
            <li>Infections</li>
            <li>Hormonal changes</li>
            <li>Stress</li>
            <li>Lifestyle and environmental triggers</li>
          </ul>
          <p class="text-md font-medium mb-2">Organ Assessment</p>
          <ul class="list-disc list-inside ml-2.5 mb-2">
            <li>Urine tests (lupus nephritis)</li>
            <li>Lung function tests (scleroderma)</li>
            <li>Liver enzymes and imaging</li>
          </ul>
          <p class="mb-2">Physical Examination</p>
          <ul class="list-disc list-inside ml-2.5 mb-2">
            <li>Joint swelling or deformity</li>
            <li>Skin rashes or tightening</li>
            <li>Organ enlargement or tenderness</li>
          </ul>
          </div>`,
          messageHTML:
            "Once triggered, the immune system gets stuck in attack mode.",
          reverse: false,
          align: "left",
        },
      },
      {
        key: "feature",
        data: {
          title: "How are Autoimmune Diseases usually treated?",
          contentHTML: `<div>
          <p class="text-md font-medium">This option is often explored by people who:</p>
          <ul class="list-disc list-inside ml-2.5">
          <li>Steroids</li>
          <li>Immune-suppressing medicines</li>
          <li>Advanced injections (biologics)</li>
          <ul>
          <p class="text-md font-medium">These treatments can:</p>
          <ul class="list-disc list-inside ml-2.5">
          <li>Reduce symptoms</li>
          <li>Control flares</li>
          <ul>
          </div>`,
          label: "",
          list: [],
          messageHTML: `
            <p class="text-md font-medium">But they often:</p>
          <ul class="list-disc list-inside ml-2.5">
          <li>Don’t fix the root cause</li>
          <li>Need long-term use</li>
          <li>Increase infection risk</li>
          <li>Don’t repair damaged tissues</li>
          <ul>
          `,
          reverse: true,
          align: "left",
        },
      },
      {
        key: "cards",
        data: {
          headingSmall: "Helping the Immune System Re-Balance",
          titleBig: `<div>Instead of only suppressing the immune system, modern regenerative science focuses on:</div>`,
          cardslabel: "",
          cards: [
            {
              title: "",
              description: "Teaching the immune system to calm down",
            },
            { title: "", description: "Reducing harmful inflammation" },
            { title: "", description: "Supporting natural tissue repair" },
          ],
          note1:
            "This approach does <b>not replace standard treatment</b> — it works alongside it.",
          reverse: false,
          align: "center",
          fetureLogo: false,
        },
      },
      {
        key: "feature",
        data: {
          title: "How Regenerative therapy may help",
             contentHTML: `<div>Regenerative therapies like stem cells and exosomes may:
          <ul class="list-disc list-inside ml-2.5">
          <li>Inflammation</li>
          <li>Managing stress and sleep</li>
          <li>Eating anti-inflammatory foods</li>
          <li>Staying vaccinated and infection-aware</li>
          <li>Working closely with your care team</li>
          <ul>
          </div>`,
         
          messageHTML: "Damage",
          reverse: false,
          align: "right",
        },
      },
      {
        key: "cards",
        data: {
          headingSmall: "How Viecell Supports Autoimmune Patients",
          titleBig: `<div>At Viecell, we focus on immune balance and organ protection, not just symptom control.</div>`,
          cardslabel: "Our approach includes:",
          cards: [
            {
              title: "",
              description: "Deep understanding of autoimmune diseases",
            },
            {
              title: "",
              description:
                "Special expertise in liver-related and systemic autoimmunity",
            },
            {
              title: "",
              description:
                "Regenerative therapies designed to support immune reset",
            },
            {
              title: "",
              description:
                "Close collaboration with rheumatology and immunology specialists",
            },
            {
              title: "",
              description:
                "Care for international patients seeking advanced options",
            },
          ],
          titleBig2: `<div>Our goal is to help patients live with fewer flares, fewer drugs, and better daily function.</div>`,
          reverse: true,
          align: "left",
          fetureLogo: true,
        },
      },
      {
        key: "feature",
        data: {
          title: "Who usually considers this approach?",
          contentHTML: `<div>This option is often explored by people who:
          <ul class="list-disc list-inside ml-2.5">
          <li>Have ongoing symptoms despite treatment</li>
          <li>Depend on steroids long-term</li>
          <li>Have organ involvement (lungs, kidneys, liver)</li>
          <li>Want better long-term control, not just short-term relief</li>
        
          <ul>
          </div>`,
          messageHTML:
            "It is not for everyone and requires careful medical evaluation.",
          reverse: false,
          align: "right",
        },
      },
      {
        key: "feature",
        data: {
          title: "Living with Autoimmune Disease: What helps",
          contentHTML: `<div>Small daily choices matter:
          <ul class="list-disc list-inside ml-2.5">
          <li>Listening to early flare signals</li>
          <li>Managing stress and sleep</li>
          <li>Eating anti-inflammatory foods</li>
          <li>Staying vaccinated and infection-aware</li>
          <li>Working closely with your care team</li>
          <ul>
          </div>`,
          messageHTML: "",
          reverse: true,
          align: "right",
        },
      },
    ],
  };

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
              className=" py-8 lg:py-15 text-4xl font-normal font-['Roboto_Condensed'] text-lime-900 leading-1.2 "
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
      <CTASection CTAdata={CTAData} />
    </div>
  );
}
