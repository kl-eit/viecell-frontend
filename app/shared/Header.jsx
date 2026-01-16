"use client";
import { usePathname } from "next/navigation";
import Button from "../component/Button/Button";
import RichNavigationMenu from "./NavigationMenuWithDropdown";
import PageHeader from "./PageHeader/PageHeader";
import Link from "next/link";
const HeaderBg = "/Header-bg.png";
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isService = pathname.startsWith("/services/");
  return (
    <div
      className={` ${
        isHome
          ? ""
          : "bg-[linear-gradient(360deg,#F7F9EF_0%,#E6F1CB_100%)] rounded-[30px]"
      }`}
    >
      <div className="relative container mx-auto">
      <header
       className={`px-2 py-4 z-20 w-full ${
    isHome ? "absolute left-0" : "absolute  left-0"
  } ${isService ? "isService absolute!" : "isService not"}`}
      >
        <div className="bg-white/60 rounded-[100px] backdrop-blur-[50px] px-5 py-2.5 ">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
            <Link href="/">
              <img className="w-[150px]" src="/logo.png" />
            </Link>
            </div>

            <RichNavigationMenu />

            <div className="flex items-center gap-3 max-lg:hidden lg:gap-4">
              {/* <span aria-hidden="true" className="h-8 w-px bg-black/10"></span> */}
              <Button variant="primary" size="sm" href="appointment-booking">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </header>

      
      {/* {!isService && <PageHeader />}  */}
    </div>
    </div>
  );
}
