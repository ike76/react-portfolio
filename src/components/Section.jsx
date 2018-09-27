import React from "react";
import { Container } from "semantic-ui-react";
import Waypoint from "react-waypoint";
import styled from "styled-components";
import { WaypointContext } from "../App";
const ContentBox = styled.div`
  border: 1px red solid;
  width: 100%;
  //   padding: 4rem;
`;
const SectionBox = styled.div`
  background: ${p => p.color};
  //   padding: 2rem 0;
`;

const Section = ({
  color,
  handleWaypointEnter,
  handleWaypointExit,
  name,
  children
}) => {
  return (
    <WaypointContext.Consumer>
      {({ wpEnter, wpExit }) => (
        <Waypoint
          topOffset="100px"
          bottomOffset="100px"
          onEnter={() => {
            wpEnter(name);
          }}
          onLeave={() => {
            wpExit(name);
          }}
        >
          <SectionBox color={color} id={name}>
            {children}
          </SectionBox>
        </Waypoint>
      )}
    </WaypointContext.Consumer>
  );
};

export default Section;
