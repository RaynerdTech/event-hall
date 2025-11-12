"use client";
import React, { useRef, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef(null); // ✅ fixed for JSX
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dcembbzmm/video/upload/IMG_2860_chry5q.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />

      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" />

      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="absolute md:top-14 md:right-14 right-4 top-4 z-[2] bg-black/40 hover:bg-black/60 p-2 rounded-full transition"
        aria-label="Toggle sound"
      >
        {isMuted ? (
          // 🔇 Mute icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289L20 10.5858L21.2929 9.29289C21.6834 8.90237 22.3166 8.90237 22.7071 9.29289C23.0976 9.68342 23.0976 10.3166 22.7071 10.7071L21.4142 12L22.7071 13.2929C23.0976 13.6834 23.0976 14.3166 22.7071 14.7071C22.3166 15.0976 21.6834 15.0976 21.2929 14.7071L20 13.4142L18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071C16.9024 14.3166 16.9024 13.6834 17.2929 13.2929L18.5858 12L17.2929 10.7071C16.9024 10.3166 16.9024 9.68342 17.2929 9.29289Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3594 3.34172C14.6002 3.47318 14.75 3.72565 14.75 4V20C14.75 20.2744 14.6002 20.5268 14.3594 20.6583C14.1186 20.7898 13.8252 20.7792 13.5944 20.6309L6.77972 16.25H4C2.48122 16.25 1.25 15.0188 1.25 13.5V10.5C1.25 8.98122 2.48122 7.75 4 7.75H6.77972L13.5944 3.36912C13.8252 3.22076 14.1186 3.21025 14.3594 3.34172Z" fill="white"/>
</svg>
        ) : (
          // 🔊 Sound icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3594 3.34172C14.6002 3.47318 14.75 3.72565 14.75 4V20C14.75 20.2744 14.6002 20.5268 14.3594 20.6583C14.1186 20.7898 13.8252 20.7792 13.5944 20.6309L6.77972 16.25H4C2.48122 16.25 1.25 15.0188 1.25 13.5V10.5C1.25 8.98122 2.48122 7.75 4 7.75H6.77972L13.5944 3.36912C13.8252 3.22076 14.1186 3.21025 14.3594 3.34172Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3935 8.20503C16.8326 7.87003 17.4601 7.95439 17.7951 8.39347C18.5519 9.38539 19.0001 10.6418 19.0001 12.0001C19.0001 13.3584 18.5519 14.6147 17.7951 15.6067C17.4601 16.0457 16.8326 16.1301 16.3935 15.7951C15.9544 15.4601 15.8701 14.8326 16.2051 14.3935C16.6991 13.7461 17.0001 12.915 17.0001 12.0001C17.0001 11.0852 16.6991 10.2541 16.2051 9.60664C15.8701 9.16756 15.9544 8.54004 16.3935 8.20503Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3247 6.26245C19.7321 5.8895 20.3646 5.91738 20.7376 6.32472C22.1408 7.8573 23 9.83243 23 12C23 14.1676 22.1408 16.1427 20.7376 17.6753C20.3646 18.0826 19.732 18.1105 19.3247 17.7376C18.9174 17.3646 18.8895 16.732 19.2625 16.3247C20.3608 15.1251 21 13.621 21 12C21 10.379 20.3609 8.87497 19.2625 7.67529C18.8895 7.26796 18.9174 6.6354 19.3247 6.26245Z" fill="white"/>
</svg>
        )}
      </button>
    </section>
  );
};

export default HeroSection;
