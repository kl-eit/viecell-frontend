import { PageHeaderSetter } from "../lib/PageHeaderContext";
import SectionBlock from "../shared/Section";
import { fetchAPI, getMediaUrl } from "../lib/api";
import Testimonial from "../shared/Testimonial/Testimonial";
import Blogs from "../shared/Blogs/Blogs";
import Typography, { TextDescription } from "../shared/Typography/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
export default async function TeamListPage() {
  const teamData = await fetchAPI("team-member", "teams.Profile");
  const pageTitle = teamData?.Title || "Our Specialist";
  const { Title, Description, teams=[] } = teamData || {};
  return (
    <div>
      <PageHeaderSetter title={pageTitle} breadcrumbLast="Our Specialist" />
      <SectionBlock>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-7">
            <Typography
              title={teamData?.Title || ''}
              headingLevel="h2"
              size="xl"
              color="primary"
              LineHeading
            />
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-start lg:justify-end">
            <TextDescription text={teamData?.Description} />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
            {teams?.map((team, index) => {
              const imageUrl = getMediaUrl(team?.Profile);
              return (
                <Card
                  key={index}
                  className="bg-white border-0 flex-1 flex flex-col h-[calc(100%-10px)] mb-2.5 overflow-hidden"
                >
                  <CardHeader className="p-0">
                    <img
                      className="w-full h-full object-cover"
                      src={imageUrl}
                      alt={team?.Name}
                    />
                  </CardHeader>
                  <CardContent className="gap-2 grid">
                    <CardTitle className="text-lime-900 text-lg font-bold font-['Roboto_Condensed'] capitalize leading-5">
                      {team?.Name}
                    </CardTitle>
                    <CardDescription className="text-neutral-500 text-base font-normal font-['Roboto'] capitalize leading-6">
                      {team?.designation}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionBlock>
      <Testimonial />
      <Blogs />
    </div>
  );
}

// export async function generateMetadata() {
//   const teamData = await fetchAPI("team-member");
//   return {
//     title: teamData?.Title || "Our Team | VieCell",
//     description:
//       teamData?.Description || "Meet our medical experts at VieCell.",
//   };
// }
