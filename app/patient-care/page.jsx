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
import CTASection from "../component/CTASection/CTASection";
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
    image: "Secure-Upload.png",
  },
  {
    id: "care",
    title: "Integrated Care",
    description:
      "All patient data is organized digitally, ensuring continuity across visits.",
    image: "Secure-Upload.png",
  },
  {
    id: "confidentiality",
    title: "Confidentiality Guaranteed",
    description: "Data privacy and HIPAA-compliant handling for all records.",
    image: "Secure-Upload.png",
  },
];
export default async function PatientCarePage() {
  const data = await fetchAPI("patient-care", "Content.Image");
  const title = data?.Title || "Patient Care";
  //const htmlContent = data?.Content || data?.description || null;
  const seo = data?.Seo?.find((b) => b.__component === "shared.seo");
  console.log(data,'patient care data')
  return (
    <>
      <PageHeaderSetter title="Patient Care" breadcrumbLast="Patient Care" />
      <HeroSection
        title="Dedicated In patient Care for International Patients"
        description="Viecells provides seamless inpatient care for international patients, offering personalized treatment planning, advanced regenerative therapies, hospital coordination, and end-to-end support—so you can focus on healing with confidence and comfort, far from home."
         imageSrc={data?.Content?.Image?.url}
        // reverse={pageData?.hero?.reverse}
      />
      {/* <SectionBlock>
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
      </SectionBlock> */}
      <SectionBlock>
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
      <CTASection CTAdata />
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
