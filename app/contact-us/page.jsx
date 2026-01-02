import { PageHeaderSetter } from "../lib/PageHeaderContext";
import SectionBlock from "../shared/Section";
import Typography from "../shared/Typography/Typography";
import GetInTouchForm from "./GetInTouchForm";
function page() {
  return (
    <>
      <PageHeaderSetter title="Contact Us" />
      <SectionBlock>
        <div className="grid grid-cols-1 lg:grid-cols-[476px_1fr] gap-7 ">
          <div className="px-10 py-10 bg-lime-50 rounded-[30px] inline-flex flex-col justify-start items-start gap-7 ">
            <Typography
              title=" Quick Contacts"
              headingLevel="h2"
              size="lg"
              color="primary"
              LineHeading
            />
            <div className="text-neutral-500 font-normal font-['Roboto'] leading-6">
              Have any questions or need to schedule an appointment? Reach out
              to us quickly!
            </div>
            <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-5">
              <div className="inline-flex justify-start items-start gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/Location-icon.svg" alt="Location icon" />
                </div>
                <div className="flex-1 justify-start text-neutral-500 font-normal font-['Roboto'] leading-6">
                  VieCell Institute of Regenerative Medicine 501,<br/> Kalp Business
                  Center, Opp. Lavanya Mall, <br/>Nr. Bank of Baroda, City Light
                  Road, City Light,<br/> Surat-395007, Gujarat, India
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/Phone-icon.svg" alt="Phone icon" />
                </div>
                <div className="justify-start text-neutral-500 font-normal font-['Roboto'] leading-6">
                  <a href="tel:+919001290028"> +91 9001290028</a>
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/Email-icon.svg" alt="Email icon" />
                </div>
                <div className="justify-start text-neutral-500 font-normal font-['Roboto'] leading-6">
                  <a href="mailto:contact@vicells.com">contact@vicells.com</a>
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/Access-time-icon.svg" alt="Access time icon" />
                </div>
                <div className="justify-start text-neutral-500 font-normal font-['Roboto'] leading-6">
                  09:30 AM : 06:00 PM
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[30px] overflow-hidden">
            <iframe
              id="map-canvas"
              className="map_part"
              width="100%"
              height="450"
              src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=VieCell Institute of Regenerative Medicine, 501, Kalp Business Center, Opp. Lavanya Mall, Nr. Bank of Baroda, City Light Road, City Light, Surat-395007, Gujarat, India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
         <div className="gap-14 p-5 lg:p-10 bg-[#F7F8EA] rounded-4xl text-center">
          <div className="max-w-[500px] mx-auto">
            <Typography
              title="Get In Touch"
              headingLevel="h2"
              size="lg"
              color="primary"
              align="center"
            />
            <p className="text-neutral-500 text-sm font-normal mt-4 mb-6">
              Please feel welcome to contact our friendly reception staff with
              any general or medical inquiry. Our doctors will receive or return
              any urgent calls.
            </p>
          </div>
          <div>
            <GetInTouchForm />
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
export default page;
