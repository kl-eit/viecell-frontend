import Button from "../Button/Button";
import SectionBlock from "../../shared/Section";
export default function CTASection({ CTAdata, pageTitle }) {
  const fallback = [
    {
      label: "Take the first step",
      titleSmall: "Take the First Step Toward Personalized Care",
      titleBig:
        "Your journey starts with understanding. <br/>Viecells provides expert guidance and personalized regenerative care.",
      buttons: [
        {
          text: "Book Appointment",
          variant: "primary",
          href: "appointment-booking",
        },
        {
          text: "Talk to a Regenerative Specialist",
          variant: "outline-primary",
          href: "https://wa.me/919001290028",
        },
      ],
    },
  ];
  const data = Array.isArray(CTAdata) && CTAdata?.length ? CTAdata : fallback;
  const section = data[0];
  return (
    <SectionBlock
      className="bg-[linear-gradient(270deg,#F3F5EC_0%,#FFFFFF_49.77%,#F3F5EC_100%)] text-lime-900"
      noSpacing
      rounded
    >
      <div className="flex flex-col gap-20 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex-1 py-14 inline-flex flex-col justify-center items-center gap-4">
            <h3 className=" lg:text-lg text-md font-medium leading-normal">
              {pageTitle
                ? `Take the first step toward ${pageTitle}`
                : section?.titleSmall}
            </h3>
            <div
              className="lg:text-3xl text-xl text-center"
              dangerouslySetInnerHTML={{ __html: section?.titleBig || "" }}
            />
            <div className="gap-2.5 grid grid-cols-1 md:grid-cols-2">
              {section?.buttons.map((btn, bi) => (
                <Button
                  key={bi}
                  variant={btn?.variant}
                  href={btn?.href}
                  className="justify-center"
                >
                  {btn?.text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
