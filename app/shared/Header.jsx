"use client";
import { usePathname } from "next/navigation";
import Button from "./Button/Button";
import RichNavigationMenu from "./NavigationMenuWithDropdown";
import PageHeader from "./PageHeader/PageHeader";
import Link from "next/link";
const HeaderBg = "/Header-bg.png";
const canIcon = "/call-Icon.svg";
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div
      className={` ${
        isHome
          ? ""
          : "after:content-[''] after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(270deg,rgba(253,250,246,0.95)_0%,rgba(248,250,240,0.95)_49.77%,rgba(229,240,202,0.95)_100%)] bg-cover bg-center relative z-2"
      }`}
      style={{
        backgroundImage: !isHome ? `url(${HeaderBg})` : 'none',
      }}
    >
      <header
        className={`w-full px-2 py-4 inline-flex flex-col justify-start items-center  z-20 ${
          isHome ? "absolute" : "sticky"
        }`}
      >
        <div className="max-w-[1400px] max-[auto] w-full bg-white/80 rounded-[100px] backdrop-blur-[50px] px-5 py-2.5 ">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
            <Link href="/">
              <img className="w-[150px]" src="/logo.png" />
            </Link>
            </div>

            <RichNavigationMenu />

            <div className="flex items-center gap-3 max-lg:hidden lg:gap-4">
              <div className="rounded-[20px] flex justify-center items-center gap-2.5">
                <img src={canIcon} width="40" height="40" alt="call icon" />
                <div className="inline-flex flex-col justify-center items-start gap-0.5">
                  <div className="justify-start text-lime-900 text-base font-light leading-4">
                    Help Desk
                  </div>
                  <div className="justify-start text-lime-900 font-normal font-['Roboto_Condensed'] leading-6">
                    +91 9001290028
                  </div>
                </div>
              </div>
              <span aria-hidden="true" className="h-8 w-px bg-black/10"></span>
              <Button variant="primary" size="sm" href="appointment-booking">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </header>
      <PageHeader />
    </div>
  );
}
