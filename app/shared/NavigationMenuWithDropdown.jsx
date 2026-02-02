"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
export default function MobileRichNavigationMenu({ menuData }) {
  const [isOpen, setIsOpen] = useState(false);
  document.body.classList.toggle("overflow-hidden", isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState(0);
  const closeMenu = () => {
  setIsOpen(false);
  setDropdownOpen(false);
  setActive(null);
};
  if (!menuData?.length) return null;
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
        <div className="absolute top-full left-0 w-full  bg-white rounded-[30px] backdrop-blur-[50px] z-50 p-4 overflow-auto md:hidden ">
          <nav className="space-y-4">
            <ul className="flex flex-col text-lime-900 space-y-2">
              {menuData.map((item, levelIndex) => {
                const hasChildren =
                  Array.isArray(item?.children) && item?.children.length > 0;

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
                          <a href={`${item?.url}`}  onClick={closeMenu}>{item?.label} </a>
                          <svg
                            className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
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
                              <ul className="pt-1 space-y-1 text-sm">
                                {item.children?.map((subMenu, index) => (
                                  <li key={index} className="px-2">
                                    <div
                                      className="flex items-center justify-between"
                                      onClick={() =>
                                        setActive(
                                          active === index ? null : index,
                                        )
                                      }
                                    >
                                      <Link
                                        href={subMenu?.url}
                                        className="pl-2 flex items-center px-2 py-1.5 rounded-base  group" onClick={closeMenu}
                                      >
                                        {subMenu?.title} 
                                      </Link>
                                    </div>

                                    <AnimatePresence>
                                      {active === index &&
                                        subMenu.children?.map(
                                          (childItem, idx) => (
                                            <motion.div
                                              key={idx}
                                              initial={{ height: 0 }}
                                              animate={{ height: "auto" }}
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
                                          ),
                                        )}
                                    </AnimatePresence>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                        href={`${item?.url}`}  onClick={closeMenu}
                      >
                        {item?.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
      <div className="hidden lg:block">
        <RichNavigationMenu menuData={menuData} />
      </div>
    </div>
  );
}
function RichNavigationMenu({ menuData }) {
  if (!menuData?.length) return null;
  return (
    <NavigationMenu className="z-20 text-lime-900">
      <NavigationMenuList>
        {menuData.map((item, i) => {
          const hasChildren =
            Array.isArray(item?.children) && item?.children?.length > 0;
          const isSecondLast = i === menuData.length - 2;
          return (
            <React.Fragment key={i}>
              {isSecondLast && (
                <li className="hidden lg:flex items-center">
                  <span className="h-6 w-px bg-[#979832]/50" />
                </li>
              )}
              <NavigationMenuItem>
                {hasChildren ? (
                  <>
                    <NavigationMenuTrigger className="font-medium relative">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="py-2 sm:px-2">
                      <div className="flex flex-col w-full">
                        {item.children.map((submenu, index) => (
                          <a
                            key={index}
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm  hover:bg-[#F3F5EC] focus:outline-hidden focus:bg-gray-100"
                            href={submenu?.url}
                          >
                            {submenu?.title}
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    key={item?.id}
                    href={`/${item?.url}`}
                    className="px-2 font-medium text-sm"
                  >
                    {item?.label}
                  </Link>
                )}
              </NavigationMenuItem>
            </React.Fragment>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
