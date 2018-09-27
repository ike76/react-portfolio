import React, { Component, Fragment } from "react";
import { Popup } from "semantic-ui-react";
import NavBar from "./NavBar";
export default class componentName extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <NavBar />
          <div className="row banner">
            <div className="banner-text">
              <h3>
                <span>Hi.</span> I'm
              </h3>
              <h1 className="responsive-headline">Brian Eichenberger</h1>
              <h3>
                <span>Full Stack Web Developer.</span> Musician. Life long
                learner. Singer. Creative <span>Problem Solver</span>.
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
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
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
