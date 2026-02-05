import React from "react";
import SectionBlock from "../../shared/Section";
import CTASection from "../../component/CTASection/CTASection";
import HeroSection from "../../shared/HeroSection/HeroSection";
import FaqSection from "../blocks/FaqSection/FaqSection";

export default function page() {
  const heroData = {
    title: "Optic Atrophy & Retinal Degenerative Diseases",
    banner: "",
    description:
      "Optic atrophy and retinal degenerative diseases are progressive neuro-ophthalmic conditions that damage the optic nerve and retina, leading to gradual, irreversible vision loss. These disorders affect the visual system’s neural tissue, which has very limited natural ability to regenerate.",
  };
  const faqsData = [
    {
      id: 1,
      question: "Can damaged optic nerve or retinal cells regenerate?",
      answer:
        "Current medical evidence indicates that fully damaged optic nerve or retinal neurons do not regenerate. Regenerative therapies such as exosomes aim to support surviving cells, reduce ongoing degeneration, and slow disease progression, rather than restore lost neurons.",
    },
    {
      id: 2,
      question: "How many regenerative therapy cycles are usually required?",
      answer:
        "Most patients undergo 1–3 treatment cycles, typically spaced 1–3 months apart, depending on the condition, response, and clinical assessment.",
    },
    {
      id: 3,
      question: "Will regenerative therapy replace my existing eye treatments?",
      answer:
        "No. Regenerative therapy is designed to complement conventional treatments such as eye drops, injections, or surgery—not replace them.",
    },
    {
      id: 4,
      question: "Is this treatment approved by regulatory authorities?",
      answer:
        "Stem cell–derived exosome therapy is considered an advanced or investigational therapy. It is offered under ethical protocols with detailed informed consent and careful patient selection.",
    },
  ];
  return (
    <div>
      <HeroSection
        title={heroData?.title}
        description={heroData?.description}
        imageSrc={heroData?.banner}
        reverse={heroData?.hero?.reverse || false}
      />
      <SectionBlock>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-15 gap-10 items-center text-lime-900">
          <div className="order-2 lg:order-1 max-w-[600px]">
            <div className="aspect-square w-full flex flex-col justify-center items-center bg-[linear-gradient(360deg,#F7F9EF_0%,#E5F0CA_100%)] rounded-xl overflow-hidden relative">
              <div>No Image Found</div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6 max-w-[600px]">
            <div className="flex flex-col gap-2">
              <h3
                className="text-2xl
    text-left
    text-lime-900
    font-['Roboto_Condensed']
    font-semibold leading-none
    max-w-[480px] lg:text-3xl!"
              >
                {" "}
                What Happens Inside the Injured Ligament
              </h3>{" "}
            </div>
            <div className="w-full">
              <ul className="list-disc pl-6 my-2">
                <li>
                  Some ligament fibers tear, but the ligament remains continuous
                </li>
                <li>
                  Pain, swelling, and movement hesitation develop around the
                  joint
                </li>
                <li>
                  Mechanical stability is usually maintained without major
                  looseness
                </li>
                <li>
                  The body initiates healing through inflammation and scar
                  tissue formation
                </li>
                <li>
                  Scar-based healing may result in weaker, disorganized tissue
                  if not optimized
                </li>
              </ul>
            </div>
            <div className="p-5 bg-lime-50 rounded-[10px] inline-flex items-center gap-5">
              <div className="font-normal leading-normal">
                <p>
                  <strong>Important note:</strong>
                </p>
                <p>
                  Partial (Grade II) ligament tears are different from complete
                  ruptures and often respond well to non-surgical management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionBlock>
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
        <div className="grid grid-cols-1 text-left  gap-6 lg:gap-6 lg:grid-cols-2 text-lime-900">
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
                  Some ligament fibers tear, but the ligament remains continuous
                </li>
                <li>
                  Pain, swelling, and movement hesitation develop around the
                  joint
                </li>
                <li>
                  Mechanical stability is usually maintained without major
                  looseness
                </li>
                <li>
                  The body initiates healing through inflammation and scar
                  tissue formation
                </li>
                <li>
                  Scar-based healing may result in weaker, disorganized tissue
                  if not optimized
                </li>
              </ul>
            </div>
          </div>
          <div className="order-2 lg:order-2">
            <div className="aspect-square w-full flex flex-col justify-center items-center bg-[linear-gradient(360deg,#F7F9EF_0%,#E5F0CA_100%)] rounded-xl overflow-hidden relative">
              <div>No Image Found</div>
            </div>
          </div>
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
                Optic Atrophy – Common Types
              </h3>
            </div>
            <div className="w-full">
              <ul className="list-disc pl-6 my-2">
                <li>
                  Some ligament fibers tear, but the ligament remains continuous
                </li>
                <li>
                  Pain, swelling, and movement hesitation develop around the
                  joint
                </li>
                <li>
                  Mechanical stability is usually maintained without major
                  looseness
                </li>
                <li>
                  The body initiates healing through inflammation and scar
                  tissue formation
                </li>
                <li>
                  Scar-based healing may result in weaker, disorganized tissue
                  if not optimized
                </li>
              </ul>
            </div>
          </div>
          <div className="order-2 lg:order-1">
            <div className="aspect-square w-full flex flex-col justify-center items-center bg-[linear-gradient(360deg,#F7F9EF_0%,#E5F0CA_100%)] rounded-xl overflow-hidden relative">
              <div>No Image Found</div>
            </div>
          </div>
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
                  <b> Early:</b> Night vision difficulty, reduced contrast,
                  color perception changes
                </li>
                <li>
                  <b>Moderate:</b> Tunnel vision, central blind spots, reading
                  difficulty
                </li>
                <li>
                  <b>Advanced:</b> Legal blindness, major mobility and
                  independence challenges
                </li>
              </ul>
            </div>
          </div>
          <div className="order-2 lg:order-2">
            <div className="aspect-square w-full flex flex-col justify-center items-center bg-[linear-gradient(360deg,#F7F9EF_0%,#E5F0CA_100%)] rounded-xl overflow-hidden relative">
              <div>No Image Found</div>
            </div>
          </div>
        </div>
      </SectionBlock>

      <div className="py-8 lg:py-15 text-lime-900 leading-1.2 container grid gap-6">
        <div>
          <span className="font-medium">Understanding the Cause</span>
        </div>
        <div className="lg:text-3xl text-lg font-normal font-['Roboto_Condensed']">
          <p className="mb-3 last:mb-0 text-reset">
            Optic atrophy occurs when optic nerve fibers that transmit visual
            signals from the eye to the brain are damaged and lost.
          </p>
          <p className="mb-3 last:mb-0 text-reset">
            Retinal degenerative diseases result from gradual destruction of the
            light-sensitive retinal cells responsible for capturing and
            processing vision.
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <hr className="border-t  border-[#979832]/20" />
      </div>
      <SectionBlock>
        <div>
          <div className="grid grid-cols-1 text-left  gap-10 lg:gap-30 lg:grid-cols-3 text-lime-900">
            <div className="">
              <div className="lg:text-xl text-lg font-semibold font-['Roboto_Condensed']">
                Living With Low Vision
              </div>
              <div>
                <ul className="list-disc pl-6 my-2">
                  <li>High-contrast lighting and large-print materials</li>
                  <li>
                    Screen magnification, audio tools, and assistive technology
                  </li>
                  <li>
                    Mobility training, orientation support, and independence
                    planning
                  </li>
                  <li>
                    Professional low-vision evaluation for customized solutions
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="lg:text-xl text-lg font-semibold font-['Roboto_Condensed']">
                Genetic Counselling and Family Screening
              </div>
              <div>
                <ul className="list-disc pl-6 my-2">
                  <li>Identification of inheritance patterns</li>
                  <li>Family screening and reproductive counseling</li>
                  <li>
                    Eligibility assessment for gene-targeted clinical trials
                  </li>
                  <li>Proactive monitoring for relatives at risk</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="lg:text-xl text-lg font-semibold font-['Roboto_Condensed']">
                Lifestyle, Systemic Health, and Eye Degeneration
              </div>
              <div>
                <ul className="list-disc pl-6 my-2">
                  <li>Tight control of diabetes, hypertension, and lipids</li>
                  <li>Tight control of diabetes, hypertension, and lipids</li>
                  <li>Mediterranean diet rich in antioxidants and omega-3s</li>
                  <li>UV protection and regular eye examinations</li>
                  <li>Coordinated metabolic and systemic care</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionBlock>
      {faqsData?.length > 0 && <FaqSection faqsData={faqsData} />}
      <CTASection CTAdata />
    </div>
  );
}
