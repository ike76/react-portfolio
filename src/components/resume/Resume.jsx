import React, { Component, Fragment } from "react";
import { Grid, Divider } from "semantic-ui-react";
import styled from "styled-components";
import WorkItem from "./WorkItem";
import SkillsBar from "./SkillsBar";
import Education from "./Education";

const ResumeTitle = styled.h2`
  border-bottom: 3px solid #11abb0;
  padding-bottom: 6px;
`;
export default class Resume extends Component {
  render() {
    return (
      <Fragment>
        <h1>Resume</h1>
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={3}>
              <ResumeTitle>Education</ResumeTitle>
            </Grid.Column>
            <Grid.Column width={13}>
              <Education />
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column width={3}>
              <ResumeTitle>Work</ResumeTitle>
            </Grid.Column>
            <Grid.Column width={13}>
              <WorkItem
                company="The Beach Boys"
                jobTitle="Vocals, Bass, Graphic Design"
                dates="March 2015 - January 2018"
                content={
                  <div>
                    <ul>
                      <li>
                        In addition to musical duties, I created the artwork for
                        the 2017 'Wild Honey' tour. This included images for
                        T-shirts, laminates, website art, and images for the big
                        screen during live shows.
                      </li>
                      <li>
                        I designed artwork for (Beach Boys' lead singer) Mike
                        Love's <em>Unleash The Love</em> record. This included
                        page layout for the 18 page CD insert, vinyl, and
                        website images.
                      </li>
                    </ul>
                  </div>
                }
              />
              <Divider />
              <WorkItem
                company="The Four Freshmen"
                jobTitle="Vocals, Guitar, Graphic Design, Website"
                dates="July 1996 - December 2014"
                content={
                  <div>
                    <ul>
                      <li>
                        Sang lead vocals, played guitar, and produced several
                        records under our own label.
                      </li>
                      <li>Designed band website with Wordpress.</li>
                    </ul>
                  </div>
                }
              />
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column width={3}>
              <ResumeTitle>Skills</ResumeTitle>
            </Grid.Column>
            <Grid.Column width={13}>
              <SkillsBar />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}
