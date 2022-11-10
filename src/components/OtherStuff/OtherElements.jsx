import styled from "styled-components";

export const OtherContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const OtherWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  max-height: 350px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const OtherIcon = styled.img`
  height: 180px;
  width: 180px;
  margin-bottom: 10px;
  border: 1px solid #728775;
  border-radius:2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

export const OtherH1 = styled.h1`
  font-size: 40px;
  color: #728775;
  line-height: 1.1;
  margin-bottom: 64px;
  padding: 20px 30px 40px 30px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const OtherH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #728775;
`;

export const OtherP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: red;
  margin-bottom: 8px;
`;
