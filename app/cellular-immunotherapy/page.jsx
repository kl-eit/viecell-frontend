import React from "react";
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
import SectionBlock from "../shared/Section";

export default function page() {
  return (
    <div>
      <HeroSection
        title="Cellular Immunotherapy"
        description="Harnessing the power of the immune system to fight cancer"
        imageSrc="immunotherapy-hero.png"
        // reverse={pageData?.hero?.reverse}
      />
      <SectionBlock className="text-lime-900">
        <div>
          <span className="font-medium">Cellular IMMUNOTHERAPY ?</span>
        </div>
        <div className="lg:text-2xl text-lg font-normal font-['Roboto_Condensed']">
          <p className="mb-3 last:mb-0 text-reset">
            Cellular Immunotherapy is a ground breaking approach in cancer
            treatment that harnesses the body's immune system to Recognize,
            Target, and Eliminate Cancer Cells. This form of therapy involves
            the use of immune cells, often extracted and modified outside the
            body, to enhance their cancer-fighting capabilities before
            reintroducing them into the patient.{" "}
          </p>
        </div>
      </SectionBlock>
      <SectionBlock
        className="bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900"
        rounded
      >
        <div className="text-md font-medium">
          Types of Cells Used in Cellular Immunotherapy :
        </div>

        <main className="space-y-6">
          <div className="flex items-center gap-2">
            <h2 className=" text-2xl text-left text-lime-900 font-['Roboto_Condensed'] font-semibold leading-none uppercase">
              T Adoptive Therapy
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              <span className="key-term font-semibold">CAR-T Cells</span> (Chimeric Antigen
              Receptor T cells): These are T cells that have been genetically
              engineered to express receptors specific to cancer cells. CAR-T
              cells are particularly effective in treating certain blood cancers
              like leukemia and lymphoma. They are modified to recognize and
              bind to specific proteins on cancer cells, enabling a targeted
              attack.
            </p>
            <p className="text-foreground leading-relaxed">
              <span className="key-term font-semibold">TILs</span> (Tumor-Infiltrating
              Lymphocytes): These T cells are isolated directly from a patient's
              tumor. Once extracted, they are expanded and activated in the lab
              before being reintroduced into the body. TIL therapy is especially
              promising for treating melanoma.
            </p>
          </div>

          <div className="flex items-center gap-2 my-6">
            <h2 className="text-2xl text-left text-lime-900 font-['Roboto_Condensed'] font-semibold leading-none uppercase">
              Natural Killer (NK) Cells
            </h2>
          </div>

          <div>
            <p className="text-foreground leading-relaxed">
              <span className="key-term font-semibold">NK cells</span> are a type of immune
              cell that can recognize and destroy cancer cells without prior
              sensitization. In cancer treatment, NK cells can be used in their
              natural form or modified to enhance their ability to target cancer
              cells. They are being investigated for use in treating various
              solid tumors and blood cancers.
            </p>
          </div>

          <div className="flex items-center gap-2 my-6">
            <h2 className="text-2xl text-left text-lime-900 font-['Roboto_Condensed'] font-semibold leading-none uppercase">
              Dendritic Cells
            </h2>
          </div>

          <div>
            <p className="text-foreground leading-relaxed">
              <span className="key-term font-semibold">Dendritic cells</span> are key players
              in initiating immune responses. In cancer immunotherapy, dendritic
              cells are often loaded with tumor antigens and then reintroduced
              into the patient to stimulate T cells to attack cancer cells. This
              approach is used in cancer vaccines, such as sipuleucel-T for
              prostate cancer.
            </p>
          </div>

          <div className="flex items-center gap-2 my-6">
            <h2 className="text-2xl text-left text-lime-900 font-['Roboto_Condensed'] font-semibold leading-none uppercase">
              Cytokine-Induced Killer (CIK) Cells
            </h2>
          </div>

          <div>
            <p className="text-foreground leading-relaxed mb-4">
              <span className="key-term font-semibold">CIK cells</span> are a type of immune
              cell that combines the properties of T cells and NK cells. They
              are expanded in the lab and can kill a broad range of cancer
              cells, showing potential in treating solid tumors and
              haematological cancers.
            </p>
          </div>
          <div>
            <p className="text-foreground leading-relaxed">
              Cellular immunotherapy represents a promising and personalized
              approach to cancer treatment, offering hope for patients with
              various types of cancers by leveraging the body's own immune
              defenses.
            </p>
          </div>
        </main>
      </SectionBlock>
      <CTASection CTAdata />
    </div>
  );
}
