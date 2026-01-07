import Link from "next/link";
import { ArrowRightIcon } from "../../shared/icons/icons";

const baseClasses =
  "btn fw-500 rounded-[100px] cursor-pointer group relative inline-flex ";
const Button = ({
  children,
  onClick,
  type = "button",
  href,
  target,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
  disabled = false,
  style,
  ...rest
}) => {
  const variantClasses = {
    "outline-primary":
      "border border-lime-900 text-lime-900 hover:bg-lime-900 hover:text-white",
    primary: "bg-lime-900 text-white hover:bg-lime-800",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    white: "bg-white text-lime-900",
  }[variant];
  const sizeClasses = {
    sm: "text-sm px-6 py-3",
    md: "px-6 lg:px-10 py-4",
    lg: "text-lg px-6 py-3",
  }[size];

  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  // Render as Link if href is provided
  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    return (
      <Link
        href={href}
        passHref
        {...(isExternal
          ? { target: target || "_blank", rel: "noopener noreferrer" }
          : {})}
        className={combinedClasses}
        style={style}
        {...rest}
      >
        <span className={icon ? "mr-2 inline-flex items-center" : ""}>
          {children}
        </span>
        {icon && <span className="rotate-0 transition-all duration-200 group-hover:-rotate-45"><ArrowRightIcon /></span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      style={style}
      {...rest}
    >
      <span className={icon ? "mr-2 inline-flex items-center" : ""}>
        {children}
      </span>
      {icon && (
        <span className="rotate-0 transition-all duration-200 group-hover:-rotate-45">
          <ArrowRightIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
// -----------------------------
// ReadMore Component
// -----------------------------
export const ReadMore = ({
  href,
  text = "Learn More",
  className = "",
  showArrow = true,
}) => {
  return (
    <Link
      href={href}
      className={`cursor-pointer group relative inline-flex items-center gap-2.5 text-lime-900 text-base font-medium font-['Roboto_Condensed'] leading-6 ${className}`}
    >
      <span>{text}</span>
      {showArrow && (
        <span className="rotate-0 transition-all duration-200 group-hover:-rotate-45">
          <ArrowRightIcon />
        </span>
      )}
    </Link>
  );
};
