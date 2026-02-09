import { fetchAPI } from "../lib/api";
import Faqs from "../shared/Faq/Faq";
import SectionBlock from "../shared/Section";
import TeamMember from "../shared/Team/TeamMember";
import Testimonial from "../shared/Testimonial/Testimonial";
import Typography, {
  TextDescription,
  TypographyList,
} from "../shared/Typography/Typography";
import Blogs from "../shared/Blogs/Blogs";
import Button from "../component/Button/Button";
import AnimatedCounter from "./AnimatedCounter";
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
import Infrastructure from "./Infrastructure";
import Image from "next/image";

const tabContent = [
  {
    id: "upload",
    title: "Our Mission",
    description:
      "To provide personalized regenerative therapies with the highest standards of care, advancing research and supporting international patients with compassionate, comprehensive treatment.",
    image: "Secure-Upload.png",
  },
  {
    id: "review",
    title: "Our Vision",
    description:
      "To be a global leader in regenerative medicine, delivering safe, advanced, and life-changing treatments for patients worldwide.",
    image: "https://placehold.co/100x100",
  },
  {
    id: "care",
    title: "Our Values",
    description:
      "We are committed to excellence, integrity, and compassion in every aspect of regenerative care. Our focus is on patient safety, innovation, and delivering life-changing treatments that improve quality of life for all patients.",
    image: "https://placehold.co/100x100",
  },
];
export default async function About() {
 // const AboutData = await fetchAPI("about");
  //const seo = AboutData?.blocks?.find((b) => b.__component === "shared.seo");
  return (
    <div>
     
       <HeroSection
              title="About Us"
              description="We work with patients who are seeking options beyond symptom management—while ensuring transparency about what regenerative therapy can and cannot do."
             // imageSrc={pageData?.hero?.imageSrc}
              // reverse={pageData?.hero?.reverse}
            />
      <SectionBlock className="relative">
        <div className="grid grid-cols-12 lg:gap-15 gap-6 items-center">
          <div className="col-span-12 md:col-span-5">
            <img className="max-w-full" src="/about-img.png" alt="about" />
          </div>
          <div className="col-span-12 md:col-span-7">
            <div
              className="inline-flex flex-col justify-start items-start gap-5"
            >
              <Typography
                title="About VieCell Institute"
                headingLevel="h2"
                size="xl"
                color="primary"
                className=""
              />
              <TextDescription>
                VieCell Institute of Regenerative Medicine is a pioneering
                center for advanced stem cell and regenerative treatments. Our
                mission is to deliver safe, ethical, scientifically-validated
                solutions that help patients slow down disease progression,
                restore cellular health, and enhance repair and regeneration of
                disease tissue and organ.
              </TextDescription>
              <div className="flex flex-col justify-start items-start gap-2.5">
                <div className="justify-start text-lime-900 text-base font-semibold  capitalize leading-8">
                  Our Specialists
                </div>
                <TypographyList
                  items={[
                    "Expert interventional radiologists",
                    "Regenerative medicine consultants",
                    "Molecular biology researchers",
                    "Stem cell laboratory technicians",
                  ]}
                  size="md"
                  color="secondary"
                  align="left"
                  className="capitalize leading-8"
                />
              </div>
            </div>
          </div>
          <img
            src="/Vector-bg.svg"
            alt="Pattern"
            className="absolute right-0 bottom-15  object-contain"
          />
        </div>
      </SectionBlock>
      <SectionBlock>
        <div>
          <Typography
            title="Our Trusted Patients & Milestones"
            headingLevel="h2"
            size="xl"
            color="primary"
            LineHeading={true}
            subtitle="Trusted by patients worldwide for safe and effective regenerative treatments."
          />
        </div>
        <div className="flex justify-between flex-wrap">
          <AnimatedCounter end="120+" label="International Patients" />
          <AnimatedCounter end="95%" label="Successful Outcomes" />
          <AnimatedCounter end="15+" label="Years of Experience" />
          <AnimatedCounter end="3+" label="Countries Served" />
        </div>
      </SectionBlock>
      {/* <SectionBlock className="relative">
        <div className="grid grid-cols-12 lg:gap-15 gap-6 items-center justify-between">
          <div className="col-span-12 md:col-span-6">
            <div
              className="inline-flex flex-col justify-start items-start gap-5"
            >
              <div className="text-xl font-medium font-['Roboto_Condensed'] text-lime-900 leading-5 italic">
                Specialist in Regenerative Medicine
              </div>
              <Typography
                title="Dr. John Doe, MD, PhD"
                headingLevel="h2"
                size="xl"
                color="primary"
                className=""
              />
              <TextDescription data-aos="fade-up" data-aos-delay={100}>
                Dr. [Full Name] is a leading specialist in regenerative medicine
                with extensive experience in stem cell, exosome, and advanced
                cellular therapies. With a proven track record in treating
                neurological, orthopedic, infertility, and organ-related
                conditions, Dr. [Last Name] combines clinical expertise with the
                latest research to deliver personalized, effective care.
                Dedicated to international patients, Dr. [Last Name] ensures
                safety, precision, and a compassionate approach throughout every
                stage of treatment.
              </TextDescription>
              <div className="w-full flex flex-col justify-start items-start gap-2.5">
                <div className="justify-start text-lime-900 text-base font-semibold  capitalize leading-8">
                  About skills
                </div>
                <div className="w-full  grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4 ">
                  <TypographyList
                    items={[
                      "Stem Cell Therapy",
                      "Exosome Therapy",
                      "Neuro Regeneration",
                      "Orthopedic Treatments",
                    ]}
                    size="md"
                    color="secondary"
                    align="left"
                    className="capitalize leading-8"
                  />
                  <TypographyList
                    items={[
                      "Stem Cell Therapy",
                      "Exosome Therapy",
                      "Neuro Regeneration",
                      "Orthopedic Treatments",
                    ]}
                    size="md"
                    color="secondary"
                    align="left"
                    className="capitalize leading-8"
                  />
                </div>
              </div>
              <Button icon href="appointment-booking">Book Appointment</Button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 position-relative relative">
            <img className="max-w-full" src="/about-img.png" />
            <div className="px-5 py-3 lg:py-7 left-[10%] lg:left-[-20%] bottom-8 absolute bg-white/80 rounded-[30px] inline-flex justify-start items-center gap-5">
              <div className="text-center justify-start text-lime-900 text-3xl lg:text-7xl font-extrabold font-['Roboto_Condensed'] capitalize leading-normal">
                15+
              </div>
              <div className="justify-start text-neutral-500 text-xl font-normal font-['Roboto'] leading-8">
                Years Experience
              </div>
            </div>
          </div>
          <img
            src="/Vector-bg.svg"
            alt="Pattern"
            className="absolute right-0 bottom-15  object-contain"
          />
        </div>
      </SectionBlock> */}
      <SectionBlock className="bg-[#F7F8EA]" rounded>
        <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">
          <div className="max-w-[540px]">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <Typography
                title="Infrastructure & Facilities"
                headingLevel="h2"
                size="xl"
                color="primary"
                LineHeading={true}
              />

              <TextDescription>
                Advanced medical systems and dedicated support services designed
                to deliver precise, safe, and seamless regenerative treatment
                experiences.
              </TextDescription>

              <div className="justify-start text-lime-900 text-base font-semibold font-['Roboto'] capitalize leading-8">
                Key Technology Points:
              </div>
              <TypographyList
                items={[
                  "Advanced stem cell processing units",
                  "Clinical imaging & interventional radiology suite",
                  "International patient assistance desk",
                ]}
                size="md"
                color="secondary"
                align="left"
                className="capitalize leading-8 text-neutral-500"
              />
              {/* <Button icon>Learn More</Button> */}
            </div>
          </div>
          <div className="min-w-0">
             <Infrastructure /> 
          </div>
        </div>
      </SectionBlock>
      <SectionBlock>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="flex flex-col gap-4">
              <Image
                className="w-full rounded-[20px]"
                src="/hitting-target.png"
                alt="Why Choose India Illustration"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              <Typography
                title="Inspirational Health <br/> Our Vision & Mission"
                headingLevel="h2"
                size="xl"
                color="primary"
                LineHeading
              />
              <TextDescription>
                Driving innovation and excellence in regenerative medicine for
                patients worldwide.
              </TextDescription>
              <div className="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-4 ">
                {tabContent?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`bg-[#F3F5EC] px-7 py-5 rounded-[20px] inline-flex justify-start items-center gap-5 w-full transition-colors duration-200 hover:bg-[#E6F0CC] hover:text-white`}
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
      <TeamMember />

      <Faqs />
      
     
      <Testimonial />
       <Blogs />
         <CTASection CTAdata />
    </div>
  );
}

export const metadata = {
  title: "About Us | VieCell Institute of Regenerative Medicine",
  description:
    "Learn about VieCell Institute of Regenerative Medicine, our mission, vision, values, expert doctors, advanced facilities, and commitment to safe, ethical regenerative therapies for patients worldwide.",
};