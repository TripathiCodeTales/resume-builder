import React, { useState, useContext } from "react";
import AddLangForm from "./AddLangForm";
import Button from "./Button/Button";
import FormHeader from "./SubComponents/FormHeader";
import Submit from "./Button/Submit";
import AppContext from "./Context/AppContext";

const SkillForm = () => {
  const [skillAdd, setSkillAdd] = useState([]);
  const [submit, setSubmit] = useState(false);
  const { resume, setResume } = useContext(AppContext);

  const handleSubmit = () => {
    setResume({
      ...resume,
      skills: [...skillAdd],
    });
  };
  const handleChildClick = () => {
    setSkillAdd([...skillAdd, ""]);
    setSubmit(true);
  };

  const handleInputChange = (value, index) => {
    const temp = [...skillAdd];
    temp[index] = value;
    setSkillAdd(temp);
  };

  //   const handleLevelChange = (event, index) => {
  //     const temp = [...skillAdd];
  //     temp[index].level = event.target.value;
  //     setselectedLevel(temp)

  //   };
  return (
    <div className="theform" onSubmit={handleSubmit}>
      <FormHeader title="Skill" />
      <div className="skillContainer">
        {skillAdd.map((item, index) => {
          return (
            <>
              <div className="skill-box">
                {" "}
                {item ? item : "(Not specified)"}{" "}
              </div>

              {index + 1 === skillAdd.length && (
                <AddLangForm
                  item={item}
                  index={index}
                  handleInputChange={handleInputChange}
                  // handleLevelChange={handleLevelChange}
                  name="Skills"
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
          {submit && <Submit onSubmit={handleSubmit} value="submit" />}
        </div>
      </div>
    </div>
  );
};

export default SkillForm;
