import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { sections } from "../../GeneralConfig/index";
import { WaypointContext } from "../../App";

const NavLink = styled.li`
  display: inline-block;
  // border: 1px white solid;
  padding: 3px 13px;
  line-height: 32px;
  text-decoration: none;
  text-align: left;
  color: salmon;
  transition: color 0.2s ease-in-out;
`;
const Astyled = styled.a`
  color: ${p => (p.active ? "salmon" : "white")} !important;
`;
const NavBarStyled = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;

  z-index: 10000;
`;
const NavBar = () => {
  return (
    <WaypointContext.Consumer>
      {({ currentSection }) => {
        return (
          <NavBarStyled>
            <ul>
              {sections.map(section => (
                <NavLink key={section.link}>
                  <Astyled
                    active={section.link.slice(1) === currentSection}
                    href={section.link}
                  >
                    {section.text}
                  </Astyled>
                </NavLink>
              ))}
            </ul>
          </NavBarStyled>
        );
      }}
    </WaypointContext.Consumer>
  );
};

export default NavBar;
