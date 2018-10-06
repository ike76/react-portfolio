import React, { Component, Fragment } from "react";
import { Popup, Divider } from "semantic-ui-react";
import ReactFitText from "react-fittext";

import styled from "styled-components";
import NavBar from "./NavBar";

const FullWindowDiv = styled.div`
  height: ${p => p.windowHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderCenter = styled.header`
  display: grid;
  justify-items: center;
`;
const ResponsiveHeadline = styled.h2`
  font-size: 48px;
  text-align: center;
  width: 100%;
  font-family: "Open Sans", sans !important;
  color: white !important;
  font-weight: 600 !important;
`;
const HeaderList = styled.ul`
  list-style: none;
  text-align: center;
  color: #ffffff90;
  & li {
    font-size: 20px;
    line-height: 2rem;
  }
  & .highlight {
    color: #3be9ff;
  }
`;
const SocialIcons = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  font-size: 2rem;
  padding: 0;
`;
export default class Header extends Component {
  render() {
    const { windowHeight } = this.props;
    return (
      <Fragment>
        <NavBar />
        <FullWindowDiv windowHeight={windowHeight}>
          <HeaderCenter>
            <ResponsiveHeadline>Brian Eichenberger</ResponsiveHeadline>
            <HeaderList>
              <li className="highlight">Full Stack Web Developer</li>
              <li>Designer</li>
              <li>Life Long Learner</li>
              <li>Singer</li>
              <li>Creative Problem Solver</li>
            </HeaderList>
            <div style={{ width: "80%" }}>
              <Divider inverted />
            </div>
            <SocialIcons>
              {technologies.map(obj => (
                <li key={obj.deviconText}>
                  <Popup
                    key={obj.deviconText}
                    trigger={
                      <i
                        className={`devicon-${obj.deviconText}`}
                        style={{ color: "#dadada" }}
                      />
                    }
                    content={obj.description}
                    basic
                    inverted
                    position="bottom center"
                    style={{ border: "1px grey solid" }}
                  />
                </li>
              ))}
            </SocialIcons>
          </HeaderCenter>
        </FullWindowDiv>
      </Fragment>
    );
  }
}
const technologies = [
  { deviconText: "html5-plain-wordmark", description: "HTML" },
  { deviconText: "css3-plain-wordmark", description: "CSS" },
  {
    deviconText: "javascript-plain",
    description: "JavaScript"
  },
  { deviconText: "mongodb-plain", description: "MongoDB" },
  { deviconText: "express-original", description: "Express" },
  { deviconText: "nodejs-plain", description: "NodeJS" },
  { deviconText: "react-original", description: "React" },
  { deviconText: "photoshop-line", description: "Photoshop" },
  {
    deviconText: "illustrator-line",
    description: "Illustrator"
  }
];
