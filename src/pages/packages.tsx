import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HiveTabComponent() {
  const [activeIndex, setActiveIndex] = useState(1); // 0: Select, 1: Signature, 2: Supreme
  
  const themeBorder = "border-[#8B4A63]";
  const textColor = "text-[#4a4a4a]";

  const packages = [
    {
      id: 0,
      title: "Glory Select",
      img: "/left.jpg",
      options: ["1. WITH CHAIRS & TABLES (180 capacity)", "2. WITHOUT TABLES(300 capacity)"],
      includes: "VENUE, CHAIRS, TABLES, MOBILE BAR, FOOD STATION, DJ BOOTH, ON-SITE TEAM (Glory representatives and parking attendants - this does not include security).",
      decor: "THIS DOES PACKAGE NOT INCLUDE DECOR.",
    },
    {
      id: 1,
      title: "Glory Signature",
      img: "/middle.jpg",
      options: ["1. 15 TABLES (CAPACITY OF 150 PERSONS)"],
      includes: "VENUE, CHAIRS, TABLES, MOBILE BAR, FOOD STATION, DJ BOOTH, KITCHEN ACCESS, ON-SITE EVENT TEAM.",
      decor: "TABLE CLOTH, CUTLERY, TUMBLERS, NAPKINS,CHARGER PLATES, CENTRE PIECES, PLATFORM/STAGE, LOVE SEAT/SOFA,CAKE TABLE, WHITE DRAPES OR GOLD BACKDROP ON-SITE TEAM.",
    },
    {
      id: 2,
      title: "Glory Supreme",
      img: "/right.jpg",
      options: ["1. WITH CHAIRS & TABLES (180 capacity)", "2. WITHOUT TABLES 300 capacity)"],
      includes: "VENUE, CHAIRS, TABLES, MOBILE BAR, FOOD STATION, DJ BOOTH, ON-SITE TEAM (Glory representatives and parking attendants - this does not include security).",
      decor: "TABLE CLOTH, CUTLERY, TUMBLERS, NAPKINS, CHARGER PLATES, CENTRE PIECES, PLATFORM/ STAGE, LOVE SEAT/SOFA, CAKE TABLE, WHITE DRAPES OR GOLD BACKDROP ON-SITE TEAM.",
      extraHeading: "ADDITIONS (AT A COST)",
      extraParagraph: "BALLOONS, MEDIA SCREEN, UPLIGHTERS, DANCEFLOOR, SEATING PLAN"
    }
  ];

  const getPackageInSlot = (slotOffset: number) => {
    const index = (activeIndex + slotOffset + packages.length) % packages.length;
    return packages[index];
  };

  const handleNavigate = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev - 1 + packages.length) % packages.length);
    } else {
      setActiveIndex((prev) => (prev + 1) % packages.length);
    }
  };

  const handleSwipe = (direction: string) => {
    if (window.innerWidth <= 1150) {
      if (direction === 'left') handleNavigate('right');
      if (direction === 'right') handleNavigate('left');
    }
  };

    return (
        <div className="w-full">
      <section
        className="w-full h-screen bg-cover bg-center bg-left md:bg-center"
        style={{ backgroundImage: "url('/packagebackground.jpg')" }}
      ></section>

    <div className="min-h-screen bg-white p-4 md:p-12 font-serif overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-[28px] md:text-[32px] text-center uppercase tracking-[2px] md:tracking-[4px] mb-[22px] text-black mt-8 md:mt-0 font-bold">
          Package Options
        </h1>

        <div className="relative">
          
          {/* --- TOP ROW: IMAGE SLOTS --- */}
          <div className="flex items-end justify-center min-[1150px]:justify-between relative z-20 mb-[-1px]">
            
            {/* LEFT SLOT */}
            <div 
              onClick={() => handleNavigate('left')}
              className="group flex flex-col items-center flex-1 pb-4 opacity-60 min-[1150px]:opacity-100 scale-90 min-w-[100px] min-[1150px]:min-w-[320px] min-[1150px]:cursor-pointer transition-transform"
            >
               <AnimatePresence mode="wait">
                  <motion.div
                    key={getPackageInSlot(-1).id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col items-center w-full"
                  >
                    <div className="w-80 h-[280px] overflow-hidden rounded-[20px]">
                        <img 
                            src={getPackageInSlot(-1).img} 
                            alt="prev" 
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                        />
                    </div>
                    <h3 className="mt-4 h-5 uppercase tracking-widest font-bold text-xs min-[1150px]:text-sm">
                      {getPackageInSlot(-1).title}
                    </h3>
                  </motion.div>
               </AnimatePresence>
            </div>

            {/* CENTER SLOT */}
            <div className={`group relative bg-white ${themeBorder} border border-b-0 rounded-t-[20px] overflow-hidden z-30 min-w-[300px] md:min-w-[400px]`}>
              <div className="flex flex-col items-center w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={packages[activeIndex].id}
                    drag={window.innerWidth <= 1150 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -50) handleSwipe('left');
                      if (info.offset.x > 50) handleSwipe('right');
                    }}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col items-center w-full max-[1150px]:cursor-grab max-[1150px]:active:cursor-grabbing"
                  >
                    <div className="w-full h-[300px] overflow-hidden">
                        <img 
                            src={packages[activeIndex].img} 
                            alt="active"
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <h3 className="my-4 h-6 uppercase tracking-widest font-bold text-lg">
                        {packages[activeIndex].title}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT SLOT */}
            <div 
              onClick={() => handleNavigate('right')}
              className="group flex flex-col items-center flex-1 pb-4 opacity-60 min-[1150px]:opacity-100 scale-90 min-w-[100px] min-[1150px]:min-w-[320px] min-[1150px]:cursor-pointer transition-transform"
            >
               <AnimatePresence mode="wait">
                  <motion.div
                    key={getPackageInSlot(1).id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col items-center w-full"
                  >
                    <div className="w-80 h-[280px] overflow-hidden rounded-[20px]">
                        <img 
                            src={getPackageInSlot(1).img} 
                            alt="next" 
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                        />
                    </div>
                    <h3 className="mt-4 h-5 uppercase tracking-widest font-bold text-xs min-[1150px]:text-sm">
                      {getPackageInSlot(1).title}
                    </h3>
                  </motion.div>
               </AnimatePresence>
            </div>
          </div>

          {/* --- MAIN CONTENT BOX --- */}
          <div className={`relative ${themeBorder} border rounded-none p-8 md:p-12 z-10 text-center bg-white`}>
            {/* ROW 1: OPTIONS */}
            <div className="mb-10">
              <h2 className="uppercase tracking-[2px] font-bold text-[24px] mb-2 text-black text-center">Options</h2>
              <div key={activeIndex}>
                {packages[activeIndex].options.map((opt, i) => (
                  <p key={i} className={`text-[14px] md:text-[16px] tracking-[0.25px] md:tracking-[1.8px] font-plex text-center ${textColor}`}>{opt}</p>
                ))}
              </div>
            </div>

            {/* ROW 2: THREE-COLUMN DETAILS - UPDATED FOR PERFECT CENTERING */}
            <div className="flex flex-col min-[1150px]:flex-row justify-center items-start gap-8 md:gap-12 w-full">
              <section className="flex-1 w-full">
                <h3 className="uppercase tracking-[2px] font-bold text-[24px] mb-2 text-black text-center">Includes</h3>
                <p className={`text-[14px] md:text-[16px] tracking-[0.25px] md:tracking-[1.8px] font-plex text-center leading-[20px] md:leading-[24px] ${textColor}`}>
                  {packages[activeIndex].includes}
                </p>
              </section>

              <section className="flex-1 w-full">
                <h3 className="uppercase tracking-[2px] font-bold text-[24px] mb-2 text-black text-center">Decor</h3>
                <p className={`text-[14px] md:text-[16px] tracking-[0.25px] md:tracking-[1.8px] font-plex text-center leading-[20px] md:leading-[24px] ${textColor}`}>
                  {packages[activeIndex].decor}
                </p>
              </section>

              <section className="flex-1 w-full">
                <h3 className="uppercase tracking-[2px] font-bold text-[24px] mb-2 text-black text-center">Deposit</h3>
                <p className={`text-[14px] md:text-[16px] tracking-[0.25px] md:tracking-[1.8px] font-plex text-center leading-[20px] md:leading-[24px] ${textColor}`}>
                  A £500 (REFUNDABLE UPON FULFILLMENT OF TERMS AND CONDITIONS AND TEAM INSPECTION).
                </p>
              </section>
            </div>

            {/* NEW ROW 3: Only for Glory Supreme */}
            {activeIndex === 2 && (
              <div className="mt-4 text-center border-t pt-10 border-[#a87b8b]/20">
                <h3 className="uppercase tracking-[2px] font-bold text-[24px] mb-2 text-black text-center">
                  {packages[activeIndex].extraHeading}
                </h3>
                <p className={`text-[14px] md:text-[16px] tracking-[0.25px] md:tracking-[1.8px] font-plex text-center max-w-2xl mx-auto leading-relaxed ${textColor}`}>
                  {packages[activeIndex].extraParagraph}
                </p>
              </div>
            )}
          </div>
          
        </div>
      </div>
            </div>
            </div>
  );
}