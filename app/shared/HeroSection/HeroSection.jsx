export default function HeroSection({
  title,
  description,
  imageSrc,
  reverse = false,
  gradient = "bg-[linear-gradient(360deg,#F7F9EF_0%,#E6F1CB_100%)]",
}) {
  return (
    <div className={`${gradient} rounded-[30px] pt-40 pb-8`}>
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center text-lime-900 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="max-w-[592px]">
            <h1 className="text-2xl lg:text-[2.625rem] leading-none font-['Roboto_Condensed'] font-semibold mb-4">
              {title}
            </h1>
          <div
              className="text-base lg:text-lg leading-snug"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          {imageSrc && (
            <div className="max-w-[592px] text-center">
              <img
                src={imageSrc}
                alt={title}
               
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
