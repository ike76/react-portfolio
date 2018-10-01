import React, { Component, Fragment } from "react";
import { Popup } from "semantic-ui-react";
import ReactFitText from "react-fittext";

import styled from "styled-components";
import NavBar from "./NavBar";

const HeaderCenter = styled.header`
  height: calc(100vh - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ResponsiveHeadline = styled.h1`
  font-size: 61px;
  width: 100%;
  font-family: "Open Sans", sans;
  color: white;
  font-weight: 600;
`;
const HeaderList = styled.ul`
  list-style: none;
  & li {
    font-family: "Libre Baskerville", serif;
    font-size: 21px;
  }
  & .highlight {
    color: #7cc8ff;
  }
`;
export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <HeaderCenter>
          <NavBar />
          <div className="row banner">
            <div className="banner-text">
              <ReactFitText>
                <ResponsiveHeadline>Brian Eichenberger</ResponsiveHeadline>
              </ReactFitText>
              <h3>
                <HeaderList>
                  <li className="highlight">Full Stack Web Developer.</li>
                  <li>Musician</li>
                  <li>Life long learner</li>
                  <li>Singer</li>
                  <li className="highlight">Creative Problem Solver</li>
                </HeaderList>
              </h3>
              <hr />
              <ul className="social">
                {technologies.map(obj => (
                  <li>
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
              </ul>
            </div>
          </div>
        </HeaderCenter>
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
