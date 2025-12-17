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
import About from "./pages/About";
import Media from "./pages/Media";
import Privacy from "./pages/Privacy";
import TermsAndConditions from "./pages/terms-condtion";
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
        <Route path="/enquiry" element={<Enquiry />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/media" element={<Media />} /> 
        <Route path="/privacy" element={<Privacy />} /> 
        <Route path="/terms-condtion" element={<TermsAndConditions />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
