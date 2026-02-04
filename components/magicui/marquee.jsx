import * as React from "react"
import { cn } from "@/lib/utils"

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  vertical = false,
  children,
}) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden gap-4",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex shrink-0 gap-6",
            vertical
              ? "flex-col animate-marquee-vertical"
              : "flex-row animate-marquee",
            reverse && "animate-marquee-reverse",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
