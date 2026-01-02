"use client";
import { useState } from "react";
import questions from "./questions.json";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import Button from "../Button/Button";
export default function WizardForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[currentStep];

  const handleRadioChange = (value) => {
    setAnswers({ ...answers, [question.id]: value });
    if (question.id === "chronic_alcohol" && value === "No") {
      setCurrentStep("skipped"); // mark as skipped
      console.log("No");
    } else {
      setCurrentStep((prev) => prev + 1);
      console.log("Yes");
    }
  };

  const handleCheckboxChange = (option) => {
    const current = answers[question.id] || [];
    if (current.includes(option)) {
      setAnswers({
        ...answers,
        [question.id]: current.filter((o) => o !== option),
      });
    } else {
      setAnswers({
        ...answers,
        [question.id]: [...current, option],
      });
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div
        className={`p-8 rounded-[20px] outline-1 flex flex-col justify-start  gap-6
    ${
      currentStep > 0
        ? "bg-gray-50 shadow-md text-left"
        : "bg-white items-center"
    }`}
      >
        <h2 className="text-xl font-semibold text-lime-900">
          {question?.question}
        </h2>

        {question?.type === "radio" && (
          <RadioGroup
            value={answers[question.id] || ""}
            onValueChange={handleRadioChange}
            className="grid grid-cols-2 gap-4"
          >
            {question?.options.map((option) => (
              <label
                key={option}
                className={`h-40 cursor-pointer border rounded-xl p-6 flex items-center justify-center text-center transition-all relative
              ${
                answers[question?.id] === option
                  ? "border-lime-900 bg-stone-100 shadow-md"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
              >
                <div className="right-5 top-[17px] absolute flex justify-start items-center gap-2.5">
                  <RadioGroupItem value={option} />
                  <span className="text-lime-900 font-medium">{option}</span>
                </div>
                <div className="text-center justify-start text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-6">
                  Alcoholic Cirrhosis (ALD)
                </div>
              </label>
            ))}
          </RadioGroup>
        )}
        {currentStep > 0 &&
          currentStep !== "skipped" &&
          question.type === "checkbox" && (
            <Field className="gap-3">
              {question?.options?.map((option) => (
                <FieldLabel
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={(answers[question.id] || []).includes(option)}
                    onCheckedChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </FieldLabel>
              ))}
            </Field>
          )}
           {currentStep === "skipped" && (
        <div className="p-6 text-center text-lime-900 font-semibold">
          Form skipped based on the user's response
        </div>
      )}
      </div>

      {currentStep !== "skipped" &&  <div className="flex justify-center items-center gap-2">
        {currentStep > 0 && (
          <Button onClick={prevStep} variant="secondary" size="sm">
            Previous
          </Button>
        )}
        {currentStep < questions.length - 1 ? (
          <Button onClick={nextStep} size="sm">
            Next
          </Button>
        ) 
        
        : (
          <Button
            onClick={() => console.log("Final Answers:", answers)}
            size="sm"
          >
            Submit
          </Button>
        )}
      </div>}
     

      {/* <pre className="bg-gray-100 p-4 rounded mt-4">
        {JSON.stringify(answers, null, 2)}
      </pre> */}
    </>
  );
}
