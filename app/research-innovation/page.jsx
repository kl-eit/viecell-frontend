import { FlaskConical, TestTubes, Microscope, Layers } from "lucide-react";
import SectionBlock from "../shared/Section";
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
import "./styles.css";
const programs = [
  {
    id: "VEC-EXO-01",
    title: "Poor Ovarian Reserve (POR)",
    subtitle: "VEC-EXO-01",
    stage: "Early Clinical Research",
    stageClass: "bg-stage-clinical",
    icon: FlaskConical,
    description:
      "Poor Ovarian Reserve remains a significant challenge in reproductive medicine. VEC-EXO-01 is a research program exploring the role of exosome-based biologics in supporting ovarian microenvironment and ovarian responsiveness.",
    note: "This program is designed to generate scientific data on biological markers associated with ovarian function, without making claims of treatment or guaranteed outcomes.",
    parameters: [
      "Anti-Müllerian Hormone (AMH)",
      "Antral Follicle Count (AFC)",
      "Oocyte Parameters",
    ],
  },
  {
    id: "VEC-EXO-02",
    title: "Endometrial Biology Research",
    subtitle: "VEC-EXO-02",
    stage: "Proof of Concept",
    stageClass: "bg-stage-proof",
    icon: Microscope,
    description:
      "This program focuses on understanding endometrial tissue biology and regenerative signaling.",
    note: "The objective is to study whether exosome-mediated pathways may influence endometrial receptivity markers, under controlled research conditions.",
    parameters: ["Endometrial Thickness"],
  },
  {
    id: "VEC-EXO-03",
    title: "Premature Ovarian Insufficiency (POI)",
    subtitle: "VEC-EXO-03",
    stage: "Discovery",
    stageClass: "bg-stage-discovery",
    icon: TestTubes,
    description:
      "Premature Ovarian Insufficiency represents a complex biological condition with limited therapeutic options.",
    note: "Viecell's discovery-stage research explores molecular and cellular pathways involved in ovarian function, with the aim of contributing to future scientific understanding.",
    parameters: ["Follicular and Molecular Markers"],
  },
  {
    id: "VEC-EXO-PLAT",
    title: "Reproductive Aging Research Platform",
    subtitle: "VEC-EXO-PLAT",
    stage: "Ongoing",
    stageClass: "bg-stage-ongoing",
    icon: Layers,
    description:
      "This platform supports multiple research programs related to female reproductive aging, ovarian longevity, and regenerative gynecology.",
    note: "It enables Viecell to investigate common biological pathways across different reproductive conditions.",
    parameters: ["Multi-Indication Research"],
  },
];
const features = [
  {
    title: "Regenerative Biologics Research",
    description: "Pioneering next-generation cell-derived therapies",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-dna w-6 h-6 text-white"
      >
        <path d="m10 16 1.5 1.5" />
        <path d="m14 8-1.5-1.5" />
        <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
        <path d="m16.5 10.5 1 1" />
        <path d="m17 6-2.891-2.891" />
        <path d="M2 15c6.667-6 13.333 0 20-6" />
        <path d="m20 9 .891.891" />
        <path d="M3.109 14.109 4 15" />
        <path d="m6.5 12.5 1 1" />
        <path d="m7 18 2.891 2.891" />
        <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      </svg>
    ),
  },
  {
    title: "Female Reproductive Science",
    description: "Focused on women's reproductive health challenges",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-heart w-6 h-6 text-white"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: "Ethical Clinical Translation",
    description: "Responsible advancement from research to practice",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-lightbulb w-6 h-6 text-white"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
];
export default async function ResearchInnovationPage() {
  return (
    <div>
      <HeroSection
        title="Research Pipeline Representation"
        description="Advancing Regenerative Science for Women's Reproductive Health through innovative exosome-based research platforms"
        imageSrc="Your-Journey.png"
      />
      <SectionBlock className="text-lime-900">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  mb-4 px-4 py-1.5 text-xs uppercase tracking-wider">
            Platform Overview
          </div>

          <h2 className="text-2xl lg:text-[2.625rem] leading-none font-['Roboto_Condensed'] font-semibold mb-4">
            Exosome-Based Ovarian &amp; Reproductive Aging
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our research pipeline targets key reproductive health challenges
            through innovative biologics
          </p>
        </div>

        {/* Desktop Table */}
        <div className="rounded-lg text-card-foreground shadow-sm hidden md:block overflow-hidden shadow-card border-0 bg-card bg-white">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/10 bg-muted/30">
                  <th className="text-left py-4 px-6 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    Program
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    Indication
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    Stage
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    Key Endpoint
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-black/10 last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="py-5 px-6">
                    <span className="font-semibold text-primary">
                      VEC-EXO-01
                    </span>
                  </td>
                  <td className="py-5 px-6 ">Poor Ovarian Reserve</td>
                  <td className="py-5 px-6">
                    <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80  text-stage-clinical border-stage-clinical/30 border font-medium">
                      Early Clinical
                    </div>
                  </td>
                  <td className="py-5 px-6 text-muted-foreground">
                    AMH, AFC, Oocytes
                  </td>
                </tr>

                <tr className="border-b border-black/10 last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="py-5 px-6">
                    <span className="font-semibold text-primary">
                      VEC-EXO-02
                    </span>
                  </td>
                  <td className="py-5 px-6 ">Endometrium Thickness</td>
                  <td className="py-5 px-6">
                    <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80  text-stage-proof border-stage-proof/30 border font-medium">
                      Proof of Concept
                    </div>
                  </td>
                  <td className="py-5 px-6 text-muted-foreground">
                    Increase in endometrium thickness
                  </td>
                </tr>

                <tr className="border-b border-black/10 last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="py-5 px-6">
                    <span className="font-semibold text-primary">
                      VEC-EXO-03
                    </span>
                  </td>
                  <td className="py-5 px-6 ">POI</td>
                  <td className="py-5 px-6">
                    <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80  text-stage-discovery border-stage-discovery/30 border font-medium">
                      Discovery
                    </div>
                  </td>
                  <td className="py-5 px-6 text-muted-foreground">
                    Follicular Markers
                  </td>
                </tr>

                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-5 px-6">
                    <span className="font-semibold text-primary">
                      VEC-EXO-PLAT
                    </span>
                  </td>
                  <td className="py-5 px-6 ">Aging Platform</td>
                  <td className="py-5 px-6">
                    <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 text-stage-ongoing border-stage-ongoing/30 border font-medium">
                      Ongoing
                    </div>
                  </td>
                  <td className="py-5 px-6 text-muted-foreground">
                    Multi-indication
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {[
            [
              "VEC-EXO-01",
              "Early Clinical",
              "Poor Ovarian Reserve",
              "AMH, AFC, Oocytes",
              " bg-teal-600 text-whit border-stage-clinical/30",
            ],
            [
              "VEC-EXO-02",
              "Proof of Concept",
              "Endometrium Thickness",
              "Increase in endometrium thickness",
              "bg-stage-proof/15 text-stage-proof border-stage-proof/30",
            ],
            [
              "VEC-EXO-03",
              "Discovery",
              "POI",
              "Follicular Markers",
              "bg-stage-discovery/15 text-stage-discovery border-stage-discovery/30",
            ],
            [
              "VEC-EXO-PLAT",
              "Ongoing",
              "Aging Platform",
              "Multi-indication",
              "bg-stage-ongoing/15 text-stage-ongoing border-stage-ongoing/30",
            ],
          ].map(([code, stage, title, desc, stageClass]) => (
            <div
              key={code}
              className="rounded-lg text-card-foreground shadow-sm p-5 shadow-card border-0 bg-card"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-semibold text-primary text-lg">
                  {code}
                </span>
                <div
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 border font-medium text-xs ${stageClass}`}
                >
                  {stage}
                </div>
              </div>
              <h3 className="font-medium  mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>
      <section className="py-[2rem] lg:py-[3.75rem] bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900 text-center items-start rounded-[30px]">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-2xl lg:text-[2.625rem] leading-none font-['Roboto_Condensed'] font-semibold mb-4">
                Research &amp; Development at Viecell
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Viecell, Research &amp; Development is dedicated to advancing
                next-generation regenerative biologics focused on female
                reproductive health and reproductive aging.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Infertility and reproductive decline affect not only biological
                outcomes but also emotional well-being, mental health, and
                quality of life. Viecell&apos;s research approach recognizes
                this broader impact and aims to develop science-driven,
                ethically responsible solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div
                className="rounded-lg text-card-foreground shadow-sm p-5 border-0 shadow-card bg-card hover:shadow-lg transition-shadow duration-300 group bg-white"
                style={{ animationDelay: "0s" }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3F5EC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-beaker w-6 h-6 text-secondary-foreground"
                  >
                    <path d="M4.5 3h15" />
                    <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
                    <path d="M6 14h12" />
                  </svg>
                </div>
                <h3 className="font-semibold  mb-2">Cell-Derived Biologics</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explore cell-derived biologics for reproductive health
                  research
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="rounded-lg text-card-foreground shadow-sm p-5 border-0 shadow-card bg-card hover:shadow-lg transition-shadow duration-300 group bg-white"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3F5EC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-brain w-6 h-6 text-secondary-foreground"
                  >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                  </svg>
                </div>
                <h3 className="font-semibold  mb-2">
                  Molecular &amp; Cellular
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Address ovarian aging and uterine receptivity at molecular and
                  cellular levels
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="rounded-lg text-card-foreground shadow-sm p-5 border-0 shadow-card bg-card hover:shadow-lg transition-shadow duration-300 group bg-white"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3F5EC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-leaf w-6 h-6 text-secondary-foreground"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <h3 className="font-semibold  mb-2">Non-Hormonal Pathways</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Advance non-hormonal, regenerative research pathways
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="rounded-lg text-card-foreground shadow-sm p-5 border-0 shadow-card bg-card hover:shadow-lg transition-shadow duration-300 group bg-white"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3F5EC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield w-6 h-6 text-secondary-foreground"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                </div>
                <h3 className="font-semibold  mb-2">Scientific Ethics</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Maintain highest standards of ethics, regulatory compliance,
                  and clinical responsibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionBlock className="text-lime-900">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  mb-4 px-4 py-1.5 text-xs uppercase tracking-wider">
            Core Technology
          </div>
          <h2 className="text-2xl lg:text-[2.625rem] leading-none font-['Roboto_Condensed'] font-semibold mb-4">
            Exosome-Based Reproductive Aging Research Platform
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Viecell is developing an exosome-based research platform targeting
            ovarian and reproductive aging. Exosomes are extracellular vesicles
            involved in intercellular signaling.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#F7F9EF]  via-border to-transparent -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="relative group">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 bg-white">
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-xl bg-lime-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-activity w-7 h-7 text-white"
                    >
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary  text-xs font-bold flex items-center justify-center">
                    1
                  </div>
                </div>
                <h3 className="font-semibold  mb-2">Cellular Metabolism</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Influence pathways related to cellular energy and function
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 bg-white">
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-xl bg-lime-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-droplets w-7 h-7 text-white"
                    >
                      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary  text-xs font-bold flex items-center justify-center">
                    2
                  </div>
                </div>
                <h3 className="font-semibold  mb-2">
                  Tissue Repair &amp; Angiogenesis
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Support tissue regeneration and blood vessel formation
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 bg-white">
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-xl bg-lime-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-flame w-7 h-7 text-white"
                    >
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary  text-xs font-bold flex items-center justify-center">
                    3
                  </div>
                </div>
                <h3 className="font-semibold  mb-2">Inflammatory Modulation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Regulate inflammatory responses in reproductive tissues
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative group">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 bg-white">
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-xl bg-lime-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-timer w-7 h-7 text-white"
                    >
                      <line x1="10" y1="2" x2="14" y2="2"></line>
                      <line x1="12" y1="14" x2="15" y2="11"></line>
                      <circle cx="12" cy="14" r="8"></circle>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary  text-xs font-bold flex items-center justify-center">
                    4
                  </div>
                </div>
                <h3 className="font-semibold  mb-2">Cellular Senescence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Address aging processes at the cellular level
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionBlock>
      <SectionBlock
        className="bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900 "
        rounded
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  mb-4 px-4 py-1.5 text-xs uppercase tracking-wider">
            Research Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research Pipeline Overview
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed insights into our investigational research programs
          </p>
        </div>

        <div className="space-y-6">
          {programs.map((p) => (
            <div
              key={p.id}
              className="rounded-lg text-card-foreground shadow-sm overflow-hidden border-0 shadow-card bg-card group hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-72 p-6 bg-[#F4F8F4] flex flex-col items-center lg:items-start justify-center text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-200">
                  <div className="w-16 h-16 rounded-2xl bg-lime-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {(() => {
                      const Icon = p.icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>

                  <span className="text-sm font-medium text-muted-foreground mb-1">
                    Program
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {p.subtitle}
                  </h3>
                  <div
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 text-white font-medium ${p.stageClass}`}
                  >
                    {p.stage}
                  </div>
                </div>

                <div className="flex-1 p-6 lg:p-8">
                  <h4 className="text-xl font-semibold  mb-3">{p.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 italic mb-5">
                    {p.note}
                  </p>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                      Key Evaluation Parameters
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {p.parameters.map((param) => (
                        <div
                          key={param}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3F5EC] text-secondary-foreground text-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right w-3 h-3"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                          {param}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        className="bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900 "
        rounded
      >
        <div>
          {/* Background blurs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Ethical, Regulatory & Scientific Commitment
            </h2>
            <p className="/80 max-w-2xl mx-auto">
              All research programs are investigational in nature and are not
              presented as approved therapies unless specifically stated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Regulatory Compliance",
                desc: "Compliance with ICMR, CDSCO, and applicable Indian biomedical research regulations",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: "Best Practices",
                desc: "Adherence to Good Laboratory Practices (GLP) and Good Clinical Practices (GCP)",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                ),
              },
              {
                title: "Transparent Communication",
                desc: "Transparent communication without exaggerated claims or patient inducement",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                title: "Responsible Innovation",
                desc: "Responsible innovation aligned with scientific evidence and patient safety",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3F5EC] flex items-center justify-center mb-4 mx-auto">
                  {card.icon}
                </div>
                <h3 className="font-semibold  mb-2">{card.title}</h3>
                <p className="text-sm /70 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>
      <SectionBlock className="bg-white text-lime-900">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#F3F5EC] border border-secondary-foreground/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles w-4 h-4 text-secondary-foreground"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              <span className="text-secondary-foreground text-sm font-medium">
                Our Vision
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Beyond Biology: A Holistic Research Perspective
            </h2>
            <p className="leading-relaxed mb-6">
              Viecell recognizes that reproductive health challenges often have
              a profound emotional and psychological impact. While our research
              programs focus on biological mechanisms, our broader vision
              acknowledges the importance of patient dignity, informed
              decision-making, and emotional resilience throughout the
              reproductive journey.
            </p>
            <p className=" font-medium leading-relaxed">
              By advancing regenerative science responsibly, Viecell aims to
              contribute to a future where reproductive care is scientifically
              robust, ethically grounded, and deeply human.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
            <h3 className="text-xl font-semibold  mb-2 text-center font-['Roboto_Condensed']">
              The Viecell Vision for Women's Health Innovation
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              Viecell stands at the convergence of:
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#F3F5EC]/50 border border-secondary-foreground/10 hover:bg-[#F3F5EC] transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-lime-900 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold ">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>
      <CTASection CTAdata />
    </div>
  );
}
// export async function generateMetadata() {
//   const researchData = await fetchAPI("research-innovation");
//   return {
//     title: researchData?.Title || "Research & Innovation | VieCell",
//     description: researchData?.Description || researchData?.summary || "Research and innovation at VieCell Institute.",
//   };
// }
