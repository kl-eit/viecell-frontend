"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import IntroSlider from "./shared/IntroSlider/IntroSlider";
import ThemeCard from "./component/card/card";
import Faqs from "./shared/Faq/Faq";
import Blogs from "./shared/Blogs/Blogs";
import { fetchAPI, getMediaUrl } from "./lib/api";
import Testimonial from "./shared/Testimonial/Testimonial";
import TeamMemberSection from "./shared/Team/TeamMember";
import FilterTabs from "./shared/FilterTabs/FilterTabs";
import SectionBlock from "./shared/Section";
import CTASection from "./component/CTASection/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button, { ReadMore } from "./component/Button/Button";
import Typography, {
  TextDescription,
  TypographyList,
  TitleDescription,
} from "./shared/Typography/Typography";
import { ArrowRightIcon } from "./shared/icons/icons";
export default async function Home() {
  const BannerData = await fetchAPI("home", "Banner.BannerImage");
  const TreatmentsData = await fetchAPI("home", "Treatment.Treatment.Image");
  const Banner = BannerData?.Banner || [];
  const TreatmentData = TreatmentsData?.Treatment || [];
  const features = [
    {
      icon: "/International-Standards.svg",
      title: "International Standards",
      desc: "Viecell follows globally recognized medical and data-handling standards to ensure safety, accuracy, and consistency across care.",
    },
    {
      icon: "/Expert-Led-Care.svg",
      title: "Expert-Led Care",
      desc: "Every treatment pathway is guided by experienced doctors and specialists with proven clinical backgrounds.",
    },
    {
      icon: "/Global-Patient-Base.svg",
      title: "Global Patient Base",
      desc: "Patients from over 20 countries trust Viecell for transparent processes, reliable outcomes, and continuity of care.",
    },
  ];

  return (
    <div>
      <IntroSlider Banner={Banner} />
      <SectionBlock className="text-lime-900">
        <div className="text-center flex flex-col gap-2">
          <Typography
            title="Trusted Worldwide. Proven Clinically."
            headingLevel="h2"
            size="lg"
            color="primary"
            align="center"
            className="text-lime-900! "
          />
          <div className="max-w-[500px] mx-auto">
            <TextDescription
              className="text-lime-900! leading-normal!"
              align="center"
              text="Backed by international standards, experienced clinicians, and patients across the globe."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5 space-x-2">
          {features.map((item, i) => (
            <ThemeCard key={i} item={item} />
          ))}
        </div>
      </SectionBlock>
      <SectionBlock>
        <div className="flex flex-col justify-start items-center gap-7">
          <div className="grid grid-cols-12 gap-6 items-center flex-col md:flex-row justify-between">
            <div className="col-span-12 lg:col-span-5">
              <Typography
                title={TreatmentData?.Title}
                headingLevel="h2"
                size="xl"
                color="primary"
                LineHeading={true}
              />
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex justify-end">
              <TextDescription text={TreatmentData?.Description} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {TreatmentData.Treatment?.map((treatment, index) => {
              const treatmentImage = getMediaUrl(treatment?.Image);
              return (
                <Card
                  className="bg-white border-0 flex-1 flex flex-col overflow-hidden"
                  key={treatment?.id}
                >
                  <CardHeader className="p-0">
                    <img
                      className="w-full h-full object-cover"
                      src={treatmentImage}
                      alt={treatment?.Title}
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col gap-2">
                    <CardTitle className="text-lime-900 text-lg font-bold font-['Roboto_Condensed'] capitalize leading-5">
                      {treatment?.Name}
                    </CardTitle>
                    <div>
                      <ReadMore href={treatment?.slug} showArrow />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="inline-flex justify-center items-center gap-2.5">
            <div className="inline-flex items-center gap-2 font-medium font-['Roboto_Condensed'] underline leading-5 group relative">
              Request a Personalized Treatment Plan
              <span className="rotate-0 transition-all duration-200 group-hover:-rotate-45">
                <ArrowRightIcon />
              </span>
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock className="relative">
        <div className="grid grid-cols-12 lg:gap-15 gap-6 items-center">
          <div className="col-span-12 md:col-span-5">
            <img className="max-w-full" src="/about-img.png" />
          </div>
          <div className="col-span-12 md:col-span-7">
            <div
              className="inline-flex flex-col justify-start items-start gap-5"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <Typography
                title="About VieCell Institute"
                headingLevel="h2"
                size="xl"
                color="primary"
                className=""
              />
              <TextDescription data-aos="fade-up" data-aos-delay={100}>
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
                    "standard regenerative protocols under ethical guidelines",
                    "Internationally trained medical experts",
                    "Affordable care — typically 70% less cost than U.S. clinics",
                    "No waiting list for advanced procedures",
                    "from online consultation to follow-up after returning home",
                  ]}
                  size="md"
                  color="secondary"
                  align="left"
                  className="capitalize leading-8"
                />
              </div>
              <Button icon={true} href="/about">
                Learn More
              </Button>
            </div>
          </div>
          <img
            src="/Vector-bg.svg"
            alt="Pattern"
            className="absolute right-0 bottom-15  object-contain"
          />
        </div>
      </SectionBlock>
      <SectionBlock noSpacing data-aos="fade-up" data-aos-delay={100}>
        <div
          className="lg:p-14 p-7 bg-linear-to-l from-lime-200 via-stone-100 to-lime-100 rounded-[30px] 
            grid gap-5 
            lg:flex lg:justify-start lg:items-start lg:gap-72"
        >
          <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-7">
            <Typography
              title=" Seamless Travel & Post-Care Support Worldwide"
              headingLevel="h2"
              size="xl"
              color="primary"
            />
            <TextDescription>
              From booking your trip to guiding your post-procedure rehab, our
              global team ensures a smooth, stress-free experience.
            </TextDescription>
            <Button icon={true} href="/appointment-booking">
              Book Free Virtual Consultation
            </Button>
          </div>
          <div>
            <img className="w-full rounded-[20px]" src="/CTA-banner.png" />
          </div>
        </div>
      </SectionBlock>
      <SectionBlock data-aos="fade-up" data-aos-delay={100}>
        <FilterTabs />
      </SectionBlock>

      {/* <SectionBlock data-aos="fade-up" data-aos-delay={100}>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-6">
            <Typography
              title="Why Choose India for Regenerative Medicine"
              headingLevel="h2"
              size="xl"
              color="primary"
              LineHeading={true}
            />
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-start lg:justify-end">
            <TextDescription>
              See why India (VieCell) offers world-class regenerative <br />
              care at globally affordable costs.
            </TextDescription>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 gap-0">
              <div className="flex-1 p-7 rounded-tl-[30px] rounded-bl-[30px]  flex justify-start items-start gap-14 border border-[#F5F8FA] border-r-0">
                <div className="flex-1 inline-flex flex-col justify-center items-start gap-5">
                  <div className="self-stretch justify-start text-lime-900 text-lg font-semibold  leading-6">
                    Feature
                  </div>
                  <ul className="py-3 flex flex-col space-y-3 w-full">
                    {[
                      "Diseases Treated",
                      "Cost Range USD",
                      "Cost Per Day",
                      "Delivery Methods",
                    ].map((item, i, arr) => (
                      <li
                        key={i}
                        className={`w-full flex justify-between items-center border-b border-dashed border-gray-300 py-1 ${
                          i === arr.length - 1 ? "border-b-0" : ""
                        }`}
                      >
                        {item}
                        <span>
                          <ArrowRightIcon size={12} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-7  border border-[#F5F8FA] flex justify-start items-start gap-14">
                <div className="flex-1 inline-flex flex-col justify-center items-start gap-5">
                  <div className="self-stretch justify-start text-lime-900 text-lg font-semibold  leading-6">
                    U.S.
                  </div>
                  <ul className="py-3 flex flex-col space-y-3 w-full">
                    {[
                      "$$$$",
                      "Restricted",
                      "3–6 months",
                      "Local only",
                    ].map((item, i, arr) => (
                      <li
                        key={i}
                        className={`w-full flex justify-between items-center border-b border-dashed border-gray-300 py-1 ${
                          i === arr.length - 1 ? "border-b-0" : ""
                        }`}
                      >
                        {item}
                        <span>
                          <ArrowRightIcon size={12} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-7 bg-[#F4F8F4]/60 rounded-tr-[30px] rounded-br-[30px] flex justify-start items-start gap-14">
                <div className="flex-1 inline-flex flex-col justify-center items-start gap-5">
                  <div className="self-stretch justify-start text-lime-900 text-lg font-semibold  leading-6">
                    India (VieCell)
                  </div>
                  <ul className="py-3 flex flex-col space-y-3 w-full">
                    {[
                      "Liver Failure, Kidney Failure, Neurological, Heart Failure, Orthopedic",
                      "10000-15000",
                      "1786",
                      "Intravenous, Intrathecal, Local Injection, Trans-arterial",
                    ].map((item, i, arr) => (
                      <li
                        key={i}
                        className={`w-full flex justify-between items-center border-b border-dashed border-gray-300 py-1 ${
                          i === arr.length - 1 ? "border-b-0" : ""
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12">
            <div className="justify-start text-lime-900 text-base font-semibold  capitalize leading-8">
              What Makes India a Leading Choice
            </div>
            <TypographyList
              items={[
                "World-class treatments",
                "Ethical guidelines",
                "Fraction of the international cost",
                "Special expertise in Trans-Arterial cell Therapy",
              ]}
              size="md"
              color="secondary"
              align="left"
              className="capitalize leading-8 text-neutral-500"
            />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-center items-center gap-2.5 
            bg-[#F4F8F4] p-2.5 md:p-5 rounded-[30px] 
            text-[#2D4213] font-normal leading-6"
        >
          Experience world-class quality at globally affordable costs
          <div className="inline-flex items-center gap-2 text-[#647252] underline leading-6">
           <Link href="/compare-treatment">Compare Treatment Options <ArrowRightIcon /></Link>
            
          </div>
        </div>
</SectionBlock> */}

      <SectionBlock noSpacing data-aos="fade-up" data-aos-delay={100}>
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
                title="Travel & Support <br />
                Services"
                headingLevel="h2"
                size="xl"
                color="primary"
                LineHeading={true}
              />

              <div className="max-w-[515px] ">
                <TextDescription>
                  VieCells ensures a smooth and comfortable journey to
                  world-class liver care with personalized support at every
                  step.
                </TextDescription>
              </div>
              <TypographyList
                items={[
                  "Visa invitation letter",
                  "Airport pickup & drop",
                  "Nearby accommodations (luxury & budget)",
                  "English-speaking coordinators",
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
      <SectionBlock data-aos="fade-up" data-aos-delay={100}>
        <div className="grid gap-10">
          <div className="flex flex-col justify-center items-center gap-3">
            <Typography
              title="How We Work Process"
              headingLevel="h2"
              size="xl"
              color="primary"
            />
            <TitleDescription align="center">
              A step-by-step guide to your seamless healthcare journey.
            </TitleDescription>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-10 ">
            <div className="flex-1  inline-flex flex-col justify-start items-center gap-6 relative">
              <div className="w-16 h-16 p-10 bg-white rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center">
                <div className="text-center justify-start text-stone-500 text-3xl font-semibold  leading-7">
                  1
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
                <div className="text-center justify-start text-lime-900 text-2xl font-semibold font-['Roboto_Condensed'] leading-7">
                  Get a Free Online Consultation
                </div>
                <div className="self-stretch text-center justify-start text-neutral-500 text-base font-normal  leading-6">
                  Connect with our medical experts from the comfort of your
                  home.
                </div>
              </div>
              <img
                src="/steps-line_icon.svg"
                className="absolute top-2 left-[calc(67%)] max-w-full hidden lg:block"
              />
            </div>
            <div className="flex-1  inline-flex flex-col justify-start items-center gap-6 relative">
              <div className="w-16 h-16 p-10 bg-white rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center">
                <div className="text-center justify-start text-stone-500 text-3xl font-semibold  leading-7">
                  2
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
                <div className="self-stretch text-center justify-start text-lime-900 text-2xl font-semibold font-['Roboto_Condensed'] leading-6">
                  Free Online Consultation
                </div>
                <div className="self-stretch text-center justify-start text-neutral-500 text-base font-normal  leading-6">
                  Securely share your medical reports and get expert review with
                  cost estimates.
                </div>
              </div>
              <img
                src="/steps-line2_icon.svg"
                className="absolute top-6 left-[calc(65%)] max-w-full hidden lg:block"
              />
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
              <div className="w-16 h-16 p-10 bg-white rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center">
                <div className="text-center justify-start text-stone-500 text-3xl font-semibold leading-7">
                  3
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
                <div className="self-stretch text-center justify-start text-lime-900 text-2xl font-semibold font-['Roboto_Condensed'] leading-6">
                  Travel, Treatment & Ongoing Care
                </div>
                <div className="self-stretch text-center justify-start text-neutral-500 text-base font-normal  leading-6">
                  Plan your trip with visa and travel support, receive
                  treatment, and continue follow-up care.
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionBlock>
      <TeamMemberSection />
      <Faqs />
      <Testimonial />
      <Blogs />
      <CTASection />
    </div>
  );
}
