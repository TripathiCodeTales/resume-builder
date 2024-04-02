import Header from "../Components/Header";
import Experience from "../Components/WorkExperience";
import PersonalProjects from "../Components/PersonalProjects";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Certificates from "../Components/Certificates";
import Languages from "../Components/Languages";
import SoftSkills from "../Components/SoftSkills";
import { useContext } from "react";
import AppContext from "../Context/AppContext";



function ResumeView() {
const {resume} = useContext(AppContext);
  return (
    <div className="resumeview">
      <div>
        <Header data={resume.personalDetails} />
      </div>
      <div className="info">
        <div className="col-left">
          <Experience experiences={resume.workexperience} />
          <PersonalProjects datas={resume.PersonalProjects} />
          <Education datas={resume.education} />
        </div>
        <div className="col-right">
          <Skills skills={resume.skills} />
          <Certificates certifications={resume.certification} />
          <Languages dialects={resume.languages} />
          <SoftSkills softskills={resume.softskills} />
        </div>
      </div>
    </div>
  );
}

export default ResumeView;
