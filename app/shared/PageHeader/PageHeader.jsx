"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePageHeader } from "../../lib/PageHeaderContext";
export default function PageHeader({ title = null, breadcrumbLast = null }) {
  const pathname = usePathname();
  const { headerData } = usePageHeader();
  if (pathname === "/") {
    return null;
  }
  const finalTitle = title || headerData.title;
  const finalBreadcrumb = breadcrumbLast || headerData.breadcrumbLast;
  const isHomePage = pathname === "/";
  const segments = pathname.split("/").filter(Boolean);
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const lastBreadcrumb =
    finalBreadcrumb ||
    (segments.length
      ? capitalize(segments[segments.length - 1].replace(/-/g, " "))
      : "Home");

  return (
    <div className="p-7 grid gap-5  lg:flex lg:justify-center lg:items-center lg:gap-72 text-center relative z-2">
      <div className="container">
        <h1 className="text-[1.75rem] lg:text-[2.625rem] leading-none text-lime-900 font-['Roboto_Condensed'] font-semibold mb-4">
          {finalTitle}
        </h1>

        {!isHomePage && (
          <nav className="px-6 py-1.5 bg-lime-900 rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5 text-white" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-1 rtl:space-x-reverse ">
              <li>
                <Link href="/">Home</Link>
              </li>

              {segments.map((segment, index) => {
                const path = "/" + segments.slice(0, index + 1).join("/");
                const name = capitalize(segment.replace(/-/g, " "));
                const isLast = index === segments.length - 1;

                return (
                  <li key={index} className="flex items-center">
                    <span className="mx-2">/</span>
                    {isLast ? (
                      <span aria-current="page">
                        {lastBreadcrumb}
                      </span>
                    ) : (
                      <Link href={path}>{name}</Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
}
