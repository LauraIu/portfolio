import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksItems,
  FooterLink,
  FooterContactLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElemnets";

// import { IconContext } from "react-icons";

const Footer = () => {
  // Scrolling back to top
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    /* set the icons color */
    // <IconContext.Provider value={{ color: "#f9f9f9"}}>
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksItems>
          <FooterLink to="#home" smooth>
            Home
          </FooterLink>
          <span>|</span>
          <FooterLink to="#about" smooth>
            About
          </FooterLink>
          <span>|</span>
          <FooterLink to="#projects" smooth>
            DevProjects
          </FooterLink>
          <span>|</span>
          <FooterLink to="#other" smooth>
            OtherStuff
          </FooterLink>
          <span>|</span>
          <FooterLink as="a" href="https://drive.google.com/file/d/15I9F8IkBgV1MccfbUQFCytKqvhkHgHrW/view?usp=sharing" target="_blank" alt="Iuga Laura CV">
            CV
          </FooterLink>
        </FooterLinksItems>

        <FooterContactLink to="/contact">Contact me</FooterContactLink>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              IuLa
            </SocialLogo>
            <WebsiteRights>
              IuLa&copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://github.com/LauraIu" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="https://www.facebook.com/laura.iuga.33" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/in/laura-iuga" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
    // </IconContext.Provider>
  );
};

export default Footer;
