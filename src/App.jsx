import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./home/HeroSection";
import WeatherSection from "./home/WeatherSection";
import Experience from "./home/Experience";
import Packages from "./home/Packages";
import Carousel from "./home/Carousel";
import Enquiry from "./page/Enquiry"; // ✅ import your new page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WeatherSection />
              <Experience />
              <Packages />
              <Carousel />
            </>
          }
        />
        <Route path="/enquiry" element={<Enquiry />} /> {/* ✅ new route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
