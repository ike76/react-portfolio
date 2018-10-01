import React from "react";
import { Button, Icon, Image, Grid } from "semantic-ui-react";
import styled from "styled-components";

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 2rem;
`;
const PicAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
const DescriptionDiv = styled.div`
  overflow: auto;
  max-height: 25rem;
`;
const ProjectDescription = ({
  projectName,
  description,
  liveLink,
  githubLink,
  image
}) => {
  return (
    <Grid stackable columns={2} padded>
      <Grid.Column>
        <h1>{projectName}</h1>
        <DescriptionDiv>{description}</DescriptionDiv>
      </Grid.Column>
      <Grid.Column>
        <PicAndButtons>
          <Image size="medium" floated="right" src={image} />
          <ButtonRow>
            <Button primary href={liveLink} target="_blank">
              Live site
            </Button>

            <Button
              icon
              labelPosition="right"
              href={githubLink}
              target="_blank"
            >
              GitHub
              <Icon name="github" />
            </Button>
          </ButtonRow>
        </PicAndButtons>
      </Grid.Column>
    </Grid>
  );
};

export default ProjectDescription;
