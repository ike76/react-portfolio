import React, { Component, Fragment } from "react"
import Waypoint from "react-waypoint"
import styled from "styled-components"
import { Element } from "react-scroll"
import { Image, Button, Popup, Divider } from "semantic-ui-react"
import piano from "./projectImages/piano.jpg"
import house from "./projectImages/house.jpg"
import head from "./projectImages/head.png"
import bizTravelers from "../../images/bizTravelers.jpg"
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
} from "../../images/techIcons/index"

const TechIconDiv = styled.div`
  transition: 0.5s all;
  :hover {
    transform: scale(1.1);
  }
`
export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  justify-content: center;
  justify-items: center;
  transition: 3s all;
  ${p =>
    p.active
      ? `opacity: 1;
    transform: scale(1);`
      : ` opacity: .3;
    transform: scale(.9);`};
  img.tech-image {
    max-width: 40px;
    max-height: 40px;
    margin-left: 1rem;
  }
`

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
    transition: 3s all;
    @media (min-width: 701px) {
      ${p =>
        p.active
          ? `
        // transform: rotate(-5deg);
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
      box-shadow: 2px 2px 8px 0px #a2a2a28a;
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
  h2,
  h3 {
    letter-spacing: ${p => (p.active ? `1px` : `3px`)} !important;
    transition: 4s letter-spacing;
    /* letter-spacing: 8px; */
  }
  h2 {
    margin: 5px auto 1rem;
    color: #3a8da9;
    /* text-align: center; */
  }
  h3 {
    color: #505050;
    font-weight: lighter;
    text-transform: uppercase;
  }
  .description {
    grid-area: description;
    transition: all 1s;
    opacity: ${p => (p.active ? "1" : ".5")};
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
    justify-content: center;
    align-items: center;
    transition: 1s all;
  }
`

class ProjectDisplay extends Component {
  state = {
    in: false
  }
  render() {
    let { img, header, info, liveLink, githubLink, id } = this.props
    const { description, challenges, techStack } = info
    const active = this.state.in
    return (
      <ProjectDisplayBox active={active}>
        <Element name={id} />
        <Image src={img} alt="" size="small" className="project-image" />
        <div className="description">
          <header className="header">
            <h2>{header}</h2>
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

          {description}
          <Waypoint
            onEnter={() => {
              this.setState({ in: true })
            }}
            onLeave={() => {
              this.setState({ in: false })
            }}
          />
          <h3>Challenges:</h3>
          {challenges}

          <h3>Tech Used:</h3>
          <SkillsList active={active}>
            {techStack.map(tech => (
              <TechIconDiv key={tech}>
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
    )
  }
}

export default class Portfolio extends Component {
  render() {
    return (
      <section>
        <h1>Projects</h1>
        <ProjectDisplay
          img={head}
          header="MEMOGA.ME"
          info={memogameDescription}
          liveLink={"http://www.memoga.me"}
          githubLink={"https://github.com/iketown/memogame"}
          id={"memogame"}
        />
        <ProjectDisplay
          img={piano}
          header="12 Scales"
          info={twelveScalesDescription}
          liveLink={"http://www.12scales.com"}
          githubLink={"https://github.com/ike76/scales-12"}
          id={"twelvescales"}
        />
        <ProjectDisplay
          img={house}
          header={
            <Fragment>
              <span style={{ fontWeight: 600 }}>HOME</span>
              <span>COMP</span>
            </Fragment>
          }
          info={homeCompDescription}
          liveLink={"https://homecomp.netlify.com/"}
          githubLink={"https://github.com/ike76/home-comp"}
          id={"homecomp"}
        />

        <ProjectDisplay
          img={bizTravelers}
          header={
            <Fragment>
              <span style={{ fontWeight: 600 }}>TRIP</span>
              <span>SYNC</span>
            </Fragment>
          }
          info={tripSyncDescription}
          liveLink={"https://tripsync.herokuapp.com/"}
          githubLink={"https://github.com/ike76/TripSync"}
          id={"tripsync"}
        />
      </section>
    )
  }
}

const memogameDescription = {
  description: (
    <section>
      <p>
        I invented MEMOGA.ME as I was thinking about the concept of the "Memory
        Palace" as described in{" "}
        <a
          href="https://www.amazon.com/Moonwalking-Einstein-Science-Remembering-Everything/dp/0143120530"
          target="new"
        >
          Moonwalking With Einstein
        </a>
        . I wanted to create a game where the player has to <em>remember</em> a
        growing list of their cards, and integrate their ability to remember
        those locations as a key part of the game.
      </p>
      <ul>
        <li>Game logic is handled on the front end</li>
        <li>Game state is synchronized using Google Firestore and Firebase.</li>
        <li>extensive use of React.Context and hooks features.</li>
        <li>
          a 3-minute video overview of the game is{" "}
          <a href="https://www.youtube.com/watch?v=eikx_TcBY7k" target="blank">
            HERE
          </a>
        </li>
      </ul>
    </section>
  ),
  challenges: (
    <ul>
      <li>Drag and Drop between different contexts.</li>
      <li>Multiple data listeners creating complex global state.</li>
    </ul>
  ),
  techStack: ["React", "Firestore", "HTML", "CSS"]
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
}

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
}

const tripSyncDescription = {
  description: (
    <section>
      <p>
        I created TRIPSYNC as a "capstone" project as a part of the{" "}
        <em>Thinkful</em> curriculum.
      </p>
      <p>
        The idea is to simplify group travel plans. When you book travel for
        multiple people, they often share most of the itinerary. Still, there
        are anomalies:
      </p>
      <ul>
        <li>Some people take an uber instead of the group shuttle.</li>
        <li>
          One person stays an extra few days, flying home later than the group.
        </li>
        <li>
          Some take different airlines to the same destination, coordinating
          with their frequent flyer awards, etc.
        </li>
      </ul>
      <p>
        I designed <b>TripSync</b> to help manage the complexity of multiple
        criss-crossing itineraries.
      </p>
      <ul>
        <li>Easily add or remove travelers to each leg of the itinerary.</li>
        <li>View each person's consolidated itinerary.</li>
      </ul>
    </section>
  ),
  challenges: (
    <ul>
      <li>Vanilla JavaScript (no front-end framework).</li>
      <li>Multiple models and connected interactions.</li>
    </ul>
  ),
  techStack: ["NodeJS", "Express", "MongoDB", "HTML", "CSS", "JavaScript"]
}
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
}

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
}
