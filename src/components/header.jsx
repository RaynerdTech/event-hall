import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Effect to handle background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset scroll on component unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Effect for header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`w-full bg-white z-50 transition-shadow duration-300 ease-in-out sticky top-0 ${
          isScrolled || menuOpen ? "shadow-none" : "shadow-none"
        }`}
      >
        <div
          className={`max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
            isScrolled ? "py-4" : "py-4 md:py-4"
          }`}
        >
          {/* ================= DESKTOP HEADER (UNCHANGED) ================= */}
          <div className="hidden md:flex flex-col">
            <div
              className={`text-center overflow-hidden transition-all duration-300 ease-in-out ${
                isScrolled
                  ? "max-h-0 opacity-0"
                  : "max-h-40 opacity-100 mb-1"
              }`}
            >
              <h1 className="text-3xl md:tracking-[4px]">GLORY RSVP</h1>
              <h3 className="tracking-[0.1px] mt-1 text-[#141011] uppercase text-[14px]">
                LONDON
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1 text-left">
                <h2
                  className={`text-xl transition-opacity duration-300 ease-in-out font-serif ${
                    isScrolled ? "opacity-100" : "opacity-0"
                  }`}
                >
                  GLORY RSVP
                </h2>
              </div>
              <div className="flex-shrink-0">
               <nav className="flex justify-center gap-8  text-[#141011]">
                  <Link to="/" className="nav-link">HOME</Link>
                   <Link to="/about" className="nav-link">ABOUT US</Link>
  <Link to="/packages" className="nav-link">PACKAGES</Link>
  <Link to="/media" className="nav-link">MEDIA</Link>
  <Link to="/contact" className="nav-link">CONTACT US</Link>
</nav>

              </div>
              <div className="flex-1 text-right">
  <div className="flex-1 text-right">
  <button
    onClick={() => (window.location.href = "/enquiry")}
    className="relative text-black px-6 py-3 rounded-[8px] font-light text-[14px] tracking
               border border-[#8B4A63] border-solid
               transition-shadow duration-300 ease-in-out
               shadow-[0_0_0_1px_rgba(139,74,99,1)] hover:shadow-[0_0_0_2px_rgba(55,10,31,1)]"
  >
    ENQUIRE
  </button>
</div>



              </div>
            </div>
          </div>

          {/* ================= MOBILE HEADER (REVISED) ================= */}
          <div className="md:hidden flex items-center justify-between h-[30px]"> {/* Fixed height for mobile header */}
            {/* Left: Hamburger/Close Button and Divider */}
            <div className="flex items-center gap-4">
            
<button
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  className={`relative z-60 h-12 w-12 flex items-center justify-center rounded-[18px] transition-all duration-150 
    ${menuOpen ? "active:ring-2 active:ring-[#8B4A63]" : ""}`}
>
  {menuOpen ? (
    // Close (X) icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M6 18L18 6"
        stroke="#141011"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    // Hamburger icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 5h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 19h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )}
</button>


              {/* Vertical Divider */}
              <div className="h-8 w-px bg-gray-300"></div>
            </div>

            {/* Center: Logo */}
            <div className="flex-grow text-center font-serif"> {/* Adjusted margin to better center */}
              <h2 className="text-[16px]">GLORY RSVP</h2>
             <p className="text-[10px] uppercase tracking-[0.5px]">LONDON</p>

            </div>

            {/* Right: Divider + Enquire Button */}
            <div className="flex items-center gap-4">
              {/* Vertical Divider */}
              <div className="h-8 w-px bg-gray-300"></div>
              <button className=" font-light text-[14px] tracking"  onClick={() => (window.location.href = "/contact")}>
                
                  ENQUIRE
                </button>
            </div>
          </div>
        </div>
        {/* Horizontal Divider for Mobile */}
        {menuOpen && (
  <hr className="md:hidden border-t border-black" />
)}

      </header>
      
      {/* ================= FULLSCREEN MOBILE MENU (REVISED) ================= */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
  {/* 30% White Area */}
  <nav className="flex-[0.2] bg-white flex flex-col items-start justify-center gap-4 text-left text-2xl px-4 pt-[68px] pb-2">
    <Link to="/about" onClick={closeMenu}>ABOUT US</Link>
    <Link to="/packages" onClick={closeMenu}>PACKAGES</Link>
    <Link to="/media" onClick={closeMenu}>MEDIA</Link>
    <Link to="/contact" onClick={closeMenu}>CONTACT US</Link>
  </nav>

  {/* 70% Black Area */}
 <footer className="flex-[0.8] bg-black text-white px-6 py-6 text-left flex flex-col justify-end">
 <div className="flex gap-x-10 text-sm uppercase mb-4">
  <div className="flex flex-col gap-y-2">
    <Link className="font-extralight" to="/our-space" onClick={closeMenu}>Our Space</Link>
    <Link className="font-extralight" to="/faqs" onClick={closeMenu}>FAQs</Link>
  </div>
  
  <div className="flex flex-col gap-y-2">
    <Link className="font-extralight" to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link>
    <Link className="font-extralight" to="/terms" onClick={closeMenu}>Terms & Conditions</Link>
  </div>
</div>


 <div className="mb-4">
  <h5 className="text-sm uppercase font-extralight mb-2">Find Us</h5>
  <div className="flex items-center gap-8">
    {/* Instagram */}
    <a href="#" aria-label="Instagram" className="text-white hover:opacity-80 transition">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.75C0 1.23122 1.23122 0 2.75 0H17.75C19.2688 0 20.5 1.23122 20.5 2.75V17.75C20.5 19.2688 19.2688 20.5 17.75 20.5H2.75C1.23122 20.5 0 19.2688 0 17.75V2.75ZM14.75 10.25C14.75 12.7353 12.7353 14.75 10.25 14.75C7.76472 14.75 5.75 12.7353 5.75 10.25C5.75 7.76472 7.76472 5.75 10.25 5.75C12.7353 5.75 14.75 7.76472 14.75 10.25ZM15.7578 5.75C16.3101 5.75 16.7578 5.30228 16.7578 4.75C16.7578 4.19772 16.3101 3.75 15.7578 3.75H15.7488C15.1965 3.75 14.7488 4.19771 14.7488 4.75C14.7488 5.30228 15.1965 5.75 15.7488 5.75H15.7578Z" fill="white"/>
</svg>
    </a>

    {/* TikTok */}
    <a href="#" aria-label="TikTok" className="text-white hover:opacity-80 transition">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 0C1.73122 0 0.5 1.23122 0.5 2.75V17.75C0.5 19.2688 1.73122 20.5 3.25 20.5H18.25C19.7688 20.5 21 19.2688 21 17.75V2.75C21 1.23122 19.7688 0 18.25 0H3.25ZM13.25 4.25C13.25 3.69772 12.8023 3.25 12.25 3.25C11.6977 3.25 11.25 3.69772 11.25 4.25V12.75C11.25 14.1307 10.1307 15.25 8.75 15.25C7.36929 15.25 6.25 14.1307 6.25 12.75C6.25 11.3693 7.36929 10.25 8.75 10.25C9.3023 10.25 9.75 9.8023 9.75 9.25C9.75 8.6977 9.3023 8.25 8.75 8.25C6.26472 8.25 4.25 10.2647 4.25 12.75C4.25 15.2353 6.26472 17.25 8.75 17.25C11.2353 17.25 13.25 15.2353 13.25 12.75V7.81299C14.1159 8.4052 15.1776 8.75 16.25 8.75C16.8023 8.75 17.25 8.3023 17.25 7.75C17.25 7.19772 16.8023 6.75 16.25 6.75C15.4897 6.75 14.7149 6.46074 14.1402 5.98178C13.5706 5.50714 13.25 4.89642 13.25 4.25Z" fill="white"/>
</svg>
    </a>

    {/* Facebook */}
    <a href="#" aria-label="Facebook" className="text-white hover:opacity-80 transition">
     <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M2.75 0C1.23122 0 0 1.23122 0 2.75V17.75C0 19.2688 1.23122 20.5 2.75 20.5H9.0154L9.0153 12.9995H8.25C7.55964 12.9995 7 12.4398 7 11.7495C7 11.0591 7.55964 10.4995 8.25 10.4995H9.0106L9.0005 7.76205C8.9938 5.96243 10.4508 4.5 12.2504 4.5H15.25C15.9404 4.5 16.5 5.05964 16.5 5.75C16.5 6.44036 15.9404 7 15.25 7H12.2504C11.8351 7 11.4989 7.33748 11.5005 7.75278L11.5106 10.4995H13.2499C13.9402 10.4995 14.4999 11.0591 14.4999 11.7495C14.4999 12.4398 13.9402 12.9995 13.2499 12.9995H11.5153L11.5154 20.5H17.75C19.2688 20.5 20.5 19.2688 20.5 17.75V2.75C20.5 1.23122 19.2688 0 17.75 0H2.75Z" fill="white"/>
</svg>
    </a>

    {/* LinkedIn */}
    <a href="#" aria-label="LinkedIn" className="text-white hover:opacity-80 transition">
     <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 0C1.73122 0 0.5 1.23122 0.5 2.75V17.75C0.5 19.2688 1.73122 20.5 3.25 20.5H18.25C19.7688 20.5 21 19.2688 21 17.75V2.75C21 1.23122 19.7688 0 18.25 0H3.25ZM7.00898 4.61914C7.00898 5.3095 6.44934 5.86914 5.75898 5.86914H5.75C5.05964 5.86914 4.5 5.3095 4.5 4.61914C4.5 3.92878 5.05964 3.36914 5.75 3.36914H5.75898C6.44934 3.36914 7.00898 3.92878 7.00898 4.61914ZM5.75117 6.75C6.30345 6.75 6.75117 7.19772 6.75117 7.75V15.25C6.75117 15.8023 6.30345 16.25 5.75117 16.25C5.19888 16.25 4.75117 15.8023 4.75117 15.25V7.75C4.75117 7.19772 5.19888 6.75 5.75117 6.75ZM9.751 6.75C10.3033 6.75 10.751 7.19772 10.751 7.75V7.78513C11.3393 7.44479 12.0224 7.25 12.751 7.25C14.9601 7.25 16.751 9.0409 16.751 11.25V15.25C16.751 15.8023 16.3033 16.25 15.751 16.25C15.1987 16.25 14.751 15.8023 14.751 15.25V11.25C14.751 10.1454 13.8555 9.25 12.751 9.25C11.6464 9.25 10.751 10.1454 10.751 11.25V15.25C10.751 15.8023 10.3033 16.25 9.751 16.25C9.1987 16.25 8.751 15.8023 8.751 15.25V7.75C8.751 7.19772 9.1987 6.75 9.751 6.75Z" fill="white"/>
</svg>
    </a>
  </div>
</div>


  <p className="text-[12px] text-white">&copy; 2025 Glory. All rights reserved.</p>
</footer>

</div>

      </div>
    </>
  );
};

export default Header;