import { PageHeaderSetter } from "../lib/PageHeaderContext";
import SectionBlock from "../shared/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchAPI, getMediaUrl } from "../lib/api";
import { ReadMore } from "../shared/Button/Button";
import Typography, { TextDescription } from "../shared/Typography/Typography";
export default async function page() {
  const treatments = await fetchAPI(`services?populate=*`);
  console.log("Services Page:", treatments);
  return (
    <div>
      <PageHeaderSetter title="Our Treatments" breadcrumbLast="Our Treatments" />

      <SectionBlock>
        <div className="grid grid-cols-12 gap-6 items-center flex-col md:flex-row justify-between">
          <div className="col-span-12 lg:col-span-5">
            <Typography
              title="Advanced Health Treatments"
              headingLevel="h2"
              size="xl"
              color="primary"
              LineHeading={true}
            />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex justify-end">
            <TextDescription text="Explore our range of personalized therapies designed to restore balance, improve wellness, and support your body’s natural healing processes." />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
          {treatments?.map((treatment, index) => {
            const treatmentImage = getMediaUrl(treatment?.Cover);
            return (
              <Card
                className="bg-white border-0 flex-1 flex flex-col overflow-hidden"
                key={treatment?.id}
              >
                <CardHeader className="p-0">
                  <img
                    className="w-full h-full object-cover"
                    src={treatmentImage}
                    alt={treatment?.Title}
                  />
                </CardHeader>
                <CardContent className="p-6 flex flex-col gap-2">
                  <CardTitle className="text-lime-900 text-lg font-bold font-['Roboto_Condensed'] capitalize leading-5">
                    {treatment?.Title}
                  </CardTitle>
                  <div>
                    <ReadMore href={`/services/${treatment?.slug}`} showArrow />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionBlock>
    </div>
  );
}
