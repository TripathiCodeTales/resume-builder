import React, { useContext, useState } from "react";
import FormHeader from "./SubComponents/FormHeader";
import Submit from "./Button/Submit";
import AppContext from "./Context/AppContext";
import Button from "./Button/Button";

const ProfessionalSummaryForm = () => {
const [profSummary, setProfSummary] = useState([])
const {resume,setResume} = useContext(AppContext);
const [submit,setSubmit] = useState(false);

const handleSubmit = () => {
    setResume({
      ...resume,
      ProfessionalSummary: [...profSummary],
    });
  };
  const handleChildClick = () => {
    setProfSummary([...profSummary]);
    setSubmit(true);
  };

 const handleDescriptionChange = (event) => {
const temp = [...profSummary];
 temp.description = event.target.value
setProfSummary(temp);
 };

  return (
    <div className="theform" onSubmit={handleSubmit}>
      <FormHeader title="Professional Summary" />
      <div>
        <h5
          style={{ marginBottom: "20px", marginLeft: "5%", marginRight: "4%" }}
        >
          Write 2-4 short & energetic sentences to interest the reader! Mention
          your role, experience & most importantly - your biggest achievements,
          best qualities and skills.
        </h5>

        <textarea className="inputVal textdes" rows="05" onChange={(event) => handleDescriptionChange(event)}>
          Enter your Professional summary here...
        </textarea>
      </div>
      <div className="btn-container">
        <div className="btn-wrapper prof">
          {submit && <Submit onSubmit={handleSubmit} value="submit" type = "submit"/>}
        </div>
      </div>
    </div>
    
  );
};

export default ProfessionalSummaryForm;
