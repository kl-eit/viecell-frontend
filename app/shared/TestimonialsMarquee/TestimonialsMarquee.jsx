import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Typography, { TextDescription } from "../Typography/Typography";
import { fetchAPI } from "@/app/lib/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
export default async function TestimonialsMarquee() {
  const reviews = await fetchAPI("testimonials");

  const diagnosisTexts = [
    "Diagnosed with {condition}, now feeling more supported with Viecell",
    "After a {condition} diagnosis, finding confidence with Viecell",
    "Diagnosed with {condition}, now feeling more in control with Viecell",
  ];

  const selectedText =
    diagnosisTexts[Math.floor(Math.random() * diagnosisTexts.length)];

  const ReviewCard = ({ Name, Designation, Message }) => {
    return (
      <figure
        className={cn(
          "relative h-full max-w-[400px] cursor-pointer overflow-hidden  rounded-[20px] border p-4",
          "border-gray-950/[.1]",
          "bg-white rounded-[20px flex flex-col gap-10 text-center items-center",
        )}
      >
        <blockquote className="mt-2  italic leading-7">
          <BlocksRenderer content={Message} />
        </blockquote>
        <div className="flex items-center gap-2 mt-auto">
          <div className="flex flex-col">
            <figcaption className="font-medium uppercase">{Name}</figcaption>
            <p className="text-sm">
              {selectedText.replace(
                "{condition}",
                Designation.replace("Ortho", "OA"),
              )}
            </p>
          </div>
        </div>
      </figure>
    );
  };
  return (
    <div className="bg-[linear-gradient(180deg,#E5F0CA_0%,#F7F9EF_100%)] py-[2rem] lg:py-[3.75rem] text-lime-900 text-center rounded-[30px] flex flex-col gap-6">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-3">
          <Typography
            title="Inspiring Stories"
            headingLevel="h2"
            size="xl"
            color="primary"
          />
          <div className="max-w-[600px] text-center">
            <p className="ont-normal  text-center font-['Roboto'] leading-7">
              Join hundreds of international patients who have discovered
              affordable, advanced, and ethical stem cell treatments in India.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col overflow-hidden">
        <Marquee pauseOnHover className="[--duration:200s]">
          {reviews.map((review) => (
            <ReviewCard key={review?.Name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-[#F7F9EF] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-[#F7F9EF] to-transparent z-10" />
      </div>
    </div>
  );
}
