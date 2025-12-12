import { PageHeaderSetter } from "../../lib/PageHeaderContext";
import { ArrowRightIcon } from "../../shared/icons/icons";
import { fetchAPI, getMediaUrl } from "../../lib/api";
import BlocksRendererClient from "../../shared/BlocksRendererClient";
import SectionBlock from "../../shared/Section";
import Button from "../../shared/Button/Button";
import Link from "next/link";
import SideBarHelp from "../../shared/SideBarHelp/SideBarHelp";
export default async function ServiceDetailsPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const services = await fetchAPI(
    `services?filters[slug][$eq]=${id}&populate=*`
  );
  const service = services?.[0];
  const pageTitle = service?.Title;
  const newLink = {
    id: service?.id,
    Title: service?.Title,
    slug: id,
  };
  const updatedLinkPages = service?.link_pages
    ? [...service?.link_pages, newLink]
    : [newLink];
  console.log("Service Details Page:", service);
  return (
    <div>
      <PageHeaderSetter title={pageTitle} breadcrumbLast={service?.title} />
      <SectionBlock className="pagebody">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9 gap-6 flex flex-col">
            <div className="relative w-full" data-aos="fade-in">
              {service?.Cover && (
                <img
                  src={getMediaUrl(service.Cover)}
                  alt={service?.Cover?.alternativeText || service?.Title}
                  width={service?.Cover.width || 800}
                  height={service?.Cover.height || 400}
                  className="w-full"
                />
              )}
            </div>
            <div
              className="prose prose-lg max-w-full text-lime-900 font-['Roboto']"
              data-aos="fade-in"
            >
              {service?.Body && (
                <BlocksRendererClient
                  content={service?.Body}
                  modifiers={{ bold: "bold", italic: "italic" }}
                />
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 gap-6">
            <div
              className="p-6 lg:p-8 bg-[#EEEEDD] rounded-2xl mb-3"
              data-aos="fade-in"
            >
              <div className="text-[1.25rem] leading-none text-lime-900 font-['Roboto_Condensed'] font-semibold mb-4">
                {service?.service_category
                  ? service?.service_category?.Name
                  : "Uncategorized"}
              </div>
              <div className="">
                <ul className="flex flex-col w-full space-y-2 text-[14px]">
                  {updatedLinkPages?.map((tag) => {
                    const isActive = id === tag?.slug;
                    return (
                      <li key={tag?.id} className="mb-2 w-full">
                        <Link
                          href={`/services/${tag?.slug}`}
                          className={`flex w-full px-3 rounded-lg py-2 ${
                            isActive
                              ? "bg-lime-800 text-white"
                              : "bg-white text-lime-800"
                          }`}
                        >
                          {tag?.Title}
                          <span className="icon-arrow-right ms-auto">
                            <ArrowRightIcon size={12} />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              className="p-6 lg:p-8 bg-[#EEEEDD] rounded-2xl mb-3 grid gap-5"
              data-aos="fade-in"
            >
              <div className="self-stretch text-center justify-start text-lime-900 text-2xl font-semibold font-['Roboto_Condensed'] leading-7">
                Book Your Free Consultation Today!
              </div>
              <div className="self-stretch justify-start text-lime-900 text-base font-semibold font-['Roboto_Condensed'] leading-5">
                Take the First Step Toward Better Health with a Free
                Consultation
              </div>
              <div className="flex flex-col justify-start items-center gap-2.5">
                <div className="self-stretch justify-start text-neutral-500 text-xs font-normal font-['Roboto'] leading-5">
                  Take the first step towards better health with a complimentary
                  consultation with our specialists. Discuss your needs, explore
                  treatment options, and learn how our advanced facilities can
                  help you.
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-2.5">
                <Link href="/contact-us">
                  <Button icon size="md">
                    Book Now!
                  </Button>
                </Link>
              </div>
            </div>
            <SideBarHelp />
          </div>
        </div>
      </SectionBlock>
    </div>
  );
}
