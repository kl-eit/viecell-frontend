import Link from "next/link";
import Typography, { TextDescription } from "./Typography/Typography";
import SectionBlock from "./Section";
import Button from "./Button/Button";
import Icon from "./icons/icons";
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
        {
          title: "Orthopedic Conditions",
          href: "/services?category=orthopedic-conditions",
        },
        {
          title: "Neuro Disorders",
          href: "/services?category=neuro-disorders",
        },
        { title: "Organ Related", href: "/services?category=organ-related" },
        { title: "Skin Injuries", href: "/services?category=skin-injuries" },
        {
          title: "IV Drip Therapy",
          href: "/services?category=iv-drip-therapy",
        },
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
      quickText:
        "If you have any questions or need help, feel free to contact with our team.",
      address:
        "501, Kalp Business Center, Opp. Lavanya Mall, Nr. Bank of Baroda, City Light Road, City Light, Surat-395007, Gujarat, India",
      social: [
        {
          name: "Facebook",
          href: "https://www.facebook.com/VieCells",
          icon: <Icon name="facebook" size={24} />,
        },
        {
          name: "Twitter",
          href: "https://twitter.com/VieCells",
          icon: <Icon name="twitter" size={24} />,
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/viecellsindia/",
          icon: <Icon name="Instagram" size={24} />,
        },
        {
          name: "linkedin",
          href: "https://www.linkedin.com/company/viecells/",
          icon: <Icon name="Linkedin" size={24} />,
        },
        {
          name: "whatsapp",
          href: "https://wa.me/919001290028",
          icon: <Icon name="whatsapp" size={24} />,
        },
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
              />
              <TextDescription>
                Join hundreds of international patients from the USA who
                discovered affordable, advanced, and ethical stem cell
                treatments in India.
              </TextDescription>

              <div className="inline-flex justify-start items-center gap-2.5">
                <Button icon>Start Journey</Button>
                <Button
                  variant="outline-primary"
                  icon
                  href="/appointment-booking"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%]">
            <img
              className="max-w-[522.59px] self-stretch w-full"
              src="/doctors-banner-img.png"
              alt="doctors-banner"
            />
          </div>
        </div>
      </SectionBlock>
      <footer className="bg-linear-to-l from-white to-gray-50 pt-10 pb-5">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-7">
          {footerData.map((col, index) => (
            <div
              key={index}
              className="flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {col?.title && (
                <div className="self-stretch h-6 text-lime-900 text-lg font-semibold font-['Roboto_Condensed'] leading-6">
                  {col?.title}
                </div>
              )}
              {col?.quickText && (
                <p className="font-light ">{col?.quickText}</p>
              )}
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link?.href}
                      className="text-neutral-700 hover:text-lime-900 transition  text-sm leading-6"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {col?.address && <p className="text-sm">{col?.address}</p>}
              {col?.social && (
                <div className="flex items-center gap-3 mt-2">
                  <ul className="flex flex-wrap gap-4 justify-center md:justify-end list-none p-0 m-0">
                    <li className="font-['Roboto_Condensed'] text-sm text-neutral-700">
                      Follow Us:
                    </li>
                    {col?.social.map((social, i) => (
                      <li key={i}>
                        <Link
                          key={i}
                          href={social?.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-700 hover:text-lime-900 transition"
                        >
                          {social?.icon}
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
                      href={link?.href}
                      className="hover:text-lime-900 transition"
                    >
                      {link?.title}
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
