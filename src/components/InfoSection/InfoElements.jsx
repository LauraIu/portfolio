import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

export const Container = styled.section`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f8f8f8" : "#487c6c")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  height: 800px;
  z-index: 1;
  margin: auto;
  padding: 8px 24px;
  /* border: 1px solid blue; */

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  /* border: 1px solid yellow; */

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  /* border: 1px solid yellow; */

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const InfoRow = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0px;

  /* border: 1px solid blue; */
`;

export const TopLine = styled.p`
  color: #e5b507;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  /* border: 1px solid green; */
`;

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 24px;
  color: ${({ lightText }) => (lightText ? "#f8f8f8" : "#487c6c")};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TextLink = styled.a`
  color: ${({ darkText }) => (darkText ? "#010606" : "#010606")}; 
  
  &:hover {
    background-color: #e5b507;
    padding: 0 1px;
    text-decoration: none;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  max-height: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 20 0 20px 0;
  padding-right: 0;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    padding-top: 24px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 0;
  }
`;

//arrow link to next project
export const NextProjectLinkWrapper = styled.div`
  position: absolute;
  margin-top: 420px;
  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    margin-top: 700px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 0.2rem;
    margin-top: 720px;
  }
`;

export const NextProjectLink = styled(Link)`
  display: flex;
  color: #010606;
  text-decoration: none;

  font-size: 14px;
  line-height: 14px;

  &:hover {
    color: #e5b507;
    transition: 0.3s ease-out;
  }
`;
