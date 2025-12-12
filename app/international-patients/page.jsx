import { PageHeaderSetter } from "../lib/PageHeaderContext";
import SectionBlock from "../shared/Section";
import { fetchAPI, getMediaUrl } from "../lib/api";
import BlocksRendererClient from "../shared/BlocksRendererClient";
import WorkProcess from "../shared/WorkProcess/WorkProcess";
import Typography, {
  TextDescription,
  TypographyList,
} from "../shared/Typography/Typography";
import Button from "../shared/Button/Button";
import Testimonial from "../shared/Testimonial/Testimonial";

export default async function InternationalPatientsPage() {
  const data = await fetchAPI("international-patient");
  const title = data?.Title || "For International Patients";
  const htmlContent = data?.Content || data?.description || null;

  const tabContent = [
    {
      id: "upload",
      title: "Expert Regenerative Medicine Care",
      description:
        "Access highly experienced doctors, scientists, and technicians specializing in stem cell and exosome therapies.",
      image: "Secure-Upload.png",
    },
    {
      id: "review",
      title: "Step-by-Step Personalized Treatment",
      description:
        "Doctors access records ahead of consultations for accurate and faster diagnosis.",
      image: "https://placehold.co/100x100",
    },
    {
      id: "care",
      title: "Comprehensive International Support",
      description:
        "Travel & visa assistance, airport pickup, accommodation, and interpreter services for a stress-free experience.",
      image: "https://placehold.co/100x100",
    },
    {
      id: "confidentiality",
      title: "Proven Patient Outcomes",
      description:
        "Success stories from international patients highlight effective treatments for neuro, orthopedic, infertility, and organ-related conditions.",
      image: "https://placehold.co/100x100",
    },
  ];

  return (
    <div>
      <PageHeaderSetter title={title} breadcrumbLast="For International Patients" />
      <SectionBlock>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6 gap-3">
            <div className="flex flex-col gap-6">
              <Typography
                title={
                  data?.Content?.Title ||
                  "Your Journey to Regenerative Medicine in India Starts Here"
                }
                headingLevel="h2"
                size="xxl"
                color="primary"
              />
              <TextDescription
                className="text-lime-900"
                text={
                  "Safe, advanced, and personalized treatments for international patients."
                }
              />
              <div>
                <Button version="primary" href="/contact-us" icon>
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <img
              className="w-full"
              src="Your-Journey.png"
              alt="Patient Care Illustration"
            />
          </div>
        </div>
      </SectionBlock>
      <SectionBlock className="bg-[#F7F8EA]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-6">
              <Typography
                title="Why Choose India for Regenerative Medicine"
                headingLevel="h2"
                size="xl"
                color="primary"
                LineHeading
              />
              <TextDescription>
                Safely upload your medical records for specialist review before
                <br />
                your consultation, ensuring accurate, personalized care.
              </TextDescription>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              
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
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-4">
                <img className="w-full rounded-[20px]" src="Secure-Upload.png" alt="Why Choose India Illustration" />
            </div>
          </div>
        </div>
      </SectionBlock>
      <SectionBlock>
        <div
          className="lg:p-14 p-7 bg-linear-to-l from-lime-200 via-stone-100 to-lime-100 rounded-[30px] 
            grid gap-5 
            lg:flex lg:justify-start lg:items-start lg:gap-72"
        >
          <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-7">
            <Typography
              title="Travel & Visa Assistance"
              headingLevel="h2"
              size="xl"
              color="primary"
            />
            <TextDescription>
              From booking your trip to guiding your post-procedure rehab, our
              global team ensures a smooth, stress-free experience.
            </TextDescription>
            <Button icon={true}>Book Free Virtual Consultation</Button>
          </div>
          <div>
            <img className="w-full rounded-[20px]" src="/CTA-banner.png" />
          </div>
        </div>
      </SectionBlock>
      <WorkProcess />
      <SectionBlock>
        <div className="flex flex-col md:flex-row gap-14 p-5 lg:p-10 bg-[#F4F8F4] rounded-4xl">
          <div className="w-full md:w-[40%]">
            <img
              className="w-full self-stretch rounded-[20px]"
              src="/CTA-banner.png"
            />
          </div>
          <div className="w-full md:w-[60%]">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <Typography
                title="Airport Pickup & Interpreter Support"
                headingLevel="h2"
                size="xl"
                color="primary"
                LineHeading={true}
              />

              <div className="max-w-[515px] ">
                <TextDescription>
                  Seamless arrival and clear communication for international
                  patients.
                </TextDescription>
              </div>
              <TypographyList
                items={[
                  "Hassle-free airport pickup and drop-off.",
                  "Multilingual interpreter support for appointments.",
                  "Help navigating local transport and hospital facilities.",
                  "On-ground staff assistance for a smooth, stress-free experience.",
                  "24×7 concierge support",
                ]}
                size="md"
                color="secondary"
                align="left"
                className="capitalize leading-8 text-neutral-500"
              />
              <Button>Plan Treatment Trip</Button>
            </div>
          </div>
        </div>
      </SectionBlock>
      <Testimonial />
      <SectionBlock noSpacing>
        <div className="flex flex-col md:flex-row gap-14 p-5 lg:p-10">
          <div className="w-full md:w-[40%]">
            <img
              className="w-full self-stretch rounded-[20px]"
              src="/CTA-banner.png"
            />
          </div>
          <div className="w-full md:w-[60%]">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <Typography
                title="Accommodation & Local Care"
                headingLevel="h2"
                size="xl"
                color="primary"
                LineHeading={true}
              />

              <div className="max-w-[515px] ">
                <TextDescription>
                  Comfortable stays and personalized support.
                </TextDescription>
              </div>
              <TypographyList
                items={[
                  "Comfortable, patient-friendly accommodations near the hospital.",
                  "Assistance with meals, daily needs, and local transport.",
                  "Family or companion stay options available.",
                  "On-ground support to ensure a smooth and stress-free stay.",
                ]}
                size="md"
                color="secondary"
                align="left"
                className=" leading-8 text-neutral-500"
              />
              <Button>Plan Treatment Trip</Button>
            </div>
          </div>
        </div>
      </SectionBlock>
    </div>
  );
}

export async function generateMetadata() {
  const data = await fetchAPI("international-patient");
  return {
    title: data?.Title || "International Patients | VieCell",
    description:
      data?.Description ||
      data?.summary ||
      "Information for international patients visiting VieCell.",
  };
}
