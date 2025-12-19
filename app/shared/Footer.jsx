import Link from "next/link";
import Typography, {  TextDescription } from "./Typography/Typography";
import SectionBlock from "./Section";
import Button from "./Button/Button";

export default function Footer() {
  const footerData = [
    {
      title: "Research & Innovation",
      links: [
        { title: "Ongoing Research Clinical Trials", href: "#" },
        { title: "Scientific Publication", href: "#" },
        { title: "Technology & Methods", href: "#" },
        { title: "International Collaborations", href: "#" },
      ],
    },
    {
      title: "Treatments",
      links: [
        { title: "Eye Disorders", href: "/services?category=eye-disorders" },
        { title: "Infertility", href: "/services?category=Infertility" },
        { title: "Orthopedic Conditions", href: "/services?category=orthopedic-conditions" },
        { title: "Neuro Disorders", href: "/services?category=neuro-disorders" },
        { title: "Organ Related", href: "/services?category=organ-related" },
        { title: "Skin Injuries", href: "/services?category=skin-injuries" },
          { title: "IV Drip Therapy", href: "/services?category=iv-drip-therapy" },
           { title: "Science", href: "/services?category=science" },
      ],
    },
    {
      title: "Media & Blog",
      links: [
        { title: "News & Events", href: "#" },
        { title: "Blog Articles", href: "/blog" },
        { title: "Press Coverage", href: "#" },
        { title: "Health Awareness Videos", href: "#" },
      ],
    },
    {
      title: "Quick Contacts",
      links: [
        { title: "+91 9001290028", href: "tel:+919001290028" },
        { title: "contact@viecells.com", href: "mailto:contact@viecells.com" },
      ],
      quickText:"If you have any questions or need help, feel free to contact with our team.",
      address:"501, Kalp Business Center, Opp. Lavanya Mall, Nr. Bank of Baroda, City Light Road, City Light, Surat-395007, Gujarat, India",
      social: [
        {
          name: "Facebook",
          href: "https://www.facebook.com/VieCells",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
            </svg>
          ),
        },
        {
          name: "Twitter",
          href: "https://twitter.com/VieCells",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723a4.902 4.902 0 0 1-2.229-.616v.062a4.917 4.917 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.924 13.924 0 0 0 7.548 2.212c9.056 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          ),
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/viecellsindia/",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403a4.92 4.92 0 0 1 1.77 1.027 4.92 4.92 0 0 1 1.027 1.77c.163.46.347 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.027 1.77 4.92 4.92 0 0 1-1.77 1.027c-.46.163-1.26.347-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.77-1.027 4.92 4.92 0 0 1-1.027-1.77c-.163-.46-.347-1.26-.403-2.43-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.027-1.77 4.92 4.92 0 0 1 1.77-1.027c.46-.163 1.26-.347 2.43-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.052.072 5.777.13 4.66.343 3.7.698a6.918 6.918 0 0 0-2.5 1.64 6.918 6.918 0 0 0-1.64 2.5C-.343 6.66-.13 7.777-.072 9.052-.013 10.332 0 10.735 0 12c0 1.265.013 1.668.072 2.948.058 1.275.271 2.392.626 3.352a6.918 6.918 0 0 0 1.64 2.5 6.918 6.918 0 0 0 2.5 1.64c.96.355 2.077.568 3.352.626C10.332 23.987 10.735 24 12 24s1.668-.013 2.948-.072c1.275-.058 2.392-.271 3.352-.626a6.918 6.918 0 0 0 2.5-1.64 6.918 6.918 0 0 0 1.64-2.5c.355-.96.568-2.077.626-3.352C23.987 13.668 24 13.265 24 12s-.013-1.668-.072-2.948c-.058-1.275-.271-2.392-.626-3.352a6.918 6.918 0 0 0-1.64-2.5 6.918 6.918 0 0 0-2.5-1.64c-.96-.355-2.077-.568-3.352-.626C13.668.013 13.265 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
              <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
          ),
        },
        // {
        //   name: "linkedin",
        //   href: "https://www.linkedin.com/company/viecells/",
        //   icon: (
        //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403a4.92 4.92 0 0 1 1.77 1.027 4.92 4.92 0 0 1 1.027 1.77c.163.46.347 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.027 1.77 4.92 4.92 0 0 1-1.77 1.027c-.46.163-1.26.347-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.77-1.027 4.92 4.92 0 0 1-1.027-1.77c-.163-.46-.347-1.26-.403-2.43-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.027-1.77 4.92 4.92 0 0 1 1.77-1.027c.46-.163 1.26-.347 2.43-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.052.072 5.777.13 4.66.343 3.7.698a6.918 6.918 0 0 0-2.5 1.64 6.918 6.918 0 0 0-1.64 2.5C-.343 6.66-.13 7.777-.072 9.052-.013 10.332 0 10.735 0 12c0 1.265.013 1.668.072 2.948.058 1.275.271 2.392.626 3.352a6.918 6.918 0 0 0 1.64 2.5 6.918 6.918 0 0 0 2.5 1.64c.96.355 2.077.568 3.352.626C10.332 23.987 10.735 24 12 24s1.668-.013 2.948-.072c1.275-.058 2.392-.271 3.352-.626a6.918 6.918 0 0 0 2.5-1.64 6.918 6.918 0 0 0 1.64-2.5c.355-.96.568-2.077.626-3.352C23.987 13.668 24 13.265 24 12s-.013-1.668-.072-2.948c-.058-1.275-.271-2.392-.626-3.352a6.918 6.918 0 0 0-1.64-2.5 6.918 6.918 0 0 0-2.5-1.64c-.96-.355-2.077-.568-3.352-.626C13.668.013 13.265 0 12 0z" />
        //       <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
        //       <circle cx="18.406" cy="5.594" r="1.44" />
        //     </svg>
        //   ),
        // },
        // {
        //   name: "whatsapp",
        //   href: "https://wa.me/919001290028",
        //   icon: (
        //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403a4.92 4.92 0 0 1 1.77 1.027 4.92 4.92 0 0 1 1.027 1.77c.163.46.347 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.027 1.77 4.92 4.92 0 0 1-1.77 1.027c-.46.163-1.26.347-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.77-1.027 4.92 4.92 0 0 1-1.027-1.77c-.163-.46-.347-1.26-.403-2.43-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.027-1.77 4.92 4.92 0 0 1 1.77-1.027c.46-.163 1.26-.347 2.43-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.052.072 5.777.13 4.66.343 3.7.698a6.918 6.918 0 0 0-2.5 1.64 6.918 6.918 0 0 0-1.64 2.5C-.343 6.66-.13 7.777-.072 9.052-.013 10.332 0 10.735 0 12c0 1.265.013 1.668.072 2.948.058 1.275.271 2.392.626 3.352a6.918 6.918 0 0 0 1.64 2.5 6.918 6.918 0 0 0 2.5 1.64c.96.355 2.077.568 3.352.626C10.332 23.987 10.735 24 12 24s1.668-.013 2.948-.072c1.275-.058 2.392-.271 3.352-.626a6.918 6.918 0 0 0 2.5-1.64 6.918 6.918 0 0 0 1.64-2.5c.355-.96.568-2.077.626-3.352C23.987 13.668 24 13.265 24 12s-.013-1.668-.072-2.948c-.058-1.275-.271-2.392-.626-3.352a6.918 6.918 0 0 0-1.64-2.5 6.918 6.918 0 0 0-2.5-1.64c-.96-.355-2.077-.568-3.352-.626C13.668.013 13.265 0 12 0z" />
        //       <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
        //       <circle cx="18.406" cy="5.594" r="1.44" />
        //     </svg>
        //   ),
        // },
      ],
    },
  ];

  const bottomLinks = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Careers", href: "/careers" },
    { title: "Sitemap", href: "/sitemap" },
  ];

  return (


    <>
     <SectionBlock
            className="bg-[#F7F8EA] bg-[url('/pattern-bg.png')] bg-cover bg-center"
            noSpacing
             data-aos="fade-up"
                    data-aos-delay={100}
          >
            <div className="flex flex-col md:flex-row gap-14">
              <div className="w-full md:w-[50%]">
                <div className="flex-1 py-14 inline-flex flex-col justify-start items-start gap-6">
                  <Typography
                    title=" Transform Your Health Through <br />
                      Regenerative Medicine"
                    headingLevel="h2"
                    size="xl"
                    color="primary"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  />
                  <TextDescription data-aos="fade-up"
                    data-aos-delay={100}>
                    Join hundreds of international patients from the USA who
                    discovered affordable, advanced, and ethical stem cell
                    treatments in India.
                  </TextDescription>
    
                  <div className="inline-flex justify-start items-center gap-2.5" >
                    <Button icon>Start Journey</Button>
    
                    <Button variant="outline-primary" icon>
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[40%]">
                <img
                  className="max-w-[522.59px] self-stretch w-full"
                  src="/doctors-banner-img.png" alt="doctors-banner"
                />
              </div>
            </div>
          </SectionBlock>
          <footer className="bg-linear-to-l from-white to-gray-50 pt-10 pb-5">
      {/* Footer Columns */}
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-7">
        {footerData.map((col, index) => (
          <div key={index} className="flex flex-col gap-4"   data-aos="fade-up"
                data-aos-delay={index * 50}>
            {col.title && (
              <div className="self-stretch h-6 text-lime-900 text-lg font-semibold font-['Roboto_Condensed'] leading-6">
                {col.title}
              </div>
            )}
            {col?.quickText && (
              <p className="font-light ">{col?.quickText}</p>
            )}
            <ul className="space-y-2">
              {col.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-neutral-700 hover:text-lime-900 transition  text-sm leading-6"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            {col.address && (
              <p className="text-sm">{col?.address}</p>
            )}
            {col.social && (
              <div className="flex items-center gap-3 mt-2">
                <ul className="flex flex-wrap gap-4 justify-center md:justify-end list-none p-0 m-0">
                  <li className="font-['Roboto_Condensed'] text-sm text-neutral-700">Follow Us:</li>
                  {col.social.map((social, i) => (
                    <li key={i}>
                      <Link
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-700 hover:text-lime-900 transition"
                      >
                        {social.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="container">
        <div className="mt-6 border-t border-black/10  pt-6 flex flex-col md:flex-row justify-between text-neutral-700 text-sm leading-4">
          <div className="text-center md:text-left">
            VieCell Institute of Regenerative Medicine ©
            {new Date().getFullYear()}. All Rights Reserved.
          </div>
          <div className="mt-2 md:mt-0 text-center md:text-right flex flex-wrap gap-4 justify-center md:justify-end">
            <ul className="flex flex-wrap gap-2.5 justify-center md:justify-end list-none p-0 m-0">
              {bottomLinks.map((link, i) => (
                <li
                  key={i}
                  className={
                    i < bottomLinks.length - 1
                      ? "border-r border-gray-400 pr-4"
                      : ""
                  }
                >
                  <Link
                    href={link.href}
                    className="hover:text-lime-900 transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
    
  );
}
