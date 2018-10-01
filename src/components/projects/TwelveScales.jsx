import React, { Fragment } from "react";
import ProjectDescription from "./ProjectDescription.jsx";
import ScaleImage from "./projectImages/BuildBbScale.jpg";

const TwelveScales = () => {
  return (
    <ProjectDescription
      projectName={"12 Scales"}
      description={
        <Fragment>
          <p>
            I designed <b>12 Scales</b> to help beginner piano students quickly
            learn all 12 Major Scales.
          </p>
          <ul>
            <li>
              Graphics and interactive animations support explanations of
              concepts.
            </li>
            <li>
              Interactive keyboards and mini-quizzes test knowledge along the
              way.
            </li>
            <li>Each student's progress is tracked with Google Firestore.</li>
          </ul>
          <h4>Challenges:</h4>
          <ul>
            <li>Creating an interactive piano component from SVG images.</li>
            <li>
              Adding custom interactions to the piano. (correct keys, wrong
              keys, helper dots, colored keys etc)
            </li>
            <li>Handling quiz logic.</li>
          </ul>
        </Fragment>
      }
      liveLink={"http://www.12scales.com"}
      githubLink={"https://github.com/ike76/scales-12"}
      image={ScaleImage}
    />
  );
};

export default TwelveScales;
