import SectionBlock from "../Section";
import Typography, { TitleDescription } from "../Typography/Typography";

const steps = [
  {
    number: 1,
    title: "Get a Free Online Consultation",
    description: "Connect with our medical experts from the comfort of your home.",
    lineIcon: "/steps-line_icon.svg",
    lineTop: "top-2",
    lineLeft: "left-[67%]",
  },
  {
    number: 2,
    title: "Medical Report Review",
    description:
      "Securely upload your medical reports and receive an expert review with clear treatment and cost estimates.",
    lineIcon: "/steps-line2_icon.svg",
    lineTop: "top-6",
    lineLeft: "left-[65%]",
  },
  {
    number: 3,
    title: "Travel, Treatment & Ongoing Care",
    description: "Plan your trip with visa and travel support, receive treatment, and continue follow-up care.",
  },
];

export default function WorkProcess() {
  return (
    <SectionBlock className="bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900" rounded>
      <div className="grid gap-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <Typography title="How We Work Process" headingLevel="h2" size="xl" color="primary" />
          <TitleDescription align="center">
            A step-by-step guide to your seamless healthcare journey.
          </TitleDescription>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 flex flex-col items-center gap-6 relative">
              <div className="w-16 h-16 p-8 bg-white rounded-full shadow flex items-center justify-center">
                <div className="text-stone-500 text-3xl font-semibold">{step.number}</div>
              </div>
              <div className="flex flex-col items-center gap-2.5 text-center">
                <div className="text-lime-900 text-2xl font-semibold font-['Roboto_Condensed']">
                  {step.title}
                </div>
                <div className="text-neutral-500 text-base">{step.description}</div>
              </div>
              {step.lineIcon && (
                <img
                  src={step.lineIcon}
                  alt={`steps-line-${step.number}`}
                  className={`absolute ${step.lineTop} ${step.lineLeft} hidden lg:block`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}
