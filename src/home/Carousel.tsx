import React, { JSX, useEffect, useRef, useState } from "react";

/**
 * Pure React + TS + Tailwind carousel
 * - No external libs. No scroll - uses transform translateX.
 */

const IMAGES = [
  "/images/event-decoration (1).jpg",
  "/images/event-decoration (1).png",
  "/images/event-decoration (2).jpg",
  "/images/event-decoration (3).png",
  "/images/event-decoration (4).jpg",
  "/images/event-decoration (5).png",
  "/images/event-decoration (6).png",
  "/images/event-decoration (7).png",
  "/images/event-decoration (8).png",
];

// *** YOUR FIX HERE ***: Adjust gap values as needed
// (1rem = 16px, so 0.5rem = 8px)
const GAP_MOBILE_REM = 0; // e.g., gap-2 (8px)
const GAP_DESKTOP_REM = 0.6; // e.g., gap-4 (16px)

export default function Carousel(): JSX.Element {
  const [idx, setIdx] = useState<number>(2); // start center at index 2
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [mode, setMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const touchStartX = useRef<number | null>(null);
  const touchDelta = useRef<number>(0);

  // --- Hooks for Breakpoints, Keyboard, and Touch ---

  useEffect(() => {
    const checkMode = () => {
      // Per spec: Desktop >= 1024px, Tablet >= 768px
      if (window.innerWidth >= 1024) setMode("desktop");
      else if (window.innerWidth >= 768) setMode("tablet");
      else setMode("mobile");
    };
    checkMode();
    window.addEventListener("resize", checkMode);
    return () => window.removeEventListener("resize", checkMode);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Home") setIdx(0);
      if (e.key === "End") setIdx(IMAGES.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [lightbox]);

  // --- Navigation Handlers ---

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(IMAGES.length - 1, i + 1));

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchDelta.current = 0;
  }
  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartX.current == null) return;
    touchDelta.current = e.touches[0].clientX - touchStartX.current;
  }
  function handleTouchEnd() {
    const threshold = 50; // Min swipe distance in px
    if (touchDelta.current > threshold) {
      prev();
    } else if (touchDelta.current < -threshold) {
      next();
    }
    touchStartX.current = null;
    touchDelta.current = 0;
  }

  // --- Style & Transform Calculation ---

  const getTrackStyles = () => {
    let transform = "translateX(0)";
    let gap = `${GAP_DESKTOP_REM}rem`;

    if (mode === "mobile") {
      gap = `${GAP_MOBILE_REM}rem`;
      // *** YOUR FIX HERE ***: Mobile overflow fix
      // 1. We define a slide width of 80% (in getSlideStyle)
      // 2. We define a side padding of 10% to center the 80% slide
      const slideWidth = "70%";
      const padding = "15%";
      // 3. We translate by the index * (slide width + gap)
      // 4. We add the 10% padding to offset the track and center the first slide
      transform = `translateX(calc(-${idx} * (${slideWidth} + ${GAP_MOBILE_REM}rem) + ${padding}))`;
    } else {
      // Desktop/Tablet: Show 3 slides.
      const leftSlideIndex = Math.max(
        0,
        Math.min(idx - 1, IMAGES.length - 3),
      );
      // (100% + gap) / 3
      const slideAndGapWidth = `((100% + ${GAP_DESKTOP_REM}rem) / 3)`;
      transform = `translateX(calc(-${leftSlideIndex} * ${slideAndGapWidth}))`;
    }

    return {
      transform,
      gap,
    };
  };

  const getSlideStyle = () => {
    if (mode === "mobile") {
      // *** YOUR FIX HERE ***: Mobile overflow fix
      // Each slide is 80% of the container width
      return { flex: "0 0 70%" };
    }
    // On desktop/tablet, slide is 1/3 of container minus gaps
    return {
      flex: `0 0 calc((100% - ${GAP_DESKTOP_REM * 2}rem) / 3)`,
    };
  };

  const trackStyles = getTrackStyles();
  const slideStyle = getSlideStyle();

  return (
    <>
    <section className="w-full bg-white py-2 flex justify-center overflow-hidden md:px-4 lg:px-0">
  <div className="w-full max-w-7xl relative lg:px-16">
    
    {/* HEADER SECTION */}
    <div className="flex flex-col items-center justify-center text-center mb-6 px-4">
      <h2 className="md:text-[36px] md:mb-[2.4] text-[28px] tracking-[2px] lg:tracking-[4px]">OUR BEAUTIFUL SPACE</h2>
    </div>

    {/* CAROUSEL CONTAINER WITH FIXED HEIGHT */}
    <div className="h-[300px] md:h-auto"> {/* ← ADDED FIXED HEIGHT ON MOBILE */}
      
      {/* LEFT ARROW */}
      <button
        onClick={prev}
        aria-label="Previous image"
        disabled={idx === 0}
        className={`absolute top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black text-white shadow-lg transition-all hover:bg-black/75 hover:scale-105
          ${
            mode === "desktop"
              ? "left-0"
              : mode === "tablet"
              ? "left-2"
              : "left-2"
          }
          disabled:opacity-30 disabled:cursor-not-allowed`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        aria-label="Next image"
        disabled={idx === IMAGES.length - 1}
        className={`absolute top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black text-white shadow-lg transition-all hover:bg-black/75 hover:scale-105
          ${
            mode === "desktop"
              ? "right-0"
              : mode === "tablet"
              ? "right-2"
              : "right-2"
          }
          disabled:opacity-30 disabled:cursor-not-allowed`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* TRACK WRAPPER */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="overflow-hidden"
      >
        {/* TRACK */}
        <div
          className="flex items-center transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: trackStyles.transform,
            gap: trackStyles.gap,
          }}
        >
          {IMAGES.map((src, i) => {
            const isActive = i === idx;

            return (
              <div
                key={src + i}
                className="flex-shrink-0 cursor-pointer overflow-hidden"
                style={slideStyle}
                onClick={() => {
                  setIdx(i);
                  setLightbox(src);
                }}
              >
                <img
                  src={src}
                  alt={`Event decoration ${i + 1}`}
                  className={`w-full object-cover shadow-md select-none transition-all duration-500 ease-out
                    lg:h-[386px] md:h-[237.66px] md:scale-100 md:opacity-100
                    ${
                      isActive
                        ? "scale-100 h-[280px]" // Active mobile
                        : "scale-94 opacity-70 h-[237.66px]" // Inactive mobile
                    }
                    // Hover effects for desktop/tablet
                    lg:hover:scale-110 md:hover:scale-110 
                    lg:transition-all md:transition-all 
                    lg:duration-150 md:duration-150 
                    lg:ease-in-out md:ease-in-out
                  `}
                  style={{
                    transformOrigin: 'center',
                  }}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>
      
    </div> {/* ← END OF FIXED HEIGHT CONTAINER */}

    {/* LEARN MORE BUTTON */}
  <div className="flex justify-center md:mt-6 mt-4 w-full">
  <button
    onClick={() => (window.location.href = "/contact")}
    className="
      relative text-[#000000] text-[16px] tracking-[0.15px] uppercase pb-1
      after:content-[''] after:block after:w-[110%] after:h-[1px] after:bg-[#8B4A63]
      after:mt-1.5 after:mx-auto after:translate-x-[-5%]
      font-cormorant font-medium
    "
  >
    VIEW ALL PHOTOS
  </button>
</div>


  </div>
</section>

      {/* LIGHTBOX MODAL */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightbox(null)} // Click background to close
        >
          {/* Close button (top right) */}
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 z-[52] flex items-center justify-center w-12 h-12 rounded-full bg- text-white transition-colors hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <img
            src={lightbox}
            alt="Enlarged event decoration"
            className="max-h-full max-w-full object-contain shadow-2xl z-[51]"
            onClick={(e) => e.stopPropagation()} // Prevent image click from closing modal
                  />
                  
        </div>
      )}
    </>
  );
}