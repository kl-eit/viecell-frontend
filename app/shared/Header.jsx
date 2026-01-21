import Button from "../component/Button/Button";
import RichNavigationMenu from "./NavigationMenuWithDropdown";
import Link from "next/link";
import { fetchAPI } from "../lib/api";
import MobileRichNavigationMenu from "./NavigationMenuWithDropdown";
export default async function Header() {
  const data = await fetchAPI("header");
  const menuData = data?.Navigation || [];
  return (
    <div>
      <div className="relative container mx-auto">
        <header className={`px-2 py-4 z-20 w-full absolute left-0`}>
          <div className="bg-white/60 rounded-[100px] backdrop-blur-[50px] px-5 py-2.5 ">
            <div className="flex items-center justify-between">
              <div className="shrink-0">
                <Link href="/">
                  <img className="w-[150px]" src="/logo.png" />
                </Link>
              </div>

              <MobileRichNavigationMenu menuData={menuData} />
              <div className="flex items-center gap-3 max-lg:hidden lg:gap-4">
                {/* <span aria-hidden="true" className="h-8 w-px bg-black/10"></span> */}
                <Button variant="primary" size="sm" href="appointment-booking">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
