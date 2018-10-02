import React, { Fragment } from "react";
import ProjectDescription from "./ProjectDescription.jsx";
import { SkillsList } from "./Portfolio.jsx";
import HomeCompPic from "./projectImages/homecomp_header.png";
const HomeComp = () => {
  return (
    <ProjectDescription
      projectName={"HomeComp"}
      description={
        <Fragment>
          <p>
            <b>HomeComp</b> is a tool to help house-hunters organize their top
            candidates.
          </p>
          <p>
            In addition to the usual sorting metrics (price, size) the user is
            able to sort homes by:
          </p>
          <ul>
            <li>
              Distance from any location. (<em>travel time to work</em>)
            </li>
            <li>
              Any custom attribute. (<em>price per sq-ft, age of roof, etc.</em>
              )
            </li>
            <li>
              Difficult-to-quantify qualities such as{" "}
              <em>best kitchen, nicest neighborhood, etc</em>.
            </li>
          </ul>
          <h4>Skills:</h4>
          <SkillsList>
            <li>
              <i className="devicon-react-original colored" />
              <b>React</b> front end
            </li>
            <li>
              <i className="devicon-express-original colored" />
              <b>Express</b> server
            </li>
            <li>
              <i className="devicon-mongodb-plain colored" />
              <b>MongoDB</b> database
            </li>
          </SkillsList>

          <h4>Challenges:</h4>
          <ul>
            <li>
              Allowing users to add / change / remove photos from each listing.
            </li>
            <li>
              Creating redux reducers / MongoDB schemas to handle multiple
              possible data shapes. (User can invent any number of attributes,
              at any time, which every house listing then must be ready to
              handle.)
            </li>
          </ul>
          <p />
        </Fragment>
      }
      liveLink={"https://homecomp.netlify.com/"}
      githubLink={"https://github.com/ike76/home-comp"}
      image={HomeCompPic}
    />
  );
};

export default HomeComp;
