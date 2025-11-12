import React, { useState } from "react";

// --- Reusable SVG Icons ---
const IconInstagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconTikTok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const IconFacebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const IconLinkedin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- Email validation function ---
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// --- Reusable Content Blocks ---

const NavLinks = ({ className }) => (
  <nav className={className}>
    <ul
      className="
        flex flex-wrap gap-[8px] text-[14px] md:text-b
        lg:gap-[14px]
        md:gap-x-6 md:gap-y-2 md:mb-[-110px] lg:mb-[0px]
         text-center justify-center"
>
      <li className="md:block">
  <a
    href="/#home"
    className="nav-link text-[14px] md:text-[16px] md:tracking-[0.15px] tracking-[0.1px] md:leading-[24px] leading-[20px] md:font-medium font-bold"
  >
    HOME
  </a>
            </li>
               <li>
        <a href="/#about" className="nav-link text-[14px] md:text-[16px] md:tracking-[0.15px] tracking-[0.1px] md:leading-[24px] leading-[20px] md:font-medium font-bold">
          ABOUT US
        </a>
      </li>

      <li>
        <a href="/#packages" className="nav-link text-[14px] md:text-[16px] md:tracking-[0.15px] tracking-[0.1px] md:leading-[24px] leading-[20px] md:font-medium font-bold">
          PACKAGES
        </a>
      </li>
      <li>
        <a href="/#media" className="nav-link text-[14px] md:text-[16px] md:tracking-[0.15px] tracking-[0.1px] md:leading-[24px] leading-[20px] md:font-medium font-bold">
          MEDIA
        </a>
      </li>
      <li>
        <a href="/#contact" className="nav-link text-[14px] md:text-[16px] md:tracking-[0.15px] tracking-[0.1px] md:leading-[24px] leading-[20px] md:font-medium font-bold">
          CONTACT US
        </a>
      </li>
    </ul>
  </nav>
);

const PrivacyLinks = ({ className }) => (
  <ul className={className}>
    <li>
      <a href="/privacy" className="hover:underline text-[14px] md:text-[16px] md:tracking-[0.15px] tracking-[0.1px] md:leading-[24px] leading-[20px] md:font-medium font-bold">
        PRIVACY POLICY
      </a>
    </li>
    <li>
      <a href="/faqs" className="hover:underline text-[14px] md:text-[16px] md:tracking-[0.15px] tracking-[0.1px] md:leading-[24px] leading-[20px] md:font-medium font-bold">
        FAQs
      </a>
    </li>
    <li>
      <a href="/terms" className="hover:underline text-[14px] md:text-[16px] md:tracking-[0.15px] tracking-[0.1px] md:leading-[24px] leading-[20px] md:font-medium font-bold">
        TERMS &amp; CONDITIONS
      </a>
    </li>
  </ul>
);

const Socials = ({ className }) => (
  <div className={className}>
    <p className="hover:underline text-[14px] md:text-[16px] md:tracking-[0.15px] tracking-[0.1px] md:leading-[24px] leading-[20px] md:font-medium font-bold mb-3 font-cormorant">FIND US</p>
    <div className="flex gap-10">
      <a
        href="https://instagram.com"
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
        className="w-7 h-7 rounded-md bg-black text-white flex items-center justify-center shadow-md transition-opacity hover:opacity-80"
      >
        <IconInstagram />
      </a>
      <a
        href="https://www.tiktok.com"
        aria-label="TikTok"
        target="_blank"
        rel="noreferrer"
        className="w-7 h-7 rounded-md bg-black text-white flex items-center justify-center shadow-md transition-opacity hover:opacity-80"
      >
        <IconTikTok />
      </a>
      <a
        href="https://facebook.com"
        aria-label="Facebook"
        target="_blank"
        rel="noreferrer"
        className="w-7 h-7 rounded-md bg-black text-white flex items-center justify-center shadow-md transition-opacity hover:opacity-80"
      >
        <IconFacebook />
      </a>
      <a
        href="https://linkedin.com"
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer"
        className="w-7 h-7 rounded-md bg-black text-white flex items-center justify-center shadow-md transition-opacity hover:opacity-80"
      >
        <IconLinkedin />
      </a>
    </div>
  </div>
);

const Copyright = ({ className }) => (
  <div className={className}>
    © {new Date().getFullYear()} glory. All rights reserved.
  </div>
);

export default function Footer() {
    const [showEmail, setShowEmail] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
      if (!showEmail) {
        setShowEmail(true);
        return;
      }
      
      // Check if email is empty
      if (!email.trim()) {
        setError("This field can't be empty");
        return;
      }
      
      // Check if email is valid
      if (!validateEmail(email)) {
        setError("Invalid email");
        return;
      }

      setError("");
      setShowEmail(false);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSubscribed(true);
        setEmail("");

        setTimeout(() => {
          setSubscribed(false);
        }, 2000);
      }, 2000);
    };

    return (
      
        <footer className="w-full bg-white text-black/90 font-sans mt-[40px]">
             <div className="border-t my-3 md:my-0 w-[92%] mx-auto" style={{ borderColor: "rgba(0, 0, 0, 0.3)" }} />
         <div className="flex items-center justify-center">
  <div className="w-[92%] mx-auto py-0 md:mb-0 md:mt-4 flex flex-col md:flex-row md:justify-between md:items-center text-left space-y-3 md:space-y-0">

    {/* LEFT TEXT */}
    <div className="flex-1 min-w-0 pr-0 md:pr-4 mt-0">
      <h2 className="text-[24px] font-semibold uppercase tracking-[2px] text-black">
        Subscribe to our newsletter
      </h2>
      <p className="md:text-[16px] text-[14px] text-black tracking-[0.25px] md:tracking-[1.8px]">
        Get the latest updates on events at Glory...
      </p>
    </div>

    {/* RIGHT TOGGLE SECTION */}
    <div className="flex-shrink-0 flex flex-col md:items-end items-start md:w-auto">

      {/* Toggle email input */}
      {showEmail && (
        <div className="w-full md:w-auto mb-2 animate-slideUpFade">
          <label className="block text-[12px] font-medium text-black mb-1">Email Address <span className="text-[#B50000]">*</span></label>
     <input
  type="email"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
    if (error) setError("");
  }}
  className="w-full md:w-64 border border-[#e5e5e5] rounded-[6px] px-3 py-2 
             focus:outline-none focus:border-[#000000] transition-colors duration-200
             text-black placeholder:text-[12px] placeholder:tracking-[1.8px] placeholder:text-gray-400"
  placeholder="Enter Email Address"
/>

          {error && <p className="text-red-700 text-[12px] tracking-normal">{error}</p>}
        </div>
      )}

      {/* Subscribe button */}
      <button
        onClick={handleSubscribe}
        disabled={loading}
        className={`relative text-black px-6 py-3 rounded-[8px] font-light text-[14px] tracking-[0.25px] mt-2 mb-3
          border border-[#8B4A63] font-plex
          transition-all duration-300 ease-in-out uppercase  md:w-auto
          ${subscribed ? "bg-[#8B4A63] text-white" : "bg-transparent"}
          ${loading ? "opacity-80 cursor-not-allowed" : "hover:shadow-[0_0_0_2px_rgba(55,10,31,1)]"}
        `}
      >
        {loading ? (
          <img
            src="/Circular-indeterminate progress indicator.svg"
            alt="loading"
            className="w-5 h-5 mx-auto animate-spin-slow"
          />
        ) : subscribed ? (
          "Subscribed!"
        ) : (
          "Subscribe"
        )}
      </button>
    </div>
  </div>
</div>

          {/* --- DIVIDER --- */}
      <div className="w-[92%] mx-auto md:mb-16 md:mt-0">
       <div className="border-t my-3 md:my-6 " style={{ borderColor: "rgba(0, 0, 0, 0.3)" }} />

        {/* --- TOP AREA - Updated for Tablet --- */}
        <div
          className="
           grid grid-cols-1 gap-3
           md:grid-cols-2 md:gap-6 md:items-end
           lg:grid-cols-3 lg:items-start
           "
        >
          {/* Col 1: Logo + Address */}
          <div className="flex flex-col space-y-0 md:items-start md:text-left">
            <div className="font-cormorant text-[32px] tracking-[4px] font-bold">
              GLORY RSVP
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="not-italic md:text-[16px] text-[14px] md:text-base leading-[20px] hover:underline font-plex font-light w-[250px] md:w-full tracking-[0.25px] md:tracking-[1.8px] mt-1"
              aria-label="Open address in Google Maps"
            >
              {ADDRESS}
            </a>
          </div>

          {/* Col 2: Email + Phone */}
          <div className="flex flex-col space-y-2 md:items-end lg:items-center md:text-center">
            <a
              className="md:text-[16px] text-[14px] md:text-base leading-[20px] underline font-plex font-light w-[250px] md:w-full tracking-[0.25px] md:tracking-[1.8px]"
              href={`mailto:${EMAIL}`}
              aria-label="Email Glory RSVP"
            >
              M: {EMAIL}
            </a>
            <a
              className="md:text-[16px] text-[14px] md:text-base leading-[20px] underline font-plex font-light w-[250px] md:w-full tracking-[0.25px] md:tracking-[1.8px]"
              href={`tel:${PHONE_TEL}`}
              aria-label="Call Glory RSVP"
            >
              F: {PHONE_DISPLAY}
            </a>
          </div>

          {/* Col 3: DESKTOP Nav links (hidden on mobile/tablet) */}
          <NavLinks className="hidden lg:flex lg:items-center lg:justify-end" />
        </div>

        {/* --- DIVIDER --- */}
       <div className="border-t my-4 md:my-6 mt-8" style={{ borderColor: "rgba(0, 0, 0, 0.3)"}} />


        {/* --- BOTTOM AREA: MOBILE/TABLET LAYOUT --- */}
        <div className="flex flex-col gap-4 lg:hidden">
          {/* Tablet: Nav Links and Socials in one row with space between */}
          <div
            className="
              flex flex-col items-center gap-4
              md:flex-row md:justify-between md:items-start
            "
          >
            {/* Nav Links - takes available space */}
            <NavLinks
              className="
                flex flex-col items-center gap-[8px] text-center
                md:flex-row md:flex-wrap md:justify-start md:text-left md:gap-x-6 md:gap-y-3 md:flex-1
              "
            />
            
            {/* Socials - aligned to the right */}
            <Socials
              className="
                flex flex-col items-center
                md:items-end md:text-right
              "
            />
          </div>

          {/* Privacy + Copyright */}
          <div
            className="
              flex flex-col items-center gap-4 text-center
              md:flex-row md:justify-between md:items-center md:text-left
            "
          >
            {/* Privacy Links */}
            <PrivacyLinks
              className="
                flex flex-row gap-[8px] 
                md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2
              "
            />
            {/* Copyright */}
            <Copyright className="text-[12px] tracking-[0.6px] md:text-base mb-8 md:mb-0" />
          </div>
        </div>

        {/* --- BOTTOM AREA: DESKTOP LAYOUT --- */}
        <div
          className="
           hidden
           lg:grid lg:grid-cols-3 lg:items-center lg:gap-6
            "
        >
          {/* Col 1: privacy/faq/terms */}
          <PrivacyLinks
            className="
              flex flex-row flex-wrap gap-x-6 gap-y-2 
              text-sm md:text-base justify-start
            "
          />

          {/* Col 2: FIND US + Social Icons */}
          <Socials className="flex flex-col items-center" />

          {/* Col 3: Copyright */}
          <Copyright className="text-[12px] md:text-base text-right" />
        </div>
      </div>
    </footer>
  );
}

// Constants
const ADDRESS = "Unit 18, Bellingham Trading Estate, Catford. SE6 3BX";
const EMAIL = "info@gloryrsvp.co.uk";
const PHONE_TEL = "+4407931320796";
const PHONE_DISPLAY = "+44(0)79 3132 0796";
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;