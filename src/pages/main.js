import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  CivilRadioArchive,
  ModernTeka,
  Nyksund,
  AcaciaHostel,
  PortfolioPage,
  SocialMediaDashboard,
  BookTable,
  InteractiveRatingComponent,
} from "../components/InfoSection/Data";
import AboutSection from "../components/AboutSection";
import { About } from "../components/AboutSection/AboutData";
import OtherStuff from "../components/OtherStuff";
import Footer from "../components/Footer";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="main">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <HeroSection />
      <AboutSection {...About} />
      <InfoSection {...ModernTeka}/>
      <InfoSection {...Nyksund}/>
      <InfoSection {...AcaciaHostel}/>
      <InfoSection {...CivilRadioArchive} />
      <InfoSection {...PortfolioPage} />
      <InfoSection {...BookTable} />
      <InfoSection {...SocialMediaDashboard} />
      <InfoSection {...InteractiveRatingComponent} />
      <OtherStuff />

      <Footer />
    </div>
  );
};

export default Main;
