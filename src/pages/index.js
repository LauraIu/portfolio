import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  PortfolioPage,
  SocialMediaDashboard,
  BookTable,
  InteractiveRatingComponent,
  
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import {About} from "../components/AboutSection/AboutData";
import OtherStuff from "../components/OtherStuff";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection {...About}/>
      <InfoSection {...PortfolioPage} />
      <InfoSection {...BookTable} />
      <InfoSection {...SocialMediaDashboard} />
      <InfoSection {...InteractiveRatingComponent} />
      <OtherStuff />

      <Footer />
    </>
  );
};

export default Home;
