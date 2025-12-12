export const CalendarIcon = ({
  size = 14,
  width,
  height,
  fill = "currentColor",
  className,
  ...props
}) => (
  <svg
    width={width ?? size}
    height={height ?? size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g clipPath="url(#clip_calendar)">
      <path
        d="M12.25 1.16667H10.5V0H9.33333V1.16667H4.66667V0H3.5V1.16667H1.75C1.28587 1.16667 0.840752 1.35104 0.512563 1.67923C0.184374 2.00742 0 2.45254 0 2.91667L0 14H14V2.91667C14 2.45254 13.8156 2.00742 13.4874 1.67923C13.1592 1.35104 12.7141 1.16667 12.25 1.16667ZM1.16667 2.91667C1.16667 2.76196 1.22812 2.61358 1.33752 2.50419C1.44692 2.39479 1.59529 2.33333 1.75 2.33333H12.25C12.4047 2.33333 12.5531 2.39479 12.6625 2.50419C12.7719 2.61358 12.8333 2.76196 12.8333 2.91667V4.66667H1.16667V2.91667ZM1.16667 12.8333V5.83333H12.8333V12.8333H1.16667Z"
        fill={fill}
      />
      <path d="M9.91667 7.58301H8.75V8.74968H9.91667V7.58301Z" fill={fill} />
      <path d="M7.58464 7.58301H6.41797V8.74968H7.58464V7.58301Z" fill={fill} />
      <path d="M5.2487 7.58301H4.08203V8.74968H5.2487V7.58301Z" fill={fill} />
      <path d="M9.91667 9.91699H8.75V11.0837H9.91667V9.91699Z" fill={fill} />
      <path d="M7.58464 9.91699H6.41797V11.0837H7.58464V9.91699Z" fill={fill} />
      <path d="M5.2487 9.91699H4.08203V11.0837H5.2487V9.91699Z" fill={fill} />
    </g>
    <defs>
      <clipPath id="clip_calendar">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

/* Right arrow icon */
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

/* User / avatar icon */
export const UserIcon = ({
  size = 14,
  width,
  height,
  fill = "currentColor",
  className,
  ...props
}) => (
  <svg
    width={width ?? size}
    height={height ?? size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g clipPath="url(#clip_user)">
      <path
        d="M7 7C7.69223 7 8.36892 6.79473 8.9445 6.41015C9.52007 6.02556 9.96867 5.47894 10.2336 4.83939C10.4985 4.19985 10.5678 3.49612 10.4327 2.81719C10.2977 2.13825 9.96436 1.51461 9.47487 1.02513C8.98539 0.535644 8.36175 0.202301 7.68282 0.0672531C7.00388 -0.0677952 6.30015 0.0015165 5.66061 0.266423C5.02107 0.53133 4.47444 0.979934 4.08986 1.55551C3.70527 2.13108 3.5 2.80777 3.5 3.5C3.50093 4.42798 3.86997 5.31768 4.52615 5.97385C5.18233 6.63003 6.07203 6.99908 7 7ZM7 1.16667C7.46149 1.16667 7.91262 1.30352 8.29633 1.55991C8.68005 1.8163 8.97912 2.18071 9.15572 2.60707C9.33232 3.03343 9.37853 3.50259 9.2885 3.95521C9.19847 4.40784 8.97624 4.8236 8.64992 5.14992C8.32359 5.47624 7.90783 5.69847 7.45521 5.7885C7.00259 5.87853 6.53343 5.83233 6.10707 5.65572C5.68071 5.47912 5.31629 5.18005 5.0599 4.79633C4.80351 4.41262 4.66667 3.96149 4.66667 3.5C4.66667 2.88116 4.9125 2.28767 5.35008 1.85009C5.78767 1.4125 6.38116 1.16667 7 1.16667V1.16667Z"
        fill={fill}
      />
      <path
        d="M7 8.16699C5.60809 8.16854 4.27363 8.72216 3.28939 9.70639C2.30516 10.6906 1.75154 12.0251 1.75 13.417C1.75 13.5717 1.81146 13.7201 1.92085 13.8295C2.03025 13.9389 2.17862 14.0003 2.33333 14.0003C2.48804 14.0003 2.63642 13.9389 2.74581 13.8295C2.85521 13.7201 2.91667 13.5717 2.91667 13.417C2.91667 12.334 3.34687 11.2954 4.11265 10.5296C4.87842 9.76387 5.91703 9.33366 7 9.33366C8.08297 9.33366 9.12158 9.76387 9.88735 10.5296C10.6531 11.2954 11.0833 12.334 11.0833 13.417C11.0833 13.5717 11.1448 13.7201 11.2542 13.8295C11.3636 13.9389 11.512 14.0003 11.6667 14.0003C11.8214 14.0003 11.9697 13.9389 12.0791 13.8295C12.1885 13.7201 12.25 13.5717 12.25 13.417C12.2485 12.0251 11.6948 10.6906 10.7106 9.70639C9.72637 8.72216 8.39191 8.16854 7 8.16699V8.16699Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip_user">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

/* Search icon (example from earlier) */
export const SearchIcon = ({
  size = 16,
  width,
  height,
  stroke = "currentColor",
  className,
  ...props
}) => (
  <svg
    width={width ?? size}
    height={height ?? size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M21 21l-4.35-4.35"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="11"
      cy="11"
      r="6"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Close / X icon (example) */
export const CloseIcon = ({
  size = 16,
  width,
  height,
  stroke = "currentColor",
  className,
  ...props
}) => (
  <svg
    width={width ?? size}
    height={height ?? size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M18 6L6 18"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6l12 12"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const QuoteIcon = ({
  size = 16,
  width,
  height,
  stroke = "currentColor",
  className,
  ...props
}) => (
  <svg
    width={width ?? size}
    height={height ?? size}
    className={className}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3.99902H4C2.93913 3.99902 1.92172 4.42045 1.17157 5.1706C0.421427 5.92074 0 6.93816 0 7.99902L0 11.999C0 12.5295 0.210714 13.0382 0.585786 13.4132C0.960859 13.7883 1.46957 13.999 2 13.999H7.91C7.67273 15.3956 6.94948 16.6633 5.86803 17.5782C4.78658 18.4932 3.41655 18.9964 2 18.999C1.73478 18.999 1.48043 19.1044 1.29289 19.2919C1.10536 19.4795 1 19.7338 1 19.999C1 20.2642 1.10536 20.5186 1.29289 20.7061C1.48043 20.8937 1.73478 20.999 2 20.999C4.121 20.9966 6.15445 20.153 7.65422 18.6532C9.154 17.1535 9.99762 15.12 10 12.999V5.99902C10 5.46859 9.78929 4.95988 9.41421 4.58481C9.03914 4.20974 8.53043 3.99902 8 3.99902V3.99902Z"
      fill="#B4B729"
      fillOpacity="0.5"
    />
    <path
      d="M22 3.99902H18C16.9391 3.99902 15.9217 4.42045 15.1716 5.1706C14.4214 5.92074 14 6.93816 14 7.99902V11.999C14 12.5295 14.2107 13.0382 14.5858 13.4132C14.9609 13.7883 15.4696 13.999 16 13.999H21.91C21.6727 15.3956 20.9495 16.6633 19.868 17.5782C18.7866 18.4932 17.4166 18.9964 16 18.999C15.7348 18.999 15.4804 19.1044 15.2929 19.2919C15.1054 19.4795 15 19.7338 15 19.999C15 20.2642 15.1054 20.5186 15.2929 20.7061C15.4804 20.8937 15.7348 20.999 16 20.999C18.121 20.9966 20.1544 20.153 21.6542 18.6532C23.154 17.1535 23.9976 15.12 24 12.999V5.99902C24 5.46859 23.7893 4.95988 23.4142 4.58481C23.0391 4.20974 22.5304 3.99902 22 3.99902V3.99902Z"
      fill="#B4B729"
      fillOpacity="0.5"
    />
  </svg>
);

/* Registry for dynamic icons */
const registry = {
  calendar: CalendarIcon,
  arrowRight: ArrowRightIcon,
  user: UserIcon,
  search: SearchIcon,
  close: CloseIcon,
  quote: QuoteIcon,
};

/* Dynamic Icon component */
const Icon = ({ name, size, width, height, ...props }) => {
  const Comp = registry[name];
  if (!Comp) return null;
  return <Comp size={size} width={width} height={height} {...props} />;
};

export default Icon;
