import React from "react";
import { ButtonToCv } from "../ButtonElements";
import { MdOpenInNew } from "react-icons/md";

import {
  Container,
  Column1,
  Column2,
  AboutWrapper,
  AboutRow,
  TopLine,
  TextWrapper,
  TextWrapper2,
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
                  I’m a career changer with web and graphic design, data
                  management, and communication experience. I have an MA degree
                  in Media Arts and before I worked in marketing, in archive
                  digitization, made freelance websites and graphic designs,
                  organized some little projects for my NGO.
                  <br />
                  <br />
                  It was more than a year ago when I decided to change my
                  work path and achieve specific knowledge in web development. So
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
                  things from scratch, after all choosing the Front-End was more
                  than evident for me.
                  <br />
                  <br />
                  There I have learned that building beautiful visual
                  experiences and turning them into interactive ones is a very
                  complex workflow. Since then I have had the perpetual feeling,
                  that the more I understand, the more questions I have. Finally
                  being devoted and decided helps me to make the magic happen.
                  <br />
                  <br />
                  So here I am, ready for opportunities to become an efficient
                  part of your team where I can start my developer career!
                  Please feel free to find out more about me.
                </AboutSubtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
              <br />
              <TextWrapper2>
                <TopLine
                  // style={{color: "#010606" }}
                  lightText={lightText}
                >
                  {topLine2}
                </TopLine>

                {/* <p>
                  I'm useing <strong>HTML</strong>, <strong>CSS</strong> and{" "}
                  <strong>JavaScript</strong> for coding. <strong>React</strong>{" "}
                  is my prefered UI development library and for version
                  controlling <strong>Github</strong> is my tool. I handle{" "}
                  <strong>Adobe'</strong>s visual, audio-video editors.
                  <br />
                  I'm patient, detail oriented and open minded, I guess ;-)
                </p> */}
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
              </TextWrapper2>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </Container>
    </>
  );
};

export default AboutSection;
