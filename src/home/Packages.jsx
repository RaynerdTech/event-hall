import React from "react";

export default function Packages() {
  return (
    <section className="w-full px-4 md:mt-[56px] mb-[32px]">
      <div className="max-w-[1400px] mx-auto md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center">
          {/* Right Image - appears first on mobile/tablet */}
          <div className="flex justify-center mb-[0px]">
            <img
              src="/decor-design.png"
              alt="Banquet hall with flowers"
              className="object-cover w-full max-w-[500px]"
            />
          </div>

          {/* Left Text Section */}
          <div className="text-center">
            <h3 className="text-[24px] md:mb-4 mb-2 uppercase">
              OUR PACKAGES 
            </h3>
            <p className="text-[14px] md:text-[16px] mb-4 text-[#1E1B1C] tracking-[0.25px] leading-[20px] md:tracking-[1.8px] md:leading-[24px]">
            We offer a range of décor options designed to suit your style and budget. Whether you’d like us to handle every detail or simply provide the finishing touches, our team can be as involved as you need — ensuring your event is as unique as your vision.
            </p>
<button
  onClick={() => (window.location.href = "/contact")}
  className="
    /* MOBILE VERSION (default) */
    relative text-[#000000] text-[16px] tracking-[0.15px] uppercase pb-1
    after:content-[''] after:block after:w-[110%] after:h-[1px] after:bg-[#8B4A63] after:mt-1.5 after:mx-auto after:translate-x-[-5%]
    /* DESKTOP & TABLET VERSION */
    md:bg-[#8B4A63] md:hover:bg-[#744D57] md:text-white md:text-[14px] md:tracking-[0.25px] md:py-[16px] md:px-[24px] md:rounded-[16px] md:after:hidden md:transition
  md:mt-[24px]"
>
  <span className="block md:hidden">Learn More</span>
  <span className="hidden md:block">Learn More</span>
</button>




          </div>
        </div>
      </div>
    </section>
  );
}
