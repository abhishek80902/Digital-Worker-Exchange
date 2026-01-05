// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import WageCalculatorSection from "../components/sections/WageCalculatorSection";
import WorkersEmployersSection from "../components/sections/WorkersEmployersSection";
import StatsStrip from "../components/sections/StatsStrip";
import Footer from "../components/layout/Footer";
import ChatVoiceWidget from "../components/layout/ChatVoiceWidget";
import ZeroCommissionRibbon from "../components/sections/ZeroCommissionRibbon";


const Home = () => {
  return (
    <div className="bg-[#f7fafc] min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ZeroCommissionRibbon />
      <WageCalculatorSection />
      <WorkersEmployersSection />
      <StatsStrip />
      <Footer />
      {/* Floating chat + voice assistant */}
      <ChatVoiceWidget />
    </div>
  );
};

export default Home;

