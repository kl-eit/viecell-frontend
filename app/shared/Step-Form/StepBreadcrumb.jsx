export default function StepBreadcrumb({ items = [] }) {
  if (!items.length) return null;

  return (
    <div>
    <span className="inline-flex flex-wrap items-center gap-2  bg-[#F3F6E9] text-sm px-4 py-2 rounded-full">
      {items.map((item, index) => (
        <span key={item}>
          {item}
          {index < items.length - 1 && (
            <span className="mx-2 text-[#5A6B45]">»</span>
          )}
        </span>
      ))}
    </span>
    </div>
  );
}
