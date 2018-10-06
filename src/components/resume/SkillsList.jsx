import React from "react";
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
  javascript,
  photoshop,
  indesign,
  illustrator,
  sketch,
  graphql
} from "../../images/techIcons/index";
import { Popup, Divider } from "semantic-ui-react";
import styled from "styled-components";
const SkillDiv = styled.div`
  .icons {
    display: flex;
    justify-content: space-around;
    img {
      max-height: 50px;
      transition: transform 0.5s;
      :hover {
        transform: scale(1.2);
      }
    }
  }
`;
const SkillsList = () => {
  console.log(basicSkills);
  return (
    <section>
      {allSkills.map(skill => (
        <SkillDiv key={skill[0]}>
          <h3>{skill[0]}</h3>
          <div className="icons">
            {skill[1].map(tech => (
              <div key={tech.name}>
                <Popup
                  trigger={<img src={tech.img} />}
                  content={tech.name}
                  position="bottom center"
                  size="small"
                  basic
                />
              </div>
            ))}
          </div>
          <Divider />
        </SkillDiv>
      ))}
    </section>
  );
};

export default SkillsList;

const skillsImgs = [
  { name: "CSS", category: "front", img: css3 },
  { name: "JavaScript", category: "front", img: javascript },
  { name: "HTML", category: "front", img: html },
  { name: "jQuery", category: "front", img: jquery },
  { name: "React", category: "front", img: react },
  { name: "Redux", category: "front", img: redux },
  { name: "Node", category: "back", img: node },
  { name: "Express", category: "back", img: express },
  { name: "MongoDB", category: "back", img: mongo },
  { name: "Firebase", category: "back", img: firestore },
  { name: "GraphQL", category: "back", img: graphql },
  { name: "Sketch", category: "graphic", img: sketch },
  { name: "Photoshop", category: "graphic", img: photoshop },
  { name: "InDesign", category: "graphic", img: indesign },
  { name: "Illustrator", category: "graphic", img: illustrator }
];
const backSkills = skillsImgs.filter(s => s.category === "back");
const frontSkills = skillsImgs.filter(s => s.category === "front");
const basicSkills = skillsImgs.filter(s => s.category === "basic");
const graphicSkills = skillsImgs.filter(s => s.category === "graphic");

const allSkills = [
  ["Front End", frontSkills],
  ["Back End", backSkills],
  ["Graphic Design", graphicSkills]
];
