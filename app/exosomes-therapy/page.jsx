import React from "react";
import CTASection from "../component/CTASection/CTASection";
import HeroSection from "../shared/HeroSection/HeroSection";
import SectionBlock from "../shared/Section";

export default function page() {
  return (
    <div>
      <HeroSection
        title="Exosomes Therapy"
        description="Exosomes are small extracellular vesicles that play a key role in cell communication and can be used for therapeutic purposes."
        imageSrc="Exosomes-Therapy.png"
        // reverse={pageData?.hero?.reverse}
      />
      <SectionBlock className=" text-lime-900">
        <div className="container">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              <p className=" text-sm uppercase tracking-wider mb-2">
                Revolutionizing
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Hair and Skin Treatments
              </h2>
              <p className="text-2xl text-primary font-light mb-8">
                in Dermatology
              </p>

              <p className=" leading-relaxed mb-6">
                Exosomes, tiny extracellular vesicles secreted by cells, are
                emerging as a groundbreaking innovation in the fields of
                <span className="font-semibold text-foreground">
                  Dermatology
                </span>
                and
                <span className="font-semibold text-foreground">
                  Aesthetic Medicine
                </span>
                . These nanosized particles play a pivotal role in intercellular
                communication, carrying proteins, lipids, and genetic material
                that can influence cellular behavior.
              </p>

              <p className=" leading-relaxed">
                Recent advancements in exosome technology have unveiled their
                potential to
                <span className="font-semibold text-foreground">
                  Rejuvenate
                </span>
                and enhance the health of
                <span className="font-semibold text-foreground">
                  Hair and Skin
                </span>
                , making them a promising tool for dermatologists.
              </p>
            </div>

            {/* <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center bg-[linear-gradient(360deg,#F7F9EF_0%,#E6F1CB_100%)]">
                <div className="w-3/4 h-3/4 rounded-full bg-card border border-[#979832]/20 shadow-lg flex items-center justify-center bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-24 h-24 text-primary/60"
                  >
                    <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                    <path d="M8.5 2h7" />
                    <path d="M7 16h10" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-lime-900/5 animate-pulse" />
              <div className="absolute bottom-20 left-5 w-8 h-8 rounded-full bg-lime-900/5 animate-pulse delay-300" />
              <div className="absolute top-1/2 right-0 w-6 h-6 rounded-full bg-lime-900/5 animate-pulse delay-500" />
            </div> */}
          </div>
        </div>
      </SectionBlock>
      <SectionBlock
        className="bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900 text-center"
        rounded
      >
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4 px-4 py-1.5 text-xs uppercase tracking-wider">
              Skin Care
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Remarkable Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "tissue regeneration", icon: "heart" },
              { title: "reducing inflammation", icon: "shield" },
              { title: "collagen production", icon: "sparkles" },
              { title: "wrinkles & fine lines", icon: "leaf" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 shadow-sm shadow-card hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center group bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-lime-900 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.icon === "heart" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-white"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  )}

                  {item.icon === "shield" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-white"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                  )}

                  {item.icon === "sparkles" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-white"
                    >
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                      <path d="M20 3v4" />
                      <path d="M22 5h-4" />
                      <path d="M4 17v2" />
                      <path d="M5 18H3" />
                    </svg>
                  )}

                  {item.icon === "leaf" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-white"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  )}
                </div>

                <h3 className="font-semibold text-foreground capitalize">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 bg-white shadow-sm">
            <p className=" leading-relaxed mb-4">
              In skin care, exosomes have shown remarkable capabilities in
              promoting
              <span className="font-semibold text-foreground">
                tissue regeneration
              </span>
              ,
              <span className="font-semibold text-foreground">
                reducing inflammation
              </span>
              , and stimulating
              <span className="font-semibold text-foreground">collagen</span>
              production.
            </p>
            <p className=" leading-relaxed">
              By facilitating
              <span className="font-semibold text-foreground">
                cellular repair
              </span>
              and <span className="font-semibold text-foreground">renewal</span>
              , exosomes help restore the skin&apos;s natural
              <span className="font-semibold text-foreground">radiance</span>
              and
              <span className="font-semibold text-foreground">elasticity</span>.
            </p>
          </div>
        </div>
      </SectionBlock>
      <SectionBlock
        className="bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900"
        rounded
      >
        <div className="container max-w-6xl">
          <div className="bg-primary/10 rounded-3xl p-8 md:p-12 bg-white shadow-sm">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              The benefits of exosomes extend to hair restoration as well.
              Exosomes can stimulate
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent mx-1 bg-[#F3F5EC] text-foreground hover:bg-primary/30">
                hair follicle cells
              </span>
              , promoting
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent mx-1 bg-[#F3F5EC] text-foreground hover:bg-primary/30">
                hair growth
              </span>
              and preventing hair loss. Their regenerative properties aid in
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent mx-1 bg-[#F3F5EC] text-foreground hover:bg-primary/30">
                reviving dormant hair follicles
              </span>
              and
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent mx-1 bg-[#F3F5EC] text-foreground hover:bg-primary/30">
                enhancing the thickness
              </span>
              and quality of existing hair.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              This has led to increased interest in exosome therapy as a viable
              option for individuals struggling with
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent mx-1 bg-[#F3F5EC] text-foreground hover:bg-primary/30">
                hair thinning and baldness
              </span>
              .
            </p>
          </div>
        </div>
        <div className="container max-w-6xl">
            <div className="flex items-start gap-6 bg-card rounded-2xl p-8 bg-white shadow-sm">
              <div className="hidden md:flex w-16 h-16 rounded-2xl bg-lime-900 items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-white"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Growing Adoption in Practice
                </h3>
                <p className=" leading-relaxed">
                  Dermatologists are increasingly incorporating exosome
                  treatments into their practice, encouraged by the promising
                  results and minimal side effects. As research continues to
                  expand, the potential applications of exosomes in dermatology
                  are expected to grow, offering new avenues for enhancing
                  patient outcomes.
                </p>
              </div>
            </div>
          </div>
      </SectionBlock>
      <CTASection CTAdata />
    </div>
  );
}
