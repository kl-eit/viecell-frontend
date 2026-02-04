"use client";
import { motion } from "framer-motion";
export default function ScrollVelocityText({
  text = "Repair  Regenerate  Rejuvenate",
  speed = 15,
}) {
  return (
    <div className="w-full overflow-hidden py-8  flex justify-center">
      <motion.div
        className="flex w-max whitespace-nowrap text-lime-100 text-6xl font-semibold font-['Roboto_Condensed'] uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear"
        }}
      >
        <span className="px-6">{text}</span>
        <span className="px-6">{text}</span>
        <span className="px-6">{text}</span>
        <span className="px-6">{text}</span>
      </motion.div>
      {/* <marquee
        behavior="scroll"
        direction="left"
        scrollamount="10"
        loop="infinite"
        className=" whitespace-nowrap text-lime-100 text-9xl font-semibold font-['Roboto_Condensed'] uppercase"
      >
       <span>{text}</span><span>{text}</span><span>{text}</span>  <span>{text}</span><span>{text}</span><span>{text}</span>
      </marquee> */}
    </div>
  );
}
