const CarouselNav = ({ onPrev, onNext, paginationRef }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="custom-prev">
        <button
          onClick={onPrev}
           aria-label="Previous slide"
          className="p-4 bg-white/60 rounded-[100px] cursor-pointer group relative w-14 h-14 inline-flex flex-col justify-center items-center gap-2.5"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path
              d="M7 13L1 7L7 1"
              stroke="#979832"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        ref={paginationRef}
        className="custom-pagination w-auto! flex items-center gap-2 p-5 bg-white/60 rounded-[100px]"
      ></div>

      <div className="custom-next">
        <button
          onClick={onNext}
            aria-label="Next slide"
          className="p-4 bg-white/60 rounded-[100px] cursor-pointer group relative w-14 h-14 inline-flex flex-col justify-center items-center gap-2.5"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path
              d="M1 13L7 7L1 1"
              stroke="#979832"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarouselNav;
