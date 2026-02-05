"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../../../components/ui/card";
import RadioCard from "../../../components/ui/RadioCard";
import Button from "../../component/Button/Button";
import Typography from "../Typography/Typography";
import { STEP3_CONTENT } from "./step3Content";
import StepBreadcrumb from "./StepBreadcrumb";
import StepHeader from "./StepHeader";

export default function StepThree({
  selectedCondition,
  onPrev,
  onNext,
  onReset,
}) {
  const content = STEP3_CONTENT[selectedCondition];
  const [value, setValue] = useState("");

  if (!content) return null;
  const { breadcrumb, options } = content;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedCondition}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full flex flex-col gap-6"
      >
        {/* Header */}
        <StepHeader
          title="Let’s start by understanding what may be contributing to liver damage in your case."
          step={3}
          totalSteps={options?.length > 0 ? "4" : "3"}
        />
        {/* Breadcrumb + Title */}
        <div className="flex flex-col gap-4">
          <StepBreadcrumb items={breadcrumb} />
          <Typography
            title={content.title}
            subtitle={content.subtitle}
            headingLevel="h3"
            size="lg"
            color="primary"
            className="max-w-4xl text-xl"
          />
        </div>
        {content.symptoms?.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="flex flex-col gap-4"
          >
            <p className="font-semibol">Common Symptoms</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {content.symptoms.map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Card className="p-6 rounded-xl bg-[#E6F1CD] border-0 shadow-none min-h-full">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Leads To */}
        {content.leadsTo?.title && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="font-semibold ">Often Leads To</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              <Card className="p-4 rounded-xl bg-[#FFEBA3] border-0 shadow-none max-w-md">
                <h4 className="font-semibold mb-2">{content.leadsTo.title}</h4>
                <p className="text-sm">
                  {content.leadsTo.desc}
                </p>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Options */}
        {options?.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {options.map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <RadioCard
                  label={option}
                  checked={value === option}
                  onChange={() => setValue(option)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 text-left  gap-4 lg:gap-6 lg:grid-cols-2"
        >
          <div className="flex flex-row gap-2">
            <Button variant="outline-primary" onClick={onPrev} size="sm">
              Previous
            </Button>

            {options?.length > 0 ? (
              <Button
                size="sm"
                onClick={() => onNext(value)}
                disabled={!value}
                className={!value ? "cursor-not-allowed opacity-50" : ""}
              >
                Continue
              </Button>
            ) : (
              <>
                <Button onClick={onReset} size="sm">
                  Reset
                </Button>
              </>
            )}
          </div>
          <div className="flex flex-row gap-2 justify-end">
            <Button href="/appointment-booking" size="sm">
              Book Appointment
            </Button>
            <Button href="https://wa.me/9001290028" target="_blank" size="sm"  variant="outline-primary">
              Talk to a Regenerative Specialist
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
