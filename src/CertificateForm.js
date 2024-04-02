import React, { useState,useContext } from "react";
import EduData from "./EduData";
import Button from "./Button/Button";
import FormHeader from "./SubComponents/FormHeader";
import Submit from "./Button/Submit";
import AppContext from "./Context/AppContext";

const CertificateForm = () => {
  // const {resume,setResume} = useContext({AppContext})
  const [certificateAdd, setCertificateAdd] = useState([]);
  const [submit,setSubmit] = useState(false);
  const {resume,setResume} = useContext(AppContext);

  const handleSubmit = () => {
   setResume({
    ...resume,
      certification:
  [
    ...certificateAdd
  ]
   })
  }
  const handleStartDateChange = (value, index) => {
    const temp = [...certificateAdd];
    temp[index].startDate = value.toString();
    setCertificateAdd(temp);
  };

  const handleEndDateChange = (value, index) => {
    const temp = [...certificateAdd];
    temp[index].endDate = value.toString();
    setCertificateAdd(temp);
  };
  const handleChildClick = () => {
    setCertificateAdd([
      ...certificateAdd,
      { courses: "", institutions: "", startDate:"",endDate:""},
    ]);
    setSubmit(true);
  };

  const handleOnCourseChange = (value, index) => {
    const temp = [...certificateAdd];
    temp[index].courses = value;
    setCertificateAdd(temp);
  };

  const handleOnInstitutionChange = (value, index) => {
    const temp = [...certificateAdd];
    temp[index].institutions = value;
    setCertificateAdd(temp);
  };
  return (
    <div className="theform" onSubmit={handleSubmit}>
      <FormHeader title="Certificate" />
      {certificateAdd.map((item, index) => {
        return (
          <div className="langKnownData">
            <div className="box-data">
              <span className="box-lang">
                {item.courses ? item.courses : "(Not specified)"} 
                </span>
                {item.institutions  ?  `(${item.institutions})`
                  : null}
              
            </div>
            <div className="datebox">
            {item.startDate && item.endDate ?
            new Date(item.startDate).toLocaleDateString() + "-" +
              new Date(item.endDate).toLocaleDateString(): null}
              </div>
            {index + 1 === certificateAdd.length && (
              <EduData
                handleSchoolChange={handleOnCourseChange}
                handleDegreeChange={handleOnInstitutionChange}
                name1="Courses"
                name2="Institutions"
                item={item}
                index={index}
                handleEndDateChange={handleEndDateChange}
                handleStartDateChange={handleStartDateChange}
              />
            )}
          </div>
        );
      })}
      <div className="btn-container">
      <div className="btn-wrapper">
        <Button value="+ Add Certificate" onChildClick={handleChildClick} />
      </div>
      <div className="btn-wrapper">
      {
        submit && (
            <Submit onSubmit={handleSubmit} value="submit" />
        )
      }
    </div>
    </div>
    </div>
  );
};

export default CertificateForm;
