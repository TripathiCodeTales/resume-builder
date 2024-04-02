import React from "react";
import TextBox from "./TextBoxComponent.tsx/TextBox";

const AddLangForm = ({
  handleInputChange,
  handleLevelChange,
  index,
  item,
  name,
}) => {
  return (
    <>
      <div className="group">
        <div className="input-group">
          <TextBox
            name={name}
            onChange={(name, value) => handleInputChange(value, index)}
          />
        </div>
        { handleLevelChange ?
        <div className="input-group">
          <select
            value={item.level}
            onChange={(event) => handleLevelChange(event, index)}
          >
            <option value=" ">Selected Level</option>
            <option value="beginner">Beginner</option>
            <option value="native">Native</option>
            <option value="highly proficient">Highly Proficient</option>
          </select>
        </div>:"" }
      </div>
    </>
  );
};

export default AddLangForm;
