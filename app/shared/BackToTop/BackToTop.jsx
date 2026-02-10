"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from 'lucide-react';
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top" title="Back to top"
      className={`fixed bottom-22 right-13 z-50 rounded-full bg-black text-white p-0 shadow-lg transition-all duration-300 cursor-pointer inline-flex flex-col justify-center items-center gap-1 w-12 h-12  hover:shadow-lg hover:scale-110
        hover:bg-gray-800
        ${isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp strokeWidth={3}  />
    </button>
  );
}
