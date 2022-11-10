import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

export const FooterContainer = styled.div`
  background-color: #010606;
`;

export const FooterWrap = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  /* border:1px solid red; */
`;

export const FooterLinksItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  text-align: center;
  box-sizing: border-box;
  color: #728775;

  @media screen and (max-width: 420px) {
    margin: auto 0;
    padding: 10px auto;
  }
`;

export const FooterLink = styled(Link)`
  color: #728775;
  text-decoration: none;
  margin: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #e5b507;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 480px) {
    margin: 0.2rem;
  }
`;

// contact button
export const FooterContactLink = styled(Link)`
  white-space: nowrap;
  padding: 5px 15px;
  margin-top: 20px;
  font-size: 16px;
  text-decoration: none;
  outline: none;
  color: #010606;
  background: #e5b507;
  border: 1px solid #e5b507;

  border-radius: 2px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #728775;
    background: transparent;
    border: 1px solid #728775;
  }
`;

// social media div

export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
`;

export const SocialLogo = styled(Link)`
  color: #728775;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover {
    color: #e5b507;
  }
`;

export const WebsiteRights = styled.small`
  color: #728775;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #728775;
  font-size: 24px;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    color: #e5b507;
  }
`;
