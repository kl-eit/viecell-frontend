import { PageHeaderSetter } from "../lib/PageHeaderContext";
import SectionBlock from "../shared/Section";
import { fetchAPI, getMediaUrl } from "../lib/api";
import WorkProcess from "../shared/WorkProcess/WorkProcess";
import Faqs from "../shared/Faq/Faq";
import Typography, {
  TextDescription,
  TitleDescription,
} from "../shared/Typography/Typography";
import PatientTabs from "../shared/PatientTabs";
import HeroSection from "../shared/HeroSection/HeroSection";
const tabContent = [
  {
    id: "upload",
    title: "Secure Upload",
    description:
      "Patients can upload medical history, test results, and reports through an encrypted portal.",
    image: "Secure-Upload.png",
  },
  {
    id: "review",
    title: "Efficient Review",
    description:
      "Doctors access records ahead of consultations for accurate and faster diagnosis.",
    image: "https://placehold.co/100x100",
  },
  {
    id: "care",
    title: "Integrated Care",
    description:
      "All patient data is organized digitally, ensuring continuity across visits.",
    image: "https://placehold.co/100x100",
  },
  {
    id: "confidentiality",
    title: "Confidentiality Guaranteed",
    description: "Data privacy and HIPAA-compliant handling for all records.",
    image: "https://placehold.co/100x100",
  },
];
export default async function PatientCarePage() {
  const data = await fetchAPI("patient-care", "Content.Image");
  const title = data?.Title || "Patient Care";
  //const htmlContent = data?.Content || data?.description || null;
  const seo = data?.Seo?.find((b) => b.__component === "shared.seo");
  return (
    <>
      <PageHeaderSetter title="Patient Care" breadcrumbLast="Patient Care" />
      <HeroSection
        title="Patient Care"
        description="
Secure Online Medical Record Submission
Safely upload your medical records for specialist review before your consultation, ensuring accurate, personalized care."
        // imageSrc={pageData?.hero?.imageSrc}
        // reverse={pageData?.hero?.reverse}
      />
      <SectionBlock>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-4">
            <Typography
              title={data?.Content?.Title || "Expert Care, Anytime, Anywhere1"}
              headingLevel="h2"
              size="xl"
              color="primary"
              LineHeading
            />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-8 lg:flex justify-end">
            <TextDescription text={data?.Content?.body} />
          </div>
        </div>
        <div>
          <img
            className="w-full"
            src={getMediaUrl(data?.Content?.Image)}
            alt="Patient Care Illustration"
          />
        </div>
      </SectionBlock>
      <SectionBlock noSpacing>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-5">
            <Typography
              title="Secure Online Medical Record Submission"
              headingLevel="h2"
              size="xl"
              color="primary"
              LineHeading
            />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:flex justify-end">
            <TitleDescription size="lg">
              Safely upload your medical records for specialist review before
              your consultation, ensuring accurate, personalized care.
            </TitleDescription>
          </div>
        </div>

        <PatientTabs tabs={tabContent} />
      </SectionBlock>
      <WorkProcess />
      <Faqs />
    </>
  );
}

// export async function generateMetadata() {
//   const data = await fetchAPI("patient-care");
//   return {
//     title: data?.Title || "Patient Care | VieCell",
//     description:
//       data?.Description || data?.summary || "Patient care services at VieCell.",
//   };
// }
