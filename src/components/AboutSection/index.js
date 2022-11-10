import React from "react";
import { ButtonToCv } from "../ButtonElements";
import { MdOpenInNew } from "react-icons/md";

import {
  Container,
  Column1,
  Column2,
  AboutWrapper,
  AboutRow,
  TextWrapper,
  TopLine,
  AboutHeading,
  AboutSubtitle,
  Link,
  BtnWrap,
  ImgWrap,
  Img,
} from "./AboutElements";

const AboutSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  topLine2,
  headLine2,
  darkText,
  buttonLabel1,
  urlLink,
  linkText,
  img,
  alt,
  dark,
  cvUrl,
}) => {
  return (
    <>
      <Container lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <AboutHeading lightText={lightText}>{headLine}</AboutHeading>
                <AboutSubtitle darkText={darkText}>
                  I have an MA degree in Media Art and before I worked in
                  marketing, archive digitization, data handling and
                  researching, made freelance web and graphic designs, and
                  organized NGO projects.
                  <br />
                  <br />
                  It was more than a year ago when I decided to change my
                  workpath and achieve specific knowledge in web development. So
                  I made my big step.
                  <br />
                  <br />
                  After quitting my job I attended &#160;
                  <Link
                    href={urlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    dark={dark ? 1 : 0}
                  >
                    {linkText}
                  </Link>
                  's Junior Front-End course. Like I'm enthusiastic about
                  "making things work" and have the desire to create amazing
                  things from scratch, afterall choosing the Front-End was more
                  than evident for me.
                  <br />
                  <br />
                  There I have learned that building beautiful visual
                  experiences and turning them interactive is a very complex
                  workflow. Since then I have the perpetual feeling, that more I
                  understand, more questions I have. Finally beeing devoted and
                  decided helps me to make the magic happen.
                  <br />
                  <br />
                  So here I am, ready for opportunities to become an efficient
                  part of your team where I can start my developer career!
                  Please feel free to take a look at my CV to find out more
                  about me.
                </AboutSubtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
              <br />
              <TextWrapper style={{ paddingLeft: "30px" }}>
                <TopLine
                  // style={{color: "#010606" }}
                  lightText={lightText}
                >
                  {topLine2}
                </TopLine>
                <AboutHeading
                  style={{
                    fontSize: "18px",
                    color: "#f8f8f8",
                    marginBottom: "36px",
                  }}
                >
                  {headLine2}
                </AboutHeading>

                <BtnWrap>
                  <ButtonToCv
                    as="a"
                    href={cvUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    {buttonLabel1} &#160;
                    <MdOpenInNew />
                  </ButtonToCv>
                </BtnWrap>
              </TextWrapper>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </Container>
    </>
  );
};

export default AboutSection;
