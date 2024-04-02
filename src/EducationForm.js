import React, { useState } from "react";
import EduData from "./EduData";
import Button from "./Button/Button";
import FormHeader from "./SubComponents/FormHeader";
import { useContext } from "react";
import AppContext from "./Context/AppContext";
import Submit from "./Button/Submit";

const EducationForm = () => {
  const [education, setEducation] = useState([]);
  const { resume, setResume } = useContext(AppContext);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setResume({
      ...resume,
      education: [...education],
    });
  };

  const handleChildClick = () => {
    setEducation([
      ...education,
      { degree: "", college: "", startDate: "", endDate: "", place: "" },
    ]);
    setSubmit(true);
  };

  const handleSchoolChange = (value, index) => {
    const temp = [...education];
    temp[index].degree = value;
    setEducation(temp);
  };

  const handleDegreeChange = (value, index) => {
    const temp = [...education];
    temp[index].college = value;
    setEducation(temp);
  };

  const handleDescriptionChange = (value, index) => {
    const temp = [...education];
    temp[index].Description = value;
    setEducation(temp);
  };

  const handleCityChange = (value, index) => {
    const temp = [...education];
    temp[index].place = value;
    setEducation(temp);
  };

  const handleStartDateChange = (value, index) => {
    const temp = [...education];
    temp[index].startDate = value.toString();
    setEducation(temp);
  };

  const handleEndDateChange = (value, index) => {
    const temp = [...education];
    temp[index].endDate = value.toString();
    setEducation(temp);
  };
  return (
    <div className="theform" onSubmit={handleSubmit}>
      <FormHeader title="Education" />
      {education.map((item, index) => {
        return (
          <div className="langKnownData">
            <div className="box-data">
              <span className="box-lang">
                {item.degree ? item.degree : "(Not specified)"}
                </span>
              {  item.college ?  `(${item.college}),`
                  : null}
                  <div className="city">
                {item.place.charAt(0).toUpperCase() + item.place.slice(1)}
              </div>
                  </div>
               <div className="datebox">
            {item.startDate && item.endDate ?
            new Date(item.startDate).toLocaleDateString() + "-" +
              new Date(item.endDate).toLocaleDateString(): null}
              </div>
            {index + 1 === education.length && (
              <EduData
                handleSchoolChange={handleSchoolChange}
                handleDegreeChange={handleDegreeChange}
                handleCityChange={handleCityChange}
                handleDescriptionChange={handleDescriptionChange}
                handleEndDateChange={handleEndDateChange}
                handleStartDateChange={handleStartDateChange}
                name1="School"
                name2="Degree"
                name3="City"
                name4="Description"
                item={item}
                index={index}
              />
            )}
          </div>
        );
      })}
      <div className="btn-container">
        <div className="btn-wrapper">
          <Button value="+ Add Education" onChildClick={handleChildClick} />
        </div>
        <div className="btn-wrapper">
          {submit && <Submit onSubmit={handleSubmit} value="submit" />}
        </div>
      </div>
    </div>
  );
};
export default EducationForm;
