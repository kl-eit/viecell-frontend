import Button from "../../component/Button/Button";
import Link from "next/link";
export default function SideBarHelp({className}) {
  return (
    <div className={`p-6 lg:p-8 bg-[#EEEEDD] rounded-2xl mb-3 grid gap-5 text-lime-900 font-['Roboto_Condensed'] text-center ${className}`}>
      <div className="w-24 h-24 relative overflow-hidden text-center mx-auto">
        <img
          src="/support-agent.svg"
          alt="Helping Hand"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-start items-center gap-2.5">
        <div className="justify-start text-2xl font-semibold leading-7">
          Do You Need Any Help?
        </div>
        <div className="font-light leading-5">
          Our friendly support team is here to assist you
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-start items-center gap-2.5">
          <div className="text-2xl font-semibold leading-7">Call us at</div>
          <Link href="tel:+91 9001290028">+91 9001290028</Link>
        </div>
      </div>
      <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-lime-900/10"></div>
      <div>
        <div className="flex flex-col justify-start items-center gap-2.5">
          <div className="text-2xl font-semibold leading-7">Or email</div>
          <Link href="mailto:contact@vicells.com">contact@vicells.com</Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2.5">
        <Link href="/contact-us">
          <Button icon size="sm">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
}
