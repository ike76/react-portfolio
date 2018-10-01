import React, { Component } from "react";
import BrianPic from "../../images/BrianEichenbergerBeachBoys.jpg";
import styled from "styled-components";

const AboutDiv = styled.section`
  // padding: 3rem 3rem 7rem;
  align-items: center;
`;
const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  // width: 200px;
  // height: 300px;
  margin: 1rem;
  @media (min-width: 700px) {
    clip-path: polygon(4px 17px, 13.15% 96.14%, 188px 274px, 160px 9px);

    float: left;
    float: left;
    shape-outside: polygon(
      -41px -12px,
      -5.52% 94.07%,
      181px 310px,
      77.93% -4.19%
    );
    margin-left: -2rem;
  }
`;

export default class About extends Component {
  render() {
    const { handleModal } = this.props;
    return (
      <AboutDiv>
        <h1>About Me</h1>
        <ImageDiv>
          <img
            className="profile-picx"
            src={BrianPic}
            alt="Brian Eichenberger performs with Beach Boys"
            height="300px"
            width="200px"
          />
        </ImageDiv>

        <p>
          During my touring years as a singer / guitarist with
          <em> The Four Freshmen</em> and <em>The Beach Boys</em> I could often
          be found backstage with my face buried in my MacBook.
        </p>
        <p>
          I'd be designing album art for our next recording, or arranging air
          transportation, <b>hacking together a website</b>, coordinating our
          next recording project or taking a course on <em>Lynda.com</em> to
          learn some new technology.
        </p>
        <p>
          Gradually I realized that I <b>enjoy the process</b> of learning &
          leveraging tech to solve problems <em>more</em> than performing. I
          started digging a little deeper into <b>web development</b>. (Online
          HTML and CSS courses, then Hartl's <em>Ruby on Rails</em> book.)
        </p>
        <p>
          By 2017, I was more excited about building apps and learning full
          stack development than being on the road. With my wife waiting at home
          and a baby on the way, I decided to stop touring. I signed up for
          <em> Thinkful</em>
          's full-time full-stack JavaScript course and never looked back.
        </p>
        <p>
          Now I'm building the web apps I always wished for: An app to{" "}
          <a onClick={() => handleModal("FlightSync")}>
            search flights for a group
          </a>
          , an app to{" "}
          <a onClick={() => handleModal("TripSync")}>manage group travel</a>,
          and most recently, an app that helps beginner piano students{" "}
          <a onClick={() => handleModal("12 Scales")}>learn Major Scales</a> in
          a fraction of the time it took me to learn them in school.
        </p>
        <div style={{ clear: "both" }} />
      </AboutDiv>
    );
  }
}
