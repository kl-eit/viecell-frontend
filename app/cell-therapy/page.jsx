import React from "react";
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
import SectionBlock from "../shared/Section";
const BulletPoint = ({ children }) => {
  return (
    <div className="bullet-point mb-3">
      <div className="bullet-dot" />
      <p className="text-foreground leading-relaxed">{children}</p>
    </div>
  );
};

const KeyTerm = ({ children }) => {
  return <span className="key-term font-semibold ">{children}</span>;
};
const CalloutBox = ({ children }) => {
  return (
    <div className="callout-box animate-fade-in mb-3">
      <div className="bullet-point">
        <div className="bullet-dot" />
        <p className="text-foreground leading-relaxed">{children}</p>
      </div>
    </div>
  );
};
const TreatmentCard = ({ title, description }) => {
  return (
    <div className="p-6 bg-white rounded-2xl border border-[#979832]/20 inline-flex flex-col items-start gap-2 text-left">
      <h3 className="lg:text-xl text-lg font-semibold font-['Roboto_Condensed']">
        {title}
      </h3>
      <div>
        <p className="text-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
export default function page() {
  return (
    <div>
      <HeroSection
        title="Cell Therapy"
        description="Cell Therapy is a groundbreaking medical approach that uses living cells to Repair, Replace, or Regenerate damaged tissues and organs."
        imageSrc="Cell-Therapy.png"
       
      />
      <SectionBlock className="text-lime-900">
        <div>
          <span className="font-medium">What is CELL THERAPY ?</span>
        </div>
        <main className="lg:text-xl text-lg font-normal font-['Roboto_Condensed']">
          <BulletPoint>
            <KeyTerm>Cell Therapy</KeyTerm> is a groundbreaking medical approach
            that uses living cells to <KeyTerm>Repair</KeyTerm>,{" "}
            <KeyTerm>Replace</KeyTerm>, or <KeyTerm>Regenerate</KeyTerm> damaged
            tissues and organs. It is an advanced biomedical approach where
            living cells are introduced into a patient's body to treat diseases
            or repair damaged tissues. This innovative field leverages the
            body's inherent ability to heal by using cells to restore function
            in a targeted manner.
          </BulletPoint>

          <CalloutBox>
            One of the primary types of cell therapy is{" "}
            <KeyTerm>Stem Cell Therapy</KeyTerm>. Stem cells are
            undifferentiated cells capable of developing into various
            specialized cell types. They can be categorized into{" "}
            <KeyTerm>embryonic stem cells</KeyTerm>, which are pluri potent and
            can develop into any cell type, and{" "}
            <KeyTerm>adult stem cells</KeyTerm>, which are multi potent and more
            limited in their differentiation potential.{" "}
            <KeyTerm>Induced pluri potent stem cells (iPSCs)</KeyTerm> are
            another significant type, created by reprogramming adult cells to a
            pluripotent state, thus offering a renewable source of any cell type
            for therapy.
          </CalloutBox>

          <BulletPoint>
            Another type of cell used in therapy is <KeyTerm>T Cells</KeyTerm>,
            particularly in <KeyTerm>Immunotherapy</KeyTerm>. T cells are a
            subset of white blood cells that play a crucial role in the immune
            response. In CAR-T cell therapy, T cells are extracted from a
            patient, genetically engineered to target cancer cells, and
            reintroduced into the body. This approach has shown remarkable
            success in treating certain types of{" "}
            <KeyTerm>Blood Cancers</KeyTerm>.
          </BulletPoint>
          <BulletPoint>
            <KeyTerm>Mesenchymal Stem Cells</KeyTerm> (MSCs), which can
            differentiate into <KeyTerm>Bone</KeyTerm>,{" "}
            <KeyTerm>Cartilage</KeyTerm>, and <KeyTerm>Fat Cells</KeyTerm>, are
            also widely used, particularly in <KeyTerm>Regenerative</KeyTerm>{" "}
            medicine for tissue repair.{" "}
            <KeyTerm>Hematopoietic Stem Cells</KeyTerm> (HSCs) are used in bone
            marrow transplants to regenerate blood cells in patients with
            conditions like leukaemia.
          </BulletPoint>

          <BulletPoint>
            Overall, <KeyTerm>Cell Therapy</KeyTerm> represents a promising
            frontier in medical treatment, offering hope for curing previously
            untreatable conditions by harnessing the power of living cells.
          </BulletPoint>
        </main>
      </SectionBlock>
      <SectionBlock
        className="bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900"
        rounded
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-15 gap-10 items-center text-lime-900">
          <div className="order-2 lg:order-1 max-w-[600px]">
            <img
              src="body-organs.jpg"
              alt="Human body anatomy showing organs for intra-arterial cell therapy delivery"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6 max-w-[600px]">
            <div className="flex flex-col gap-2 leading-relaxed">
              <div
                className="text-2xl text-left font-['Roboto_Condensed'] font-semibold leading-none"
              >
                EFFECTIVE USE OF CELL THERAPY
              </div>
              <div className="text-xl font-['Roboto_Condensed'] ">
                THROUGH INTRA-ARTERIAL ROUTE
              </div>
              <p className=" mb-2">
                Cell therapy, which involves the transplantation of living cells
                to repair or replace damaged tissues, has gained considerable
                attention for its potential to treat a variety of chronic and
                degenerative diseases.
              </p>
              <p>
                The <KeyTerm>intra-arterial route</KeyTerm>, where cells are
                delivered directly to the target organ via its arterial supply,
                is an innovative approach that enhances the precision and
                efficacy of these treatments. This method ensures that a higher
                concentration of therapeutic cells reaches the affected area,
                improving outcomes and minimizing systemic side effects.
              </p>
            </div>
          </div>
        </div>
      </SectionBlock>
      <SectionBlock
        className="bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900 text-center"
        rounded
      >
      
        <div className="text-center">
            <div className="text-md font-medium mb-2">Organ-Specific Treatments</div>
          <div className="max-w-3xl lg:text-3xl text-xl font-['Roboto_Condensed']  mx-auto ">
            Intra Arterial Injection to Different Organs in the Body
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <TreatmentCard
            title="Liver Cirrhosis: Cells via Hepatic Artery"
            description="For liver cirrhosis, administering therapeutic cells via the hepatic artery ensures that the cells are delivered directly to the liver, the organ requiring regeneration. This method increases cell engraftment and promotes liver tissue repair, potentially reversing cirrhosis or slowing its progression."
          />
          <TreatmentCard
            title="Chronic Kidney Disease: Cells via Renal Artery"
            description="In chronic kidney disease (CKD), delivering cells through the renal artery targets the kidneys directly, allowing the therapeutic cells to home in on damaged kidney tissue. This targeted delivery can help regenerate nephrons, reduce inflammation, and restore kidney function, potentially delaying the need for dialysis or transplantation."
          />
          <TreatmentCard
            title="Type 1 Diabetes: Cells via Splenic Artery"
            description="For Type 1 diabetes, administering cells via the splenic artery provides a novel approach to modulating immune responses and preserving pancreatic function. The spleen plays a critical role in immune regulation, and delivering cells here may help protect remaining insulin-producing cells in the pancreas, reducing disease progression."
          />
          <TreatmentCard
            title="Neurodegenerative Diseases: Cells via Carotid Artery"
            description="In neurodegenerative diseases like Parkinson's or Alzheimer's, delivering cells via the carotid artery allows direct access to the brain, enhancing the cells' ability to cross the blood-brain barrier. This approach can lead to the regeneration of neuronal tissue and the potential slowing of disease progression."
          />
          <TreatmentCard
            title="Cardiomyopathy: Cells via Coronary Artery"
            description="For cardiomyopathy, intra-arterial delivery through the coronary artery ensures that therapeutic cells reach the heart muscle directly. This targeted approach enhances the regeneration of myocardial tissue, improves heart function, and reduces symptoms of heart failure."
          />
        </div>
        <div>
          <p className="text-foreground leading-relaxed">
            In summary, the intra-arterial delivery of cell therapy offers a
            highly targeted approach that maximizes therapeutic benefits while
            minimizing risks, making it a promising strategy for treating
            various chronic and degenerative diseases. Cell therapy can be
            effectively used for various diseases by targeting specific organs
            through intra-organ route.
          </p>
        </div>
      </SectionBlock>
      <CTASection CTAdata />
    </div>
  );
}
