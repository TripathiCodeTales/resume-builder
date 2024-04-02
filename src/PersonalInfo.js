import React, { useState, useContext } from "react";
import TextBox from "./TextBoxComponent.tsx/TextBox";
import Button from "./Button/Button";
import "./App.css";
import AppContext from "./Context/AppContext";

const PersonalInfo = () => {
  const { resume, setResume } = useContext(AppContext);

  const [commonName, setcommonName] = useState({
    FirstName: "",
    LastName: "",
    JobTitle: "",
    Phone: "",
    Email: "",
    linkedIn: "",
    github: "",
    City: "",
    Country: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setResume({
      ...resume,
      personalDetails: {
        FirstName: commonName.FirstName,
        LastName:commonName.LastName,
        email: commonName.Email,
        mobile: commonName.Phone,
        city: commonName.City,
        country: commonName.Country,
        linkedIn: commonName.linkedIn,
        github: commonName.github,
      },
    });
  };
  const handleInputChange = (name, value) => {
    setcommonName({ ...commonName, [name]: value });
  };


  return (
    <div>
      <form className="theform" method="" action="" onSubmit={handleSubmit}>
        <h3 className="heading">Profile Info</h3>
        <div className="row">
          <div className="group">
            <div className="input-group">
              <TextBox name="FirstName" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <TextBox name="LastName" onChange={handleInputChange} />
            </div>
          </div>
          <br />
          <div className="group">
            <div className="input-group">
              <TextBox name="JobTitle" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <TextBox
                name="Phone"
                onChange={handleInputChange}
                type="number"
              />
            </div>
          </div>
          <br />
          <div className="group">
            <div className="input-group">
              <TextBox name="Email" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <TextBox name="linkedIn" onChange={handleInputChange} />
            </div>
          </div>
          <br />
          <div className="group">
            <div className="input-group">
              <TextBox name="github" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <TextBox name="City" onChange={handleInputChange} />
            </div>
          </div>
          <br />
          <div className="group">
            <div className="input-group">
              <TextBox name="Country" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <Button value="Submit" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
