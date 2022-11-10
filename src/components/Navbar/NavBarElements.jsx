import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;

  height: 80px;
  margin-top: -80px;
  top: 0;
  z-index: 10;
 
  /* background: #010606; */
  background: ${({ scrollNav }) => (scrollNav ? "#010606" : "transparent")};

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 80px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;

  margin-left: 24px;

  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #728775;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

    color: #728775;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #e5b507;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  /* border: 1px solid red; */
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;
  color: #728775;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #e5b507;
  }

  &:hover{
    color:#e5b507;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  white-space: nowrap;
  padding: 5px 15px;
  color: #728775;
  font-size: 16px;
  text-decoration: none;
  outline: none;
  border: 1px solid #728775;
  background: transparent;
  border-radius: 2px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #728775;
    color: #010606;
  }
`;


