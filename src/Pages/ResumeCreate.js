import PersonalInfo from "../PersonalInfo";
import LanguageForm from "../LanguageForm";
import SkillForm from "../SkillForm";
import WorkExpForm from "../WorkExpForm";
import ProfessionalSummaryForm from "../ProfessionalSummaryForm";
import EducationForm from "../EducationForm";
import CertificateForm from "../CertificateForm";
import PersonalProjectsForm from "../PersonalProjectsForm";
import ResumeView from "./ResumeView";
import { useState } from "react";
import SoftSkillsForm from "../SoftSkillsForm";

function ResumeCreate() {
  const [resumeView, setResumeview] = useState(false);

  const handleOnClick = () => {
    setResumeview(true);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Resume Builder</h1>
      <PersonalInfo />
      <LanguageForm />
      <SkillForm />
      <WorkExpForm />
      <ProfessionalSummaryForm />
      <EducationForm />
      <CertificateForm />
      <PersonalProjectsForm />
      <SoftSkillsForm />
      <div className="border flex items-center justify-center">
        <button onClick={handleOnClick} className="flex items-center  border-none justify-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 margin-top margin-bottom">Resume View</button>
      </div>
      {resumeView && <ResumeView />}
    </>
  );
}

export default ResumeCreate;
