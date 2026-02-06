"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../../../components/ui/card";
import Button from "../../component/Button/Button";
import Typography from "../Typography/Typography";
import StepHeader from "./StepHeader";
import StepBreadcrumb from "./StepBreadcrumb";
import { STEP3_CONTENT } from "./step3Content";
export default function StepFourResult({
  selectedCondition,
  selectedSubtype,
  onPrev,
  onReset,
}) {
  const parentContent = STEP3_CONTENT[selectedCondition];
  const result = selectedSubtype
    ? parentContent?.subContent?.[selectedSubtype]
    : parentContent;

  if (!parentContent || !result) {
    console.error("Step 4 data missing:", {
      selectedCondition,
      selectedSubtype,
    });
    return null;
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${selectedCondition}-${selectedSubtype || "root"}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-col gap-4 lg:gap-6"
      >
        <StepHeader
          title="Let’s start by understanding what may be contributing to liver damage in your case."
          step={4}
          totalSteps={4}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <StepBreadcrumb
            items={
              selectedSubtype
                ? [...parentContent.breadcrumb, result.title]
                : parentContent.breadcrumb
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Typography
            title={result.title}
            subtitle={result.subtitle}
            headingLevel="h3"
            size="lg"
            color="primary"
            className="max-w-4xl"
          />
        </motion.div>
        {result?.symptoms?.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="flex flex-col gap-4"
          >
            <p className="font-semibold">Common Symptoms</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {result.symptoms.map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-1 text-left  gap-4 lg:gap-6 lg:grid-cols-2"
        >
          <div className="flex flex-row gap-2">
            <Button variant="outline-primary"  size="sm" onClick={onPrev}>
              Previous
            </Button>
            <Button onClick={onReset} size="sm">
              Reset
            </Button>
          </div>
        
              <div className="flex flex-row gap-2 justify-end">
              <Button href="/appointment-booking" size="sm">
                Book Appointment
              </Button>
              <Button
               size="sm"
                variant="outline-primary"
                href="https://wa.me/919001290028"
                target="_blank"
              >
                Talk to a Regenerative Specialist
              </Button>
            </div>
         
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
