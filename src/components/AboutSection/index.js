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
  // headLine2,
  description,
  darkText,
  // buttonLabel1,
  buttonLabel2,
  urlLink,
  linkText,
  img,
  alt,
  dark,
  // cvUrl,
  email,
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
                  I have a background in web and graphic design, data management, and communication. I hold an MA degree in Media Arts and have previously worked in marketing, archive digitization, and as a freelance web and graphic designer. I have also organized small projects for my NGO.
                  <br />
                  <br />
                  <strong>Transition:</strong>
                  <br />
                  In 2021 I made the decision to change my career path and focus on web development. I took the initiative to attend&#160;
                  <Link
                    href={urlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    dark={dark ? 1 : 0}
                  >
                    {linkText}
                  </Link>
                  's Junior Front-End Developer course, where I gained specific knowledge in web development. I am enthusiastic about "making things work" and have a strong desire to create amazing experiences from scratch. Front-End development was a natural choice for me.
                  <br />
                  <br />
                  Please feel free to explore my portfolio and get a better understanding of my work. To learn more about my qualifications, please refer to my CV.
                {/* </AboutSubtitle>
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
                <AboutSubtitle> */}
                  <br />
                  <br />
                  Thank you for your time, and I look forward to discussing potential opportunities to contribute to your team and kickstart my developer career!
                </AboutSubtitle>
                <BtnWrap>
                  <ButtonToCv
                    as="a"
                    href={email}
                    target="_blank"
                    rel="noopener"
                    >
                    {buttonLabel2} &#160;
                    <MdOpenInNew />
                  </ButtonToCv>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
              <br />
              <TextWrapper2>
                <TopLine
                  style={{ fontSize: "16px" }}
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
                <p 
                  style={{
                    fontSize: "14px",
                    color: "#010606",
                    marginBottom: "36px",
                  }}>
                    <strong>Front-End Coding:</strong> HTML, CSS, JavaScript, Typescript, Styled-components, Tailwind.
                    <br /><br />  
                    <strong>Frameworks and technologies:</strong> ReactJs, NextJs, Hygraph, Vercel, GitHub.
                    <br /><br /> 
                    <strong>Tools:</strong> VsCode, Adobe Creative, Figma, Canva, Miro.
                    <br /><br /> 
                    <strong>Design Thinking:</strong> wireframing, problemsolving, UX design.
                    <br /><br />  
                    <strong>Soft skills:</strong> Strong communication and collaboration skills, empathy and critical thinking.
                </p>
                {/* <AboutHeading
                  style={{
                    fontSize: "14px",
                    color: "#f8f8f8",
                    marginBottom: "36px",
                  }}
                >
                  {headLine2}<br />  
                </AboutHeading> */}

                {/* <BtnWrap>
                  <ButtonToCv
                    as="a"
                    href={cvUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    {buttonLabel1} &#160;
                    <MdOpenInNew />
                  </ButtonToCv>
                </BtnWrap> */}
              </TextWrapper2>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </Container>
    </>
  );
};

export default AboutSection;
