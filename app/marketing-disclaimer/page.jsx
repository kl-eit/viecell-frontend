import CTASection from "../component/CTASection/CTASection";
import HeroSection from "../shared/HeroSection/HeroSection";
import SectionBlock from "../shared/Section";

export default function Page() {
  return (
    <div>
      <HeroSection
        title="Marketing Disclaimer"
        description="Marketing, Advertising & Communication Compliance Policy."
      />

      <SectionBlock>
        <div className="prose prose-lg max-w-full text-lime-900 font-['Roboto']">

          <h3 className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7 mb-2">
            1. Regulatory Position
          </h3>
          <p className="mb-2">In accordance with:</p>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>Directions of the Hon’ble Supreme Court of India (2026)</li>
            <li>Guidelines of the Indian Council of Medical Research (ICMR)</li>
            <li>Department of Health Research (DHR) regulations</li>
            <li>
              Applicable provisions under the Drugs &amp; Magic Remedies
              (Objectionable Advertisements) Act
            </li>
          </ul>
          <p className="mb-4">
            Viecell adopts a strict no-misrepresentation policy in all
            communications.
          </p>

          <h3 className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7 mb-2">
            2. Prohibited Claims
          </h3>
          <p className="mb-2">
            The following are strictly NOT permitted in any form of
            communication:
          </p>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>“Cure” or “Guaranteed Results”</li>
            <li>“Permanent Recovery”</li>
            <li>“100% Success Rate”</li>
            <li>
              Claims of effectiveness for non-approved indications as standard
              therapy
            </li>
            <li>Before/after miracle transformation claims</li>
            <li>Misleading patient testimonials implying guaranteed outcomes</li>
          </ul>

          <h3 className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7 mb-2">
            3. Mandatory Disclosures
          </h3>
          <p className="mb-4">All marketing content must clearly state:</p>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>
              “Stem cell–based interventions are investigational except for
              approved indications.”
            </li>
            <li>“Results may vary between individuals.”</li>
            <li>“This is not a guaranteed treatment or cure.”</li>
          </ul>

          <h3 className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7 mb-2">
            4. Content Classification
          </h3>
          <p className="mb-2">All communication must fall into one of the following:</p>
          <p>
            <strong>A. Educational Content (Preferred)</strong>
          </p>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>Disease awareness</li>
            <li>Scientific explanation</li>
            <li>Research updates</li>
          </ul>
          <p className="mb-4">
            <strong>B. Research Communication</strong>
          </p>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>Clinical trial information</li>
            <li>Scientific publications</li>
            <li>Conference participation</li>
          </ul>
          <p className="mb-4">
            <strong>C. Institutional Information</strong>
          </p>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>Facilities, technology, expertise</li>
          </ul>

          <h3 className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7 mb-2">
            5. Patient Testimonials Policy
          </h3>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>Testimonials must be genuine and documented</li>
            <li>
              Must include disclaimer: “Individual results may vary. This
              experience does not guarantee similar outcomes.”
            </li>
            <li>Must not imply cure or universal success</li>
          </ul>

          <h3 className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7 mb-2">
            6. Social Media Compliance (Instagram / Facebook)
          </h3>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>No direct claims of treatment efficacy</li>
            <li>No targeting vulnerable groups with curative messaging</li>
            <li>All posts must include disclaimer footer</li>
            <li>
              Influencer or third-party promotions must comply with same rules
            </li>
          </ul>

          <h3 className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7 mb-2">
            7. Doctor &amp; Staff Communication
          </h3>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>Doctors must avoid verbal overpromising</li>
            <li>All patient discussions must align with consent documentation</li>
            <li>No off-record assurances of cure</li>
          </ul>

          <h3 className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7 mb-2">
            8. Legal Risk Mitigation
          </h3>
          <p className="mb-4">Non-compliance may lead to:</p>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>Regulatory action</li>
            <li>License scrutiny</li>
            <li>Criminal liability under applicable laws</li>
          </ul>
          <p className="mb-4">Viecell maintains internal monitoring to ensure compliance.</p>

          <h3 className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7 mb-2">
            9. Approval Mechanism
          </h3>
          <p className="mb-2">All public content must be approved by:</p>
          <ul className="mt-1 list-disc pl-5 mb-4">
            <li>Medical Director / Ethics Committee representative</li>
            <li>Compliance Officer (if appointed)</li>
          </ul>

          <h3 className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-7 mb-2">
            10. Disclaimer for All Platforms
          </h3>
          <p className="mb-4">
            <strong>Standard Footer Disclaimer:</strong><br />Stem cell–based
            therapies, except for approved indications, are investigational in
            nature and not established as standard medical treatment. Outcomes
            may vary.<br /> Please consult a qualified medical professional.
          </p>
        </div>
      </SectionBlock>

      <CTASection CTAdata />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Marketing Compliance Policy | VieCell",
    description:
      "Marketing, Advertising & Communication Compliance Policy and mandatory disclosures for communications.",
  };
}

