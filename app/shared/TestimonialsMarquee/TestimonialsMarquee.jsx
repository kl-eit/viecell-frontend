import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
export default function TestimonialsMarquee({ stories }) {
  const reviews = stories || [];
  const col1 = reviews.filter((_, i) => i % 3 === 0);
  const col2 = reviews.filter((_, i) => i % 3 === 1);
  const col3 = reviews.filter((_, i) => i % 3 === 2);
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
          "relative  cursor-pointer overflow-hidden  rounded-[20px] border p-4",
          "border-gray-950/[.1]",
          "bg-white rounded-[20px flex flex-col gap-10 text-left items-center",
        )}
      >
        <blockquote className="mt-2  leading-7">
          <BlocksRenderer content={Message} />
        </blockquote>
        <div className="flex items-center gap-2 mt-auto w-full justify-end">
          <figcaption className="font-medium uppercase">- {Name}</figcaption>
          {/* <p className="text-sm">
              {selectedText.replace(
                "{condition}",
                Designation.replace("Ortho", "OA"),
              )}
            </p> */}
        </div>
      </figure>
    );
  };
  return (
    <div className=" py-[2rem] lg:py-[3.75rem] text-lime-900 text-center rounded-[30px] flex flex-col gap-6">
      <div className="container">
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden mt-8 max-h-[800px]">
          <Marquee pauseOnHover className="[--duration:100s]">
            {col1.map((review) => (
              <ReviewCard key={review?.Name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:100s]">
            {col2.map((review) => (
              <ReviewCard key={review.Name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:150s]">
            {col3.map((review) => (
              <ReviewCard key={review.Name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-white to-transparent z-10" />

          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white to-transparent z-10" />
        </div>
      </div>
    </div>
  );
}
