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
          <SidebarLink to="#project_04" smooth onClick={toggle}>
            DevProjects
          </SidebarLink>
          <SidebarLink to="#other" smooth onClick={toggle}>
            OtherStuff
          </SidebarLink>
          <SidebarLink
            as="a"
            href="https://drive.google.com/file/d/1gjv0SxTNjn4MBQPVQN4hXT9qtrj9xSqn/view?usp=sharing"
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
