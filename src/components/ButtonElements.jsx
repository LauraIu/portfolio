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
    background: ${({ primary }) => (primary ? "#e5b507" : "#5f9b89")};
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
  border: ${({ primary }) =>
    primary ? "1px solid #010606" : "1px solid #5f9b89"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  visibility: ${({ visibility }) => visibility ? "visible" : "hidden" };

  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 16px;
    white-space: normal;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#e5b507" : "#5f9b89")};
    border: ${({ primary }) =>
      primary ? "1px solid #e5b507" : "1px solid #5f9b89"};
  }
`;

export const ButtonToUrl2 = styled.button`
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
  border: ${({ primary }) =>
    primary ? "1px solid #010606" : "1px solid #5f9b89"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  visibility: ${({ visibility2 }) => visibility2 ? "visible" : "hidden" };

  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 16px;
    white-space: normal;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#e5b507" : "#5f9b89")};
    border: ${({ primary }) =>
      primary ? "1px solid #e5b507" : "1px solid #5f9b89"};
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
    font-size: 14px;
    margin-bottom: 16px;
    white-space: normal;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #487c6c;
    border: 1px solid #010606;
  }
`;
