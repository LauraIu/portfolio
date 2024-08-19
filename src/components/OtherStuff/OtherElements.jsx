import styled from "styled-components";

export const OtherContainer = styled.section`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background: #f8f8f8;

  @media screen and (max-width: 768px) {
    min-height: 900px;
    padding: 80px 0 50px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 100px 0 30px 0;
  }
`;

export const OtherWrapper = styled.div`
max-width: 1100px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 16px;
align-items: center;
margin: 0 auto;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
    
}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

export const OtherCard = styled.div`
  background: #010606;
  color: #27bce5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  max-height: 350px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    // background-color: #27bce5;
    cursor: pointer;
  }
`;
export const OtherIcon = styled.img`
  height: 180px;
  width: 180px;
  margin-bottom: 10px;
  border: 1px solid #27bce5;
  border-radius:2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

export const OtherH1 = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  margin-bottom: 64px;
  padding: 20px 30px 20px 30px;
  color: #27bce5;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 32px;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
    margin-bottom: 0;
  }
`;


export const OtherH2 = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #27bce5;

  &:hover {color: #27bce5;}
`;

export const OtherP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: red;
  margin-bottom: 8px;
`;
