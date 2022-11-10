import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f8f8f8" : "#728775")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 120px 24px 80px 24px;
  justify-content: center;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  /* border: 1px solid yellow; */
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  /* border: 1px solid yellow; */
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

export const AboutHeading = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f8f8f8" : "#728775")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#010606")};
`;

export const Link = styled.a`
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
`;
