import CTASection from "../component/CTASection/CTASection";
import { fetchAPI } from "../lib/api";
import BlocksRendererClient from "../shared/BlocksRendererClient";
import HeroSection from "../shared/HeroSection/HeroSection";
import SectionBlock from "../shared/Section";
export default async function Page() {
  const PageData = await fetchAPI("privacy-policy");
  const title = PageData?.Title || "";
  const htmlContent = PageData?.body || "";
  return (
    <div>
      <HeroSection
        title={title}
        description="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."
        // imageSrc={pageData?.hero?.imageSrc}
        // reverse={pageData?.hero?.reverse}
      />
      <SectionBlock>
        <div
          className="prose prose-lg max-w-full text-lime-900 font-['Roboto']"
          data-aos="fade-in"
        >
          {htmlContent && (
            <BlocksRendererClient
              content={htmlContent}
              modifiers={{ bold: "bold", italic: "italic" }}
            />
          )}
        </div>
      </SectionBlock>
      <CTASection CTAdata />
    </div>
  );
}
export async function generateMetadata() {
  const seoData = await fetchAPI("privacy-policy");
  const seo = seoData?.Seo;
  return {
    title: seo?.metaTitle || "",
    description: seo?.metaDescription || "Description not available",
    openGraph: {
      title: seo?.metaTitle || "",
      description: seo?.metaDescription || "Description not available",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: seo?.metaTitle || "",
      description: seo?.metaDescription || "Description not available",
    },
  };
}
