"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { fetchAPI } from "../lib/api";
function useMenuData() {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetchAPI("header")
      .then((data) => {
        if (data?.Navigation?.length) {
          setMenuData(data.Navigation);
        }
      })
      .catch((err) => console.error("Menu API fetch error:", err));
  }, []);
  return menuData;
}

export default function MobileRichNavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  document.body.classList.toggle("overflow-hidden", isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState(0);
  const menuData = useMenuData();
  return (
    <div>
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <>
          <div className="absolute top-full left-0 w-full h-screen bg-white z-50 p-4 overflow-auto md:hidden">
            <nav className="space-y-4">
              <div>
                <ul className="flex flex-col">
                  {menuData.map((item, levelIndex) => {
                    const hasChildren =
                      Array.isArray(item.children) && item.children.length > 0;
                    return (
                      <li
                        key={levelIndex}
                        className="font-['Roboto_Condensed'] text-sm"
                      >
                        {hasChildren ? (
                          <>
                            <div
                              className="flex items-center justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                              onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                              <a href={`${item.url}`}>{item.label}</a>
                              <svg
                                className={`w-4 h-4 transition-transform ${
                                  dropdownOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                            <AnimatePresence>
                              {dropdownOpen && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: "auto" }}
                                  exit={{ height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <ul className=" pt-1  space-y-1 text-sm">
                                    {item?.children?.map((subMenu, index) => {
                                      return (
                                        <li
                                          key={index}
                                          id={index}
                                          className="px-2"
                                        >
                                          <div
                                            className="flex items-center justify-between "
                                            onClick={() =>
                                              setActive(
                                                active === index ? null : index
                                              )
                                            }
                                          >
                                            <Link
                                              href={subMenu?.url}
                                              className="pl-6 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                                            >
                                              {subMenu?.title}
                                            </Link>
                                            <svg
                                              className={`w-4 h-4 transition-transform ${
                                                active === index
                                                  ? "rotate-90"
                                                  : ""
                                              }`}
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m9 5 7 7-7 7"
                                              ></path>
                                            </svg>
                                          </div>
                                          <AnimatePresence>
                                            {active === index &&
                                              subMenu.children?.map(
                                                (childItem, index) => {
                                                  return (
                                                    <motion.div
                                                      key={index}
                                                      initial={{ height: 0 }}
                                                      animate={{
                                                        height: "auto",
                                                      }}
                                                      exit={{ height: 0 }}
                                                      className="overflow-hidden"
                                                    >
                                                      <Link
                                                        href={childItem?.url}
                                                        className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                                                      >
                                                        {childItem?.label}
                                                      </Link>
                                                    </motion.div>
                                                  );
                                                }
                                              )}
                                          </AnimatePresence>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                            href={`${item.url}`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>
          {/* <div
            className="hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900/50 dark:bg-neutral-900/80 h-screen lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          ></div> */}
        </>
      )}

      <div className="hidden lg:block">
        <RichNavigationMenu />
      </div>
    </div>
  );
}

function RichNavigationMenu() {
  const menuData = useMenuData();
  return (
    <NavigationMenu className="z-20  text-lime-900">
      <NavigationMenuList>
        {menuData?.map((item, i) => {
          const hasChildren =
            Array.isArray(item.children) && item.children.length > 0;
          return (
            <NavigationMenuItem key={i}>
              {hasChildren ? (
                <React.Fragment key={item.id}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent className="px-0 py-1">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 p-4 w-5xl bg-white mt-2">
                      {item?.children.map((submenu, index) => (
                        <div key={index}>
                          <h6 className="font-extrabold font-['Roboto_Condensed']">
                            {submenu?.title}
                          </h6>
                          <ul className="mt-2.5 grid gap-1 text-[14px]">
                            {submenu?.children.map((item, index) => (
                              <li key={index}>
                                <Link href={item?.url}>{item?.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </React.Fragment>
              ) : (
                <Link
                  key={item.id}
                  href={`/${item.url}`}
                  className="px-3 font-['Roboto_Condensed']"
                >
                  {item.label}
                </Link>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
