import PageHeader from "../shared/PageHeader/PageHeader";
import SectionBlock from "../shared/Section";
import Testimonial from "../shared/Testimonial/Testimonial";
import Blogs from "../shared/Blogs/Blogs";
import SideBarHelp from "../shared/SideBarHelp/SideBarHelp";
import AppointmentForm from "./AppointmentForm";
import { PageHeaderSetter } from "../lib/PageHeaderContext";
export default async function AppointmentBookingPage() {
  return (
    <div>
      <PageHeaderSetter title="Appointment Booking" breadcrumbLast="Appointment Booking" />
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
      <Testimonial />
      <Blogs />
    </div>
  );
}
export async function generateMetadata() {
  return {
    title: "Book an Appointment | VieCell",
    description: "Book your appointment with VieCell's medical experts.",
  };
}
