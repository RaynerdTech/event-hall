import React, { useEffect, useState } from "react";

const WeatherSection = () => {
  const [weather, setWeather] = useState(null);

  const API_KEY = "25c6622658504679bee3705073387a7f";
  const CITY = "London";

  // Fetch weather
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();
        console.log("Weather API response:", data); // 👈 See what’s returned
        if (data && data.main) setWeather(data);
      } catch (err) {
        console.error("Weather fetch failed:", err);
      }
    };
    fetchWeather();
  }, []);

  // London date & time
  const [londonTime, setLondonTime] = useState("");
  const [londonDate, setLondonDate] = useState("");

  useEffect(() => {
    const updateLondonTime = () => {
      const now = new Date();

      const formattedDate = now.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Europe/London",
      });

      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Europe/London",
      });

      setLondonDate(formattedDate);
      setLondonTime(formattedTime);
    };

    updateLondonTime();
    const timer = setInterval(updateLondonTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white text-black md:py-8 py-4 md:rounded-b-[80px] rounded-b-[50px] text-center border-b border-[rgba(0,0,0,0.30)]">

     <h3
  className="text-[24px] md:text-[36px] uppercase font-cormorant font-bold md:tracking-[4px] tracking-[2px]">
  Glory RSVP
</h3>

      <p className="text-[16px] mt-1 mb-4">London</p>
     

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-sm md:text-base font-medium">
        {/* Date */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-[22px] md:text-[28px]">
  {londonDate ? `${londonDate.split(" ")[0]} ${londonDate.split(" ")[1]}` : "--"}
</h3>

          <p className="text-[16px]">
            {londonDate ? londonDate.split(" ")[2] : ""}
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[88.091px] h-[1px] border-t border-black"></div>
        <div className="block md:hidden w-[88.091px] h-[1px] border-t border-black"></div>

        {/* Time */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-[22px] md:text-[28px]">{londonTime || "--:--"}</h3>
          <p className="text-[16px]">London Time</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[88.091px] h-[1px] border-t border-black"></div>
        <div className="block md:hidden w-[88.091px] h-[1px] border-t border-black"></div>

        {/* Temperature */}
        <div className="flex flex-col items-center">
  <h3 className="font-bold text-[22px] md:text-[32px] flex items-start">
    {weather ? (
      <>
        <span className=" text-[28px] relative  top-[0px] font-bold">
          {String(Math.round(weather.main.temp))[0]}
        </span>
        <span className="text-[28px]">
          {String(Math.round(weather.main.temp)).slice(1)}
        </span>
        <sup className="relative top-[18px] -left-[2px] text-[14px]">°</sup>
      </>
    ) : (
      "--"
    )}
  </h3>
  <p className="text-[16px]">Temperature</p>
</div>


      </div>
    </section>
  );
};

export default WeatherSection;
