import { fetchAPI } from "../lib/api";
import { PageHeaderSetter } from "../lib/PageHeaderContext";
import BlocksRendererClient from "../shared/BlocksRendererClient";
import SectionBlock from "../shared/Section";
export default async function Page() {
  const PageData = await fetchAPI("privacy-policy");
  const title = PageData?.Title || "";
  const htmlContent = PageData?.body || "";
  return (
    <div>
      <PageHeaderSetter title={title} breadcrumbLast={title} />
      <SectionBlock>
        {/* <Typography title={title} headingLevel="h2" size="xl" color="primary" /> */}

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
    </div>
  );
}
export async function generateMetadata() {
  const seoData = await fetchAPI("privacy-policy");
  const seo = seoData.Seo;
  return {
    title: seo?.metaTitle || page.Title,
    description: seo?.metaDescription || "Description not available",
    openGraph: {
      title: seo?.metaTitle || page.Title,
      description: seo?.metaDescription || "Description not available",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: seo?.metaTitle || page.Title,
      description: seo?.metaDescription || "Description not available",
    },
  };
}
