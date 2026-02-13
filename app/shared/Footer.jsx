import Link from "next/link";
import Icon from "./icons/icons";
import Image from "next/image";
export default function Footer() {
  const footerData = [
    {
      title: "Advanced Therapies",
      links: [
        { title: "Cell Therapy", href: "/cell-therapy" },
        { title: "Exosomes Therapy", href: "/exosomes-therapy" },
        { title: "Cellular Immunotherapy", href: "/cellular-immunotherapy" },
      ],
    },
    {
      title: "Treatments",
      links: [
        { title: "Autoimmune", href: "/services/autoimmune-diseases" },
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
        { title: "SNHL", href: "/services/sensorineural-hearing-loss-snhl" },
        { title: "Sports Injury", href: "/services/sports-injuries" },
        { title: "Diabetes", href: "/services/diabetes" },
        { title: "Brain Stroke", href: "/services/brain-stroke" },
      ],
    },
    {
      title: "Important Links",
      links: [
        { title: "Patient Care", href: "/patient-care" },
        { title: "International Patients", href: "/international-patients" },
        { title: "About", href: "/about-us" },
        { title: "Contact", href: "/contact-us" },
        // { title: "News & Events", href: "/news-events" },
        { title: "Blogs", href: "/blogs" },
        { title: "Client Stories", href: "/client-stories" },
        { title: "Research & Innovation ", href: "/research-innovation" },
        { title: "Press Coverage", href: "/press-coverage" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms & Conditions", href: "/terms-conditions" },
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
    // { title: "Careers", href: "/careers" },
    // { title: "Sitemap", href: "/sitemap" },
  ];
  return (
    <>
      {/* <ScrollVelocityText
        text="Repair  Regenerate  Rejuvenate"
      /> */}
      <footer className="bg-[#F3F5EC] pt-15 pb-10 rounded-[30px]">
        <div className="container flex flex-col lg:gap-10 gap-5">
          <div className="grid lg:grid-cols-[70%_30%] gap-5">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {footerData.map((col, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    {col?.title && (
                      <div className="text-[#647252] font-normal">
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
                            aria-label={link?.title}
                            className="text-lime-900 hover:text-lime-700 font-medium font-['Roboto']"
                          >
                            {link?.title}
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
                  href="tel:+919001290028"
                  aria-label="Call us to book a virtual consultation"
                  className="p-5 relative bg-white rounded-[10px] flex justify-start items-center gap-5 overflow-hidden group"
                >
                  <span className="text-lime-900 lg:text-xl text-md font-medium font-['Roboto'] leading-8">
                    Book a Virtual Consultation
                  </span>
                  <Icon
                    name="Phone"
                    size={24}
                    className="text-lime-900 ms-auto transform transition-transform duration-300 
                 group-hover:scale-110"
                  />
                </a>
                <a
                  href="https://wa.me/919001290028"
                  className="p-5 relative bg-green-500 rounded-[10px] flex justify-start items-center gap-5 overflow-hidden group"
                  aria-label="Chat with our specialists on WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white lg:text-xl text-md font-medium font-['Roboto'] leading-8">
                    Talk to Our Specialists on WhatsApp
                    <Icon
                      name="whatsapp"
                      size={24}
                      className="w-24 h-24 -right-1 -top-3 absolute text-white/20  transform transition-transform duration-300 
                 group-hover:scale-110"
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
                            aria-label={social?.name}
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
            <Image
              src="/footer-logo.png"
              alt="VieCells logo"
              width={140}
              height={50}
              className="mx-auto"
              loading="lazy"
            />
          </div>
          <div>
            <hr className="border-t border-[#979832]/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-2">
              <div className="text-[#647252] font-normal">
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
              <div className="text-[#647252] font-normal">
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
              <div className="text-[#647252] font-normal">VieCell HQ</div>
              <div className="text-lime-900">
                501, Kalp Business Center, Opp. Lavanya Mall, City Light, Surat
                395007, Gujarat, India
              </div>
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
            <div className="text-center md:text-left"></div>
            <div className="mt-2 md:mt-0 text-center md:text-right flex flex-wrap gap-2 justify-center md:justify-end">
              Technology Partner -
              <Link
                className="hover:text-lime-900 "
                href="https://engrossinfotech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ENGROSS INFOTECH
              </Link>
              {/* <ul className="flex flex-wrap gap-2.5 justify-center md:justify-end list-none p-0 m-0">
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
              </ul> */}
            </div>
          </div>
        </div>
      </footer>
      <Link
        href="https://wa.me/919001290028"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <div className="p-3 right-10 bottom-5 fixed bg-[#25D366] rounded-[100px]  inline-flex flex-col justify-center items-center gap-2 z-10  transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="w-8 h-8 text-white"
          >
            <path
              d="M19.074 4.89389C17.2091 3.02894 14.6689 2 12.0644 2C6.59814 2 2.12869 6.4373 2.12869 11.9035C2.12869 13.672 2.57885 15.3441 3.44702 16.8875L2.03223 22L7.33769 20.6495C8.78464 21.4212 10.4245 21.8714 12.0965 21.8714C17.5306 21.8392 21.9679 17.4019 21.9679 11.9035C21.9679 9.26688 20.939 6.791 19.074 4.89389ZM12.0322 20.1672C10.5853 20.1672 9.07403 19.7492 7.82001 18.9775L7.49846 18.7846L4.37949 19.5884L5.24766 16.5659L5.05473 16.2444C4.25088 14.926 3.80072 13.3826 3.80072 11.8392C3.80072 7.30547 7.46631 3.63987 12.0322 3.63987C14.2187 3.63987 16.2766 4.50804 17.82 6.05145C19.3634 7.59486 20.2316 9.68489 20.2316 11.9035C20.2959 16.5016 16.566 20.1672 12.0322 20.1672ZM16.566 13.9936C16.3088 13.865 15.119 13.254 14.8297 13.2219C14.6046 13.1254 14.4116 13.0932 14.283 13.3505C14.1544 13.6077 13.6399 14.1222 13.5113 14.3151C13.3827 14.4437 13.2541 14.508 12.9647 14.3473C12.7075 14.2187 11.9358 13.9936 10.9711 13.0932C10.2316 12.4502 9.71711 11.6463 9.62065 11.3569C9.49203 11.0997 9.5885 11.0032 9.74927 10.8424C9.87788 10.7138 10.0065 10.5852 10.103 10.3923C10.2316 10.2637 10.2316 10.135 10.3602 9.97428C10.4888 9.84566 10.3924 9.65274 10.328 9.52412C10.2316 9.3955 9.78142 8.17364 9.55634 7.65917C9.36342 7.1447 9.13834 7.24116 9.00972 7.24116C8.8811 7.24116 8.68817 7.24116 8.55956 7.24116C8.43094 7.24116 8.1094 7.27331 7.91647 7.5627C7.69139 7.81994 7.0483 8.43087 7.0483 9.65273C7.0483 10.8746 7.91647 12 8.07724 12.2251C8.20586 12.3537 9.84573 14.8939 12.2895 15.9871C12.8682 16.2444 13.3184 16.4051 13.7043 16.5338C14.283 16.7267 14.8297 16.6624 15.2477 16.6302C15.73 16.5981 16.6946 16.0514 16.9197 15.4405C17.1126 14.8939 17.1126 14.3473 17.0483 14.2508C16.984 14.1865 16.7911 14.09 16.566 13.9936Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </Link>
    </>
  );
}
