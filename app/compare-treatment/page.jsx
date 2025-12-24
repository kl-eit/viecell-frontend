import { PageHeaderSetter } from "../lib/PageHeaderContext";
import Blogs from "../shared/Blogs/Blogs";
import Button from "../shared/Button/Button";
import SectionBlock from "../shared/Section";
import Testimonial from "../shared/Testimonial/Testimonial";
import Typography, { TextDescription } from "../shared/Typography/Typography";
import FilterTabs from "../shared/FilterTabs/FilterTabs";
export default async function Page() {
  return (
    <div>
      <PageHeaderSetter
        title={"Treatment Comparison"}
        breadcrumbLast="Treatment Comparison"
      />
      <SectionBlock>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-5 gap-3">
            <div className="flex flex-col gap-6">
              <Typography
                title={"Compare Global Stem Cell Centers with India"}
                headingLevel="h2"
                size="xl"
                color="primary"
              />
              <TextDescription
                className="text-lime-900"
                text={
                  "Quickly explore leading stem cell clinics and compare them with India by disease treatment, therapy type, technology, and clinical expertise."
                }
              />
              <div>
                <Button version="primary" href="/contact-us" icon>
                  Talk to a Treatment Advisor
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <img
              className="w-full"
              src="Vector-map-gray.svg"
              alt="Patient Care Illustration"
            />
          </div>
        </div>
      </SectionBlock>
      <SectionBlock>
        <div className="flex flex-col gap-3">
          <Typography
            title={"India vs. {Country} – Treatment Comparison"}
            headingLevel="h2"
            size="xl"
            color="primary"
            align="center"
          />
          <div className="max-w-2xl mx-auto">
            <TextDescription
              className="text-lime-900 text-center center"
              text={
                "Use this comparison to evaluate treatment options and make an informed medical decision."
              }
            />
          </div>
        </div>
        <FilterTabs />
        <div className="flex flex-col md:flex-row justify-center items-center text-sm  bg-[#F4F8F4] p-2 md:p-2 rounded-[30px]  text-[#2D4213] font-normal leading-6">
          This comparison is for informational purposes and helps you evaluate
          clinics based on key treatment factors.
        </div>
        <div></div>
        <div className="container p-14 relative bg-linear-to-l from-lime-200 via-stone-100 to-lime-100 rounded-4xl inline-flex justify-start items-start gap-72 overflow-hidden">
          <div className="flex-1 self-stretch inline-flex flex-col justify-center items-center gap-4 z-2">
            <div className="justify-start text-lime-900 text-2xl lg:text-4xl font-semibold font-['Roboto_Condensed'] capitalize">
              Need Help Deciding the Best Clinic?
            </div>
            <div className="text-neutral-500 text-base font-normal font-['Roboto'] leading-7 text-center">
              Speak to our medical advisor for personalized guidance.
            </div>
            <Button icon>Talk to a Treatment Advisor</Button>
          </div>

          <img className="absolute z-1 max-w-[1025px]" src="vector-map.svg" />
        </div>
      </SectionBlock>
      <Testimonial />
      <Blogs />
    </div>
  );
}
