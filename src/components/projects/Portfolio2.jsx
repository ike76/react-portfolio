import React, { Component } from "react";
import Waypoint from "react-waypoint";
import styled from "styled-components";
import { Image, Button, Popup, Divider } from "semantic-ui-react";
import piano from "./projectImages/piano.jpg";
import house from "./projectImages/house.jpg";
import airplanes from "./projectImages/airplanes.jpg";
import bizTravelers from "../../images/bizTravelers.jpg";
import {
  css3,
  express,
  html,
  jquery,
  mongo,
  node,
  react,
  redux,
  firestore,
  javascript
} from "../../images/techIcons/index";

const TechIconDiv = styled.div`
  transition: 0.5s all;
  :hover {
    transform: scale(1.1);
  }
`;
export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  justify-content: center;
  justify-items: center;
  transition: 1s all;
  ${p =>
    p.active
      ? `opacity: 1;
    transform: scale(1);`
      : ` opacity: .3;
    transform: scale(.8);`} img.tech-image {
    max-width: 40px;
    max-height: 40px;
    margin-left: 1rem;
  }
`;

const ProjectDisplayBox = styled.section`
  display: grid;
  position: relative;
  z-index: 2;
  grid-template-areas: "pic header" "pic description";
  grid-template-columns: 150px 1fr max-content;
  grid-template-rows: max-content 1fr;
  ${p =>
    p.active
      ? `box-shadow: 5px 4px 3px 0px #bdbdbda6;`
      : `box-shadow: 1px 1px 2px 0px #8888888a;`};
  img.project-image {
    transition: 1s all;
    @media (min-width: 701px) {
      ${p =>
        p.active
          ? `
        transform: rotate(-5deg);
        opacity: 1;
        `
          : `
        transform: rotate(0deg) translateX(-1rem);
        opacity: 0;
        `} grid-area: pic;
      position: relative;
      top: 20px;
      left: -21px;
      border-radius: 3px;
      box-shadow: 1px 1px 2px 0px #8888888a;
    }
    @media (max-width: 700px) {
      display: none !important;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas: "header" "description";
  }
  margin-bottom: 2rem;
  background: ${p => (p.active ? "#fff" : " #ffffff50")};
  transition: 1s all;
  /* :hover {
    background: #fff;
  } */
  box-shadow: 1px 1px 5px #c3c3c3a6;
  padding: 8px;
  border-radius: 4px;
  h2 {
    margin: 5px auto 1rem;
    color: #3a8da9;
    /* text-align: center; */
  }
  h3 {
    color: #505050;
    font-weight: lighter;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .description {
    grid-area: description;
    transition: all 1s;
    opacity: ${p => (p.active ? "1" : ".5")};
    /* max-height: 20rem; */
    padding: 1rem 5px;
  }
  .header {
    grid-area: header;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    padding: 1rem;
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
  .buttons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: 1s all;
    ${p =>
      p.active
        ? `
     opacity: 1;
     `
        : `
     transform: translateX(1rem);
     opacity: .5;
     `};
  }
`;

class ProjectDisplay extends Component {
  state = {
    topIn: false,
    bottomIn: false
  };
  render() {
    let { img, header, info, liveLink, githubLink } = this.props;
    const { description, challenges, techStack } = info;
    const active = this.state.topIn && this.state.bottomIn;
    return (
      <ProjectDisplayBox active={active}>
        <Image src={img} alt="" size="small" className="project-image" />
        <div className="description">
          <header className="header">
            <h2>{header.toUpperCase()}</h2>
            <div />
            <div className="buttons">
              <Button
                icon="github"
                labelPosition="right"
                size="small"
                content="GitHub"
                href={githubLink}
                target="_blank"
              />
              <Button primary size="small" href={liveLink} target="_blank">
                Live
              </Button>
            </div>
          </header>
          <Divider />
          <Waypoint
            onEnter={() => {
              this.setState({ topIn: true });
            }}
            onLeave={() => {
              this.setState({ topIn: false });
            }}
          />
          {description}
          <h3>Challenges:</h3>
          {challenges}
          <Waypoint
            onEnter={() => {
              this.setState({ bottomIn: true });
            }}
            onLeave={() => {
              this.setState({ bottomIn: false });
            }}
          />

          <h3>Tech Used:</h3>
          <SkillsList active={active}>
            {techStack.map(tech => (
              <TechIconDiv>
                <Popup
                  basic
                  size="tiny"
                  trigger={
                    <img
                      src={techImgs[tech]}
                      alt={tech}
                      className="tech-image"
                    />
                  }
                  content={tech}
                  position="bottom center"
                />
              </TechIconDiv>
            ))}
          </SkillsList>
        </div>
      </ProjectDisplayBox>
    );
  }
}

export default class Portfolio extends Component {
  render() {
    return (
      <section>
        <h1>Projects</h1>
        <ProjectDisplay
          img={piano}
          header="12 Scales"
          info={twelveScalesDescription}
          liveLink={"http://www.12scales.com"}
          githubLink={"https://github.com/ike76/scales-12"}
        />
        <ProjectDisplay
          img={house}
          header="HomeComp"
          info={homeCompDescription}
          liveLink={"https://homecomp.netlify.com/"}
          githubLink={"https://github.com/ike76/home-comp"}
        />

        <ProjectDisplay
          img={bizTravelers}
          header="TripSync"
          info={tripSyncDescription}
          liveLink={"https://tripsync.herokuapp.com/"}
          githubLink={"https://github.com/ike76/TripSync"}
        />
        <ProjectDisplay
          img={airplanes}
          header="FlightSync"
          info={flightSyncDesription}
          liveLink={"https://ike76.github.io/flightsync/"}
          githubLink={"https://github.com/ike76/flightsync"}
        />
      </section>
    );
  }
}

const twelveScalesDescription = {
  description: (
    <section>
      <p>
        I designed <b>12 Scales</b> to help beginning piano students quickly
        learn all 12 Major Scales.
      </p>
      <ul>
        <li>Graphics and interactive animations support each concept.</li>
        <li>Playable piano-keyboards test concepts along the way.</li>
        <li>Progress and test completion is tracked with Google Firestore.</li>
      </ul>
    </section>
  ),
  challenges: (
    <ul>
      <li>Built interactive piano from SVG images</li>
      <li>
        Set up custom interactions for each piano - depending on student's
        answer the keyboard responds with sounds, different colored keys, dots,
        emojis, etc.
      </li>
    </ul>
  ),
  techStack: ["React", "Redux", "Firestore", "HTML", "CSS"]
};

const homeCompDescription = {
  description: (
    <section>
      <p>
        <b>HomeComp</b> is a tool to help house-hunters organize their top
        candidates.
      </p>
      <p>
        In addition to the usual sorting metrics (price, size) the user is able
        to sort homes by:
      </p>
      <ul>
        <li>
          Distance from any location. (<em>travel time to work</em>)
        </li>
        <li>
          Any custom attribute. (<em>price per sq-ft, age of roof, etc.</em>)
        </li>
        <li>
          Difficult-to-quantify qualities such as{" "}
          <em>best kitchen, nicest neighborhood, etc</em>.
        </li>
      </ul>
    </section>
  ),
  challenges: (
    <ul>
      <li>Allowing users to add / change / remove photos from each listing.</li>
      <li>
        Creating redux reducers / MongoDB schemas to handle <b>multiple </b>
        data shapes. (User can invent any number of attributes, at any time,
        which every house listing then must be ready to handle / sort.)
      </li>
    </ul>
  ),
  techStack: ["React", "Redux", "NodeJS", "Express", "MongoDB", "HTML", "CSS"]
};

const tripSyncDescription = {
  description: (
    <section>
      <p>
        Group travel can become complicated and difficult to manage when
        travelers' itineraries weave in and out of eachother.
      </p>
      <p>
        For example, <em>when two people</em> share a taxi to the airport, while{" "}
        <em>three</em> others take trains from separate stations, then{" "}
        <em>all five</em> take the same flight, but stay in different hotels etc
        etc.
      </p>
      <p>
        <b>TripSync</b> helps manage the complexity of multiple criss-crossing
        itineraries.
      </p>
      <ul>
        <li>Easily add or remove travelers to each leg of the itinerary.</li>
        <li>View each person's consolidated itinerary.</li>
      </ul>
    </section>
  ),
  challenges: (
    <ul>
      <li>
        Vanilla JavaScript (no front-end framework): Updating info became
        difficult to manage as interactions between models became more
        complicated.
      </li>
    </ul>
  ),
  techStack: ["NodeJS", "Express", "MongoDB", "HTML", "CSS", "JavaScript"]
};
const flightSyncDesription = {
  description: (
    <section>
      <p>
        Booking air itineraries from several locations to land at the same
        location, at the same time can be a difficult task.
      </p>
      <p>
        Often one or two people end up with unnecessarily long connections, or
        options that work fine time-wise, but are prohibitively expensive.
      </p>
      <p>
        FlightSync gives you a visual representation of ALL the travelers'
        options, so you can easily choose the mixture of flights that gives the
        best collective flying experience.
      </p>
    </section>
  ),
  challenges: (
    <ul>
      <li>
        Massaging & sorting out the data object returned from the flight-search
        API.
      </li>
      <li>Learning ChartJS to display flight results on a grid.</li>
    </ul>
  ),
  techStack: ["HTML", "CSS", "JavaScript"]
};

const techImgs = {
  HTML: html,
  CSS: css3,
  MongoDB: mongo,
  Express: express,
  NodeJS: node,
  React: react,
  jQuery: jquery,
  Redux: redux,
  Firestore: firestore,
  JavaScript: javascript
};
