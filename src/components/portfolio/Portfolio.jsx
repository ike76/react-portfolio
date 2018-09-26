import React, { Component } from "react";
import styled from "styled-components";
import { Card, Image, Reveal, Icon } from "semantic-ui-react";
import coffee from "../../images/portfolio/coffee.jpg";
import piano from "../../images/piano.jpg";
import house from "../../images/house.jpg";
import taxis from "../../images/taxis.jpg";
import airplanes from "../../images/airplanes.jpg";
const ProjectGrid = styled.div`
  margin: 1rem auto;
  justify-items: center;
  justify-content: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
  > div {
    // border: 1px grey solid;
  }
`;
const ProjectBox = styled.div`
  padding: 1rem;
  display: flex;
  height: 200px;
  width: 200px;
  background: radial-gradient(#00000000, #00000000), ${p => `url(${p.img})`};
  background-position: center;
  background-size: 110%;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: 0.5s all;

  & div {
    opacity: 0;
  }
  &:hover {
    background: radial-gradient(#000000dd, #000000aa), ${p => `url(${p.img})`};
    background-position: center;
    background-size: 100%;
    & div {
      opacity: 1;
      transform: scale(1.05);
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
export default class Portfolio extends Component {
  Project = ({ img, header, description }) => (
    <ProjectBox img={img} onClick={() => this.props.handleModal(header)}>
      <ProjectText>
        <ProjectH1>{header}</ProjectH1>
        <Icon name="plus" size="big" />
        <p>{description}</p>
      </ProjectText>
    </ProjectBox>
  );
  render() {
    return (
      <section id="portfolio">
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
            img={taxis}
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
