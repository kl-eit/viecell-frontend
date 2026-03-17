import CTASection from "../component/CTASection/CTASection";
import HeroSection from "../shared/HeroSection/HeroSection";
import SectionBlock from "../shared/Section";

export default function Page() {
  return (
    <div>
      <HeroSection
        title="Regulatory Disclaimer"
        description="Regulatory & Medical Disclaimer for Viecell in accordance with the regulatory framework of India."
      />

      <SectionBlock>
        <div className="prose prose-lg max-w-full text-lime-900 font-['Roboto']">
        

          <p className="mb-4">
            Viecell is committed to the responsible advancement of regenerative
            medicine in accordance with the regulatory framework of India.
          </p>

          <p className="mb-4">
            Stem cell–based interventions are an evolving area of biomedical
            science. As per the prevailing guidelines issued by the Government
            of India, the Department of Health Research (DHR), Indian Council of
            Medical Research (ICMR), and applicable judicial directions,{" "}
            <strong>
              stem cell therapy is considered standard medical care only for
              specific hematopoietic stem cell transplantation indications
              approved by the Ministry of Health and Family Welfare.
            </strong>
          </p>

          <p className="mb-4">
            Except for such approved indications,{" "}
            <strong>
              stem cell–based interventions may only be offered within the
              framework of ethically approved scientific research or clinical
              studies conducted in accordance with applicable regulatory
              approvals.
            </strong>
          </p>

          <p>Viecell’s</p>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>
              Adheres to all applicable{" "}
              <strong>ICMR National Guidelines for Stem Cell Research.</strong>
            </li>
            <li>
              Conducts regenerative medicine activities{" "}
              <strong>
                only under appropriate ethical oversight and regulatory
                compliance where applicable.
              </strong>
            </li>
          </ul>

          <p className="mb-4">
            Information provided on this website is{" "}
            <strong>
              intended solely for educational and scientific awareness purposes
              and should not be interpreted as a claim of cure, guaranteed
              treatment outcome, or replacement for standard medical care.
            </strong>
          </p>

          <p className="mb-4">
            Patients are strongly advised to consult qualified medical
            professionals before making healthcare decisions.
          </p>

          <p>
            Viecell reserves the right to modify, update, or revise information
            on this website to maintain compliance with evolving scientific
            evidence and regulatory requirements in India.
          </p>
        </div>
      </SectionBlock>

      <CTASection CTAdata />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Regulatory & Medical Disclaimer | VieCell",
    description:
      "Regulatory & Medical Disclaimer for Viecell in accordance with the regulatory framework of India.",
  };
}

