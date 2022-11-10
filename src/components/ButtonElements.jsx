import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 2px;
  background: ${({ primary }) => (primary ? "transparen" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "20px 48px" : "10px 30px")};
  color: ${({ dark }) => (dark ? "#e5b507" : "#f8f8f8")};
  font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
  text-decoration: none;
  outline: none;
  border: 1px solid #e5b507;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#e5b507" : "#728775")};
    color: #010606;
  }
`;

export const ButtonToUrl = styled.button`
  border-radius: 2px;
  background: ${({ primary }) => (primary ? "transparent" : "transparent")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "10px 30px" : "5px 15px")};
  margin-right: 16px;
  color: ${({ dark }) => (dark ? "#010606" : "#010606")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  text-decoration: none;
  outline: none;
  /* border: none; */
  border: ${({ primary }) => (primary ? "1px solid #010606" : "1px solid #728775")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    margin-bottom: 16px;
    
    /* button text wrap */
    white-space: normal;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#e5b507" : "#728775")};
    border: ${({ primary }) => (primary ? "1px solid #e5b507" : "1px solid #728775")};
  }
`;

export const ButtonToCv = styled.button`
  border-radius: 2px;
  background: #e5b507;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "10px 30px" : "5px 15px")};
  margin-right: 16px;
  color: #010606;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  text-decoration: none;
  outline: none;
  border: 1px solid #e5b507;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    margin-bottom: 16px;
 
    white-space: normal;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #728775;
    border: 1px solid #010606;
  }
`;




// import styled from "styled-components";
// import { Link } from "react-scroll";

// export const Button = styled(Link)`
//   border-radius: 50px;
//   background: ${({ primary }) => (primary ? "#0fc7db" : "#010606")};
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
//   color: ${({ dark }) => (dark ? "#010606" : "#f9f9f9")};
//   font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
//   text-decoration: none;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: ${({ primary }) => (primary ? "#f9f9f9" : "#0fc7db")};
//   }
// `;

// export const ButtonToUrl = styled.button`
//   border-radius: 50px;
//   background: ${({ primary }) => (primary ? "#0fc7db" : "#010606")};
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
//   margin-right: 16px;
//   color: ${({ dark }) => (dark ? "#010606" : "#f9f9f9")};
//   font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
//   text-decoration: none;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease-in-out;

//   @media screen and (max-width: 480px) {
//     margin-bottom: 16px;
//   }

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: ${({ primary }) => (primary ? "#f9f9f9" : "#0fc7db")};
//   }
// `;