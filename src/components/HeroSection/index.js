import React, { useState } from "react";
// import Video from "../../videos/video_07_small.mp4";
import {
  HeroContainer,
  HeroBackground,
  // VideoBackground,
  HeroContent,
  HeroTitle,
  HeroP,
  HeroBtnWrapper,
  HeroBtnLink,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBackground>
        {/* <VideoBackground autoPlay loop muted src={Video} type="video/mp4" /> */}
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
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
