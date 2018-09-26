import React from "react";
import styled from "styled-components";
import { Image, Popup } from "semantic-ui-react";
import UTLAlbumCover from "../../images/UTLalbumcover.jpg";

const RowItem = styled.div`
  margin-bottom: 1rem;
`;
const WorkItem = props => {
  const { company, jobTitle, dates, content } = props;
  return (
    <RowItem className="row item">
      <div className="twelve columns">
        <h3>{company}</h3>
        <p className="info">
          {jobTitle} <span>•</span> <em className="date">{dates}</em>
        </p>
        {content}
      </div>
    </RowItem>
  );
};

export default WorkItem;
