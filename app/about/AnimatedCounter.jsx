"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ end, duration = 2000, label }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const animationFrame = requestAnimationFrame(function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Parse the end value (remove + or other characters)
      const endNum = parseInt(end.toString().replace(/\D/g, "")) || 0;
      const currentCount = Math.floor(progress * endNum);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <div ref={ref} className="inline-flex flex-col gap-2.5 w-1/2 md:w-auto">
      <div className="text-center text-lime-900 text-4xl lg:text-7xl font-extrabold font-['Roboto_Condensed']">
        {count}
        {end.toString().includes("+") ? "+" : ""}
        {end.toString().includes("%") ? "%" : ""}
      </div>
      <div className="text-md lg:text-xl">{label}</div>
    </div>
  );
}
