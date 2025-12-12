"use client";
import React, { useEffect, useState } from "react";
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
    fetchAPI("header?populate=*")
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
  const [isOpen, setIsOpen] = useState(true);
  const menuData = useMenuData();
  return (
    <div>
      <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        <span className="sr-only">Open menu</span>
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-50 p-4 overflow-auto md:hidden">
          <button className="mb-4 p-2" onClick={() => setIsOpen(false)}>
            Close ✕
          </button>

          <nav className="space-y-4">
            <div>
              <ul className="flex flex-col gap-3">
                {menuData.map((item,index) => {
                  const hasChildren =
                    Array.isArray(item.children) && item.children.length > 0;
                  console.log(hasChildren);
                  return (
                    <li key={index} className="font-['Roboto_Condensed']">
                      {hasChildren ? (
                        <div className="flex items-center justify-between">
                          <a href={`${item.url}`}>{item.label}</a>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </div>
                      ) : (
                        <Link href={`${item.url}`}>{item.label}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
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
        {menuData?.map((item,i) => {
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
