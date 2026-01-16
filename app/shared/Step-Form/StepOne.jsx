"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../component/Button/Button";
import Typography from "../Typography/Typography";
import RadioCard from "../../../components/ui/RadioCard";
import StepHeader from "./StepHeader";
export default function StepOne({ onNext }) {
  const [value, setValue] = useState("non-alcohol");
  const options = [
    {
      id: "alcohol",
      label: "Alcohol-related Liver Damage",
    },
    {
      id: "non-alcohol",
      label: "Non-Alcohol-related Liver Damage",
    },
  ];
console.log(value,'onNext')
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="step-one"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col gap-10"
      >
        <StepHeader
          title="Let’s start by understanding what may be contributing to liver damage in your case."
          step={1}
          totalSteps={3}
        />
        <Typography
          title="1. Which of the following best describes your situation?"
          headingLevel="h2"
          size="lg"
          color="primary"
          subtitle="Choose the option closest to you. You can review or change this later."
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="w-full flex flex-col sm:flex-row gap-6"
        >
          {options.map((option) => (
            <motion.div
              key={option.id}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <RadioCard
                label={option.label}
                checked={value === option.id}
                onChange={() => setValue(option.id)}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <Button onClick={() => onNext(value)}>
            Continue
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
