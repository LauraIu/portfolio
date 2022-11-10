import React, { useState } from "react";
import { useEffect } from "react";
// import { IconContext } from "react-icons";
import { animateScroll as scroll } from "react-scroll/modules";
import { FaBars } from "react-icons/fa"; /* https://react-icons.github.io/react-icons/search?q=bars*/
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const Navbar = ({ toggle }) => {
  // Set Navbar background transparent on scroll
  const [scrollNav, setSrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setSrollNav(true);
    } else {
      setSrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // Scrolling back to top
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* Set the icons color */}
      {/* <IconContext.Provider value={{ color: "#f9f9f9" }}>  */}
      {/* On scroll set the Nav background-color to transparent */}
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="#home" onClick={toggleHome}>
            IuLa
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="#about"
                smooth
                duration={500}
               
                exact="true"
                offset={0}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="#projects"
                smooth
                duration={500}
               
                exact="true"
                offset={0}
              >
                DevProjects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="#other"
                smooth
                duration={500}
                
                exact="true"
                offset={0}
              >
                OtherStuff
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                as="a" href="https://drive.google.com/file/d/15I9F8IkBgV1MccfbUQFCytKqvhkHgHrW/view?usp=sharing" target="_blank"
                alt="Iuga Laura CV"
              >
                CV
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contact">Contact me</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
