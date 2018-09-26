import React from "react";
import { Progress, Segment } from "semantic-ui-react";

const skills = [
  { tech: "JavaScript", percent: 80 },
  { tech: "React", percent: 70 },
  { tech: "jQuery", percent: 50 },
  { tech: "Html", percent: 65 },
  { tech: "Css", percent: 55 },
  { tech: "Node / Express", percent: 55 },
  { tech: "MongoDB", percent: 45 },
  { tech: "Sketch", percent: 75 },
  { tech: "Illustrator", percent: 75 },
  { tech: "Photoshop", percent: 70 },
  { tech: "InDesign", percent: 65 }
];
const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "pink",
  "brown",
  "grey"
];

const SkillsBar = () => {
  return (
    <div className="nine columns main-col">
      <Segment>
        {skills.map((s, i) => (
          <Progress key={s.tech} percent={s.percent} color={colors[i]} progress>
            {s.tech}
          </Progress>
        ))}
      </Segment>
    </div>
  );
};

export default SkillsBar;
