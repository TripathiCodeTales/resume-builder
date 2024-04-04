import React, { useContext, useState } from "react";
import PersonalProjectData from "./PersonalProjectsData";
import Button from "./Button/Button";
import FormHeader from "./SubComponents/FormHeader";
import Submit from "./Button/Submit";
import AppContext from "./Context/AppContext";

const PersonalProjectsForm = () => {
  const [projectsAdd, setProjectsAdd] = useState([]);
  const { resume, setResume } = useContext(AppContext);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setResume({
      ...resume,
      PersonalProjects: [...projectsAdd],
    });
  };

  const handleChildClick = () => {
    setProjectsAdd([...projectsAdd, { title: "", description: "" }]);
    setSubmit(true);
  };

  const handleOntitleChange = (value, index) => {
    const temp = [...projectsAdd];
    temp[index].title = value;
    setProjectsAdd(temp);
  };
  const handleDescriptionChange = (value, index) => {
    const temp = [...projectsAdd];
    let newvalue = value
      .toString()
      .replace(/(^|\. *)([a-z])/g, function (match, separator, char) {
        return separator + char.toUpperCase();
      });
    temp[index].description = newvalue;
    setProjectsAdd(temp);
  };

  const handleOnSkillsChange = (value, index) => {
    const temp = [...projectsAdd];
    let newvalue = value
      .toString()
      .replace(/(^|\. *)([a-z])/g, function (match, separator, char) {
        return separator + char.toUpperCase();
      });
    temp[index].description = newvalue;
    setProjectsAdd(temp);
  };

  return (
    <div className="theform" onSubmit={handleSubmit}>
      <FormHeader title="Personal Projects" />
      {projectsAdd.map((item, index) => {
        return (
          <div className="langKnownData">
            <div className="box-data">
              <div className="box-lang">
                {item.title ? item.title : "(Not Specified)"}
              </div>
            </div>
            <div className="desbox">{item.description}</div>
            {index + 1 === projectsAdd.length && (
              <PersonalProjectData
                handleOntitleChange={handleOntitleChange}
                handleDescriptionChange={handleDescriptionChange}
                handleOnSkillsChange={handleOnSkillsChange}
                item={item}
                index={index}
                name1="Title"
                name2="Technical skills"
              />
            )}
          </div>
        );
      })}
      <div className="btn-container">
        <div className="btn-wrapper">
          <Button
            value="+ Add Personal Projects"
            onChildClick={handleChildClick}
          />
        </div>
        <div className="btn-wrapper">
          {submit && <Submit onSubmit={handleSubmit} value="submit" />}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectsForm;
