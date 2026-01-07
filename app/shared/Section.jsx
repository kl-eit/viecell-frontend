const SectionBlock = ({
  children,
  mode = "light",
  className = "",
  noSpacing = false,
  rounded= false, 
  ...rest
}) => {
 const styles = mode === "dark" ? "text-white" : "";
 const padding = noSpacing ? "" : "py-[2rem] lg:py-[3.75rem]";
 const radus = rounded ? "rounded-[30px]" : "";
  return (
    <section
      className={`${styles} ${padding} ${className} ${radus}`}
      {...rest}
    >
      <div className="container grid gap-7">
        {children}
      </div>
    </section>
  );
};

export default SectionBlock;
