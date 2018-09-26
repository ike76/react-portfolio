import React from "react";
import styled from "styled-components";

const ProjectDescription = styled.div`
  margin-left: 1rem;
`;

const Education = () => {
  return (
    <div className="row item">
      <div className="twelve columns">
        <h3>Thinkful</h3>
        <p className="info">
          Full Stack JavaScript Code Camp <span>•</span>{" "}
          <em className="date">September 2018</em>
        </p>
        <p>Full-time six-month course for aspiring web developers.</p>
        <p>Worked with a mentor to create a series of capstone projects:</p>
        <ul>
          <li>
            • <em>A front-end to leverage a public API</em>.
            <ProjectDescription>
              I built
              <a href="#"> FlightSync </a>- a tool to search flights from
              multiple locations, all arriving at the same location at the same
              time of day.
            </ProjectDescription>
          </li>
          <li>
            •{" "}
            <em>
              Front-end in HTML and vanilla JavaScript, back-end with MongoDB
              and Node
            </em>
            .
            <ProjectDescription>
              I built
              <a href="#"> TripSync </a>- a tool for a tour manager to keep
              track of where everyone is at a given time, and how everyone gets
              from A to B.
            </ProjectDescription>
          </li>
          <li>
            • <em>Front-end in React, back-end with MongoDB/Node.</em>{" "}
            <ProjectDescription>
              I built <a href="#">HomeComp</a> - a tool to help home buyers keep
              track of their favorites.
            </ProjectDescription>
          </li>
          <li>
            • <em>Front-end in React, back-end with Google Firestore.</em>{" "}
            <ProjectDescription>
              I built <a href="#">12Scales</a> - a course whereby a beginning
              piano student can learn all 12 Major Scales in a short period of
              time.
            </ProjectDescription>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
