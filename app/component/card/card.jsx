"use client";
import { cn } from "@/lib/utils";
export default function ThemeCard({ item, className, children }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-start gap-8 bg-[#F7F9EF] p-6 rounded-[14] hover:scale-[1.02] transition-transform duration-300 cursor-pointer",
        className
      )}
    >
      {/* {item?.icon && <div>
        <img src={item?.icon} className="h-auto" alt={item?.title} />
      </div>} */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-lime-900 leading-normal">
          {item?.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-normal">
          {item?.desc}
        </p>

        {children}
      </div>
    </div>
  );
}
