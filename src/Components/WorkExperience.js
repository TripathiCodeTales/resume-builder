import React from "react";
import Title from "../SubComponents/Title";

const WorkExperience = ({ experiences }) => {
  return (
    <div className="experience">
      <Title title="WORK EXPERIENCE" />
      {experiences.map((experience) => {
        return (
          <div>
            <h4>{experience.jobtitle}</h4>
            <h5>{experience.employer}</h5>
            <div className="workplace">
              <p className="color italic place">{new Date(experience.startDate).toLocaleDateString()} -{" "}
              {new Date(experience.endDate).toLocaleDateString()}</p>
              <p className="color italic place">{experience.city}</p>
            </div>
            <p className="color italic place">"Achievements/Task"</p>
            {Array.isArray(experience.description?.split(".")) ? (
              experience.description?.split(".")?.map((response) => {
                return (
                  <li className="font">
                    <span className="color dash">-</span> {response}
                  </li>
                );
              })
            ) : (
              <li className="font">
                <span className="color dash">-</span> {experience.description}
              </li>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
