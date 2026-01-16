"use client";
import SectionBlock from "../Section";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFourResult from "./StepFourResult";
export default function StepForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const nextStep = (data) => {
    setAnswers((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };
  const fadeVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <SectionBlock
      className="bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)] text-lime-900 text-left"
      rounded
    >
      <div className="text-md font-medium">
        Identify Possible Liver Cirrhosis Symptoms
      </div>
      <div className="lg:text-4xl text-xl font-['Roboto_Condensed'] max-w-5xl">
        Answer a few simple questions to identify possible liver cirrhosis
        symptoms based on your condition.
      </div>
      <div className="lg:p-14 p-7 bg-white rounded-2xl border border-[#979832]/20 flex flex-col justify-start items-start lg:gap-12 gap-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {step === 1 && (
              <StepOne onNext={(value) => nextStep({ damageType: value })} />
            )}
            {step === 2 && (
              <StepTwo
                damageType={answers.damageType}
                onNext={(value) => nextStep({ conditionType: value })}
                onPrev={prevStep}
              />
            )}
            {step === 3 && (
              <StepThree
                selectedCondition={answers.conditionType}
                onPrev={() => setStep(2)}
                onNext={(value) => {
                  setAnswers((prev) => ({
                    ...prev,
                    conditionSubtype: value,
                  }));
                  setStep(4);
                }}
                onReset={() => {
                  setAnswers({});
                  setStep(1);
                }}
              />
            )}

            {step === 4 && (
              <StepFourResult
                selectedCondition={answers.conditionType}
                selectedSubtype={answers.conditionSubtype}
                onPrev={() => setStep(3)}
                onReset={() => {
                  setAnswers({});
                  setStep(1);
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-neutral-500 italic ">
        * This tool does not diagnose liver disease and does not replace a
        doctor's evaluation.
      </p>
    </SectionBlock>
  );
}
