"use client";

import { motion, useScroll, useVelocity, useTransform } from "framer-motion";
import { cn } from "@/lib/utils"; // shadcn helper

export default function ScrollVelocityText({ text, className }) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const x = useTransform(velocity, [-1500, 1500], [-60, 60], { clamp: false });
  const opacity = useTransform(velocity, [-800, 0, 800], [0.5, 1, 0.5]);

  return (
    <div className="overflow-hidden w-full py-8 lg:py-15">
      <motion.h2
        style={{ x, opacity }}
        className={cn("text-lime-100 text-9xl font-semibold font-['Roboto_Condensed'] uppercase whitespace-nowrap", className)}
      >
        {text}
      </motion.h2>
    </div>
  );
}
