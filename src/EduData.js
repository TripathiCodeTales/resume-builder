import React from "react";
import TextBox from "./TextBoxComponent.tsx/TextBox";
import CalenderDate from "./CalenderDate";

const EduData = ({
  handleCityChange,
  handleDegreeChange,
  handleSchoolChange,
  handleDescriptionChange,
  handleStartDateChange,
  handleEndDateChange,
  name1,
  name2,
  name3,
  name4,
  item,
  index,
}) => {
  return (
    <>
      <div className="group">
        <div className="input-group">
          <TextBox
            name={name1}
            onChange={(name1, value) => handleSchoolChange(value, index)}
          />
        </div>
        <div className="input-group">
          <TextBox
            name={name2}
            onChange={(name, value) => handleDegreeChange(value, index)}
          />
        </div>
      </div>
      <div className="group">
        <CalenderDate
          handleDate={(date) => handleStartDateChange(date, index)}
        />
        <CalenderDate handleDate={(date) => handleEndDateChange(date, index)} />
      </div>
      {name3 && name4 ? (
        <>
          <div className="group">
            <div className="input-group city">
              <TextBox
                name={name3}
                onChange={(name, value) => handleCityChange(value, index)}
              />
            </div>
          </div>
          <div>
            <label className="descrip">Description</label>
            <textarea
              rows="05"
              className="inputVal textdes"
              onChange={(e) => handleDescriptionChange(e.target.value, index)}
            ></textarea>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EduData;
