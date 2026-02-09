import SectionBlock from "../shared/Section";
import SideBarHelp from "../shared/SideBarHelp/SideBarHelp";
import AppointmentForm from "./AppointmentForm";
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
export default async function AppointmentBookingPage() {
  return (
    <div>
     
      <HeroSection
        title="Appointment Booking"
        description="Book an appointment to discuss your condition, review your medical reports, and understand available treatment options. Our team will guide you through the process and help you take the next step with clarity and confidence."
        // imageSrc={pageData?.hero?.imageSrc}
        // reverse={pageData?.hero?.reverse}
      />
      <SectionBlock>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="p-6 lg:p-8 bg-[#F7F8EA] rounded-2xl mb-3 grid gap-5 text-lime-900 font-['Roboto_Condensed'] text-center">
            <div>
              <h2 className="text-3xl font-bold text-center text-lime-900 mb-2">
                Patient Information
              </h2>
              <p className="text-center text-gray-600 mb-2">
                Please fill out the details below to book your appointment.
              </p>
            </div>
            <div>
              <AppointmentForm />
            </div>
          </div>
          <div>
            <SideBarHelp className="min-h-full content-center" />
          </div>
        </div>
      </SectionBlock>
      <CTASection CTAdata />
    </div>
  );
}
