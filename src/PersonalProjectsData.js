import React from "react";
import TextBox from "./TextBoxComponent.tsx/TextBox";

const PersonalProjectData = ({
  handleOntitleChange,
  handleOnSkillsChange,
  handleDescriptionChange,
  name1,
  name2,
  item,
  index,
}) => {
  return (
    <>
      <div className="group">
        <div className="input-group">
          <TextBox
            name={name1}
            onChange={(name, value) => handleOntitleChange(value, index)}
          />
        </div>
        {/* <div className="input-group">
          <TextBox
            name={name2}
            onChange={(name, value) => handleOnSkillsChange(value, index)}
          />
        </div> */}
      </div>
      <div>
        <label className="descrip">Description</label>
        <textarea rows="05" className="inputVal textdes" onChange={(e) => handleDescriptionChange(e.target.value, index)}></textarea>
      </div>
    </>
  );
};
export default PersonalProjectData;
