import Typography from "../Typography/Typography";

export default function StepHeader({
  title,
  step,
  totalSteps,
  className = "",
}) {
  return (
    <div
      className={`w-full flex gap-4 justify-between items-start ${className}`}
    >
      <div className="max-w-[500px]">
        <Typography
          title={title}
          headingLevel="h2"
          size="md"
          color="primary"
          className="font-normal!"
        />
      </div>

      <span className="text-sm bg-[#F3F6E9] px-4 py-1 rounded-full shrink-0">
        Step {step} of {totalSteps}
      </span>
    </div>
  );
}
