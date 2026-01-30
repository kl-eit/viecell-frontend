import SectionBlock from "../shared/Section";
import { fetchAPI } from "../lib/api";
import Typography, {
  TextDescription,
  TypographyList,
} from "../shared/Typography/Typography";
import Button from "../component/Button/Button";
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
const tabContent = [
  {
    id: "upload",
    title: "Regenerative Cell Therapies",
    description:
      "Developing specialized stem-cell and tissue repair solutions to improve disease outcomes.",
    image: "Secure-Upload.png",
  },
  {
    id: "review",
    title: "Precision Medicine Models",
    description:
      "Using genomic profiling and data-driven insights to personalize therapeutic strategies.",
    image: "https://placehold.co/100x100",
  },
  {
    id: "care",
    title: "Advanced Biomaterials",
    description:
      "Designing biocompatible scaffolds and delivery systems for next-gen tissue engineering.",
    image: "https://placehold.co/100x100",
  },
  {
    id: "confidentiality",
    title: "Cellular Diagnostics",
    description:
      "Success stories from international patients highlight effective treatments for neuro, orthopedic, infertility, and organ-related conditions.",
    image: "https://placehold.co/100x100",
  },
];
export default async function ResearchInnovationPage() {
  const researchData = await fetchAPI("research-innovation");
  const title = researchData?.Title || "Research & Innovation";
  const htmlContent =
    researchData?.Content || researchData?.description || null;

  return (
    <div>
      <HeroSection
        title="Advancing the Future of Regenerative Medicine"
        description="At Viecell Institute, research is the foundation of every breakthrough. From stem-cell innovation to cutting-edge therapeutic models, our teams work to transform scientific discovery into real-world medical impact."
         imageSrc="Your-Journey.png"
      
      />
      {/* <SectionBlock>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-6 gap-3">
            <div className="flex flex-col gap-3 lg:gap-6">
              <Typography
                title="Advancing the Future of Regenerative Medicine"
                headingLevel="h2"
                size="xxl"
                color="primary"
              />
              <TextDescription
                className="text-lime-900"
                text={
                  "At Viecell Institute, research is the foundation of every breakthrough. From stem-cell innovation to cutting-edge therapeutic models, our teams work to transform scientific discovery into real-world medical impact."
                }
              />
              <div>
                <Button version="primary" href="/appointment-booking" icon>
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <img
              className="w-full"
              src="Your-Journey.png"
              alt="Patient Care Illustration"
            />
          </div>
        </div>
      </SectionBlock> */}
      <SectionBlock>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-4">
              <img
                className="w-full rounded-[20px]"
                src="Secure-Upload.png"
                alt="Why Choose India Illustration"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-6">
              <Typography
                title="Ongoing Research"
                headingLevel="h2"
                size="xl"
                color="primary"
                LineHeading
              />
              <TextDescription>
                Our current research programs explore the regenerative potential
                of stem cells, advanced tissue scaffolding techniques,
                bioprocess automation, and the integration of genomics to
                improve clinical outcomes
              </TextDescription>
              <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 ">
                {tabContent?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`bg-slate-50 px-7 py-5 rounded-[20px] inline-flex justify-start items-center gap-5 w-full transition-colors duration-200 hover:bg-[#E6F0CC] hover:text-white cursor-pointer`}
                    >
                      <div className="flex-1 inline-flex flex-col justify-center items-center gap-2.5 text-left">
                        <div className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7">
                          {item?.title}
                        </div>
                        <div className=" text-neutral-500 text-base font-normal font-['Roboto'] leading-6">
                          {item?.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SectionBlock>
      <SectionBlock>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[50%]">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <Typography
                title="Clinical Research That Transforms Lives"
                headingLevel="h2"
                size="xl"
                color="primary"
                LineHeading={true}
              />

              <div>
                <TextDescription>
                  Our clinical studies aim to validate the safety, reliability,
                  and real-world impact of our cell-based technologies.
                  Conducted in collaboration with certified hospitals, each
                  trial follows rigorous international guidelines and
                  patient-first ethics.
                </TextDescription>
              </div>
              <TypographyList
                items={[
                  "Phase I–III trials",
                  "Therapeutic focus areas",
                  "Results dashboards or outcome metrics",
                  "Ethical and regulatory compliance",
                ]}
                size="md"
                color="secondary"
                align="left"
                className="capitalize leading-8 text-neutral-500"
              />
              {/* <Button>Learn More</Button> */}
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <img
              className="w-full self-stretch rounded-[20px]"
              src="/Clinical-Research.png"
            />
          </div>
        </div>
      </SectionBlock>
      <SectionBlock className="bg-[#F7F8EA]">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[50%]">
            <img
              className="w-full self-stretch rounded-[20px]"
              src="/Team-cientists-experimenting-together.png"
            />
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <Typography
                title="Where Science Meets Engineering"
                headingLevel="h2"
                size="xl"
                color="primary"
                LineHeading={true}
              />

              <TextDescription>
                Our innovations are driven by world-class laboratory
                infrastructure, AI-assisted analysis, and proprietary
                methodologies that enable consistently high-quality outcomes.
              </TextDescription>

              <div className="justify-start text-lime-900 text-base font-semibold font-['Roboto'] capitalize leading-8">
                Key Technology Points:
              </div>
              <TypographyList
                items={[
                  "AI-integrated bioprocessing",
                  "GMP/GLP cleanroom facilities",
                  "Automated cell culture & imaging platforms",
                  "Multi-omics & molecular assays",
                ]}
                size="md"
                color="secondary"
                align="left"
                className="capitalize leading-8 text-neutral-500"
              />
              {/* <Button>Learn More</Button> */}
            </div>
          </div>
        </div>
      </SectionBlock>
      <SectionBlock className="">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-6">
            <Typography
              title="Global Partnerships Advancing Shared Progress"
              headingLevel="h2"
              size="xl"
              color="primary"
              LineHeading
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TextDescription
              text={
                "We collaborate with leading international universities, research institutes, and clinical centers to accelerate scientific discovery. These partnerships enable knowledge exchange, joint innovation, and the development of globally impactful therapeutic solutions."
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="px-7 py-5 bg-white rounded-[20px] shadow-[1px_1px_12.6px_0_rgba(0,0,0,0.05)] inline-flex justify-start items-start gap-5">
            <div className="flex-1 inline-flex flex-col justify-center items-start gap-2.5">
              <div className="self-stretch justify-start text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7">
                Academic Alliances
              </div>
              <div className="leading-normal">
                We collaborate with renowned universities and research centers
                to support shared studies, exchange programs, and joint
                publications.
              </div>
            </div>
          </div>
          <div className="px-7 py-5 bg-white rounded-[20px] shadow-[1px_1px_12.6px_0_rgba(0,0,0,0.05)] inline-flex justify-start items-start gap-5">
            <div className="flex-1 inline-flex flex-col justify-center items-start gap-2.5">
              <div className="self-stretch justify-start text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7">
                Clinical Network Partnerships
              </div>
              <div className="leading-normal">
                Our global clinical partners help validate the real-world impact
                of our regenerative therapies through joint trials and
                patient-focused initiatives.
              </div>
            </div>
          </div>
          <div className="px-7 py-5 bg-white rounded-[20px] shadow-[1px_1px_12.6px_0_rgba(0,0,0,0.05)] inline-flex justify-start items-start gap-5">
            <div className="flex-1 inline-flex flex-col justify-center items-start gap-2.5">
              <div className=" text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7">
                Joint Research & Technology Development
              </div>
              <div>
                <TextDescription
                  className="leading-normal"
                  text={
                    " We co-develop technologies, methodologies, and translational models with international experts to accelerate innovation and ensure scientific excellence."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </SectionBlock>
      <CTASection CTAdata />
    </div>
  );
}

// export async function generateMetadata() {
//   const researchData = await fetchAPI("research-innovation");
//   return {
//     title: researchData?.Title || "Research & Innovation | VieCell",
//     description: researchData?.Description || researchData?.summary || "Research and innovation at VieCell Institute.",
//   };
// }
