import React from "react";
import Title from "../SubComponents/Title";

const Languages = ({ dialects }) => {

  return (

    <div className="Languages">
      <Title title="LANGUAGES" />
      <div className="lang">
        {dialects.map((dialect) => {
          return (
            <div className="langcontainer">
              <p className="place">{dialect.name}</p>
              <p className="color italic prof">{dialect.proficiency}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
