import React from "react";

const sizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-[1.75rem] lg:text-[2.625rem] leading-[50.40px]",
  xxl: "text-[1.75rem] lg:text-[3.75rem] leading-[1.5]",
};

const colorClasses = {
  primary: "text-lime-900",
  secondary: "text-neutral-500",
  muted: "text-gray-400",
  default: "text-gray-900",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

// -----------------------
// TEXT DESCRIPTION COMPONENT
// -----------------------
export const TitleDescription = ({
  text,
  children,
  align = "left",
  className = "",
}) => {
  const descriptionClasses =
    ` text-neutral-500 text-xl font-normal font-['Roboto'] 
    ${alignClasses[align]}
    font-['Roboto']
    leading-7
    ${className}
  `.trim();

  return <p className={descriptionClasses}>{children || text}</p>;
};

// -----------------------
// TEXT DESCRIPTION COMPONENT
// -----------------------
export const TextDescription = ({
  text,
  children,
  align = "left",
  className = "",
}) => {
  const descriptionClasses =
    `text-neutral-500 text-base font-normal  
    ${alignClasses[align]}
    font-['Roboto']
    leading-7
    ${className}
  `.trim();

  return <p className={descriptionClasses}>{children || text}</p>;
};

// -----------------------
// TYPOGRAPHY COMPONENT
// -----------------------
const Typography = ({
  title,
  subtitle,
  children,
  headingLevel = "h2",
  size = "md",
  align = "left",
  color = "default",
  className = "",
  id,
  LineHeading = false,
  subtitleClass = "",
}) => {
  const Heading = headingLevel;
  const headingClasses = `${sizeClasses[size]}
    ${alignClasses[align]}
    ${colorClasses[color]}
    font-['Roboto_Condensed']
    font-semibold leading-none
    ${className}
  `.trim();

  const subtitleClasses = `text-neutral-500
    ${alignClasses[align]}
    font-['Roboto']
    font-normal
    leading-[1.5] 
    ${subtitleClass}
  `.trim();
  const parseLineBreaks = (text) =>
    text.split(/<br\s*\/?>/gi).map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index !== text.split(/<br\s*\/?>/gi).length - 1 && <br />}
      </React.Fragment>
    ));
  // With border inline
  if (LineHeading) {
    return (
      <div
        className="self-stretch px-7 border-l-10 border-[#979832] inline-flex flex-col gap-2"
        id={id}
      >
        <Heading className={headingClasses}>
          {children || (title && parseLineBreaks(title))}
        </Heading>
        {subtitle && <p className={subtitleClasses}>{subtitle}</p>}{" "}
      </div>
    );
  }

  // Default layout
  return (
    <div id={id} className="flex flex-col gap-2">
      <Heading className={headingClasses}>
        {" "}
        {children || (title && parseLineBreaks(title))}
      </Heading>
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}{" "}
    </div>
  );
};

const CheckIcon = ({ className = "" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM13.8232 5.61816C13.6125 5.43982 13.2965 5.46603 13.1182 5.67676L7.99707 11.7285L5.37988 8.6748C5.20024 8.46522 4.88447 8.44063 4.6748 8.62012C4.46522 8.79976 4.44063 9.11553 4.62012 9.3252L7.62012 12.8252C7.71547 12.9364 7.85543 13.0005 8.00195 13C8.1483 12.9994 8.28727 12.9349 8.38184 12.8232L13.8818 6.32324C14.0602 6.11247 14.034 5.79655 13.8232 5.61816Z"
      fill="#647252"
    />
  </svg>
);

// -----------------------
// TYPOGRAPHY LIST COMPONENT
// -----------------------
export const TypographyList = ({
  items = [],
  ordered = false,
  className = "",
  Icon = CheckIcon,
  iconClass = "mr-2 text-green-500",
}) => {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag className={`list-none space-y-1 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          {Icon && <Icon className={iconClass} />}
          <span>{item}</span>
        </li>
      ))}
    </ListTag>
  );
};

export default Typography;
