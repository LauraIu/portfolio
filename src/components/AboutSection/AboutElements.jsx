import styled from "styled-components";

export const Container = styled.section`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f8f8f8" : "#259bbc")};
  padding: 40px 0;

  @media screen and (min-width: 1440px) {
    padding: 40px 0 0 0;
  }

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  height: auto;
  z-index: 1;
  margin: auto;
  padding: 8px 24px;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 40px 15px 0 15px;
  grid-area: col1;
  /* border: 1px solid yellow; */

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 40px 15px 0 15px;
  grid-area: col2;
  /* border: 1px solid yellow; */

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const AboutRow = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0px;
`;

export const TextWrapper2 = styled.div`
  max-width: 540px;
  padding: 0 0 0 30px;

  @media screen and (max-width: 400px) {
    padding: 0;
  }
  `;

export const TopLine = styled.p`
  color: #f8f8f8;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  /* border: 1px solid green; */
`;

export const AboutHeading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 20px;
  color: ${({ lightText }) => (lightText ? "#f8f8f8" : "#487c6c")};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const AboutSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#010606")};
`;

export const Link = styled.a`
  color: ${({ darkText }) => (darkText ? "#010606" : "#010606")};

  &:hover {
    background-color: #f8f8f8;
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
`;
