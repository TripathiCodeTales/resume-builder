import React from "react";
import Title from "../SubComponents/Title";
const Certificates = ({ certifications }) => {
  return (
    <div className="certificates">
      <Title title="CERTIFICATES" />
      {certifications.map((certification) => {
        return (
          <div>
            <h5 className="head">
              {certification.courses} ({new Date(certification.startDate).toLocaleDateString()} -{" "}
              {new Date(certification.endDate).toLocaleDateString()})
            </h5>
            <p className="italic place fo">{certification.institutions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Certificates;
