import React from "react";
import Title from "../SubComponents/Title";

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <Title title="SKILLS" />
      <div className="skillData">
        {skills.map((skill) => {
          return (
            <div
              className="skillitem"
              style={{
                backgroundColor: skills ? "#389696" : " ",
                border: "none",
              }}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
