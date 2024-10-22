import React, { useState } from "react";
import Video from "../../videos/video_09.mp4";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroTitle,
  HeroP,
  HeroBtnWrapper,
  HeroBtnLink,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
// import { NavLinks } from "../Navbar/NavBarElements";
// import CvPdf from "../../document/IugaLAURA_FrontendUI_CV_2024.pdf";
// import MixedFolioPdf from "../../document/Laura Iuga_mixedPortfolio.pdf";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroTitle>Hi there!</HeroTitle>
        <HeroP>
        I am a front-end developer open to gaining new experiences and working for or with you. Allow me to introduce myself and showcase my skills and projects.{" "}
        </HeroP>
        <HeroBtnWrapper>
          <HeroBtnLink
            to="#about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth="true"
            spy="true"
            duration={500}
            exact="true"
            offset={30}
          >
            Get to know me better {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroBtnLink>
        </HeroBtnWrapper>
          {/* <NavLinks
                as="a"
                // href="https://drive.google.com/file/d/15DsYf33fh9e81BFS2JLPvMu6gtlgz_np/view?usp=sharing"
                // href="https://drive.google.com/file/d/19Ot01uGkTKxePsCqlYPLTb-dczfqXDQV/view?usp=drive_link"
                // https://drive.google.com/file/d/1qIV_J-kgtgKwS4jeGW-KXC6___ITpc_8/view?usp=drive_link
                href={CvPdf}
                require
                target="_blank"
                alt="Iuga Laura CV pdf"
              >
                CV.pdf
              </NavLinks>
          <NavLinks
                as="a"
                href={MixedFolioPdf}
                require
                target="_blank"
                alt="Iuga Laura Mixed Portfolio Pdf"
              >
                Mixed UI & Graphic portfolio.pdf
              </NavLinks> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
