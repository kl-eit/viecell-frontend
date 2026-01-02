export const ArrowRightIcon = ({
  size = 16,
  width,
  height,
  stroke = "currentColor",
  className="inline",
  ...props
}) => (
  <svg
    width={width ?? size}
    height={
      height ?? Math.round(size * 0.8125)
    }
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M9.25 1L14.5 6.25M14.5 6.25L9.25 11.5M14.5 6.25L1 6.25"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);