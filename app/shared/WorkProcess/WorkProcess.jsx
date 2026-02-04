import SectionBlock from "../Section";
import Typography, { TitleDescription } from "../Typography/Typography";

export default function WorkProcess() {
  return (
    <SectionBlock>
      <div className="grid gap-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <Typography
            title="How We Work Process"
            headingLevel="h2"
            size="xl"
            color="primary"
          />
          <TitleDescription align="center">
            A step-by-step guide to your seamless healthcare journey.
          </TitleDescription>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-10 ">
          <div className="flex-1  inline-flex flex-col justify-start items-center gap-6 relative">
            <div className="w-16 h-16 p-10 bg-white rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center">
              <div className="text-center justify-start text-stone-500 text-3xl font-semibold  leading-7">
                1
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
              <div className="text-center justify-start text-lime-900 text-2xl font-semibold font-['Roboto_Condensed'] leading-7">
                Get a Free Online Consultation
              </div>
              <div className="self-stretch text-center justify-start text-neutral-500 text-base font-normal  leading-6">
                Connect with our medical experts from the comfort of your home.
              </div>
            </div>
            <img
              src="/steps-line_icon.svg"
              className="absolute top-2 left-[calc(67%)] max-w-full hidden lg:block"
            />
          </div>
          <div className="flex-1  inline-flex flex-col justify-start items-center gap-6 relative">
            <div className="w-16 h-16 p-10 bg-white rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center">
              <div className="text-center justify-start text-stone-500 text-3xl font-semibold  leading-7">
                2
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch text-center justify-start text-lime-900 text-2xl font-semibold font-['Roboto_Condensed'] leading-6">
              Medical Report Review
              </div>
              <div className="self-stretch text-center justify-start text-neutral-500 text-base font-normal  leading-6">
               Securely upload your medical reports and receive an expert review with clear treatment and cost estimates.
              </div>
            </div>
            <img
              src="/steps-line2_icon.svg"
              className="absolute top-6 left-[calc(65%)] max-w-full hidden lg:block"
            />
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
            <div className="w-16 h-16 p-10 bg-white rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center">
              <div className="text-center justify-start text-stone-500 text-3xl font-semibold leading-7">
                3
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch text-center justify-start text-lime-900 text-2xl font-semibold font-['Roboto_Condensed'] leading-6">
                Travel, Treatment & Ongoing Care
              </div>
              <div className="self-stretch text-center justify-start text-neutral-500 text-base font-normal  leading-6">
                Plan your trip with visa and travel support, receive treatment,
                and continue follow-up care.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
