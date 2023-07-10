import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="#about" smooth onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="#project_06" smooth onClick={toggle}>
            DevProjects
          </SidebarLink>
          <SidebarLink to="#other" smooth onClick={toggle}>
            OtherStuff
          </SidebarLink>
          <SidebarLink
            as="a"
            href="https://drive.google.com/file/d/15DsYf33fh9e81BFS2JLPvMu6gtlgz_np/view?usp=sharing"
            target="_blank"
            alt="Iuga Laura CV"
            onClick={toggle}
          >
            CV
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
