import React from "react";
import { ButtonToUrl } from "../ButtonElements";
import { MdOpenInNew } from "react-icons/md";

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
  Link,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
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
                  <Link
                    href={urlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    dark={dark ? 1 : 0}
                  >
                    {linkText}
                  </Link>
                  {description2}
                </Subtitle>

                <BtnWrap>
                  <ButtonToUrl
                    as="a"
                    href={projectUrl1}
                    target="_blank"
                    rel="noopener"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel1} &#160;
                    <MdOpenInNew />
                  </ButtonToUrl>
                  <ButtonToUrl
                    as="a"
                    href={projectUrl2}
                    target="_blank"
                    rel="noopener"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    alt={alt}
                  >
                    {buttonLabel2} &#160;
                    <MdOpenInNew />
                  </ButtonToUrl>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </Container>
    </>
  );
};

export default InfoSection;
