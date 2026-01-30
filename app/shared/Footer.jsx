import Link from "next/link";
import Icon from "./icons/icons";
export default function Footer() {
  const footerData = [
    {
      title: "Treatments",
      links: [
        { title: "Autoimmune", href: "services/autoimmune-diseases" },
        { title: "Infertility", href: "/services/infertility" },
        {
          title: "Knee OA",
          href: "/services/knee-osteoarthritis-care-without-surgery",
        },
        { title: "Liver Cirrhosis", href: "/services/liver-cirrhosis" },
        {
          title: (
            <>
              Optical Atrophy & Retinal
              <br /> Degenerative
            </>
          ),
          href: "/services/optic-atrophy",
        },
        { title: "SNHL", href: "services/sensorineural-hearing-loss-snhl" },
        { title: "Sports Injury", href: "/services/sports-injuries" },
        { title: "Diabetes", href: "services/diabetes" },
        { title: "Brain Stroke", href: "/services/brain-stroke" },
      ],
    },
    {
      title: "Important Links",
      links: [
        { title: "Patient Care", href: "/patient-care" },
        { title: "International Patients", href: "/international-patients" },
        { title: "Client Stories", href: "/client-stories" },
        { title: "About", href: "/about" },
        { title: "News & Events", href: "#" },
        { title: "Blogs", href: "/blogs" },
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
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
                <a
                  href="tel:+91 9001290028"
                  className="p-5 relative bg-white rounded-[10px] flex justify-start items-center gap-5 overflow-hidden"
                >
                  <span className="text-lime-900 lg:text-xl text-md font-medium font-['Roboto'] leading-8">
                    Book a Virtual Consultation
                  </span>
                  <Icon
                    name="Phone"
                    size={24}
                    className="text-lime-900 ms-auto"
                  />
                </a>
                <a
                  href="https://wa.me/9001290028"
                  className="p-5 relative bg-green-500 rounded-[10px] flex justify-start items-center gap-5 overflow-hidden"
                >
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
            <img
              className="mx-auto max-w-[140px]"
              src="/footer-logo.png"
              alt="logo"
            />
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
      <Link
        href="https://wa.me/9001290028"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-4 right-10 bottom-5 fixed bg-white/60 hover:bg-white rounded-[100px]  outline-offset-[-0.50px] outline-white/80 inline-flex flex-col justify-center items-center gap-2.5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
          >
            <path
              d="M7.33508 11.3359H7.34842M13.3351 11.3359H13.3484M19.3351 11.3359H19.3484M6.66842 21.3359V24.4499C6.66842 25.1604 6.66842 25.5156 6.81405 25.6981C6.94071 25.8568 7.13278 25.9491 7.3358 25.9489C7.56925 25.9486 7.84664 25.7267 8.40143 25.2829L11.582 22.7384C12.2318 22.2186 12.5566 21.9587 12.9184 21.7739C13.2393 21.6099 13.581 21.4901 13.934 21.4176C14.332 21.3359 14.748 21.3359 15.5801 21.3359H18.9351C21.1753 21.3359 22.2954 21.3359 23.151 20.9C23.9037 20.5165 24.5156 19.9045 24.8991 19.1519C25.3351 18.2963 25.3351 17.1761 25.3351 14.9359V7.73594C25.3351 5.49573 25.3351 4.37562 24.8991 3.51998C24.5156 2.76733 23.9037 2.1554 23.151 1.77191C22.2954 1.33594 21.1753 1.33594 18.9351 1.33594H7.73508C5.49487 1.33594 4.37477 1.33594 3.51912 1.77191C2.76647 2.1554 2.15455 2.76733 1.77106 3.51998C1.33508 4.37562 1.33508 5.49573 1.33508 7.73594V16.0026C1.33508 17.2426 1.33508 17.8625 1.47138 18.3712C1.84125 19.7516 2.91944 20.8298 4.29981 21.1996C4.80847 21.3359 5.42845 21.3359 6.66842 21.3359ZM8.00175 11.3359C8.00175 11.7041 7.70327 12.0026 7.33508 12.0026C6.96689 12.0026 6.66842 11.7041 6.66842 11.3359C6.66842 10.9677 6.96689 10.6693 7.33508 10.6693C7.70327 10.6693 8.00175 10.9677 8.00175 11.3359ZM14.0018 11.3359C14.0018 11.7041 13.7033 12.0026 13.3351 12.0026C12.9669 12.0026 12.6684 11.7041 12.6684 11.3359C12.6684 10.9677 12.9669 10.6693 13.3351 10.6693C13.7033 10.6693 14.0018 10.9677 14.0018 11.3359ZM20.0018 11.3359C20.0018 11.7041 19.7033 12.0026 19.3351 12.0026C18.9669 12.0026 18.6684 11.7041 18.6684 11.3359C18.6684 10.9677 18.9669 10.6693 19.3351 10.6693C19.7033 10.6693 20.0018 10.9677 20.0018 11.3359Z"
              stroke="#2D4213"
              strokeWidth="2.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    </>
  );
}
