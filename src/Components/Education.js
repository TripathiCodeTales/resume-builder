import React from "react";
import Title from "../SubComponents/Title";
const Education = ({ datas }) => {
  return (
    <div className="education">
      <Title title="EDUCATION" />

      {datas.map((data) => {
        return (
          <div>
            <h4>{data.degree}</h4>
            <h5>{data.college}</h5>
            <p className="color italic place">
              {new Date(data.startDate).toLocaleDateString()} -{" "}
              {new Date(data.endDate).toLocaleDateString()}
              <span className="color italic place align">{data.place}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
