import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.section`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0.2) 0%, transparent 70%);
    z-index: 2;
  }
  /* border: 1px solid blue; */
`;

export const HeroBackground = styled.div`
position: absolute;
top:0;
left:0;
bottom:0;
right:0;
width: 100%
height:100%;
overflow: hidden;
`;

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #010606;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  color: #fcfcfc;
  font-size: 36px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fcfcfc;
  font-size: 22px;
  font-weigth:100;
  text-align: center;
  letter-spacing: 1px;
  max-width: 600px;


  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const HeroBtnLink = styled(Link)`
display: flex;
align-items: center;
  white-space: nowrap;
  padding: 5px 15px 7px 15px;
  color: #fcfcfc;
  font-size: 16px;
  text-decoration: none;
  outline: none;
  border: 1px solid #fcfcfc;
  background: transparent;
  border-radius: 2px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fcfcfc;
    border: 1px solid #fcfcfc;
    font-size: 26px;
    padding: 7px 17px 7px 17px;
    background: rgb(6, 165, 173, 0.5);
  }
`;


export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 26px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

