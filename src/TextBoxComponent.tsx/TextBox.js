import React, { useState } from "react";

const TextBox = ({ name, onChange, type, onType }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);

    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  return (
    <div className="textbox">
      <label for={name} className="input-lab">
        <input
          className="inputVal"
          type={type}
          value={value.charAt(0).toUpperCase()+ value.slice(1)}
          name={value}
          id={name}
          onChange={handleOnChange}
          placeholder={name}
         
        />
      </label>
    </div>
  );
};

export default TextBox;
