import React, { useContext, useState } from "react";
import EduData from "./EduData";
import Button from "./Button/Button";
import FormHeader from "./SubComponents/FormHeader";
import Submit from "./Button/Submit";
import AppContext from "./Context/AppContext";

const WorkExpForm = () => {
  const [expAdd, setExpAdd] = useState([]);
  const [submit, setSubmit] = useState(false);
  const { resume, setResume } = useContext(AppContext);

  const handleSubmit = () => {
    setResume({
      ...resume,
      workexperience: [...expAdd],
    });
  };

  const handleChildClick = () => {
    setExpAdd([
      ...expAdd,
      {
        jobtitle: "",
        employer: "",
        startDate: "",
        endDate:"",
        city: "",
        description: "",
      },
    ]);
    setSubmit(true);
  };

  const handleOnJobTitleChange = (value, index) => {
    const temp = [...expAdd];
    temp[index].jobtitle = value;
    setExpAdd(temp);
  };

  const handleOnEmployerChange = (value, index) => {
    const temp = [...expAdd];
    temp[index].employer = value;
    setExpAdd(temp);
  };

  const handleOnCityChange = (value, index) => {
    const temp = [...expAdd];
    temp[index].city = value;
    setExpAdd(temp);
  };

  const handleDescriptionChange = (value, index) => {
    const temp = [...expAdd];
    let newvalue = value.toString().replace( /(^|\. *)([a-z])/g, function(match, separator, char) {
        return separator + char.toUpperCase();
    })
    temp[index].description = newvalue;
    setExpAdd(temp);
  };

  const handleStartDateChange = (value, index) => {
    const temp = [...expAdd];
    temp[index].startDate = value.toString();
    setExpAdd(temp);
    console.log(value, index);
  };

  const handleEndDateChange = (value, index) => {
    const temp = [...expAdd];
    temp[index].endDate = value.toString();
    setExpAdd(temp);
    console.log(value, index);
  };

  return (
    <div className="theform" onSubmit={handleSubmit}>
      <FormHeader title="Work Experience" />
      {expAdd.map((item, index) => {
        return (
          <div className="langKnownData">
            <div className="box-data">
              <span className="box-lang">
                {item.jobtitle ? item.jobtitle : "(Not specified)"}
                </span>
              {item.employer ? `(${item.employer}),` : null}
              
              <div className="city">
                {item.city.charAt(0).toUpperCase() + item.city.slice(1)}
              </div>
            </div>
            <div className="datebox">
            {item.startDate && item.endDate ?
            new Date(item.startDate).toLocaleDateString() + " - " +
              new Date(item.endDate).toLocaleDateString(): null}
              </div>
            <div className="desbox">{item.description}</div>
            {index + 1 === expAdd.length && (
              <EduData
                handleSchoolChange={handleOnJobTitleChange}
                handleDegreeChange={handleOnEmployerChange}
                handleCityChange={handleOnCityChange}
                handleDescriptionChange={handleDescriptionChange}
                name1="Job Title"
                name2="Employer"
                name3="city"
                name4="description"
                item={item}
                index={index}
                handleStartDateChange={handleStartDateChange}
                handleEndDateChange={handleEndDateChange}
              />
            )}
          </div>
        );
      })}
      <div className="btn-container">
        <div className="btn-wrapper">
          <Button value="+ Add Employement" onChildClick={handleChildClick} />
        </div>
        <div className="btn-wrapper">
          {submit && <Submit onSubmit={handleSubmit} value="submit" />}
        </div>
      </div>
    </div>
  );
};

export default WorkExpForm;
