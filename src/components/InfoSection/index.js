import React from "react";
import { ButtonToUrl, ButtonToUrl2 } from "../ButtonElements";
import { MdOpenInNew } from "react-icons/md";
// import { FaArrowAltCircleDown } from "react-icons/fa";

import {
  Container,
  Column1,
  Column2,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  TextLink,
  BtnWrap,
  ImgWrap,
  Img,
  // NextProjectLinkWrapper,
  // NextProjectLink,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  // toLink,
  // forwardLinkText,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  description2,
  buttonLabel1,
  buttonLabel2,
  urlLink,
  linkText,
  img,
  alt,
  dark,
  primary,
  projectUrl1,
  projectUrl2,
  visibility,
  visibility2,
}) => {
  return (
    <>
      <Container lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>
                  {description}
                  <TextLink
                    href={urlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    dark={dark ? 1 : 0}
                  >
                    {linkText}
                  </TextLink>
                  {description2}
                </Subtitle>

                <BtnWrap>
                  <ButtonToUrl
                    as="a"
                    href={ projectUrl1 }
                    target="_blank"
                    rel="noopener"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}  
                    visibility={visibility}
                  >
                    {buttonLabel1} &#160;
                    <MdOpenInNew/>
                  </ButtonToUrl>
                  <ButtonToUrl2
                    as="a"
                    href={projectUrl2}
                    target="_blank"
                    rel="noopener"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    alt={alt} 
                    visibility2={visibility2 ? 1 : 0}
                  >
                    {buttonLabel2} &#160; 
                    <MdOpenInNew/>
                  </ButtonToUrl2>
                  {/* TODO: Put back the button if the github links are needed */}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
            {/* <NextProjectLinkWrapper>
              <NextProjectLink to={toLink} smooth>
                
                <FaArrowAltCircleDown />&#160;{forwardLinkText} 
              </NextProjectLink>
            </NextProjectLinkWrapper> */}
          </InfoRow>
        </InfoWrapper>
      </Container>
    </>
  );
};

export default InfoSection;

