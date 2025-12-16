"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  const [hasMounted, setHasMounted] = useState(false);  // Track client-side mount

  useEffect(() => {
    // Initialize AOS only on the client-side (after first render)
    setHasMounted(true);

    AOS.init({
      duration: 1000,
      once: false,  // Allows repeat animations
    });

    // IntersectionObserver to add/remove 'aos-animate' class based on viewport
    const elements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          } else {
            entry.target.classList.remove("aos-animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
      AOS.refresh();  // Optional: Reset AOS state
    };
  }, []);  // Empty dependency array to run only on mount

  if (!hasMounted) {
    return null;  // Prevent rendering AOS animations during SSR
  }

  return <>{children}</>;  // Render children (with AOS) once mounted
}
