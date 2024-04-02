import React, { useState,useContext } from "react";
import AddLangForm from "./AddLangForm";
import Button from "./Button/Button";
import FormHeader from "./SubComponents/FormHeader";
import Submit from "./Button/Submit";
import AppContext from "./Context/AppContext";

const SoftSkillsForm = () => {
 const [softskillAdd, setSoftSkillAdd] = useState([]);
 const [submit,setSubmit] = useState(false);
 const { resume, setResume } = useContext(AppContext);
    

const handleSubmit = () => { 
    setResume({
      ...resume,
      softskills: [...softskillAdd 
      ],
    });
  };
  const handleChildClick = () => {
    setSoftSkillAdd([...softskillAdd, "" ]);
    setSubmit(true);
};

  const handleInputChange = (value, index) => {
    const temp = [...softskillAdd];
    temp[index] = value;
    setSoftSkillAdd(temp);
  };


console.log(resume)
  return (
    <div className="theform" onSubmit={handleSubmit}>
      <FormHeader title="Soft Skill" />
      <div className="skillContainer">
      {softskillAdd.map((item, index) => {
        return (
            <>
          {/* <div className="langKnownData">
            <div className="box-data"> */}
              <div className="skill-box">
                {item ? item : "(Not specified)"}
              </div>
              {/* {item.level} */}
            {index + 1 === softskillAdd.length && (
              <AddLangForm
                item={item}
                index={index}
                handleInputChange={handleInputChange}
                name="Soft Skills"
              />
            )}
          </>
        );
      })}
      </div>
      <div className="btn-container">
      <div className="btn-wrapper">
        <Button value="+ Add Skills" onChildClick={handleChildClick} />
      </div>
      <div className="btn-wrapper">
      {
        submit && (
            <Submit onSubmit={handleSubmit}  value="submit" /> 
            
        )
      }
    </div>
    </div>
    </div>
  );
};

export default SoftSkillsForm;
