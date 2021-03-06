import React from "react";
import styled from "styled-components";
import { scrollTo } from "../header/NavBar.jsx";
import { WaypointContext } from "../../App";
const ProjectDescription = styled.div`
  margin-left: 1rem;
  a {
    cursor: pointer;
  }
`;

const Education = () => {
  return (
    <WaypointContext.Consumer>
      {values => (
        <div className="row item">
          <div className="twelve columns">
            <h3>Thinkful</h3>
            <p className="info">
              Full Stack JavaScript Code Camp <span>•</span>{" "}
              <em className="date">September 2018</em>
            </p>
            <p>Full-time six-month course for aspiring web developers.</p>
            <p>
              Covered the basics of writing semantic HTML, CSS, and creating
              interactive single page apps with JavaScript and jQuery.
            </p>
            <p>
              Learned how to persist user data with an Express / MongoDB back
              end.
            </p>
            <p>
              Learned how to use React to create more flexible, performant and
              maintainable code.
            </p>

            <p>Created a series of capstone projects:</p>
            <ol>
              <li>
                <em>Front-end only leverage a public API</em>.
                <ProjectDescription>
                  FlightSync - a tool to search flights from multiple locations,
                  all arriving at the same location at the same time of day.
                </ProjectDescription>
              </li>
              <li>
                <em>
                  Front-end in HTML and JavaScript / jQuery, back-end with
                  MongoDB and Node
                </em>
                .
                <ProjectDescription>
                  <a onClick={() => scrollTo("tripsync", -50)}>TripSync</a>- a
                  tool for a tour manager to keep track of where everyone is at
                  a given time, and how everyone gets from A to B.
                </ProjectDescription>
              </li>
              <li>
                <em>Front-end in React, back-end with MongoDB/Node.</em>{" "}
                <ProjectDescription>
                  <a onClick={() => scrollTo("homecomp", -50)}>HomeComp</a> - a
                  tool to help home buyers keep track of their favorites.
                </ProjectDescription>
              </li>
            </ol>
          </div>
        </div>
      )}
    </WaypointContext.Consumer>
  );
};

export default Education;
