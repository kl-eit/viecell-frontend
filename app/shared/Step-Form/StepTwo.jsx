"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RadioCard from "../../../components/ui/RadioCard";
import Button from "../../component/Button/Button";
import Typography from "../Typography/Typography";
import StepHeader from "./StepHeader";
import StepBreadcrumb from "./StepBreadcrumb";
export default function StepTwo({ damageType, onNext, onPrev }) {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");

  const optionsMap = {
    "non-alcohol": [
      "Lifestyle / Metabolic Conditions",
      "Chronic Viral Hepatitis",
      "Autoimmune Conditions",
      "Genetic / Inherited Conditions",
      "Medication or Toxin Exposure",
    ],
    alcohol: [
      "Chronic Alcohol Abuse (Ethanol Toxicity)",
    ],
  };

  const options = optionsMap[damageType] || optionsMap["non-alcohol"];

  const breadcrumbText = damageType === "alcohol" ? "1. Alcohol-related Liver Damage" : "1. Non-Alcoholic Liver Damage";

  const handleContinue = () => {
    if (!selected) {
      setError("Please select one option to continue.");
      return;
    }
    setError("");
    onNext(selected);
  };
console.log(selected,'selected')
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="step-two"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full  flex flex-col gap-10"
      >
        <StepHeader
          title="Let’s start by understanding what may be contributing to liver damage in your case."
          step={2}
          totalSteps={3}
        />
        <div className="flex flex-col gap-4">
          <StepBreadcrumb items={[breadcrumbText]} />
          <Typography
            title="2. Which type of condition may apply to you?"
            headingLevel="h3"
            size="lg"
            color="primary"
            subtitle="Choose the option closest to you. You can review or change this later."
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {options.map((option) => (
            <motion.div
              key={option}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <RadioCard
                label={option}
                checked={selected === option}
                onChange={() => {
                  setSelected(option);
                  setError("");
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-sm text-red-600"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex gap-6"
        >
          <Button onClick={onPrev} variant="outline-primary">
            Previous
          </Button>

          <Button
            onClick={handleContinue}
            className={!selected ? "cursor-not-allowed opacity-50" : ""}
          >
            Continue
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
