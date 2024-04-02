import React from "react";
import Title from "../SubComponents/Title";

const PersonalProjects = ({ datas }) => {
  return (
    <div className="personalprojects">
      <Title title="PERSONAL PROJECTS" />
      {datas.map((data) => {
        return (
          <div key={data.title}>
            <h5 className="head">{data.title}</h5>
            {Array.isArray(data.description?.split(".")) ? (
             data.description?.split(".")?.map((element) => {
              return (
                <li className="content">
                  <span className="color dash">-</span>
                  {element}
                </li>
              );
            }))
            : null}
          </div>
        );
      })}
    </div>
  );
};

export default PersonalProjects;
