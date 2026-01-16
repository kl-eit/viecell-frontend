import Link from "next/link";
import Typography, { TextDescription } from "./Typography/Typography";
import SectionBlock from "./Section";
import ScrollVelocityText from "./ScrollVelocityText/ScrollVelocityText";
import Button from "../component/Button/Button";
import Icon from "./icons/icons";
export default function Footer() {
  const footerData = [

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
      title: "Deceases",
      links: [
        { title: "Autoimmune", href: "#" },
        { title: "Infertility", href: "#" },
        { title: "Knee OA", href: "#" },
        { title: "Liver Cirrhosis", href: "#" },
        { title: <>Optical Atrophy & Retinal<br /> Degenerative Disease</>, href: "#" },
        { title: "SNHL", href: "#" },
        { title: "Sports Injury", href: "#" },
        { title: "Type 1 Diabetes", href: "#" },

      ],
    },
    {
      title: "Important Links",
      links: [
        { title: "Patient Care", href: "/patient-care" },
        { title: "International Patients", href: "/international-patients" },
        { title: "Client Stories", href: "#" },
        { title: "About", href: "/about" },
        { title: "News & Events", href: "#" },
        { title: "Blogs", href: "/blog" },
        { title: "Press Coverage", href: "#" },
        { title: "Contact", href: "/contact-us" },
      ],
    },
  ];
  const socilaMedia = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/VieCells",
      icon: <Icon name="facebook" size={26} color="#38531C" />,
    },
    {
      name: "whatsapp",
      href: "https://wa.me/919001290028",
      icon: <Icon name="whatsapp" size={26} color="#38531C" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/viecellsindia/",
      icon: <Icon name="Instagram" size={26} color="#38531C" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/VieCells",
      icon: <Icon name="twitter" size={26} color="#38531C" />,
    },

    {
      name: "linkedin",
      href: "https://www.linkedin.com/company/viecells/",
      icon: <Icon name="Linkedin" size={26} color="#38531C" />,
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
      {/* <SectionBlock
        className="bg-[linear-gradient(270deg,#F3F5EC_0%,#FFFFFF_49.77%,#F3F5EC_100%)] text-lime-900"
        noSpacing
        rounded
      >
        <div className="flex flex-col gap-20 mx-auto">
          <div className="max-w-6xl">
            <div className="flex-1 py-14 inline-flex flex-col justify-center items-center gap-10">
              <h3 className=" text-2xl font-medium leading-normal">
                Take the first step toward Liver Regeneration
              </h3>
              <div className="text-5xl text-center">
                Understanding your condition is the first step.
                <br /> Viecell helps you explore personalized regenerative
                solutions based on your medical profile.
              </div>
              <div className="gap-2.5 grid grid-cols-1 md:grid-cols-2">
                <Button className="justify-center">Book Consultation</Button>
                <Button
                  variant="outline-primary"
                  href="/appointment-booking"
                  className="justify-center"
                >
                  Talk to a Regenerative Specialist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionBlock> */}
  {/* <ScrollVelocityText
        text="Repair  Regenerate  Rejuvenate"
      /> */}
      <div className="clear">&nbsp;</div>
      <footer className="bg-[#F3F5EC] pt-15 pb-10 rounded-[30px]">
        <div className="container flex flex-col lg:gap-10 gap-5">
          <div className="grid lg:grid-cols-[70%_30%] gap-5">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {footerData.map((col, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    {col?.title && (
                      <div className="text-stone-500 font-normal">
                        {col?.title}
                      </div>
                    )}
                    {col?.quickText && (
                      <p className="font-light ">{col?.quickText}</p>
                    )}
                    <ul className="space-y-2">
                      {col?.links?.map((link, i) => (
                        <li key={i}>
                          <Link
                            href={link?.href}
                            className="text-lime-900 hover:text-stone-500 font-medium font-['Roboto']"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <a href="tel:+91 9001290028" className="p-5 relative bg-white rounded-[10px] flex justify-start items-center gap-5 overflow-hidden">
                  <span className="text-lime-900 lg:text-xl text-md font-medium font-['Roboto'] leading-8">
                    Book a Virtual Consultation
                  </span>
                  <Icon
                    name="Phone"
                    size={24}
                    className="text-lime-900 ms-auto"
                  />
                </a>
                <a href="https://wa.me/9001290028" className="p-5 relative bg-green-500 rounded-[10px] flex justify-start items-center gap-5 overflow-hidden">
                  <span className="text-white lg:text-xl text-md font-medium font-['Roboto'] leading-8">
                    Talk to Our Specialists on WhatsApp
                    <Icon
                      name="whatsapp"
                      size={24}
                      className="w-24 h-24 -right-1 -top-3 absolute text-white/20"
                    />
                  </span>
                </a>
                {socilaMedia && (
                  <div className="flex items-center gap-3 mt-2">
                    <ul className="flex flex-wrap gap-4 justify-center md:justify-end list-none p-0 m-0">
                      {socilaMedia.map((social, i) => (
                        <li key={i}>
                          <Link
                            key={i}
                            href={social?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-lime-900 transition"
                          >
                            {social?.icon}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <hr className="border-t border-[#979832]/30" />
          </div>
          <div className="text-center flex flex-col ">
            <img className="mx-auto max-w-[140px]" src="/footer-logo.png" alt="logo" />
          </div>
          <div>
            <hr className="border-t border-[#979832]/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-2">
              <div className="text-stone-500 font-normal">
                Call us for instant assistance
              </div>
              <a
                href="tel:+91 90012 90028"
                className="text-lime-900 lg:text-4xl text-2xl font-normal font-['Roboto_Condensed'] leading-none"
              >
                +91 90012 90028
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-stone-500 font-normal">
                Reach out us via mail
              </div>
              <a
                className="text-lime-900 lg:text-4xl text-2xl font-normal font-['Roboto_Condensed'] leading-none"
                href="mailto:contact@viecells.com"
              >
                contact@viecells.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-stone-500 font-normal">VieCell HQ</div>
              501, Kalp Business Center, Opp. Lavanya Mall, City Light, Surat
              395007, Gujarat, India
            </div>
          </div>
          <div>
            <hr className="border-t border-[#979832]/30" />
          </div>
          <div className="flex flex-col md:flex-row justify-between text-lime-900/60 text-sm font-normal ">
            <div className="text-center md:text-left">
              VieCell Institute of Regenerative Medicine ©
              {new Date().getFullYear()}. All Rights Reserved.
            </div>
            <div className="mt-2 md:mt-0 text-center md:text-right flex flex-wrap gap-4 justify-center md:justify-end">
              <ul className="flex flex-wrap gap-2.5 justify-center md:justify-end list-none p-0 m-0">
                {bottomLinks.map((link, i) => (
                  <li key={i}>
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
