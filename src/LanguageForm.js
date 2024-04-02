import React, { useEffect, useContext } from "react";
import { useState } from "react";
import AddLangForm from "./AddLangForm";
import Button from "./Button/Button";
import FormHeader from "./SubComponents/FormHeader";
import Submit from "./Button/Submit";
import AppContext from "./Context/AppContext";

const LanguageForm = () => {
  const [langCount, setLangCount] = useState([]);
  const [submit, setSubmit] = useState(false);
  const { resume, setResume } = useContext(AppContext);

  const handleSubmit = () => {
    setResume({
      ...resume,
      languages: [...langCount],
    });
  };
  const handleChildClick = () => {
    setLangCount([...langCount, { name: "", proficiency: "" }]);
    setSubmit(true);
  };

  const handleInputChange = (value, index) => {
    const temp = [...langCount];
    temp[index].name = value;
    setLangCount(temp);
  };

  const handleLevelChange = (event, index) => {
    const temp = [...langCount];
    temp[index].proficiency = event.target.value;
    setLangCount(temp);
  };

  return (
    <div className="theform" onSubmit={handleSubmit}>
      <FormHeader title="Language" />

      {langCount.map((item, index) => {
        return (
          <div className="langKnownData">
            <div className="box-data">
              <span className="box-lang">
                {item.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1) : "(Not specified)"}
              </span>
            {item.proficiency ? `(${item.proficiency.charAt(0).toUpperCase() + item.proficiency.slice(1)})` :null}
            </div>
            {index + 1 === langCount.length && (
              <AddLangForm
                item={item}
                index={index}
                handleInputChange={handleInputChange}
                handleLevelChange={handleLevelChange}
                name="Language"
              />
            )}
          </div>
        );
      })}
      <div className="btn-container">
        <div className="btn-wrapper">
          <Button value="+ Add Language" onChildClick={handleChildClick} />
        </div>
        <div className="btn-wrapper">
          {submit && <Submit onSubmit={handleSubmit} value="submit" />}
        </div>
      </div>
    </div>
  );
};

export default LanguageForm;
