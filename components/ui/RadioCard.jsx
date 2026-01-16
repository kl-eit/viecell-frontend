import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function RadioCard({
  label,
  checked,
  onChange,
  className,
}) {
  return (
    <Card
      onClick={onChange}
      role="radio"
      aria-checked={checked}
      tabIndex={0}
      className={cn(
        "cursor-pointer rounded-lg border-0 shadow-none p-4 flex items-center gap-4 transition bg-[#F3F6E9]",
        checked
          ? " "
          : "",
        className
      )}
    >
      <div
        className={cn(
          "h-5 w-5 rounded-full border flex items-center justify-center shrink-0",
          checked ? "border-[#979832]" : "border-[#979832] bg-white"
        )}
      >
        {checked && (
          <div className="h-3 w-3 rounded-full bg-[#979832]" />
        )}
      </div>

      {/* Label */}
      <span className="text-base font-medium text-[#2D4213]">
        {label}
      </span>
    </Card>
  );
}
