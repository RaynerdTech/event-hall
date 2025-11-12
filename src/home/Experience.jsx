import React from "react";

export default function Experience() {
  return (
   <section
  className="
    w-full px-4 md:mt-[80px] mt-[40px] md:mb-0 mb-[24px] pb-[24px]
 
    md:shadow-none
  "
>

      <div className="max-w-[1400px] mx-auto md:px-12 lg:px-20">
        <div className="md:text-center text-left md:mb-8 mb-4">
          <h2 className="text-[57px] md:text-[36px] tracking-[2.8px] uppercase text-black md:tracking-[4px] leading-[64px] md:leading-[44px]">
            Experience Glory
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center">
          {/* Right Image - appears first on mobile/tablet */}
          <div className="flex justify-center mb-[0px] order-first md:order-last">
            <img
              src="/glorysvp-experience.png"
              alt="Banquet hall with flowers"
              className="object-cover w-full max-w-[500px]"
            />
          </div>

          {/* Left Text Section */}
          <div className="text-center">
            <h3 className="text-[24px] md:mb-4 mb-2 uppercase">
              The Perfect Space
            </h3>
            <p className="text-[14px] md:text-[16px] mb-4 text-[#1E1B1C] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px]">
              Discover the perfect setting for your special event. Our beautifully
              designed banquet suite comfortably seats up to 180 guests, offering
              a sophisticated backdrop for unforgettable celebrations.
            </p>
            <p className="text-[14px] md:text-[16px] text-[#1E1B1C] md:mb-8 mb-3.5 md:tracking-[1.8px] md:leading-[24px] tracking-[0.25px] leading-[20px]">
              With premium kitchen facilities, a private changing room, and the
              support of our dedicated onsite team, we ensure every detail is
              taken care of — so you can simply enjoy your day.
            </p>
<button
  onClick={() => (window.location.href = "/contact")}
  className="
    /* MOBILE VERSION (default) */
    relative text-[#000000] text-[16px] tracking-[0.15px] uppercase pb-1
    after:content-[''] after:block after:w-[110%] after:h-[1px] after:bg-[#8B4A63] after:mt-1.5 after:mx-auto after:translate-x-[-5%]
    /* DESKTOP & TABLET VERSION */
    md:bg-[#8B4A63] md:hover:bg-[#744D57] md:text-white md:text-[14px] md:tracking-[0.25px] md:py-[16px] md:px-[24px] md:rounded-[16px] md:after:hidden md:transition
  "
>
  <span className="block md:hidden">View Our Space</span>
  <span className="hidden md:block">Learn More</span>
</button>




          </div>
        </div>
      </div>
    </section>
  );
}
