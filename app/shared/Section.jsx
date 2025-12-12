const SectionBlock = ({
  children,
  mode = "light",
  className = "",
  noSpacing = false, 
  ...rest
}) => {
  const styles = mode === "dark" ? "text-white" : "";
 const padding = noSpacing ? "" : "py-[2rem] lg:py-[3.75rem]";

  return (
    <section
      className={`${styles} ${padding} ${className}`}
      {...rest}
    >
      <div className="container grid gap-7">
        {children}
      </div>
    </section>
  );
};

export default SectionBlock;
