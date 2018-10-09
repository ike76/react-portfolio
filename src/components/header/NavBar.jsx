import React from "react";
import styled from "styled-components";
import { scroller } from "react-scroll";
import { sections } from "../../GeneralConfig/index";
import { WaypointContext } from "../../App";

const NavLink = styled.div`
  cursor: pointer;
  display: inline-block;
  padding: 3px 13px;
  line-height: 32px;
  text-decoration: none;
  text-align: left;
  transition: color 0.2s ease-in-out;
  font-weight: bold;
  text-shadow: 0px 0px 4px #00000085;
`;
const Astyled = styled.a`
  color: ${p => (p.active ? "salmon" : "white")} !important;
`;
const NavBarStyled = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background: rgba(0, 0, 0, 0.87);
  text-align: center;
  z-index: 10000;
`;
export const scrollTo = (name, offset) => {
  console.log("name", name);
  scroller.scrollTo(name, {
    duration: 800,
    delay: 0,
    smooth: true,
    offset: offset || 0
  });
};
const NavBar = () => {
  return (
    <WaypointContext.Consumer>
      {({ currentSection }) => {
        return (
          <NavBarStyled>
            {sections.map(section => (
              <NavLink key={section.link}>
                <Astyled
                  active={section.link.slice(1) === currentSection}
                  // href={section.link}
                  onClick={() => scrollTo(section.name)}
                >
                  {section.text}
                </Astyled>
              </NavLink>
            ))}
          </NavBarStyled>
        );
      }}
    </WaypointContext.Consumer>
  );
};

export default NavBar;
