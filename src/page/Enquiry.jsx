import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../style/phoneinput-custom.css";

const GuestOptions = [
  "Under 50",
  "50 - 100",
  "100 - 150",
  "150 - 200",
  "200 - 300",
  "300+",
];

const CustomDropdown = ({ label, name, value, onChange, options }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-[#000] font-roboto text-[14px] font-medium leading-[20px] tracking-[0.1px] mb-2">
        {label} <span className="text-[#93000A] ml-[-2px]">*</span>
      </label>

    <button
  type="button"
  onClick={() => setOpen(!open)}
  className={`w-full flex justify-between items-center rounded-md border border-[#7676801F] hover:border-[black] focus:border-[black] px-2 py-4 text-[14px] bg-white outline-none
  shadow-[0_1px_2px_rgba(16,24,40,0.05)] font-plex
  ${value ? "text-black" : "text-[#968F90]"} focus:text-black`}
>
  {value || "Expected guest count"}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.750025 4.95911e-05L12.7501 0C13.0534 0 13.3269 0.18273 13.443 0.46298C13.5591 0.74324 13.4949 1.06583 13.2804 1.28033L7.28035 7.2803C6.98755 7.5732 6.51265 7.5732 6.21975 7.2803L0.219694 1.28038C0.0051944 1.06588 -0.0589756 0.7433 0.0571144 0.46304C0.173194 0.18278 0.446675 4.95911e-05 0.750025 4.95911e-05Z"
      fill="#141B34"
    />
  </svg>
</button>


      {open && (
        <ul
          className="absolute left-0 mt-0 w-[300px] bg-white z-10 max-h-600 overflow-y-auto border border-[#E5E7EB] rounded-b-md py-[12px]"
          style={{ boxShadow: "0 1px 2px 0 rgba(16, 24, 40, 0.05)" }}
        >
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange({ target: { name, value: opt } });
                setOpen(false);
              }}
              className="px-4 py-2 text-[14px] hover:bg-gray-100 cursor-pointer"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function EnquiryForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subscribe: false,
    eventType: "",
    guestExpectation: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({
      ...s,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email.trim());

  const isFormValid = () => {
    return (
      form.firstName.trim() &&
      form.lastName.trim() &&
      isValidEmail(form.email) &&
      form.phone.trim() &&
      form.eventType.trim() &&
      form.guestExpectation.trim() &&
      form.message.trim()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    console.log("Enquiry submitted:", form);
    alert("Form submitted! Check console for output.");
  };

  return (
    <section className="w-full py-0 md:py-12 md:px-2 px-0">
 <div className="max-w-5xl mx-auto bg-[#F9F9F9] md:rounded-[80px] rounded-[40px] border border-gray-100 overflow-hidden">
  <div className="w-full p-4 md:p-14 py-[40px] scroll-frame">


        <div className="text-center md:mb-[40px] mb-[24px]">
          <h2 className="text-[28px] font-serif md:mb-0 mb-1 text-[#1E1E1E]">
            ENQUIRY FORM
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#1E1E1E] mt-1 max-w-[400px] mx-auto text-center font-normal leading-[20px] md:leading-[24px] tracking-[0.25px] md:tracking-[1.8px]">
            Contact our dedicated team of professionals at Glory to discuss your
            special day
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* PERSONAL INFORMATION */}
          <div className="md:mb-[40px]">
            <h3 className="text-[22px] font-bold tracking-normal mb-[16px] md:text-left text-center text-[#1E1E1E]">
              PERSONAL INFORMATION
            </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-18">

              {/* First Name */}
              <div>
                <label className="block text-[#344054] font-inter text-[14px] font-medium leading-[20px] tracking-[0.1px] mb-2">
                  First Name <span className="text-[#93000A] ml-[-2px]">*</span>
                </label>

                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={onChange}
                  placeholder="Adekunle"
                  className="w-full rounded-md border border-[#7676801F] px-2 py-4 text-sm focus:border-black outline-none"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-[#344054] font-inter text-[14px] font-medium leading-[20px] tracking-[0.1px] mb-2">
                  Last Name <span className="text-[#93000A] ml-[-2px]">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={onChange}
                  placeholder="Maercel"
                  className="w-full rounded-md border border-[#7676801F] px-2 py-4 text-sm focus:border-black outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#344054] font-inter text-[14px] font-medium leading-[20px] tracking-[0.1px] mb-2">
                  Email Address{" "}
                  <span className="text-[#93000A] ml-[-2px]">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="adekunlemaercel@gmail.com"
                  className="w-full rounded-md border border-[#7676801F] px-2 py-4 text-sm focus:border-black outline-none
             placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[1.8px]"
                />
              </div>

              {/* ✅ Phone Number with Flag Dropdown */}
              <div>
                <label className="block text-[#344054] font-inter text-[14px] font-medium leading-[20px] tracking-[0.1px] mb-2">
                  Phone Number{" "}
                  <span className="text-[#93000A] ml-[-2px]">*</span>
                </label>
                <div className="phone-wrapper">
                  <PhoneInput
                    country={"gb"}
                    value={form.phone}
                    onChange={(phone) => setForm((s) => ({ ...s, phone }))}
                    inputClass="custom-phone-input !w-full !text-sm"
                    buttonClass="custom-flag-button"
                    dropdownClass="country-list"
                    disableDropdown={false}
                  />
                </div>
              </div>

              {/* Newsletter Checkbox */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 text-[#000] font-inter text-[12px] font-normal leading-[16px] tracking-[0.4px]">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={form.subscribe}
                    onChange={onChange}
                    className="w-[18px] h-[18px] rounded-[1px] border-2 border-[#44474F] cursor-pointer
               hover:bg-[rgba(85,0,0,0.05)] transition-colors duration-200 ease-in-out focus:outline-none"
                  />
                  Subscribe to our newsletter
                </label>
              </div>
            </div>
          </div>

          {/* EVENT DETAILS */}
          <div className="mb-6">
            <h3 className="text-[22px] font-bold tracking-normal mb-[16px] md:text-left text-center mt-[40px]">
              EVENT DETAILS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-18">
              <div>
                <label className="block text-[#000000] font-inter text-[14px] font-medium leading-[20px] tracking-[0.1px] mb-2">
                  Event Type
                </label>
                <input
                  name="eventType"
                  value={form.eventType}
                  onChange={onChange}
                  placeholder="e.g Wedding"
                  className="w-full rounded-md border border-[#7676801F] px-2 py-4 text-sm focus:border-black outline-none"
                />
              </div>
              <CustomDropdown
                label="Guest Expectations"
                name="guestExpectation"
                value={form.guestExpectation}
                onChange={onChange}
                options={GuestOptions}
              />

              <div className="md:col-span-2">
                <label className="block text-[#000] font-inter text-[14px] font-medium leading-[20px] tracking-[0.1px] mb-2">
                  What can we help you with?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows="10"
                  placeholder="Share a brief description of your event..."
                  className="w-full rounded-[8px] border border-[#7676801F] px-2 py-4 text-sm outline-none resize-none
             placeholder:text-[#968F90] placeholder:text-[16px] placeholder:tracking-[1.8px] placeholder:font-thin
             focus:border-black focus:placeholder:text-black
             shadow-[0_1px_2px_rgba(16,24,40,0.05)] bg-white"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`px-8 py-4 rounded-[8px] text-sm tracking-[0.25px] text-[14px] ${
                isFormValid()
                  ? "bg-[#8B5E3C] text-white"
                  : "bg-[#7676801F] text-[#B1A9AA] cursor-not-allowed"
              }`}
            >
              SUBMIT FORM
            </button>
          </div>
        </form>
        </div>
        </div>
    </section>
  );
}
