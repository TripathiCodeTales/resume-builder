import React from "react";
import Title from "../SubComponents/Title";

const SoftSkills = ({ softskills }) => {
  const skillCondition = {
    backgroundColor: softskills ? "null" : "inherit",
  };
  return (
    <div className="skills">
      <Title title="SOFT SKILLS" />
      <div className="skillData">
        {softskills.map((softskill) => {
          return (
            <div
              className="skillitem"
              style={{
                backgroundColor: softskills ? "null" : "inherit",
                color: softskills ? "black" : "white",
              }}
            >
              {softskill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftSkills;
