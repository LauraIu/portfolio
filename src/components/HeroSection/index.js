import React, { useState } from "react";
import Video from "../../videos/video_07_small.mp4";
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
          I am a Front-End Developer open to explore new experiences working for
          or with You!{" "}
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
            offset={-30}
          >
            Get to know me better {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroBtnLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
