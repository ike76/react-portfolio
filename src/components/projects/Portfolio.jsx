import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import piano from "./projectImages/piano.jpg";
import house from "./projectImages/house.jpg";
import airplanes from "./projectImages/airplanes.jpg";
import bizTravelers from "../../images/bizTravelers.jpg";
const ProjectGrid = styled.div`
  margin: 1rem auto;
  justify-items: center;
  justify-content: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
`;
const ProjectBox = styled.div`
  padding: 1rem;
  display: flex;
  height: 200px;
  width: 200px;
  background: radial-gradient(#000000dd, #000000aa), ${p => `url(${p.img})`};
  background-position: center;
  background-size: 110%;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: 0.5s all;
  cursor: pointer;
  & div {
    opacity: 1;
  }
  &:hover {
    background: radial-gradient(#000000dd, #000000aa), ${p => `url(${p.img})`};
    background-position: center;
    background-size: 100%;
    & div {
      opacity: 1;
    }
  }
`;
const ProjectText = styled.div`
  transition: 0.5s all;
  text-align: center;
  & * {
    color: white;
  }
`;
const ProjectH1 = styled.h1`
  color: lightblue !important;
  margin-bottom: 10px !important;
`;
export const SkillsList = styled.ul`
  list-style: none;
  & li {
    & i,
    img {
      margin-left: -1rem;
      margin-right: 10px;
    }
  }
`;

export default class Portfolio extends Component {
  Project = ({ img, header, description }) => (
    <ProjectBox img={img} onClick={() => this.props.handleModal(header)}>
      <ProjectText>
        <ProjectH1>{header}</ProjectH1>
        <div>{description}</div>
      </ProjectText>
    </ProjectBox>
  );
  render() {
    return (
      <section>
        <h1>Projects</h1>
        <ProjectGrid>
          <this.Project
            img={piano}
            header="12 Scales"
            description="Learn 12 Major Scales on the piano"
          />
          <this.Project
            img={house}
            header="HomeComp"
            description="Compare real estate by price, size, distance from work, custom
            attributes."
          />
          <this.Project
            img={bizTravelers}
            header="TripSync"
            description={
              <div>
                <p>Coordinate travel for a group of people.</p>
                <p>Air • Ground • Hotel</p>
              </div>
            }
          />
          <this.Project
            img={airplanes}
            header="FlightSync"
            description="Coordinate flight itineraries for a group of people coming from
                several origin airports."
          />
        </ProjectGrid>
      </section>
    );
  }
}
