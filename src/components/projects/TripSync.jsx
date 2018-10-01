import React, { Fragment } from "react";
import ProjectDescription from "./ProjectDescription.jsx";
import TripSyncScreenshot from "../../images/TripSyncScreenshot.jpg";

const TripSync = () => {
  return (
    <ProjectDescription
      projectName={"TripSync"}
      description={
        <Fragment>
          <p>
            Group travel can become complicated and difficult to manage when
            travelers' itineraries weave in and out of eachother.
          </p>
          <p>
            For example, <em>when two people</em> share a taxi to the airport,
            while <em>three</em> others take trains from separate stations, then{" "}
            <em>all five</em> take the same flight, but stay in different hotels
            etc etc.
          </p>
          <p>
            <b>TripSync</b> helps manage the complexity of multiple
            criss-crossing itineraries.
          </p>
          <ul>
            <li>
              Easily add or remove travelers to each leg of the itinerary.
            </li>
            <li>View each person's consolidated itinerary.</li>
          </ul>
        </Fragment>
      }
      liveLink={"https://tripsync.herokuapp.com/"}
      githubLink={"https://github.com/ike76/TripSync"}
      image={TripSyncScreenshot}
    />
  );
};

export default TripSync;
